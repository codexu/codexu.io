<p align="center"><img src="https://github.com/codexu/_images/blob/master/x-logo/logo.png?raw=true" width="150px"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v4.4.1-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-build">X-BUILD</a>一套基于Webpack、快速搭建H5场景开发环境的脚手架，只需要几分钟的时间就可以运行起来。
</p>

### H5场景开发

由于H5网页开发周期短，每个项目都需要重新搭建开发环境，X-BUILD主要目标是解决这种情况。

您只需要对HTML、CSS、JS有简单的开发经验，就可以按照X-BUILD的规则去快速搭建一个优秀的H5页面。

### 解决痛点

✅ 零配置，快速搭建繁琐的开发环境搭建。

✅ 解决多终端屏幕适配以及代码兼容性。

✅ 代码压缩、静态资源压缩、更少的HTTP请求。

✅ 可选插件，避免逻辑问题导致开发效率降低。

### 功能&特性

- 基于[Webpack](https://webpack.docschina.org/concepts/)(v4.21.0)

- 集成移动端自适应解决方案

- 静态文件服务

- [Pug模板引擎](https://pug.bootcss.com/api/getting-started.html)

- JavaScript模块化

- Babel转译ES6/ES7

- [ESLint](https://github.com/codexu/x-build/blob/master/.eslintrc.js)规范代码

- Css拆分

- normalize样式重置

- [Stylus](https://www.zhangxinxu.com/jq/stylus/)样式预处理器，提供多个Mixins快速搭建页面

- postcss

- Hot Module Replacement

### 插件

| Plugin | Status | Description |
| :------: | :------: | :------ |
| <a href="https://github.com/codexu/x-load">X-LOAD</a> | <img src="https://img.shields.io/badge/npm-v1.3.0-blue.svg"> | 控制图片加载方式，自定义loading效果。 |
| <a href="https://github.com/codexu/x-animate">X-ANIMATE</a> | <img src="https://img.shields.io/badge/npm-v0.2.1-blue.svg"> | 屏幕滚动相应动画，支持动画组和各种阶段的回调。 |
| <a href="https://github.com/codexu/x-touch">X-TOUCH</a> | <img src="https://img.shields.io/badge/npm-v1.1.0-blue.svg"> | 使原生DOM支持touch事件（点击以及上下左右滑动） |