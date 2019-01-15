# X-ANIMATE
[![Build Status](https://travis-ci.org/codexu/x-animate.svg?branch=master)](https://travis-ci.org/codexu/x-animate)
[![](https://img.shields.io/npm/v/x-animate.svg)](https://www.npmjs.com/package/x-animate)
[![](https://img.shields.io/github/size/codexu/x-animate/dist/x-animate.min.js.svg)](https://github.com/codexu/x-animate/tree/master/dist)
[![](https://img.shields.io/npm/dm/x-animate.svg)](https://www.npmjs.com/package/x-animate)
[![](https://img.shields.io/github/license/codexu/x-animate.svg)](https://github.com/codexu/x-animate/blob/master/LICENSE)

通过屏幕滚动实现执行动画，支持延时动画、控制动画执行时间、执行偏移量、生命周期回调、动画组，完美支持Animate.css。

## 安装

- 通过 <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font> 安装：

```
**[terminal]
**[delimiter $ ]**[command npm install animate.css x-animate --save]
```

## 引用

- 通过包管理器安装：

```javascript
  // javascript
  import 'animate.css'
  import XAnimate from 'x-animate'
  const xAnimate = new XAnimate();
  xAnimate.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-animate/tree/master/dist)

## 起步

为至少一个 DOM 添加 <font color=Green>animate</font> 属性，并赋值一个动画名称，例如：

```html
<!-- html -->
<div animate="bounceInLeft"></div>
```

## 单元素动画

只对单个元素生效的动画，当滚动到它的相应位置就会被执行：

```html
<!-- html -->
<div animate="[animate-name]" 
     delay="1000" 
     duration="1000" 
     offset="100" 
     animateEnter="animateEnterFn" 
     animateLeave="animateLeaveFn"
></div>
```

### animate*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

参考 animate.css 动画名，或参考自定义动画。

### delay

`0(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

延时：当屏幕滚动到对应位置时，延时结束执行动画。

### duration

`1000(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

持续时间：动画执行的持续时间，数值越大动画越慢。

### offset

`0(px)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

偏移量：以屏幕底部为轴，默认滚动到某一元素已显示一半高度时执行动画。偏移量为正数，则需多滚动相应的距离；偏移量为负值，则会提前相应距离执行动画。

### animateEnter(item)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

生命周期函数：当某个元素动画开始时执行函数。

### animateLeave(item)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

生命周期函数：当某个元素动画结束时执行函数。

## 动画组

当滚动到某个区域需要它里面的子元素做连续动画时（例如为地图标记点做连续动画）：

```html
<!-- html -->
<div animate-group>
  <div animateItem="[animate-name]"></div>
</div>
```

### animate-group*

为一个动画组的父元素添加此属性。

### animateItem*

动画名，同时子元素支持单元素的所有属性。

## 绑定生命周期函数

在需要触发的元素上增加属性 <font color=Green>animate-enter</font> (动画前)或 <font color=Green>animate-leave</font> (动画后)，值为定义在 methods 中的函数名。

```html
<!-- html -->
<div animate-enter="animateEnter" animate-leave="animateLeave"></div>
```

将需要执行的函数定义在 methods 中：

```javascript
// javascript
let xAnimate = new XAnimate({
  methods: {
    animateEnterFn(item) {
      console.log('animateEnter', item);
    },
    animateLeaveFn(item) {
      console.log('animateLeave', item);
    }
  }
});
```

## 自定义动画

使用自定义的动画，例如新定义 newAnimate 动画:

```css
/* css */
@keyframes newAnimate {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.newAnimate {
  animation-name: newAnimate;
}
```

```html
<!-- html -->
<div animate="newAnimate"></div>
```

## 其他配置

```javascript
// javascript
const xAnimate = new XAnimate({
  // 默认值'animate'，对应<div animate=""></div>，防止与其他插件命名冲突
  name: 'animate',
  // 默认值'delay'，对应<div delay=""></div>，防止与其他插件命名冲突
  delay: 'delay',
  // 默认值'duration'，对应<div duration=""></div>，防止与其他插件命名冲突
  duration: 'duration'
});
```