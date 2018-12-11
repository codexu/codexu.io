<p align="center"><img width="160" src="https://ws2.sinaimg.cn/large/006tNbRwly1fy2srzbjagj308w06xaco.jpg" alt="x-music"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.0.1-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-touch">X-MUSIC</a>，设置背景音乐及音乐控制。
</p>

### 安装

- 通过`npm` or `yarn`安装

```
  npm install x-music --save
  yarn add x-music
```

### 起步

使用import引用：

``` javascript
import XMusic from 'x-music';
import src from '***';
import playImg from '***';
import pauseImg from '***';

let xMusic = new XMusic({ src, playImg, pauseImg });

xMusic.init();
```

### 参数

如果使用webpack进行打包，请使用import加载静态资源。

##### src 音乐路径 (必填)

##### playImg 播放按钮图片路径 (必填)

##### pauseImg 暂停按钮图片路径 (必填)

##### width 按钮图片宽度

##### height 按钮图片高度


