# 4个简单的函数，更舒服的运用 async/await 处理异步请求

作者：[codexu](https://github.com/codexu)

___

Async/await 是 ES7 中的新特性，相信大家或多或少的已经应用在自己的项目或 Demo 中，它可以使异步代码像同步代码一样，配合 Promise 解决了回调地狱的问题，的确它给我们带来了很多方便的地方，但是在 async/await 中如何来处理错误呢？

## 在 async/await 中处理错误

在发送异步请求时，我们难免会遇到请求错误，在 Promise 中我们使用 .catch() 捕获错误，在 async/await 中，相信大家都会答得出使用 try/catch 来捕获错误。

但是...

有没有跟我一样的人，尽量不允许代码中出现 try/catch ？有种污染代码的感觉。

## await-to-js 带来的灵感

[await-to-js](https://github.com/scopsy/await-to-js) 通过对 Promise 进行了一层封装，返回一个数组 [err, data]，await 执行函数可以等待异步方法的结束，err 如果不为 null，则判断为捕获异常。他的代码其实非常少，使用 ts 写的，但是就是这么简单的代码，却起到了大作用。

源码：

``` typescript
export function to<T, U = any>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>(err => {
      if (errorExt) {
        Object.assign(err, errorExt)
      }

      return [err, undefined]
    })
}

export default to
```

Demo：

``` javascript
import to from 'await-to-js';
async function asyncFunctionWithThrow() {
  const [err, user] = await to(UserModel.findById(1));
  if (!user) throw new Error('User not found');
}
```

## 扩展

有了 await-to-js 的灵感，我打算用这种方式，来解决一直困扰我的4个场景。

- 按序执行(demoTo)
- 全部执行完毕或出现一条报错立即继续其他代码 (demoAll)
- 有一条成功或失败立即继续其他代码 (demoRace)
- 不论成功失败，全部执行完毕后继续其他代码 (demoAllSettled)

解决这 4 个问题场景的函数：

- 参数 request: 一个 Promise 对象
- 参数 requests: 一个 Promise 对象数组

```javascript
function to (request) {
  return request.then((res) => [null, res]).catch(err => [err, null]);
}
function all (requests) {
  return Promise.all(requests).then((values) => [null, values]).catch(err => [err, null]);
}
function race (requests) {
  return Promise.race(requests).then((value) => [null, value]).catch(err => [err, null]);
}
function allSettled (requests) {
  return Promise.allSettled(requests);
}
```

使用[jsfiddle](https://jsfiddle.net/codexu/17urbow5/1/)演示代码，打开控制台看输出结果，验证这 4 个函数的妙用：

Demo 说明：

假设有三台设备需要请求他们的状态，这里每个设备请求所需要的时间不尽相同(使用 setTimeout 模拟)，则会出现上述的 4 中应用场景。

- DeviceA (请求时间1秒，请求**成功**)
- DeviceB (请求时间2秒，请求**失败或成功**)
- DeviceC (请求时间3秒，请求**成功**)

```javascript
// 时间
let time = 0;
setInterval(() => time++, 1000);

function getDeviceAStatus() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('DeviceA: on');
    }, 1000);
  });
}
function getDeviceBStatus() {
  // 请求失败
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Connection fail'));
    }, 2000);
  });
  // 请求成功
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve('DeviceB: on');
  //   }, 2000);
  // });
}
function getDeviceCStatus() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('DeviceC: on');
    }, 3000);
  });
}

async function demoTo () {
  console.log('-------------------------');
  console.log(`【 Time: ${time}s 】 Demo to begin`);
  let err, res1, res2, res3;
  [err, res1] = await to(getDeviceAStatus());
  if (err) {
    console.log(`【 Time: ${time}s 】 ${err}`);
  } else {
    console.log(`【 Time: ${time}s 】 Data: ${res1}`);
  }
  [err, res2] = await to(getDeviceBStatus());
  if (err) {
    console.log(`【 Time: ${time}s 】 ${err}`);
  } else {
    console.log(`【 Time: ${time}s 】 Data: ${res2}`);
  }
  [err, res3] = await to(getDeviceCStatus());
  if (err) {
    console.log(`【 Time: ${time}s 】 ${err}`);
  } else {
    console.log(`【 Time: ${time}s 】 Data: ${res3}`);
  }
  console.log(`【 Time: ${time}s 】 Demo to end`);
  return Promise.resolve();
}

async function demoAll () {
  console.log('-------------------------');
  console.log(`【 Time: ${time}s 】 Demo all begin`);
  const [err, values] = await all([getDeviceAStatus(), getDeviceBStatus(), getDeviceCStatus()]);
  if (err) {
    console.log(`【 Time: ${time}s 】 ${err}`);
  } else {
    console.log(`【 Time: ${time}s 】 Data: `, values);
  }
  console.log(`【 Time: ${time}s 】 Demo all end`);
  return Promise.resolve();
}

async function demoRace () {
  console.log('-------------------------');
  console.log(`【 Time: ${time}s 】 Demo race begin`);
  const [err, value] = await race([getDeviceAStatus(), getDeviceBStatus(), getDeviceCStatus()]);
  if (err) {
    console.log(`【 Time: ${time}s 】 ${err}`);
  } else {
    console.log(`【 Time: ${time}s 】 Data: ${value}`);
  }
  console.log(`【 Time: ${time}s 】 Demo race end`);
  return Promise.resolve();
}

async function demoAllSettled () {
  console.log('-------------------------');
  console.log(`【 Time: ${time}s 】 Demo allSettled begin`);
  const values = await allSettled([getDeviceAStatus(), getDeviceBStatus(), getDeviceCStatus()]);
  console.log(`【 Time: ${time}s 】 Data: `, values);
  console.log(`【 Time: ${time}s 】 Demo allSettled end`);
  return Promise.resolve();
}

(async function () {
  await demoTo(); time = 0;
  await demoAll(); time = 0;
  await demoRace(); time = 0;
  await demoAllSettled();
})();
```

请求 DeviceB 失败的情况：

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a4euctkoj30jw0l0acm.jpg)

请求 DeviceB 成功的情况：

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a4bygwzcj30x40l0dix.jpg)

运行结束后你会发现，全部按照意愿去执行了，代码看起来也十分简洁。
