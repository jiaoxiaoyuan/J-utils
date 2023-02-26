# jtoolset


这是一个web端常用的js工具方法函数库

文档说明
[https://jtoolset-docs.vercel.app/](https://jtoolset-docs.vercel.app/)




## 安装

### npm

```bash
 npm i jtoolset --save
```

### yarn

```bash
yarn add jtoolset --save
```

### pnpm

```bash
pnpm install jtoolset --save
```

## 升级版本

npm安装指定版本: npm i jtoolset@1.0.3 --save

npm升级指定版本的包：npm update jtoolset --save

最新版本的包：npm i jtoolset --save

使⽤npm查看包的版本信息：npm list jtoolset

## 使用

支持 esm、commonjs、requirejs 语法引入

### esm

#### 引入

```bash
import utils from 'jtoolset'
或
import utils from 'jtoolset/lib/jtoolset-min'
```

或者

```bash
import { 方法名 } from 'jtoolset'
或
import { 方法名 } from 'jtoolset/lib/jtoolset-min'
```

#### 调用

utils.方法名

### commonjs

#### 引入

```bash
let utils = require('jtoolset')
或
let utils = require('jtoolset/lib/jtoolset-min')
```

#### 调用

utils.方法名


### 2023.02.26 新增
    arrWithoutDupli,
    arrObjectWithoutDupli,
    isAllPass,
    filterUnique,
    filterNoUnique,
    findObjectInArray,
    minArray,
    maxArray,
    arrDifference,
    arrSimilarity,
    getDifferenceFrom,
    countFrequency,
    countObjFrequency,
    getAverageBy,
    getTotal,
    getTotalBy,
    arrRemoveEle,
    arrRemoveFunEle,
    shuffleArr,
    isToday,
    isTomorrow,
    isYesterday,
    isScheduled,
    dayOfYear,
    getDayDiff,
    isEvenNumber,
    isDivisible,
    getAverage,
    randomInRange,
    randomIntegerInRange,
    browser