
# 滚动到页面顶部

## 语法


```js
import { scrollToTop } from 'jtoolset';
scrollToTop()
```

## 参数

- `null`

## 返回值

- `void`

## 源码


```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## 例子


```js
import { scrollToTop } from 'jtoolset';
scrollToTop()
```