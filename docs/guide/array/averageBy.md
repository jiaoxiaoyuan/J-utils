

# 计算对象数组指定健的平均值

## 语法

```js
import { getAverageBy } from '@jiaoxiaoyuan/j-utils'
const result = getAverageBy(arr, key)
```

## 参数

- `arr` (**Array**) ： 需要计算平均值的数组。
- `key` (**String**) ： 需要计算平均值的 `key`。


## 返回值

**Number** ： 指定 `key` 的平均值。


## 源码

```js
const getAverageBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0) / arr.length;
```

## 例子


```js
import { getAverageBy } from '@jiaoxiaoyuan/j-utils'
const fruits = [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 4},
    {name: 'Grapes', quantity: 6},
];
const result = getAverageBy(fruits,'quantity')
console.log(result) //=> 5.4
```
