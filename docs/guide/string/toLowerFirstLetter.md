

# 将字符串的首字母转换成小写字母

## 语法


```js
import { toLowerFirstLetter } from 'jtoolset'
const result = toLowerFirstLetter(str)
```

## 参数

- `[first, ...rest]` (**String**) ： 需要将首字母转换成小写字母的字符串 。

## 返回值

**String** ： 将首字母转换成小写字母的字符串。

## 源码

```js
const toLowerFirstLetter = ([first, ...rest]) => first.toLowerCase() + rest.join('');
```

## 例子

```js
import { toLowerFirstLetter } from 'jtoolset'
const initStr = 'Hello,world'
const finallyStr = toLowerFirstLetter(initStr)
console.log(finallyStr) //=> 'hello,world'
```