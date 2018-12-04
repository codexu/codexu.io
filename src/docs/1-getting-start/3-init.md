## 创建一个新项目

![](https://ws4.sinaimg.cn/large/006tNbRwly1fxunsqr965j31bq0sok1v.jpg)

通过以下指令创建一个新项目：

```
  $ x-build create [name]
```

> #### ⚠️ 版本检测

> 为了保证程序的正常运行，v1.3.10起会进行版本检测，强制更新到最新版本才可以使用！


### 参数

| 参数 | 说明 |
| - | - |
| -n, noversion | 忽略版本检测 |
| -q, quick | 快速生成项目, 安装优先级 yarn > cnpm > npm<br>初始化的项目不具备css预处理器和REM布局功能。 |