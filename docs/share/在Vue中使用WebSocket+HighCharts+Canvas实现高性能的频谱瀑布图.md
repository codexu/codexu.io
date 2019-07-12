# 在Vue中使用WebSocket+HighCharts+Canvas实现高性能的频谱瀑布图

废话不多说，先上成品图：

![频谱图+瀑布图](http://ww2.sinaimg.cn/large/006tNc79ly1g4x362nn9aj30w90ine66.jpg)

再来个迷你动图：

![频谱图+瀑布图动图](http://ww3.sinaimg.cn/large/006tNc79ly1g4x7i67tsqg308c04v4qq.gif)

可能很多同学不知道频谱图和瀑布图，其实我也不懂...但是咱们前端就是负责把数据按照规则显示出来就好（上方折线图为频谱图，下方那一坨为瀑布图）。

## 技术选型

框架：Vue(这并不重要，反正我也不会多说这块)

数据传输：WebSocket

频谱图：HighCharts

瀑布图：Canvas

- 为什么使用 WebSocket ？

因为需要服务器实时传输数据，要求达到30帧，每帧动画由 **1024** 个点组成，肯定要比 Ajax 轮询舒服的多，而且这个项目对于浏览器兼容没什么要求。

- 为什么使用 HighCharts 绘制频谱图?

做了个测试，HighCharts 与 ECharts，虽然说 canvas 的性能要比 svg 强，但同时渲染觉得 HighCharts 更加流畅（HighCharts 需要付费）。

- 瀑布图为什么使用 Canvas ？

虽然说用数据可视化图表库很方便，但是考虑到此项目苛刻的性能要求，使用类似瀑布图的只有大型热力图：

![大型热力图](http://ww1.sinaimg.cn/large/006tNc79ly1g4x3kx4guhj30au08wt9i.jpg)

用热力图做，请放心，不会卡成 PPT，浏览器5秒后准时直接崩溃。

## 组件功能拆分

整个组件拆分为三部分：

- 父组件：负责 WebSocket 与服务器实时通讯、处理二进制数据、控制渲染频率、控制开始和暂停、刷新组件。

- 子组件 > 频谱图(HighCharts)：提供 addData 方法，获取数据即渲染一帧，提供触发缩放事件，发送给父组件。

- 子组件 > 瀑布图(Canvas)：与频谱图一样提供 addData 方法，频谱图发生缩放事件后，对应其选取的位置进行缩放。

## 父组件

### WebSocket 链接服务器

因为操作并不是很多，直接使用原生方式：

```javascript
this.socket = new WebSocket('ws://192.168.2.250:8100/socket')
this.socket.onopen = () => {...}
this.socket.onclose = () => {...}
```

与后端对接好发送的指令，这里我们定义了三个：

```javascript
// 开始获取数据
this.socket.send('start')
// 暂停获取数据
this.socket.send('pause')
// 恢复获取数据
this.socket.send('resume')
```

监听 onmessage 事件：

```javascript
this.socket.onmessage = (event) => {
  const reader = new FileReader()
  reader.readAsArrayBuffer(event.data)
  reader.onload = e => {
    if (e.target.readyState === FileReader.DONE) {
      // 处理二进制数据
    }
  }
}
```

### 处理二进制数据

这块本来想用大篇幅来写，但是前几天看到[《为什么视频网站的视频链接地址是blob？》](https://juejin.im/post/5d1ea7a8e51d454fd8057bea)，写的很好，自愧不如，请大家转移看懂这块，别忘了再回来。

### 控制渲染频率

服务器这边大概一秒钟发送过来 400 条左右的数据，每秒400帧肯定是不现实了，直接导致丢帧。

解决办法：建立数组保存数据，每次渲染一帧则删掉此条数据，当少于100条时发送 resume 继续获取，当超过400条时 发送 pause 暂停获取。

以服务器这边的发送频率来说，会使 cpu 使用率超过100%，获取时会出现一点点卡顿，不过还能接受，毕竟获取一次可以渲染好几秒钟。

```javascript
this.renderInterval = setInterval(() => {
  if (this.data.length <= 100 && this.socketPause === true) {
    this.socket.send('resume')
    this.socketPause = false
  }
  if (this.data.length >= 400 && this.socketPause === false) {
    this.socket.send('pause')
    this.socketPause = true
  }
  if (this.data.length <= 0) return
  const result = this.data[0]
  this.$refs.frequency.addData(result.data)
  this.$refs.waterFall.addData(result.data.map(item => item[1]))
  this.data.shift()
}, this.refreshInterval)
```

使用 setInterval 定时渲染还有个好处就是可以控制渲染频率，注意组件右上角的拖动条，这样可以在低配电脑上降低渲染频率。

## 频谱图

HighCharts 与 ECharts 配置项上有些差异，不过都是配置的问题，看看文档，很简单，记得关闭所有动画。

### addData()

```javascript
this.chart.series[0].setData(data, true, false)
```

父组件可以通过 $ref.addData() 触发渲染一帧

### 缩放

在配置中 chart.zoomType 设置为 'x'，设置为 X 轴选择缩放。

chart.events.selection 配置选择事件：

```javascript
selection (event) {
  const pointWidth = (this.xAxisMax - this.xAxisMin) / 1024
  const ponitStart = Math.floor((event.xAxis[0].min - this.xAxisMin) / pointWidth)
  const ponitEnd = Math.floor((event.xAxis[0].max - this.xAxisMin) / pointWidth)
  this.$emit('frequencySelect', [ponitStart, ponitEnd])
},
```

向父组件发送已选取的点，再通过父组件传递给瀑布图组件。

## 瀑布图

这里因为性能原因脱离了某些库，很多小伙伴到这里就不知该如何去做了，这里是本篇文章的重点。

先了解几个概念，很多人接触过 Canvas，但是这几个估计没怎么注意过（像素操作）：

- createImageData()
- putImageData()
- drawImage() 这个应该都知道

先创建两个画布，一个用于显示整体效果（this.canvas），另一个保存已生成的图像（this.waterFallDom，不会插入在 dom 上）。

```javascript
this.canvas = document.createElement('canvas')
this.ctx = this.canvas.getContext('2d')
this.waterFallDom = document.createElement('canvas')
this.waterFallCtx = this.waterFallDom.getContext('2d')
```

### createImageData

createImageData(width,height) 方法创建新的空白 ImageData 对象，两个参数，设置图像宽高，这里项目需求一共 1024 个点：

```javascript
const imageData = this.waterFallCtx.createImageData(data.length, 1)
```

这时生成了一张 1024 * 1 的空白图像，我们继续要对每一个像素点进行操作上色：

```javascript
for (let i = 0; i < imageData.data.length; i += 4) {
  const cindex = this.squeeze(data[i / 4], 0, 150)
  const color = this.colormap[cindex]
  imageData.data[i + 0] = color[0]
  imageData.data[i + 1] = color[1]
  imageData.data[i + 2] = color[2]
  imageData.data[i + 3] = 255
}
return imageData
```

imageData.data 是一个数组，每四个值绘制一个像素点，分别对应：

- R - 红色 (0-255)
- G - 绿色 (0-255)
- B - 蓝色 (0-255)
- A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)

**this.squeeze**是根据数据计算出 colormap 中对应的点，这个不多说：

```javascript
squeeze (data, outMin, outMax) {
  if (data <= this.minDb) {
    return outMin
  } else if (data >= this.maxDb) {
    return outMax
  } else {
    return Math.round((data - this.minDb) / (this.maxDb - this.minDb) * outMax)
  }
}
```

**colormap** 是一个二维数组，每个值代表[r, g, b, a]，这里我生成了150个颜色，是个渐变色，可以看下图例。

- 如何生成 colormap ？

如果你打算手写也没什么问题，就是手疼点。这里推荐使用 npm 安装 [colormap](https://www.npmjs.com/package/colormap)

```javascript
this.colormap = colormap({
  colormap: 'jet',
  nshades: 150,
  format: 'rba',
  alpha: 1
})
```

提供了多种配色，具体请参考文档。

到此，我们就生成了一张 具有颜色 1024 * 1 的图像，当然它还是个图像对象。

### putImageData

putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight) 将图像数据绘制到画布上：

- imgData: 规定要放回画布的 ImageData 对象。
- x: ImageData 对象左上角的 x 坐标，以像素计。
- y: ImageData 对象左上角的 y 坐标，以像素计。
- dirtyX: 可选。水平值（x），以像素计，在画布上放置图像的位置。
- dirtyY: 可选。水平值（y），以像素计，在画布上放置图像的位置。
- dirtyWidth: 可选。在画布上绘制图像所使用的宽度。
- dirtyHeight: 可选。在画布上绘制图像所使用的高度。

```javascript
this.waterFallCtx.putImageData(imageData, 0, 0)
```

### drawImage

这个大家比较熟悉，就是把图像绘制在画布中，这时我们就可以把 this.waterFallCtx 绘制到 this.ctx 上了。

drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

- img: 规定要使用的图像、画布或视频。
- sx: 可选。开始剪切的 x 坐标位置。
- sy: 可选。开始剪切的 y 坐标位置。
- swidth: 可选。被剪切图像的宽度。
- sheight: 可选。被剪切图像的高度。
- x: 在画布上放置图像的 x 坐标位置。
- y: 在画布上放置图像的 y 坐标位置。
- width: 可选。要使用的图像的宽度。（伸展或缩小图像）
- height: 可选。要使用的图像的高度。（伸展或缩小图像）

```javascript
this.ctx.drawImage(this.waterFallCtx.canvas,0, 0, 1024, 1, 0, 0, width, height)
```

这里 sx、sy 可以配合频谱图做缩放的操作。

width、height 可以被伸缩或缩小，显示效果比较不错，比如只有两个像素点的图像，被拉伸到 1000 个像素时并不是两个颜色一人一半，而是一条完美的渐变。

### 现实动态的瀑布图

上述我们已经把第一行图像绘制到画布中，此时我们可能通过 WebSockt 已经拿到了几百条数据，每新增一行图像，前一行图像就要下一一行：

```javascript
// 将已生成的图像向下移动一个像素
this.waterFallCtx.drawImage(this.waterFallCtx.canvas,
  0, 0, 1024, 300 - 1,
  0, 1, 1024, 300 - 1)
```

300 是指一共保存 300 行图像，这些数据都不应该是固定的，应该提前设置好，这里为了方便演示。

通过调用自身的图像，并重新绘制到自己向下偏移 y 轴 1 像素，高度 -1 的图像。

这样我们每添加一条数据，就会多一行新图像在最上方，已生成的图像向下移动了一个像素，自此我们的图像就动起来了。

### 实现缩放

频谱图已经做好缩放操作，并把起始点和结束点传递给父组件，再有父组件传递给瀑布图组件，动态修改 drawImage 的剪切属性。

## 结语

既然是使用 Vue 做的这个项目，我打算抽空做成 Vue 插件，做更多的可配置项。

我曾一度觉得这是个不能能完成的项目，是自己太年轻了，公司的大佬提点了几句，就做出来了，在这里分享给大家，不论多难的项目总会有解决的办法。