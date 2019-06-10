# 目录结构

```
  .
  ├── node_modules/
  └── src/ # 源码目录
      ├── assets/ # 静态资源
      ├── api/ # AJAX请求目录
      ├── scripts/
      |   └── index.js # JavaScript主入口文件
      ├── styles/
      |   └── index.[css\scss\less\styl] # 样式入口文件
      └── index.html # html正文
```

## 入口文件

**src/index.[html/pug]**：HTML 入口文件。

**src/scripts/index.js**：JavaScript 入口文件。

**src/styles/index.[css/scss/less/styl]**: CSS 入口文件，此文件无需在 JS 中引入。

## assets 静态资源目录

**图片**：创建目录 assets/font，支持 png|jpe?g|gif|svg|webp 格式。

**字体**：创建目录 assets/font，支持 woff|eot|ttf|otf 格式。

**视频**：创建目录 static/media/，支持mp4|webm|ogg|mp3|wav|flac|aac 格式。