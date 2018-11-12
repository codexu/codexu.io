<p align="center"><img width="160" src="https://ws3.sinaimg.cn/large/006tNbRwly1fx32anjngzj308w06x415.jpg" alt="x-animate"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v0.2.1-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

# x-animate

x-animate是通过屏幕滚动控制动画执行的插件，支持动画组，可以配合[animate.css](https://daneden.github.io/animate.css/)使用。

#### 快速起步

- 安装

通过npm或yarn安装，或使用script直接引用dist目录下的x-animate.min.js。

```
$ yarn add animate.css x-animate
or
<script src="dist/x-animate.min.js"></script>
```

- 引用

```javascript
// javascript
import 'animate.css'
import Animate from 'x-animate'
let animate = new Animate();
```

```html
<!-- html -->
<div animate="bounceInLeft"></div>
<!-- pug -->
div(animate="bounceInLeft")
```

#### 单元素动画

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

- `animate(必填项)` 参考animate.css动画名，或参考自定义动画。

- `delay(可选)` 延时：(毫秒)，当屏幕滚动到对应位置时，延时结束执行动画。

- `duration(可选)` 持续时间：(毫秒)，动画执行的持续时间，数值越大动画越慢。

- `offset(可选)` 偏移量：(px)，以屏幕底部为轴，默认滚动到某一元素已显示一半高度时执行动画。偏移量为正数，则需多滚动相应的距离；偏移量为负值，则会提前相应距离执行动画。

- `animateEnter(可选)` 钩子函数：(function(item))，当某个元素动画开始时执行函数。

- `animateLeave(可选)` 钩子函数：(function(item))，当某个元素动画结束时执行函数。

#### 动画组

```html
<!-- html -->
<div animate-group>
  <div animateItem="[animate-name]"></div>
</div>
```

- `animate-group(必填项)` 为一个动画组的父元素添加此属性。

- `animateItem(必填项)` 子元素与单元素`animate`功能一至。

- 子元素支持单元素的所有属性。

#### 钩子函数

在需要触发的元素上增加属性`animate-enter`(动画前)或`animate-leave`(动画后)，值为定义在methods中的函数名。

```html
<!-- html -->
<div animate-enter="animateEnter" animate-leave="animateLeave"></div>
```

将需要执行的函数定义在methods中。

```javascript
// javascript
new Animate({
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

#### 自定义动画

使用自定义的动画，例如新定义`newAnimate`动画:

```css
@keyframes newAnimate {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.newAnimate {
  animation-name: fadeIn;
}
```

```html
<!-- html -->
<div animate="newAnimate"></div>
```

#### 深度配置

配置属性名称、滚动节流调节、生命周期函数。

```javascript
// javascript
new Animate({
  // 默认值'animate'，对应<div animate=""></div>，防止与其他插件命名冲突
  name: 'animate',
  // 默认值'delay'，对应<div delay=""></div>，防止与其他插件命名冲突
  delay: 'delay',
  // 默认值'duration'，对应<div duration=""></div>，防止与其他插件命名冲突
  duration: 'duration',
  // 默认空，生命周期函数
  methods: {}
});
```