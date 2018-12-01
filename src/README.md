<p align="center"><img src="https://ws2.sinaimg.cn/large/006tNbRwly1fxbaxq9dbqj308w06x3z1.jpg" width="150px"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v4.4.7-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-build">X-BUILD</a>一套基于<a href="https://webpack.docschina.org/concepts/">Webpack</a>(v4.21.0)快速搭建H5场景开发环境的脚手架，只需要几分钟的时间就可以运行起来。
</p>

### H5场景开发

X-BUILD是针对H5开发的一套自动化构建工具，致力于提升开发效率，减小开发难度。它可以让你在没有任何构建工具（例如 grunt 、 gulp 或 webpack 等工具）配置经验的情况下，帮你快速生成一个完整的前端工程，并可以打包代码和静态资源，使你的项目以最优异的性能上线。

> #### ⚠️ 基础

> 有一定的 **HTML** 、**CSS** 和 **JavaScript** 基础，熟悉 **node.js** 和 **npm** ，了解**终端**的一些常用指令。在开发过程中，会涉及 **pug** 模版引擎、 CSS预处理、可能会使用 **es6** 语法（使用插件时）。

> 如果以上这些都掌握的话，那我们继续吧～！✌️

### 针对痛点

✅ 零配置，快速搭建繁琐的开发环境搭建。

✅ 解决多终端屏幕适配以及代码兼容性、规范性。

✅ 代码压缩、静态资源压缩、更少的HTTP请求。

✅ 可选插件，提升开发效率，易于扩展。

### 功能特性

| Speciality | Description |
| :- | :- |
| devServer | [模块热替换(HMR - Hot Module Replacement)](https://webpack.docschina.org/concepts/hot-module-replacement/)可以显著加快开发速度。 |
| 自适应解决方案 | [px2rem](https://github.com/songsiqi/px2rem)(loader) + [hotcss](https://github.com/imochen/hotcss) 实现多终端显示一致。 |
| HTML | 使用[Pug](https://pug.bootcss.com/api/getting-started.html)模板引擎，风格与Stylus类似。 |
| Css | 支持sass、less、stylus样式预处理器，normalize样式重置，打包拆分单独的css文件。 |
| JavaScript | [Webpack](https://webpack.docschina.org/concepts/)解决模块化，通过Babel编译成现代浏览器可执行的JavaScript。 |
| 代码规范 | 使用[ESLint](https://eslint.org/)避免低级错误和统一代码的风格。 |
| 静态资源服务 | 提供代码压缩、图片压缩、文件hash、base64处理等服务。 |

### 生态系统

| Project | Status | Description |
| :------ | :------ | :------ |
| <a href="https://github.com/codexu/x-build">X-BUILD</a> | <img src="https://img.shields.io/badge/npm-v4.4.7-blue.svg"> | 基于Webpack的工程模板，CLI create时会被下载。 |
| <a href="https://github.com/codexu/x-build-cli">X-BUILD-CLI</a> | <img src="https://img.shields.io/badge/npm-v1.4.0-blue.svg"> | 脚手架工具，快速生成工程目录，并安装依赖。 |
| <a href="https://github.com/codexu/x-fullpage">X-FULLPAGE</a> | <img src="https://img.shields.io/badge/npm-v0.0.4-blue.svg"> | 适用于移动端的整屏滚动插件，支持动画触发。 |
| <a href="https://github.com/codexu/x-load">X-LOAD</a> | <img src="https://img.shields.io/badge/npm-v1.3.3-blue.svg"> | 创建Loading效果、控制图片加载方式。 |
| <a href="https://github.com/codexu/x-animate">X-ANIMATE</a> | <img src="https://img.shields.io/badge/npm-v1.0.1-blue.svg"> | 屏幕滚动执行相应动画，支持动画组和生命周期回调。 |
| <a href="https://github.com/codexu/x-touch">X-TOUCH</a> | <img src="https://img.shields.io/badge/npm-v1.2.0-blue.svg"> | 使原生DOM支持轻触、长按和滑动事件。 |