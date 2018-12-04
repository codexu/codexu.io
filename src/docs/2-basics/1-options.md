# 配置

默认情况下并不需要改变配置文件`root/build/config.json`，如果你想修改某项配置可以在这里修改。

#### 服务端口(port)

通过修改 port，改变 devServer 端口号。

#### 布局(isRem)

是否开启 Rem 布局，如果 create 时选择了 true ，会自动在 plugins 中安装 hotcss.js ，如果此时取消建议再 plugin 中删除 hotcss.js 。

#### 图片压缩(imagemin)

由于压缩图片插件体积很大，严重影响项目构建的时间，所以默认状态下x-build是不开启图片压缩功能的，但通过改变` ./build/config.json `中的` imagemin `属性，设置为ture，即可开启打包时压缩图片功能。

安装插件：

```
  $ yarn add -D imagemin-webpack-plugin
```

#### 插件(plugins)

为了减少http请求，x-build会将插件打包在 bundle.js，如果你想安装某个插件，并希望打包在一起，添加在此处。

#### 文件(files)

文件同样会被打包在 bundle.js 中，一般会将入口文件写在此处，如果不想通过import的方式引入你的文件，也可以添加在此处。