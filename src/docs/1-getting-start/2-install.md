# X-BUILD-CLI

![](https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg)
![](https://img.shields.io/badge/NPM-v1.4.9-blue.svg)
![](https://img.shields.io/github/license/mashape/apistatus.svg)

### 命令行工具 (CLI)

X-BUILD-CLI 是一个快速生成 X-BUILD 项目的生成器，类似于 @vue/cli，提供了终端里的 x-build 和 x(简写) 命令。

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