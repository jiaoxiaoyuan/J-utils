// v1版本
import {
    __random,
    __containsElement,
    __sort,
    __formArray,
    __max,
    __sum,
    __average,
    __trim,
    __changeCase,
    __getDate,
    __formatterDate,
    __filterymd,
    __formateSecond,
    __formatDate,
    __judgeEndDays,
    __besExtract,
    __handleMinus,
    __hiddenMidPhone,
    __rulesPhone,
    __combine,
    __timestampToTime,
    __judgTrueAndFalse,
    charAtFindStr,
    __getParam,
    __setCookie,
    __getCookie,
    __setStorage,
    __getStorage,
    __delNullLeafNode,
    __jsonUnique,
    __arrUnique,
    __arrFlatten,
    __treeToArray,
    __arrToTree,
    __deepClone,
    __arrayUnion,
    __arrayIntersect,
    __arrayDiff,
    __formatMoney,
    __camelCaseTo,
    __toCamelCase,
    __getNowTimestamp,
    __getTimeToStamp,
    __dateComputed,
    __diffTime,
    __isType,
    __findNode
} from './v1/tools';

/**
 * V2重构与新增v1工具库
 */

// 数组方法
import * as $array from './modules/array/index';

// boolean值方法
import * as $boolean from './modules/boolean/index';

// 日期方法
import * as $date from './modules/date/index';

// 函数方法
import * as $function from './modules/function/index';

// 常用功能方法
import * as $methods from './modules/methods/index';

// 数字方法
import * as $number from './modules/number/index';

// 对象方法
import * as $object from './modules/object/index';

// 正则
import * as $reg from './modules/reg/index';

// 字符串方法
import * as $string from './modules/string/index';

// 设备
import * as $devide from './modules/devide/index';

const jutils = {
    __random,
    __containsElement,
    __sort,
    __formArray,
    __max,
    __sum,
    __average,
    __trim,
    __changeCase,
    __getDate,
    __formatterDate,
    __filterymd,
    __formateSecond,
    __formatDate,
    __judgeEndDays,
    __besExtract,
    __handleMinus,
    __hiddenMidPhone,
    __rulesPhone,
    __combine,
    __timestampToTime,
    __judgTrueAndFalse,
    charAtFindStr,
    __getParam,
    __setCookie,
    __getCookie,
    __setStorage,
    __getStorage,
    __delNullLeafNode,
    __jsonUnique,
    __arrUnique,
    __arrFlatten,
    __treeToArray,
    __arrToTree,
    __deepClone,
    __arrayUnion,
    __arrayIntersect,
    __arrayDiff,
    __formatMoney,
    __camelCaseTo,
    __toCamelCase,
    __getNowTimestamp,
    __getTimeToStamp,
    __dateComputed,
    __diffTime,
    __isType,
    __findNode,
    ...$array,
    ...$boolean,
    ...$date,
    ...$function,
    ...$methods,
    ...$number,
    ...$object,
    ...$reg,
    ...$string
};
export default jutils;

/**
 * 按需导入、导出
 */

// 数组
import {
    // 去重
    arrWithoutDupli,
    arrObjectWithoutDupli,
    // 检测
    isAllPass,
    // 过滤
    filterUnique,
    filterNoUnique,
    // 查找
    findObjectInArray,
    minArray,
    maxArray,
    arrDifference,
    arrSimilarity,
    getDifferenceFrom,
    // 计算
    countFrequency,
    countObjFrequency,
    getAverageBy,
    getTotal,
    getTotalBy,
    // 移除
    arrRemoveEle,
    arrRemoveFunEle,
    arrRemoveObjEle,
    // 其他
    shuffleArr
} from './modules/array/index';
// 日期
// 数字
// 字符串
// 正则
// 函数
// 对象
// 布尔值
// 设备
// 常用方法

export {
    // 去重
    arrWithoutDupli,
    arrObjectWithoutDupli,
    // 检测
    isAllPass,
    // 过滤
    filterUnique,
    filterNoUnique,
    // 查找
    findObjectInArray,
    minArray,
    maxArray,
    arrDifference,
    arrSimilarity,
    getDifferenceFrom,
    // 计算
    countFrequency,
    countObjFrequency,
    getAverageBy,
    getTotal,
    getTotalBy,
    // 移除
    arrRemoveEle,
    arrRemoveFunEle,
    arrRemoveObjEle,
    // 其他
    shuffleArr
};
