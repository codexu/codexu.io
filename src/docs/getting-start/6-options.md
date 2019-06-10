# 配置

使用根目录下的 **xbuild.config.js** 文件，可以对项目做更多的个性会配置。

### port

`8080` <font color=MediumSeaGreen>&lt;Number&gt;</font>

**端口：**改变 devServer 端口号，默认为 8080 端口。

### open

`false` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

**浏览器：** 自动使用默认浏览器运行项目

### entry

<font color=MediumSeaGreen>&lt;Array&gt;</font>

```javascript
[
  './src/scripts/index.js',
  './src/styles/index.[css/scss/less/styl]'
]
```

**入口文件：** 默认设置了 index.js 和 index.[css/scss/less/styl] 的入口文件。

### eslint

<font color=MediumSeaGreen>&lt;boolean&gt;</font>

**代码检测：**如果初始化时选择了 true，会开启代码检测，可设置为 false 关闭 ESLint。

### babel

<font color=MediumSeaGreen>&lt;boolean&gt;</font>

**代码编译：**Babel 可以使用大部分浏览器未支持的语法。

### mobileLayout

<font color=MediumSeaGreen>&lt;boolean&gt;</font>

**自适应布局：**是否使用自适应布局。

### remUnit

<font color=MediumSeaGreen>&lt;boolean&gt;</font>

**自适应布局参数**

### base64

`8 * 1024`<font color=MediumSeaGreen>&lt;Number&gt;</font>

**静态资源：**设定静态资源使用 base64 打包的大小，默认为 8kb。

### proxy

<font color=MediumSeaGreen>&lt;Object&gt;</font>

```javascript
{
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

**跨域：**当遇到跨域问题时，可以通过此项配置，配置方法参考[webpack-proxy](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)。
