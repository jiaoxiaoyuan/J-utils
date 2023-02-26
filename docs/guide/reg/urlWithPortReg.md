

# 必须带端口号的网址

验证网址，必须带有端口号，支持`IP`。

## 语法

```js
import { urlWithPortReg } from '@jiaoxiaoyuan/j-utils';
const result = urlWithPortReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const urlWithPortReg = (value) => {
  const reg = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;
  return reg.test(value);
};
```

## 例子

```js
import { urlWithPortReg } from '@jiaoxiaoyuan/j-utils';
const result1 = urlWithPortReg('http://warblerjs.duwanyu.com')
const result2 = urlWithPortReg('http://warblerjs.duwanyu.com:3000')
const result3 = urlWithPortReg('https://warblerjs.duwanyu.com:3000')

console.log(result1) // false
console.log(result2) // true
console.log(result3) // true
```
