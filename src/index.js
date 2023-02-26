/**
 * @description webpack打包入口
 */

// array 数组 -去重

// -删除数组中的重复项
import arrWithoutDupli from './modules/array/duplicate/arrWithoutDupli';
// -删除对象数组中的重复元素
import arrObjectWithoutDupli from './modules/array/duplicate/arrObjectWithoutDupli';

// array 数组 - 检测
// -检测所有元素是否符合要求
import isAllPass from './modules/array/test/isAllPass';

// array 数组 - 过滤
// -过滤数组中的唯一值
import filterUnique from './modules/array/filter/filterUnique';
// -过滤数组中的非唯一值
import filterNoUnique from './modules/array/filter/filterNoUnique';

// array 数组 - 查找
// -根据对象的键值在数组中查找对象
import findObjectInArray from './modules/array/find/findObjectInArray';
// -获取数组中指定个数的最小元素
import minArray from './modules/array/find/minArray';
// -获取数组中指定个数的最大元素
import maxArray from './modules/array/find/maxArray';
// -获取两个数组之间不同的元素
import arrDifference from './modules/array/find/arrDifference';
// -获取两个数组之间相同的元素
import arrSimilarity from './modules/array/find/arrSimilarity';
// -获取数组二相对于数组一不同的元素
import getDifferenceFrom from './modules/array/find/getDifferenceFrom';

// array 数组 - 计算
// -计算数组中元素的出现次数
import countFrequency from './modules/array/calculation/countFrequency';
import countObjFrequency from './modules/array/calculation/countObjFrequency';
import getAverageBy from './modules/array/calculation/getAverageBy';
import getTotal from './modules/array/calculation/getTotal';
import getTotalBy from './modules/array/calculation/getTotalBy';

// array 数组 - 移除
// 根据元素值移除数组的元素
import arrRemoveEle from './modules/array/remove/arrRemoveEle';
import arrRemoveFunEle from './modules/array/remove/arrRemoveFunEle';
import arrRemoveObjEle from './modules/array/remove/arrRemoveObjEle';

// array 数组 - 其他
// 随机化数组元素的顺序
import shuffleArr from './modules/array/other/shuffleArr';

// 日期-判断
// -判断指定日期是不是今天
import isToday from './modules/date/judge/isToday';
// -判断指定日期是不是n天后
import isTomorrow from './modules/date/judge/isTomorrow';
// -判断指定日期是不是n天前
import isYesterday from './modules/date/judge/isYesterday';
// -判断是否达到指定时间
import isScheduled from './modules/date/judge/isScheduled';

// 日期-获取
// -获取指定日期是所在年份的第几天
import dayOfYear from './modules/date/obtain/dayOfYear';
import getDayDiff from './modules/date/obtain/getDayDiff';

// 数字 - 判断
// -判断一个数字是偶数还是奇数
import isEvenNumber from './modules/number/judge/isEvenNumber';
import isDivisible from './modules/number/judge/isDivisible';

// 数字 - 计算
// -求平均值
import getAverage from './modules/number/calculation/getAverage';

// 数字 - 随机数
// -生成范围内的随机数
import randomInRange from './modules/number/random/randomInRange';
import randomIntegerInRange from './modules/number/random/randomIntegerInRange';

//

// 设备
import browser from './modules/devide/browser';

const jutils = {
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
};

/**
 * @params {Object} jutils 全局
 */
export default jutils;

/**
 *  按需导出
 */

export {
    arrWithoutDupli,
    arrObjectWithoutDupli,
    isAllPass,
    filterUnique,
    filterNoUnique,
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
};
