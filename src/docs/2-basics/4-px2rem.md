### 自适应解决方案（移动端）

X-BUILD 采用 `px2rem` + `hotcss` 的布局方案，css数值可以完全与设计稿保持一直。

默认为`750px`设计稿开发，如果设计稿为其他尺寸，修改 ./build/lib/isRem.js 文件内的 remUnit 参数：

➡️ 设计稿640px : remUnit（40）

➡️ 设计稿750px : remUnit（46.875）

➡️ 设计稿818px : remUnit（51.75）

#### ⚠️ 其他尺寸

> 1、创建一个 X-BUILD 项目，创建时确保移动端选项选为 true。

> 2、使用 chrome 浏览器开发者工具，切换到移动端开发模式，选择或设置一个与设计稿一致的设备。

> 3、此时 hotcss 已经为 HTML 节点设置字体大小，这个值就是 **remUnit**。

### PxCook

[PxCook](http://www.fancynode.com.cn/pxcook) 高效易用的自动标注工具, 生成前端代码, 设计研发协作利器，这个工具可以直接将PSD设计稿拖入，帮你标记每个图片或文字的信息。

![](https://ws1.sinaimg.cn/large/006tNbRwly1fxbipw4gqrj31540u0n5x.jpg)