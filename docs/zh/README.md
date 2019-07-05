<h1 align="center">X-BUILD</h1>
<p align="center">
  <a href="https://travis-ci.org/codexu/x-build"><img src="https://travis-ci.org/codexu/x-build.svg?branch=master" /></a>
  <a href="https://www.npmjs.com/package/x-build"><img src="https://img.shields.io/npm/v/x-build.svg" /></a>
  <a href="https://www.npmjs.com/package/x-build"><img src="https://img.shields.io/npm/dm/x-build.svg" /></a>
  <a href="https://github.com/codexu/x-build/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" /></a>
  <a href="https://github.com/codexu/x-build/"><img src="https://img.shields.io/github/stars/codexu/x-build.svg?style=social" /></a>
</p>

![](http://ww2.sinaimg.cn/large/006tNc79ly1g3yij4uah1g30rs0hzdnt.gif)

## 介绍

X-BUILD 是面向小型项目的脚手架工具，通过终端命令最快在几秒钟初始化项目目录，解决开发中的自动化、性能、模块化、规范、自适应布局等问题，辅助你生成更优质的代码。它两部分组成：一部分为基于 Node.js 环境下的项目生成器，它是安装在全局环境下的 NPM 包；另一部分是基于 webpack 的开发和生产环境，对各类需求做了相应的配置。

## 特性

**脚手架：**

- 自动创建工程目录（自定义/快速）

- 自动安装依赖 / 自动初始化 Git

- 生成配置文件，提供更灵活的选择

**开发/生产环境：**

- 基于 webpack4 的开发环境

- 支持 CSS 预处理器(sass、less、stylus)

- 支持 TypeScript & TSLint 或 Babel & ESLint

- 提供可选的自适应解决方案

- 数据接口模块自动加载

## 适合环境

- **小型项目**：周期短，无需使用大型框架开发并且还能保证项目的品质和效率。

- **高效学习**：无论是 ES 新语法、TS 或 CSS 预处理器，避免复杂的搭建环境影响学习效率。

::: danger 搭建大型项目
如果你有足够了解 X-BUILD ，并且熟练掌握 webpack，在此基础上完全可以搭建适合大型项目开发的环境，但我并不建议你这么做！
:::

## 讨论交流

### QQ群

欢迎加入 QQ交流群（374406559），在这里可以互相交流前端问题。

### 提问 & BUG

请将BUG提交在不同项目的 **Github issues** 里：

[X-BUILD](https://github.com/codexu/x-build/issues) |
[X-FULLPAGE](https://github.com/codexu/x-fullpage/issues) |
[X-LOAD](https://github.com/codexu/x-load/issues) |
[X-ANIMATE](https://github.com/codexu/x-animate/issues) |
[X-TOUCH](https://github.com/codexu/x-touch/issues) |
[X-MUSIC](https://github.com/codexu/x-music/issues)

## 分享你的项目

如果你使用 X-BUILD 开发了某个项目，可以在此与大家分享：

- 加 QQ群 或 作者微信(xu461229187) 或 通过下方修改此页的方式提交
- 准备信息：项目名称*、作者*、线上链接*、Git仓库、备注信息

## 成功案例

项目名称 | 作者 |  线上链接 | Git仓库 | 备注信息
:-: | :-: | :-: | :-: | :-:
志愿君机器人助理 | codexu | ![](http://ww3.sinaimg.cn/large/006tNc79ly1g4p4gs2z82j30280280mq.jpg) | - | 需要微信登陆，谨慎消费
找回我的准考证 | codexu | ![](http://ww2.sinaimg.cn/large/006tNc79ly1g4p4gc93ljj30280280ll.jpg) | - | 移动端项目
爱怡国际-名医尊享卡 | HuaZFang | ![](http://ww2.sinaimg.cn/large/006tNc79ly1g4p4fibu6lj30280280sh.jpg) | - | 移动端项目
共享设计师问卷调查 | sanpangZZ | <img src='https://github.com/LOUSANPANG/Picture-library/blob/master/codeImg/h5%E8%B0%83%E6%9F%A5%E9%97%AE%E5%8D%B7.png' width='80' height='80'> | - | 移动端项目
Python全栈工程师 | WenXian | <img src='https://github.com/LOUSANPANG/Picture-library/blob/master/codeImg/h5python%E5%AE%9E%E8%AE%AD.png' width='80' height='80' > | - | 移动端项目
Python全栈工程师 | WenXian | [Python全栈工程师](http://www.zretc.com/pages/course-python/) | - | PC端项目
逆风翻盘向‘薪’而生 | LOUSANPANG | <img src='https://github.com/LOUSANPANG/Picture-library/blob/master/codeImg/h5%E9%80%86%E9%A3%8E%E7%BF%BB%E7%9B%98.png' width='80' height='80' > | - | 移动端项目
逆风翻盘向‘薪’而生 | LOUSANPANG | [逆风翻盘向‘薪’而生](http://www.zretc.com/pages/InternetAgePc-ad/) | - | PC端项目
圆梦千万毕业生 | LouHAO | <img src='https://github.com/LOUSANPANG/Picture-library/blob/master/codeImg/h5%E5%9C%86%E6%A2%A6%E5%8D%83%E4%B8%87%E6%AF%95%E4%B8%9A%E7%94%9F.png' width='80' height='80'> | - | 移动端项目
圆梦千万毕业生 | LouHAO | [圆梦千万毕业生](http://www.zretc.com/pages/DreamGraduate-Pc/) | - | PC端项目
企业背景 | HAOFW | <img src='https://github.com/LOUSANPANG/Picture-library/blob/master/codeImg/h5%E4%BC%81%E4%B8%9A%E8%83%8C%E6%99%AF.png' width='80' height='80' > | - | 移动端项目
企业背景 | HAOFW | [企业背景](http://zretc.com/pages/famous-enterprise/) | - | PC端项目
