## 快速开始

通过以下指令快速创建一个新项目：

```
**[terminal]
**[command x-build create [name] -q]
```

> [name]: 你要创建的项目目录名称；
> 参数 -q: 快速创建项目。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g3yg6q07lij31ae0u0aiy.jpg)

此过程会拷贝模板到当前目录的`/[name]`下，然后自动安装本依赖（此过程比较耗时推荐安装 yarn ）：

![](http://ww1.sinaimg.cn/large/006tNc79ly1g3yg6t66kdj31ae0u0wob.jpg)

安装结束后会有下一步提示，进入创建好的目录下:

![](http://ww1.sinaimg.cn/large/006tNc79ly1g3yg6ukdy0j31ae0u047w.jpg)

进入创建好的目录，通过 npm 或 yarn 启动 webpack devServer:

```
**[terminal]
**[command cd [name] && npm run serve ]
```

![](http://ww3.sinaimg.cn/large/006tNc79ly1g3yg86s170j31ae0u0dpi.jpg)

此时打开 http://localhost:8080 如果看到 x-build 和版本号，说明你的项目已经正常运行起来了。

快速创建的项目只提供了 webpack 提供的[基本功能](https://webpack.docschina.org/concepts/mode/)，想体验更多的功能请继续学习下一章节。