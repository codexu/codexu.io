# X-FULLPAGE
[![Build Status](https://travis-ci.org/codexu/x-build-cli.svg?branch=master)](https://travis-ci.org/codexu/x-build-cli)
[![](https://img.shields.io/badge/npm-v1.2.2-blue.svg)](https://www.npmjs.com/package/x-fullpage)
[![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/codexu/x-fullpage/blob/master/LICENSE)

适用于移动端的全屏滚动插件，依赖Animate.css（或其他css动画库）和X-TOUCH，它可以帮助你简单快速创建高性能的移动端全屏滚动特效。

### 安装

- 通过`npm` or `yarn`安装：

```
  $ npm install x-fullpage x-touch animate.css --save
```

### 引用

请确保x-touch优先init：

```javascript
  // javascript
  import XFullpage from 'x-fullpage';
  import XTouch from 'x-touch';
  import 'animate.css';

  let xTouch = new XTouch();
  let xFullpage = new XFullpage();

  xTouch.init();
  xFullpage.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-fullpage/tree/master/dist)

### 起步

- 创建一个id为root的根节点（使用x-build-cli创建的项目在index.pug中已经创建这个节点，**跳过这步**）。

- 在root下创建多个class为x-page的节点表示每一个页面，你可以把页面的内容写在里面。

```html
<!-- html -->
<div id="root">
  <div class="x-page"></div>
  <div class="x-page"></div>
  <div class="x-page"></div>
</div>
```

### 动画

在每个x-page中为元素添加动画：

```html
<!-- html -->
<div animate="[animate-name]" 
     delay=1000
     duration=1000
></div>
```

ℹ️ `animate(必填项)` 参考animate.css动画名，或参考自定义动画。

ℹ️ `delay(可选)` 延时：(毫秒)，当页面滚动结束时开始计时。

ℹ️ `duration(可选)` 动画持续时间：(毫秒)。

### 参数

实例化XFullpage时，传入object配置参数：

``` javascript
  new XFullpage({
    // ...
  });
```

| 参数 | 默认值 | 说明 |
| :- | :- | :- |
| root | '#root' | 当你的根节点不想使用#root时改变这项。 |
| pageClassName | 'x-page' | 当你的页面节点不想使用.x-page时改变这项。 |
| loop | false | 翻页循环，开启后，最后一页继续滑动会返回第一页，反之同理。 |
| flex | true | flex布局模式，内容将均处于屏幕的正中间。 |
| duration | 1000 | 翻页的持续时间。 |
| indicator | true | 指示器开关。 |
| indicatorWidth | '20px' | 指示器圆点直径。 |
| indicatorColor | 半透明 | 指示器默认颜色。 |
| indicatorCurrentColor | 半透明 | 指示器焦点颜色。 |
| beforeChange | null | 传入回调，附带一个参数滚动后的页面index，从0开始，当页面开始滚动时触发。 |
| afterChange | null | 传入回调，附带一个参数滚动后的页面index，从0开始，当页面滚动结束时触发。 |

### API

##### pageTo(index)

通过实例调用pageTo，可以跳转到指定页面，参数index[0-n]：

```javascript
  // 两秒后跳转到第3页
  setTimeout(() => {
    xFullpage.pageTo(2);
  }, 2000);
```