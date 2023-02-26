# 获得一个随机的布尔值

## 语法

```js
import { randomBoolean } from 'jtoolset';
const result = randomBoolean();
```

## 参数

- `null`

## 返回值

**Boolean** ： 一个随机的布尔值。

## 源码

```js
const randomBoolean = () => Math.random() >= 0.5;
```

## 例子

```js
import { randomBoolean } from 'jtoolset';
const result = randomBoolean();
console.log(result); //=> true
```