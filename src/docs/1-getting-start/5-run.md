### 开发模式

执行开发模式：

```
  $ yarn serve
  # or
  $ npm run serve
```

➡️ 启动 sourse-map 追踪到错误和警告在源代码中的原始位置。

➡️ 启动一个开发服务器 (基于 webpack-dev-server) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。

⚠️ pug 文件修改时请手动刷新浏览器，只有样式和JavaScript可以实现异步刷新。

⚠️ 开发模式下，css 并没有在 bundle 中分离出来，在模拟正常网速时，由于 js 文件没有下载完毕，DOM 可能会没有样式就显出出来，这点无需担心，在生产模式下会解决这个问题。

⚠️ ESLint 在新手开发中程序会经常报错（不要慌），导致这个原因主要是书写的代码并不规范，复制报错信息，在 **.eslintrc.js** 文件中已经作出中文注释，查找并修改你的代码！

⚠️ 引用静态资源时，由于是用 webpack 打包，所以需要通过 require(..) 的方式引用，请阅读[特殊语法](../2-basics/2-special.md)。

### 生产模式

执行生产模式：

```
  $ yarn build
  # or
  $ npm run build
```

➡️ webpack 将所有具有依赖关系的文件进行打包，输出在 dist/ 目录下。

➡️ 从 bundle 中提取 css 到单独的文件。

➡️ 小于 8kb 的图片资源会以 base64 形式打包在文件中。

➡️ 所有的静态资源命名将附带 hash (缓存)。

➡️ 如果你开启了图片压缩功能，图片会被压缩，此项会非常耗时，请耐心等待。

⚠️ 默认开启了 autoprefixer ，你只使用无前缀的 CSS 规则即可。