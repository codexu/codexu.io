## 创建一个新项目

![](https://ws4.sinaimg.cn/large/006tNbRwly1fwp98dwz0jg30rs0gph5z.gif)

通过以下任意指令创建一个新项目：

```
  $ x-build create [name]
  # 别名[ x ]可以代替[ x-build ]
  # 别名[ -c ]可以代替[ create ]
```

### 版本检测

为了保证x-build-cli与x-build保持最完美的配合。

⚠️ v1.3.10版本起，会进行版本检测，强制更新到最新版本才可以使用，低版本可能会导致程序报错！

### 输入问题

你会被提示输入或选择一系列问题来自定义你的项目：

- 初始版本 *（默认0.0.0）*

- server端口 *（默认8080）*

- 移动端开发？ *（默认yes）*

- 选择包管理器 *（yarn/npm/cnpm）*

- 选择安装插件 *（normalize.css/x-load/x-animate/animate.css）*

### 安装&依赖

- 下载最新的x-build

- 安装依赖

- 安装插件

### 完成最后的操作

```
  $ cd [name]
  $ yarn serve
```