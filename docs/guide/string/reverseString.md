

# 反转字符串

## 语法

```js
import { reverseString } from 'jtoolset';
const result = reverseString(str);
```

## 参数

- `str` (**String**) ： 需要反转的字符串 。

## 返回值

**String** ： 返回反转后的字符串。

## 源码

```js
const reverseString = (str) => str.split('').reverse().join('');
```

## 例子

```js
import { reverseString } from 'jtoolset';
const initStr = 'hello,world';
const finallyStr = reverseString(initStr);
console.log(finallyStr); //=> dlrow,olleh
```