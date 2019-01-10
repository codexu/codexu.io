# X-FULLPAGE
[![Build Status](https://travis-ci.org/codexu/x-fullpage.svg?branch=master)](https://travis-ci.org/codexu/x-fullpage)
[![](https://img.shields.io/npm/v/x-fullpage.svg)](https://www.npmjs.com/package/x-fullpage)
[![](https://img.shields.io/github/size/codexu/x-fullpage/dist/x-fullpage.min.js.svg)](https://github.com/codexu/x-fullpage/tree/master/dist)
[![](https://img.shields.io/npm/dm/x-fullpage.svg)](https://www.npmjs.com/package/x-fullpage)
[![](https://img.shields.io/github/license/codexu/x-fullpage.svg)](https://github.com/codexu/x-fullpage/blob/master/LICENSE)

适用于移动端的全屏滚动插件，依赖 X-TOUCH，它可以帮助你简单快速创建高性能的移动端全屏滚动特效。
X-FULLPAGE 只能辅助你触发动画，使用 css动画库（推荐animate.css） 或自定义动画来实现翻页动画效果。

### 安装

- 通过 <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font> 安装：

```
  $ npm install x-fullpage x-touch animate.css --save
```

> 本教程默认使用 animate.css 作为动画库

### 引用

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

### 起步

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

### 动画

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
| 参数 | 默认值 | 说明 |
| :- | :- | :- |
| <font color=DarkGoldenRod>**animate**</font><font color=red>*</font> | <font color=DimGray >empty<font> | **动画名**：可参考 animate.css，或自定义动画类名。 |
| <font color=DarkGoldenRod>**delay**</font> | <font color=DimGray >1000(ms)<font> | **延时**：当页面滚动结束时开始计时。 |
| <font color=DarkGoldenRod>**duration**</font> | <font color=DimGray >1000(ms)<font> | **持续时间** |

### 参数

实例化XFullpage时，传入object配置参数：

``` javascript
  new XFullpage({
    // ...
  });
```

| 参数 | 默认值 | 说明 |
| :- | :- | :- |
| <font color=DarkGoldenRod>**root**</font> | <font color=DimGray>'#root'</font> | 当你的根节点不想使用#root时改变这项。 |
| <font color=DarkGoldenRod>**pageClassName**</font> | <font color=DimGray>'x-page'</font> | 当你的页面节点不想使用.x-page时改变这项。 |
| <font color=DarkGoldenRod>**loop**</font> | <font color=DimGray>false</font> | 翻页循环，开启后，最后一页继续滑动会返回第一页，反之同理。 |
| <font color=DarkGoldenRod>**flex**</font> | <font color=DimGray>true</font> | flex布局模式，内容将均处于屏幕的正中间。 |
| <font color=DarkGoldenRod>**duration**</font> | <font color=DimGray>1000</font> | 翻页的持续时间。 |
| <font color=DarkGoldenRod>**indicator**</font> | <font color=DimGray>true</font> | 指示器开关。 |
| <font color=DarkGoldenRod>**indicatorWidth**</font> | <font color=DimGray>'20px'</font> | 指示器圆点直径。 |
| <font color=DarkGoldenRod>**indicatorColor**</font> | <font color=DimGray>半透明</font> | 指示器默认颜色。 |
| <font color=DarkGoldenRod>**indicatorCurrentColor**</font> | <font color=DimGray>半透明</font> | 指示器焦点颜色。 |
| <font color=DarkGoldenRod>**beforeChange**</font> | <font color=DimGray>null</font> | **回调函数**，参数 index：翻页结束时的页面索引，页面开始滚动时触发。 |
| <font color=DarkGoldenRod>**afterChange**</font> | <font color=DimGray>null</font> | **回调函数**，参数 index：翻页结束时的页面索引，页面滚动结束时触发。 |

### API

##### pageTo(index)

通过实例调用pageTo，可以跳转到指定页面，参数index[0-n]：

```javascript
  // 两秒后跳转到第3页
  setTimeout(() => {
    xFullpage.pageTo(2);
  }, 2000);
```