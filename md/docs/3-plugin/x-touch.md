<p align="center"><img width="160" src="https://ws1.sinaimg.cn/large/006tNbRwly1fx8sjg0tujj308w06xwh3.jpg" alt="x-animate"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.1.0-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

# x-touch

`x-touch`，移动端滑动组件，为某个dom绑定点击事件和上下左右方向滑动事件。

#### 安装

- 通过`npm` or `yarn`安装

```
  npm install x-touch --save
  yarn add x-touch
```

- 通过script加载[x-touch.min.js](https://raw.githubusercontent.com/codexu/x-touch/master/dist/x-touch.min.js)

#### 使用方式

只需要通过import 'x-touch'即可，将HTMLElement.prototype添加`xtouch`函数。

``` javascript
import 'x-touch';

let root = document.getElementById('root');

root.xtouch('tap', function(status){
  // do someting!
})

```

#### 参数1 【事件名】

- 点击： `tap`

- 向上滑动： `swipUp`

- 向下滑动： `swipDown`

- 向左滑动： `swipLeft`

- 向右滑动： `swipRight`

#### 参数2 【回调函数】

- 函数内this指向实践绑定的DOM。

- 函数参数status，此次事件发生的参数。