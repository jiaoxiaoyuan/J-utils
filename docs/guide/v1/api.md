# 早期封装，已弃用

#### 引入

```bash
import utils from '@jiaoxiaoyuan/j-utils'
```


#### 调用

utils.方法名

### commonjs

#### 引入

```bash
let utils = require('@jiaoxiaoyuan/j-utils')
```

#### 调用

utils.方法名



| 方法名                             | 参数                                                                                    | 说明                                    |
| ---------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------- |
| __random(min,max)                  | min：起始随机数 ，max：结束随机数                                                       | 生成随机数                              |
| __containsElement(arr, val)        | arr：原数组 ， val：判断元素                                                            | 判断数组中是否存在某元素                |
| __sort(arr, type)                  | arr： 排序数组，type 1：从小到大 2：从大到小 3：随机                                    | 数组排序                                |
| __formArray(ary)                   | ary：目标数组                                                                           | 将类数组转换为数组                      |
| __max(arr)                         | arr：目标数组                                                                           | 普通一维数组中的最大值（成员：Number）  |
| __min(arr)                         | arr：目标数组                                                                           | 普通一维数组中的最小值（成员：Number）  |
| __sum(arr)                         | arr：目标数组                                                                           | 一维数组求和（成员：Number类型）        |
| __average(arr)                     | arr：目标数组                                                                           | 求一维数组平均值成员：Number类型        |
| __trim(str, type)                  | str：目标字符串，type: 1-所有空格 2-前后空格 3-前空格 4-后空格                          | 去除空格                                |
| __changeCase(str, type)            | str：目标字符串，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写 | 字符转换                                |
| __getDate(type)                    | type：month 到月、day到日，hour到时分秒                                                 | 获取日期或者具体时间                    |
| __formatterDate(date)              | date：标准时间（2021-12-25T05:27:30.823Z）                                              | 标准时间格式化                          |
| __filterymd(date)                  | data： 2021-12-25 13:27:30 时间格式                                                     | 标准时间截取 年 月 日                   |
| __formateSecond(value)             | value：秒                                                                               | 格式化秒为 时分秒                       |
| __formatDate(date)                 | date：标准时间（2021-12-25T05:32:25.342Z）                                              | 标准日期格式化为：yy-mm-dd              |
| __judgeEndDays(val)                | val：年月（2021-12）                                                                    | 某月第一天到最后一天的时间段            |
| __besExtract(date, param)          | date：目标处理数据 param：按照整10、100…等取整                                          | 将非整10、100，…转为整10、100‘…         |
| __hiddenMidPhone(phone)            | phone：字符串11位电话号码                                                               | 隐藏电话号码中间4位                     |
| __rulesPhone(phone)                | phone：11电话号码                                                                       | 验证的手机号码                          |
| __combine(baseUrl, url)            | baseUrl：公用地址 url：api接口                                                          | 处理baseUrl+url连接处'/'问题            |
| __timestampToTime(time)            | time：10位或者13位时间戳                                                                | 格式化时间戳为标准时间格式              |
| __getParam(param)                  | param：键名                                                                             | 获取浏览器地址栏url参数                 |
| __setCookie(key,value)             | key：键名 value：键值                                                                   | 存储cookie                              |
| __getCookie(key)                   | key：键名                                                                               | 获取cookie                              |
| __setStorage(key,value)            | key：键名 value：键值                                                                   | 本地缓存中存储内容                      |
| __getStorage(key)                  | key：键名                                                                               | 获取localStorage中的内容                |
| __delNullLeafNode(list,key)        | list：treeList key：自定义键名                                                          | 删除树结构中key(自定义键名)不存在的节点 |
| __jsonUnique(arr,key)              | arr：json数组对象 key：自定义键名                                                       | json数组对象根据自定义键名去重          |
| __arrUnique(arr)                   | arr：数组                                                                               | 普通数组去重                            |
| __arrFlatten(arr)                  | arr：数组                                                                               | 普通数组扁平化函数                      |
| __treeToArray(tree,childs,arrAttr) | tree：树形结构数据，childs：自定义key，arrAttr 自定义需要返回的字段数组                 | 树形结构数据扁平化                      |
| __arrToTree(data)                  | data：带pid的数组                                                                       | 线性数组树结构化：通过pid               |
| __deepClone(source)                | source：引用类型数据                                                                    | 深拷贝                                  |
| __arrayUnion(arr1, arr2)           | arr1：数组1 arr2：数组2                                                                 | 返回数组并集：都是一维数组              |
| __arrayDiff(arr1, arr2)            | arr1：数组1 arr2：数组2                                                                 | 返回数组差集：都是一维数组              |
| __arrayIntersect(arr1, arr2)       | arr1：数组1 arr2：数组2                                                                 | 返回数组交集：都是一维数组              |

新增方法

| 方法名               | 参数                                                  | 说明               |
| -------------------- | ----------------------------------------------------- | ------------------ |
| __getNowTimestamp(n) | n（Number）：10 \|\| 13 位时间戳，否则返回：undefined | 获取当前系统时间戳 |
| __isType(data)       | data：需要检测数据类型的数据，返回具体的小写类型名称  | 判断数据类型       |
| __formatMoney(n)     | n：需要处理的数据，返回字符串                         | 千分位（,）分隔    |

新增方法：2022-02-26

| 方法名                                      | 参数                                                                                                                  | 说明                                                  |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| __getTimeToStamp(d)                         | d：YY-MM:DD HH:MM:SS格式日期                                                                                          | YY-MM:DD HH:MM:SS 转为毫秒时间戳                      |
| __dateComputed(curDate, endDate, type)      | curDate：当前时间、endDate：结束时间，type:返回格式（ year: 返回 year、month、day、hour、minute、second、不传全部返回 | YY-MM:DD HH:MM:SS - YY-MM:DD HH:MM:SS（两个日期相减） |
| __findNode(tree, func, path, dataStructure) | tree 树结构数据、func 方法、path []、dataStructure 自定义返回的数据对象、结果返回所有父节点及本身节点组成的一维数组   | 通过子节点的id查找他的所有父节点                      |
