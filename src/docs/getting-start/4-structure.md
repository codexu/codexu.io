# 开发环境

目录结构(root/):

```
  .
  ├── index.pug
  ├── node_modules/
  |   └── ...
  └── src/ # 源码目录
      ├── assets/ # 静态资源
      ├── scripts/
      |   └── index.js # JavaScript主入口文件
      ├── styles/
      |   ├── x-build.css # x-build欢迎界面样式（删除即可）
      |   └── index.[css\scss\less\styl] # 样式入口文件
      └── app.pug # html正文
```

## 入口文件

- **PUG**：使用 pug 模板引擎，入口文件为 root/index.pug，它引入了 root/src/app.pug。

- **HTML**：未使用 pug 模板引擎，入口文件为 root/src/index.html。

- **CSS**：不论是否使用 CSS 预处理器，入口文件始终位于 root/src/styles/index.[css\scss\less\styl]，文件类型取决于你创建时的选择。

- **JS**: root/src/scripts/index.js 是唯一的 js 入口文件，它并不需要 impot css 入口文件，这一步 X-BUILD 已经为你做好。

## assets 静态资源目录

默认状态下X-BUILD只为你创建了assets/images目录存放你的图片，如果你要使用其他静态资源：

- **字体**：创建目录 assets/font，支持 woff、eot、ttf、otf 格式。

- **视频**：创建目录 static/media/，支持mp4、webm、ogg、mp3、wav、flac、aac 格式。

# 生产环境

目录结构(root/dist):

```
  .
  ├── index.html
  ├── bundle.[hash:8].css
  ├── bundle.[hash:8].js
  └── assets/ # 静态资源
```