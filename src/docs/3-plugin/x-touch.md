# X-TOUCH
[![Build Status](https://travis-ci.org/codexu/x-build-cli.svg?branch=master)](https://travis-ci.org/codexu/x-build-cli)
[![](https://img.shields.io/badge/npm-v1.2.1-blue.svg)](https://www.npmjs.com/package/x-touch)
[![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/codexu/x-touch/blob/master/LICENSE)

为原生DOM实现移动端点击、长按、方向滑动事件。

### 安装

- 通过`npm` or `yarn`安装：

```
  npm install x-touch --save
```

### 起步

- 使用 ES6 方式引用：

``` javascript
import XTouch from 'x-touch';

let xTouch = new XTouch();
xTouch.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-touch/tree/master/dist)

- 为DOM绑定touch事件：

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