# api请求接口

当有大量的接口时，使用 x-build 提供的自动加载 api 模块将节省大量操作：

## api目录

api/index.js 为 api 主入口文件，使用 webpack 提供的 require.context 方法，将 api/ 内的所有文件（包括子路径）自动加载，并通过 ES6 导出一个对象。

## 使用方式

假设创建一个 GET 请求，在 api/ 目录下创建 getUser.js，在此我们使用 axios 举例：

```JavaScript 
// getUser.js
import axios from 'axios';

export function () {
  return axios.get('...')
}
```

此时导出的文件会被 index.js 获取到，并且会以文件名作为对象内的 key 导出。

## 使用接口

在使用接口的文件中：

```JavaScript
import api from './api'
api.getUser()
```