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

// 设备
import browser from './modules/devide/browser';
const jutils = {
    arrWithoutDupli,
    arrObjectWithoutDupli,
    isAllPass,
    browser
};
/**
 * @params {Object} jutils 全局
 */
export default jutils;

export { arrWithoutDupli, arrObjectWithoutDupli, isAllPass, browser };
