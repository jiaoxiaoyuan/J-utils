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

// 设备
import browser from './modules/devide/browser';
const jutils = {
    arrWithoutDupli,
    arrObjectWithoutDupli,
    isAllPass,
    filterUnique,
    filterNoUnique,
    findObjectInArray,
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
    browser
};
