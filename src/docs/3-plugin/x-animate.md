<p align="center"><img width="160" src="https://ws3.sinaimg.cn/large/006tNbRwly1fx32anjngzj308w06x415.jpg" alt="x-animate"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-animate">X-ANIMATE</a>是通过屏幕滚动控制动画执行的插件，支持动画组，可以配合<a href="https://daneden.github.io/animate.css/">animate.css</a>使用。
</p>

### 安装

- 通过`npm` or `yarn`安装：

```
  $ yarn add animate.css x-animate
  # OR
  $ npm install animate.css x-animate --save
```

- 通过script加载[x-animate.min.js](https://raw.githubusercontent.com/codexu/x-animate/master/dist/x-animate.min.js)

### 引用

- 通过包管理器安装：

```javascript
  // javascript
  import 'animate.css'
  import XAnimate from 'x-animate'
  let xAnimate = new XAnimate();
  xAnimate.init();
```

- 通过`<script>`（此方式会污染全局变量）：

```javascript
  // javascript
  new XAniamte();
```

### 起步

为至少一个DOM添加 animate 属性，并赋值一个动画名称，例如：

```html
<!-- html -->
<div animate="bounceInLeft"></div>
```

### 单元素动画

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

ℹ️ `animate(必填项)` 参考animate.css动画名，或参考自定义动画。

ℹ️ `delay(可选)` 延时：(毫秒)，当屏幕滚动到对应位置时，延时结束执行动画。

ℹ️ `duration(可选)` 持续时间：(毫秒)，动画执行的持续时间，数值越大动画越慢。

ℹ️ `offset(可选)` 偏移量：(px)，以屏幕底部为轴，默认滚动到某一元素已显示一半高度时执行动画。偏移量为正数，则需多滚动相应的距离；偏移量为负值，则会提前相应距离执行动画。

ℹ️ `animateEnter(可选)` 钩子函数：(function(item))，当某个元素动画开始时执行函数。

ℹ️ `animateLeave(可选)` 钩子函数：(function(item))，当某个元素动画结束时执行函数。

### 动画组

当滚动到某个区域需要它里面的子元素做连续动画时（例如为地图标记点做连续动画）：

```html
<!-- html -->
<div animate-group>
  <div animateItem="[animate-name]"></div>
</div>
```

ℹ️ `animate-group(必填项)` 为一个动画组的父元素添加此属性。

ℹ️ `animateItem(必填项)` 子元素与单元素`animate`功能一至。

ℹ️ 子元素支持单元素的所有属性。

### 钩子函数

在需要触发的元素上增加属性`animate-enter`(动画前)或`animate-leave`(动画后)，值为定义在methods中的函数名。

```html
<!-- html -->
<div animate-enter="animateEnter" animate-leave="animateLeave"></div>
```

将需要执行的函数定义在methods中：

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

### 自定义动画

使用自定义的动画，例如新定义`newAnimate`动画:

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

### 其他配置

```javascript
// javascript
let xAnimate = new XAnimate({
  // 默认值'animate'，对应<div animate=""></div>，防止与其他插件命名冲突
  name: 'animate',
  // 默认值'delay'，对应<div delay=""></div>，防止与其他插件命名冲突
  delay: 'delay',
  // 默认值'duration'，对应<div duration=""></div>，防止与其他插件命名冲突
  duration: 'duration'
});
```