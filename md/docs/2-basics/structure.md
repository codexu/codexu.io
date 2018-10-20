# 目录结构

#### 开发模式

```
  .
  ├── .eslintrc.js # eslint配置，当程序报错时，可以参考注释
  ├── index.pug # html入口文件
  ├── node_modules/
  |   └── ...
  └── src/ # 源码目录
      ├── assets/ # 静态资源
      ├── scripts/
      |   └── index.js
      ├── styles/
      |   ├── config.styl # 用于字体、颜色等配置
      |   ├── mixins.styl # 一些常用的css布局函数
      |   └── index.styl
      └── app.pug # html正文
```

#### 生产模式

```
  .
  ├── index.html
  ├── bundle.[hash:8].css
  ├── bundle.[hash:8].js
  └── assets/ # 静态资源
```