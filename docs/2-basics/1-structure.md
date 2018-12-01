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

- **babel** ( root/.babelrc ): 支持ES7语法(async、await)。

- **editorconfig** ( root/.editorconfig ): 编辑器配置规范，使用空格(2)缩紧，utf-8编码等。

- **eslint** ( root/eslintrc.js ): Javascript代码规范。

- **gitignore** ( root/.gitignore ): git忽略文件及文件夹。

- **postcss** ( root/postcss.config.js ): 开启autoprefixer()。

---

# 生产模式

目录结构(root/dist):

```
  .
  ├── index.html
  ├── bundle.[hash:8].css
  ├── bundle.[hash:8].js
  └── assets/ # 静态资源
```