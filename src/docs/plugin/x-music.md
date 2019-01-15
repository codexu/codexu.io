# X-MUSIC
[![Build Status](https://travis-ci.org/codexu/x-music.svg?branch=master)](https://travis-ci.org/codexu/x-music)
[![](https://img.shields.io/npm/v/x-music.svg)](https://www.npmjs.com/package/x-music)
[![](https://img.shields.io/github/size/codexu/x-music/dist/x-music.min.js.svg)](https://github.com/codexu/x-music/tree/master/dist)
[![](https://img.shields.io/npm/dm/x-music.svg)](https://www.npmjs.com/package/x-music)
[![](https://img.shields.io/github/license/codexu/x-music.svg)](https://github.com/codexu/x-music/blob/master/LICENSE)

设置背景音乐及播放控制按钮。

## 安装

- 通过 <font color=DodgerBlue>npm</font> or <font color=DodgerBlue>yarn</font> 安装：

```
**[terminal]
**[command npm install x-music --save]
```

## 起步

- 使用 ES6 方式引用：

``` javascript
import XMusic from 'x-music';

// 使用 webpack 请 import 引入静态资源
import src from '***';
import playImg from '***';
import pauseImg from '***';

const xMusic = new XMusic({ src, playImg, pauseImg });
xMusic.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-music/tree/master/dist)

## 参数

如果使用 webpack 进行打包，请使用 import 加载静态资源：

### src*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

音乐路径

### playImg*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

播放按钮图片路径

### pauseImg*

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

暂停按钮图片路径

### width 

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

按钮图片宽度(px)

### height 

`none` <font color=MediumSeaGreen>&lt;String&gt;</font>

按钮图片高度(px)


