## Mixins(Stylus)

### 目录

➡️ [包裹层 Wrapper()](#包裹层)

➡️ [背景 Wrapper-background(width)](#背景)

➡️ [加载页面-图标 loader(width, height)](#加载页面-图标)

➡️ [元素定位 Item-position(width, height, x, y, z-index)](#元素定位)

➡️ [标题与文本 Text(size, width, align, color)](#标题与文本)

➡️ [装饰符 Pseudo(align, x, y)](#装饰符)

➡️ [列表 List(type, radius, paddingLeft, fontSize, lineHeight, backgroundColor)](#列表)

---

#### 包裹层 Wrapper()

用于每一个模块的**包裹层**，`相对定位`、`宽度100%`、`overflow: hidden`。

---

#### 背景 Wrapper-background(width)

- `width` [750px] 背景图片宽度

![](https://ws1.sinaimg.cn/large/006tNbRwly1fwi8p33us7j308b08mt8x.jpg)

用于**包裹层**的子元素，适用于`<img>`，不论包裹层如何变换宽度，背景图片始终保持在**包裹层**的正中间。

```stylus
.wrapper
  Wrapper()
  img.bg
    Wrapper-background(750px)
```

---

#### 加载页面-图标 loader(width, height)

- `width` [30px] 图标宽度

- `height` [30px] 图标高度

![](https://ws4.sinaimg.cn/large/006tNbRwly1fw20nmvmhqj30640d3js3.jpg)

用于loading加载页面，宽高为屏幕的100%，子元素`<img>`水平垂直居中。

---

#### 元素定位 Item-position(width, height, x, y, z-index)

- `width` [500px] 元素的宽度

- `height` [100px] 元素的高度

- `x` [0px] X轴偏移量

- `y` [0px] Y轴偏移量

![](https://ws1.sinaimg.cn/large/006tNbRwly1fwi8nup29pj306307fmx8.jpg)

用于元素定位，默认情况下定位在父元素的顶部正中间，x、y控制元素偏移。

---

#### 标题与文本 Text(size, width, align, color)

- `size` [H1-H6 or P] 文字大小，参考config.styl => $FONT_H*_SIZE

- `width` [500px] 文本或段落宽度

- `align` [left, center, right] 文本对齐方式

- `color` [$FONT_DEFAULT_COLOR] 文本颜色

用于标题或文本段落，外层嵌套`Item-position`做定位。

---

#### 装饰符 Pseudo(align, x, y)

- `align` [left, right] 图标对齐位置

- `x` [0px] X轴偏移量

- `y` [0px] Y轴偏移量

![](https://ws2.sinaimg.cn/large/006tNbRwly1fwi8pzdj4hj306404zglk.jpg)

用于伪类定位图标，需要单独设置**背景图**和**宽高**。

```stylus
.demo
  img()
    background-image url(...)
    width 20px
    height 20px
  &:before
    Pseudo(left, 10px, 10px)
    img()
  &:after
    Pseudo(right, 10px, 10px)
    img()
```

---

#### 列表 List(type, radius, paddingLeft, fontSize, lineHeight, backgroundColor)

- `type` [circle, hollow-circle, square, hollow-square] 标记形状

- `radius` [10px] 标记的直径或边长

- `paddingLeft` [20px] 标记距离内容的距离

- `fontSize` [24px] 字号

- `lineHeight` [2] 行高

- `backgroundColor` [#333] 标记的颜色

![](https://ws4.sinaimg.cn/large/006tNbRwly1fx1ncmbpq2j3063075q2z.jpg)

主要作用于统一列表样式，并提供四种标记样式（实心圆circle; 空心圆hollow-circle; 实心方块square; 空心方块hollow-square）。

标记始终都处于列表组的最左侧，使用paddingLeft控制标记与内容之间的间距。

标记处于内容行的首行位置，通过fontSize和lineHeight自动设置为首行的垂直居中位置。

空心标记的边框宽度默认为2px，如需要自定义请在`src/style/mixins.styl`文件中修改。

```stylus
ul.list
  List()
```