# X-LOAD
[![Build Status](https://travis-ci.org/codexu/x-load.svg?branch=master)](https://travis-ci.org/codexu/x-load)
[![](https://img.shields.io/npm/v/x-load.svg)](https://www.npmjs.com/package/x-load)
[![](https://img.shields.io/github/size/codexu/x-load/dist/x-load.min.js.svg)](https://github.com/codexu/x-load/tree/master/dist)
[![](https://img.shields.io/npm/dm/x-load.svg)](https://www.npmjs.com/package/x-load)
[![](https://img.shields.io/github/license/codexu/x-load.svg)](https://github.com/codexu/x-load/blob/master/LICENSE)

通过预加载、懒加载、顺序加载控制图片下载方式，主要针对H5页面的Loading加载进度实现。

## 安装

- 通过 <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font> 安装：

```
**[terminal]
**[command npm install x-load --save]
```

## 引用

- 通过包管理器安装：

```javascript
  import XLoad from 'x-load';
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-load/tree/master/dist)

## 起步

1. 正文包裹层增加 <font color=Green>id="root"</font> ，将你的所有正文内容写在这个 <font color=Green>div</font> 下。

2. X-BUILD 项目已经在 index.pug 中定义好 <font color=Crimson>div#root</font> ，所有的内容写在 app.pug 内即可。

3. <font color=Crimson>&lt;img&gt;</font> 标签使用 <font color=Green>data-src</font> 传入图片链接，不要设置 <font color=Green>src</font> 属性。

4. 至少给一个 <font color=Crimson>&lt;img&gt;</font> 标签增加属性 <font color=Green>prior</font> ，表示此图片需要优先加载。

```html
<!-- html -->
<div id="root">
  <img data-src="./abc.jpg" prior>
</div>
```

## 参数

实例化 XLoad 时，传入 object 配置参数：

``` javascript
  new XLoad({
    // ...
  });
```

### wrapper 

`#root` <font color=MediumSeaGreen>&lt;HTMLelement&gt;</font>

传入正文包裹层 DOM。

### loader 

`null` <font color=MediumSeaGreen>&lt;HTMLelement&gt;</font>

如果需要自定义 loading 效果，请将自定义 DOM 传入。

### attr 

`'data-src'` <font color=MediumSeaGreen>&lt;String&gt;</font>

当 <font color=Crimson>&lt;img data-src="url"&gt;</font> 命名冲突时改变此项。

### prior 

`'prior'` <font color=MediumSeaGreen>&lt;String&gt;</font>

当 <font color=Crimson>&lt;img prior&gt;</font> 命名冲突时改变此项。

### sync 

`true` <font color=MediumSeaGreen>&lt;Boolean&gt;</font>

默认同步加载（按顺序加载），控制 <font color=Crimson>&lt;img prior&gt;</font> 图片加载完成后剩余图片加载方式，设置为 false：异步加载(同时加载所有图片)。

### loadImg 

`null` <font color=MediumSeaGreen>&lt;String&gt;</font>

图片路径，用于未加载完成图片的背景图，注意：使用 webpack ，请使用 require()。

### beforeLoading(object) 

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

当实例化完成后触发。

- `object` <font color=MediumSeaGreen>&lt;Object&gt;</font> 指向实例

### nextTickLoading(percent) 

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

每一个 <font color=Crimson>&lt;img prior&gt;</font> 加载后时触发（不论成功或失败）。

- `percent` <font color=MediumSeaGreen>&lt;Number&gt;</font> 当前图片加载进度，值为`0-1`的小数。

### afterLoading() 

`none` <font color=MediumSeaGreen>&lt;Function&gt;</font>

所有 <font color=Crimson>&lt;img prior&gt;</font> 加载完成后执行。

- `object` <font color=MediumSeaGreen>&lt;Object&gt;</font> 指向实例


