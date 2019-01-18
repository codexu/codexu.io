## 创建一个项目

![](https://ws1.sinaimg.cn/large/006tNc79ly1fzakm551gsj31ao0re7dn.jpg)

通过以下指令创建一个新项目：

```
**[terminal]
**[command x-build create [name]]
```
## 选项

### ESLint

ESLint 是一个用来识别 ECMAScript 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格，[详解>>](../others/eslint.md)

### REM布局

REM布局方案，采用 hotcss 获取设备信息（ dpr、尺寸等）并设置根节点 font-size，px2rem-loader会帮你将px转化为rem，从而实现自适应布局，例：

```
  width: 750px; => width: 16rem;
```

默认为`750px`设计稿开发，如果设计稿为其他尺寸，修改 ./build/lib/isRem.js 文件内的 remUnit 参数。

### PUG模板引擎

Pug 是一种用于编写 HTML 的干净、空格敏感的语法，通过缩进的方式进行书写，[参考文档>>](https://pugjs.org/zh-cn/api/getting-started.html)

使用 [pug-loader](https://github.com/pugjs/pug-loader) 解析 pug / jade 文件，需要使用 require() 解析静态资源，例：

```pug
  img(src=require('@/assets/images/logo.png'))
```

与此同时，x-build-cli 会在根目录下创建 `index.pug`、src 目录下创建 `app.pug`。

### CSS预处理器

支持常用的三种预处理器(sass、less、stylus)，根据你的选择会安装相应的预处理器与 loader。

### 插件

插件是 x-build 的支柱功能，致力于协助开发者减少业务逻辑开发、加快项目开发，根据不同的项目需求，搭配不同的插件，事半功倍。

## 参数

| 参数 | 说明 |
| - | - |
| -q, quick | 跳过选项快速初始化一个项目（无 ESLint、CSS预处理器、REM布局、插件）。 |
| -n, noversion | ⚠️ 忽略版本检测，可能会影响项目正常启动。 |