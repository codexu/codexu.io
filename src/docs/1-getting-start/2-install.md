<p align="center"><img width="160" src="https://ws4.sinaimg.cn/large/006tNbRwly1fx9qzs85mzj308w06x40w.jpg" alt="x-build-cli"></p>

<p align="center">
  <img src="https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg">
  <img src="https://img.shields.io/badge/npm-v1.4.0-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

<p align="center">
  <a href="https://github.com/codexu/x-build-cli">X-BUILD-CLI</a>是一个快速生成X-BUILD项目的生成器，类似于@vue/cli。
</p>

### 命令行工具 (CLI)

X-BUILD-CLI是一个全局安装的 npm 包，提供了终端里的 x-build 命令。

> #### ⚠️ Node 版本要求

> X-BUILD-CLI需要 [Node.js](http://nodejs.cn/) **8.9 或更高版本** (推荐 8.11.0+)。<br>你可以使用 [nvm](https://github.com/creationix/nvm) 在同一台电脑中管理多个 Node 版本。

### 安装

使用下列命令全局安装npm包：

```
  $ npm install -g x-build-cli
  # 安装报错，可能需要`sudo`获得权限权限！
```

安装之后，你就可以在命令行中访问 **x-build** 命令。

你还可以用这个命令来检查其版本是否正确，同时验证它是否安装成功。

```
  $ x-build --version
```