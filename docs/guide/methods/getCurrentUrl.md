

# 获取当前页面的URL

## 语法


```js
import { getCurrentUrl } from '@jiaoxiaoyuan/j-utils';
const result = getCurrentUrl()
```

## 参数

- `null`

## 返回值

**String** ： 当前页面的 `URL` 。

## 源码


```js
const getCurrentUrl = () => window.location.href;
```

## 例子


```js
import { getCurrentUrl } from '@jiaoxiaoyuan/j-utils';
const result = getCurrentUrl()
console.log(result) //=>http://warblerjs.duwanyu.com
```