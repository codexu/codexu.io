# 开发模式

目录结构(root/):

```
  .
  ├── index.pug
  ├── node_modules/
  |   └── ...
  └── src/ # 源码目录
  |   ├── assets/ # 静态资源
  |   ├── scripts/
  |   |   └── index.js # JavaScript主入口文件
  |   ├── styles/
  |   |   ├── x-build.css # x-build欢迎界面样式（删除即可）
  |   |   └── index.[scss\less\styl] # 样式入口文件
  |   └── app.pug # html正文
  └── build/ # webpack配置文件
      ├── lib/ # 配置项工具集
      ├── config.json # x-build参数配置
      ├── webpack.config.js
      ├── webpack.dev.js # 开发模式配置文件
      └── webpack.build.js # 生产模式配置文件
```

# 生产模式

目录结构(root/dist):

```
  .
  ├── index.html
  ├── bundle.[hash:8].css
  ├── bundle.[hash:8].js
  └── assets/ # 静态资源
```