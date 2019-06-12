# 配置

默认情况下，在使用 `create` 指令后，会根据选项在跟目录下自动生成配置文件 `xbuild.config.js` ，更改此文件可以对项目做更多的个性会配置。

### port

<font color=MediumSeaGreen>&lt;Number&gt;</font> <font color=DarkGray>8080</font>

端口：改变 devServer 端口号，默认为 8080 端口。

### open

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>false</font>

**浏览器：** 自动使用默认浏览器运行项目

### entry

<font color=MediumSeaGreen>&lt;Array&gt;</font>

**入口文件：** 默认设置了 index.js 和 index.[css/scss/less/styl] 的入口文件。

```javascript
// example:
entry: [
  './src/scripts/index.js',
  './src/styles/index.[css/scss/less/styl]'
]
```

### eslint

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>自定义</font>

**代码检测：**如果初始化时选择了 true，会开启代码检测，可设置为 false 关闭 ESLint。

### babel

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>自定义</font>

**编译器：**它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。

### mobileLayout

<font color=MediumSeaGreen>&lt;boolean&gt;</font> <font color=DarkGray>自定义</font>

**自适应布局：**是否使用自适应布局。

### designWidth

<font color=MediumSeaGreen>&lt;Number&gt;</font> <font color=DarkGray>750</font>

**设计稿尺寸：**通常指设计稿的宽度，单位为像素(px)。

### base64

<font color=MediumSeaGreen>&lt;Number&gt;</font> <font color=DarkGray>8 * 1024</font>

**静态资源：**设定静态资源使用 base64 打包的大小，默认为 8kb。

### proxy

<font color=MediumSeaGreen>&lt;Object&gt;</font>

**跨域：**当遇到跨域问题时，可以通过此项配置，配置方法参考[webpack-proxy](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)。

```javascript
// example:
proxy: {
  '/api': {
    target: '#',
    pathRewrite: {
      '^/api': ''
    },
    changeOrigin: true,
    secure: false
  }
}
```

