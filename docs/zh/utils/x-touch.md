# X-TOUCH
![](https://img.shields.io/npm/v/x-touch.svg)
![](https://img.shields.io/github/size/codexu/x-touch/dist/x-touch.min.js.svg)
![](https://img.shields.io/npm/dm/x-touch.svg)
![](https://img.shields.io/github/license/codexu/x-touch.svg)

为原生DOM实现移动端点击、长按、方向滑动事件。

## 安装

- 通过 <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font> 安装：

```sh
npm install x-touch --save
```

## 起步

- 使用 ES6 方式引用：

``` javascript
import XTouch from 'x-touch';

const xTouch = new XTouch();
xTouch.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-touch/tree/master/dist)

- 为 DOM 绑定 touch 事件：

``` javascript
const root = document.getElementById('root');

root.xtouch('tap', function(status){
  // do someting!
})

```
### 事件名

- `'tap'` <font color=MediumSeaGreen>&lt;String&gt;</font> 点击

- `'longTap'` <font color=MediumSeaGreen>&lt;String&gt;</font> 长按

- `'swipUp'` <font color=MediumSeaGreen>&lt;String&gt;</font> 向上滑动

- `'swipDown'` <font color=MediumSeaGreen>&lt;String&gt;</font> 向下滑动

- `'swipLeft'` <font color=MediumSeaGreen>&lt;String&gt;</font> 向左滑动

- `'swipRight'` <font color=MediumSeaGreen>&lt;String&gt;</font> 向右滑动

### 回调函数

- `this` <font color=MediumSeaGreen>&lt;Object&gt;</font> ` this指向绑定的DOM。

- `status` <font color=MediumSeaGreen>&lt;Object&gt;</font> ` 此次事件发生的参数。

## 配置

在初始化 XTouch 时传递参数:

``` javascript
const config = {
  slideMin: 50,
  tapMin: 10,
  longTapTime: 300
}

const xTouch = new XTouch(config);
```

### slideMin

`50` <font color=MediumSeaGreen>&lt;Number&gt;</font>

滑动事件最小距离。

### tapMin

`10` <font color=MediumSeaGreen>&lt;Number&gt;</font>

点击最大距离。

### longTapTime

`300` <font color=MediumSeaGreen>&lt;Number&gt;</font>

长按最短时间。