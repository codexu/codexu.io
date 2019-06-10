# 开发模式

```
**[terminal]
**[command npm run serve]
```

- 启动一个开发服务器 (基于 webpack-dev-server) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。

- 开发模式下，css 并没有在 bundle 中分离出来，在模拟正常网速时，由于 js 文件没有下载完毕，DOM 可能会没有样式就显出出来，这点无需担心，在生产模式下会解决这个问题。

# 生产模式

```
**[terminal]
**[command npm run build]
```

- webpack 将所有具有依赖关系的文件进行打包，输出在 dist/ 目录下。

- 从 bundle 中提取 css 到单独的文件。

- 小于 8kb 的图片资源会以 base64 形式打包在文件中。

- 所有的静态资源命名将附带 hash (缓存)。