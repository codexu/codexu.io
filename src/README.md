<p align="center"><img src="https://ws2.sinaimg.cn/large/006tNbRwly1fxbaxq9dbqj308w06x3z1.jpg" width="150px"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v4.4.9-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-build">X-BUILD</a>一套基于<a href="https://webpack.docschina.org/concepts/">Webpack</a>(v4.21.0)快速搭建H5场景开发环境的脚手架，只需要几分钟的时间就可以运行起来。
</p>

### H5场景开发

X-BUILD 是针对 H5 开发的一套自动化构建工具，致力于提升开发效率，减小开发难度。它可以让你在没有任何构建工具（例如 grunt 、 gulp 或 webpack 等工具）配置经验的情况下，帮你快速生成一个完整的前端工程，并可以打包代码和静态资源，使你的项目以最优异的性能上线。

> #### ✅ 基础

> 有一定的 **HTML** 、**CSS** 基础，了解 **JavaScript** 、 **NPM** 和 **命令行**，如果以上这些都掌握的话，那继续吧～！

> #### ⚠️ 误区

> 请不要认为X-BUILD是某种框架或某种库，它仅仅是帮助你快速生成项目结构、搭建开发环境，并提供一些可安装的无依赖插件。它并不关心你的业务逻辑，你可以将任何你想使用的框架或库通过npm安装和使用！

### 适用场景

如果你被这些**问题**困扰，请尝试X-BUILD帮你解决：

❓ 如何快速的搭建自己前端 H5 项目（类似 @vue/cli 的方式）

❓ 如何一套代码实现移动端自适应

❓ JavaScript 使用不是很熟练，又想去做翻页效果怎么办

❓ 如何打包出性能优秀、兼用型高的代码

❓ 想使用 CSS 预处理器或 ES6 语法，又对前端工程不太了解，如何搭建自动化的开发环境

❓ 如何自动刷新（热加载）浏览器、如何在自己的手机中测试

### 功能特性

| Speciality | Description |
| :- | :- |
| devServer | [模块热替换(HMR - Hot Module Replacement)](https://webpack.docschina.org/concepts/hot-module-replacement/)可以显著加快开发速度。 |
| 自适应解决方案 | [px2rem](https://github.com/songsiqi/px2rem) + [hotcss](https://github.com/imochen/hotcss) 实现多终端显示一致。 |
| HTML | 支持[Pug](https://pug.bootcss.com/api/getting-started.html)模板引擎。 |
| Css | 支持sass、less、stylus样式预处理器，normalize重置样式，Postcss。 |
| JavaScript | [Webpack](https://webpack.docschina.org/concepts/)解决模块化，通过Babel编译成现代浏览器可执行的JavaScript。 |
| 代码规范 | 使用[ESLint](https://eslint.org/)避免低级错误和统一代码的风格。 |
| 静态资源服务 | 提供代码压缩、图片压缩、文件hash、base64处理等服务。 |

### 生态系统

| Project | Status | Description |
| :------ | :------ | :------ |
| <a href="https://github.com/codexu/x-build">X-BUILD</a> | <img src="https://img.shields.io/badge/npm-v4.4.9-blue.svg"> | 基于Webpack的工程模板，CLI create时会被下载。 |
| <a href="https://github.com/codexu/x-build-cli">X-BUILD-CLI</a> | <img src="https://img.shields.io/badge/npm-v1.4.9-blue.svg"> | 脚手架工具，快速生成工程目录，并安装依赖。 |
| <a href="https://github.com/codexu/x-fullpage">X-FULLPAGE</a> | <img src="https://img.shields.io/badge/npm-v1.2.0-blue.svg"> | 适用于移动端的整屏滚动插件，支持动画触发。 |
| <a href="https://github.com/codexu/x-load">X-LOAD</a> | <img src="https://img.shields.io/badge/npm-v1.3.3-blue.svg"> | 创建Loading效果、控制图片加载方式。 |
| <a href="https://github.com/codexu/x-animate">X-ANIMATE</a> | <img src="https://img.shields.io/badge/npm-v1.0.1-blue.svg"> | 屏幕滚动执行相应动画，支持动画组和生命周期回调。 |
| <a href="https://github.com/codexu/x-touch">X-TOUCH</a> | <img src="https://img.shields.io/badge/npm-v1.2.0-blue.svg"> | 使原生DOM支持轻触、长按和滑动事件。 |

### 讨论交流

#### QQ群

欢迎加入 X-BUILD QQ交流群，在这里可以互相交流前端问题。

群号: 374406559

#### 提问 & BUG

请将BUG提交在不同项目的 **github issues** 里，或者加QQ：461229187讨论交流。

[X-BUILD模板](https://github.com/codexu/x-build/issues) | 
[CLI工具](https://github.com/codexu/x-build-cli/issues) | 
[X-FULLPAGE](https://github.com/codexu/x-fullpage/issues) | 
[X-LOAD](https://github.com/codexu/x-load/issues) | 
[X-ANIMATE](https://github.com/codexu/x-animate/issues) | 
[X-TOUCH](https://github.com/codexu/x-touch/issues)