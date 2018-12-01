<p align="center"><img width="160" src="https://ws1.sinaimg.cn/large/006tNbRwly1fx8sjg0tujj308w06xwh3.jpg" alt="x-animate"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.2.0-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-touch">X-TOUCH</a>，移动端滑动组件，为DOM绑定点击事件和上下左右方向滑动事件。
</p>

### 安装

- 通过`npm` or `yarn`安装

```
  npm install x-touch --save
  yarn add x-touch
```

- 通过script加载[x-touch.min.js](https://raw.githubusercontent.com/codexu/x-touch/master/dist/x-touch.min.js)

### 起步

使用import引用：

``` javascript
import XTouch from 'x-touch';

let xTouch = new XTouch();
xTouch.init();
```

为DOM绑定touch事件：

``` javascript
let root = document.getElementById('root');

root.xtouch('tap', function(status){
  // do someting!
})

```

参数1 事件名：

| 方式 | 参数 |
| :- | :- |
| ⏺ 点击 | `tap` |
| ⏺ 长按 | `longTap` |
| ⬆️ 向上滑动 | `swipUp` |
| ⬇️ 向下滑动 | `swipDown` |
| ⬅️ 向左滑动 | `swipLeft` |
| ➡️ 向右滑动 | `swipRight` |

参数2 回调函数：

ℹ️ 函数内this指向实践绑定的DOM。

ℹ️ 函数参数status，此次事件发生的参数。

### 配置

| 参数 | 默认值 | 说明 |
| :- | :- | :- |
| slideMin | 50 | 滑动事件最小距离 |
| tapMin | 10 | 点击最大距离 |
| longTapTime | 300 | 长按最短时间 |

在初始化XTouch时传递参数`<Object>`:

``` javascript
let config = {
  slideMin: 50,
  tapMin: 10,
  longTapTime: 300
}

let xTouch = new XTouch(config);
```