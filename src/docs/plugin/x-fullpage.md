# X-FULLPAGE
[![Build Status](https://travis-ci.org/codexu/x-fullpage.svg?branch=master)](https://travis-ci.org/codexu/x-fullpage)
[![](https://img.shields.io/npm/v/x-fullpage.svg)](https://www.npmjs.com/package/x-fullpage)
[![](https://img.shields.io/github/size/codexu/x-fullpage/dist/x-fullpage.min.js.svg)](https://github.com/codexu/x-fullpage/tree/master/dist)
[![](https://img.shields.io/npm/dm/x-fullpage.svg)](https://www.npmjs.com/package/x-fullpage)
[![](https://img.shields.io/github/license/codexu/x-fullpage.svg)](https://github.com/codexu/x-fullpage/blob/master/LICENSE)

适用于移动端的全屏滚动插件，依赖 X-TOUCH，它可以帮助你简单快速创建高性能的移动端全屏滚动特效。
X-FULLPAGE 只能辅助你触发动画，使用 css动画库（推荐animate.css） 或自定义动画来实现翻页动画效果。

## 安装

- 通过 <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font> 安装：

```
**[terminal]
**[command npm install x-fullpage x-touch animate.css --save]
```

> 本教程默认使用 animate.css 作为动画库

## 引用

X-FULLPAGE 依赖于 X-TOUCH，请确保 X-TOUCH 优先 init：

```javascript
  // javascript
  import XFullpage from 'x-fullpage';
  import XTouch from 'x-touch';
  import 'animate.css';

  const xTouch = new XTouch();
  const xFullpage = new XFullpage();

  xTouch.init();
  xFullpage.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-fullpage/tree/master/dist)

## 起步

- 创建一个 id 为 <font color=green>root</font> 的根节点。
> 使用 x-build-cli 创建时使用pug模版引擎，在 index.pug 中已经创建这个节点，**跳过这步**。

- 在 <font color=green>#root</font> 下创建多个 <font color=green>class</font> 为 <font color=green>x-page</font> 的节点表示每一个页面，你可以把页面的内容写在里面。

```html
<!-- html -->
<div id="root">
  <div class="x-page"></div>
  <div class="x-page"></div>
  <div class="x-page"></div>
</div>
```

## 动画参数

在 <font color=green>.x-page</font> 中为元素添加动画：

```html
<!-- html -->
<div class="x-page">
  <div animate="animate-name" 
      delay=1000
      duration=1000
  ></div>
</div>
```

### animate

`empty` <font color=MediumSeaGreen>&lt;String&gt;</font>

动画名：可参考 animate.css，或自定义动画类名。

### delay

`1000(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

延时：当页面滚动结束时开始计时。

### duration

`1000(ms)` <font color=MediumSeaGreen>&lt;Number&gt;</font>

动画持续时间。

## 实例参数

实例化XFullpage时，传入object配置参数：

``` javascript
  new XFullpage({
    // ...
  });
```

### root

`'root'` <font color=MediumSeaGreen>&lt;String&gt;</font>

当你的根节点 id 不想使用 '#root' 时改变这项。

### pageClassName

`'x-page'` <font color=MediumSeaGreen>&lt;String&gt;</font>

当你的页面节点不想使用.x-page时改变这项。

### loop

`false` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

翻页循环，开启后，最后一页继续滑动会返回第一页，反之同理。

### flex

`true` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

flex布局模式，内容将均处于屏幕的正中间。

### duration

`1000` <font color=MediumSeaGreen>&lt;Number&gt;</font>

翻页的持续时间。

### indicator

`true` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

指示器开关。

### indicatorWidth

`'20px'` <font color=MediumSeaGreen>&lt;String&gt;</font>

指示器圆点直径。

### indicatorColor

`rbga(255, 255, 255, .3)` <font color=MediumSeaGreen>&lt;color&gt;</font>

指示器默认颜色。

### indicatorCurrentColor

`rbga(255, 255, 255, .3)` <font color=MediumSeaGreen>&lt;color&gt;</font>

指示器焦点颜色。

### beforeChange(index)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font> 

回调函数，页面开始滚动时触发。

- `index` <font color=MediumSeaGreen>&lt;Number&gt;</font> 页面索引 ( 0 ~ n )

### afterChange(index)

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font> 

回调函数，页面滚动结束时触发。

- `index` <font color=MediumSeaGreen>&lt;Number&gt;</font> 页面索引 ( 0 ~ n )


## API

### pageTo(index)

`index` <font color=MediumSeaGreen>&lt;Number&gt;</font> 页面索引 ( 0 ~ n )

通过实例调用pageTo，可以跳转到指定页面：

```javascript
  // 两秒后跳转到第3页
  setTimeout(() => {
    xFullpage.pageTo(2);
  }, 2000);
```