# X-LOAD

![](https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg)
![](https://img.shields.io/badge/NPM-v1.0.2-blue.svg)
![](https://img.shields.io/github/license/mashape/apistatus.svg)

设置背景音乐及播放控制按钮。

### 安装

- 通过`npm` or `yarn`安装：

```
  npm install x-music --save
  yarn add x-music
```

### 起步

- 使用 ES6 方式引用：

``` javascript
import XMusic from 'x-music';

import src from '***';
import playImg from '***';
import pauseImg from '***';

const xMusic = new XMusic({ src, playImg, pauseImg });
xMusic.init();
```

> 本项目通过 rollup 使用 UMD 格式打包，支持 AMD、CommonJS、script 标签引入，[下载源码](https://github.com/codexu/x-music/tree/master/dist)

### 参数

如果使用webpack进行打包，请使用import加载静态资源：

##### src 音乐路径 (必填)

##### playImg 播放按钮图片路径 (必填)

##### pauseImg 暂停按钮图片路径 (必填)

##### width 按钮图片宽度

##### height 按钮图片高度


