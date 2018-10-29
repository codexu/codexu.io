# 创建一个新项目

![](https://ws3.sinaimg.cn/large/006tNbRwly1fwi9fxsva5g30qp0g1q5v.gif)

通过以下任意指令创建一个新项目：

```
  $ x-build init
  # 别名[ x ]可以代替[ x-build ]
```

#### Step1 版本检测

为了保证x-build-cli与x-build保持最完美的配合。

v1.3.10版本起，会进行版本检测，强制更新到最新版本才可以使用，低版本可能会导致程序报错！

#### Step2 输入问题

你会被提示输入或选择一系列问题来自定义你的项目：

- 项目名称 *（默认x-build）*

- 初始版本 *（默认0.0.1）*

- server端口 *（默认8080）*

- 移动端开发？ *（默认yes）*

- 选择包管理器 *（yarn/npm/cnpm）*

- 选择安装插件 *（normalize.css/x-load/x-animate/animate.css）*

#### Step3 安装&依赖

- 下载最新的x-build

- 安装依赖

- 安装插件

#### Step4 完成最后的操作

```
  $ cd [name]
  $ npm run dev
```