# 配置

默认情况下并不需要改变配置文件`root/build/config.json`，如果你想修改某项配置可以在这里修改。

## port

`8080` <font color=MediumSeaGreen>&lt;Number&gt;</font>

**端口：**改变 devServer 端口号，默认为 8080 端口。

## isRem

`false` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

**布局：**如果初始化时选择了 true，会自动下载 hotcss.js，并在 push 在 plugins 中(会将hotcss打包在bundle.js中)。

## eslint

`false` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

**代码检测：**如果初始化时选择了 true，会开启代码检测，可设置为 false 关闭 ESLint。

## imagemin

`false` <font color=MediumSeaGreen>&lt;boolean&gt;</font>

**图片压缩：**由于压缩图片plugin很大，严重影响项目构建的时间，所以默认状态下x-build是不具备压缩图片的功能，但通过改变` ./build/config.json `中的` imagemin `属性，设置为ture，即可开启打包时压缩图片功能。

需要安装插件：

```
  $ yarn add -D imagemin-webpack-plugin
```

## plugins

`["normalize.css"]` <font color=MediumSeaGreen>&lt;Array&gt;</font>

**插件：**为了减少http请求，x-build会将插件打包在 bundle.js，如果你想安装某个插件，并希望打包在一起，添加在此处。

## files

`["./src/script/index.js"]` <font color=MediumSeaGreen>&lt;Array&gt;</font>

**文件：**文件同样会被打包在 bundle.js 中，一般会将入口文件写在此处，如果不想通过import的方式引入你的文件，也可以添加在此处。