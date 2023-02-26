/*
前端使用class封装公共的js方法：
1、定义或者声明一个类
方式1：使用关键字class可以在 JS 中定义了一个类
		class 类名 {  类的主体 }
方式2：使用类表达式，将类分配给变量
		const 变量名 = class { 类的主体 }
方式3：将类导出为 ES6 模块的一部分，默认导出语法
		export default class User { 主体 }
方式4：将类导出为 ES6 模块的一部分,命名导出
		export class User { 主体 }
2、如何使用：使用new运算符实例化该类 const myUser = new 类名(); 使用之前必须new一下
3、初始化:constructor()
		constructor(param1, param2, ...)是用于初始化实例的类主体中的一种特殊方法。
		在这里可以设置字段的初始值或进行任何类型的对象设置。
		class User {
				constructor(name) {
						this.name = name;
				}
		}
		User的构造函数有一个参数 name，用于设置字段this.name的初始值
		在构造函数中，this 值等于新创建的实例。用于实例化类的参数成为构造函数的参数：
		class User {
				constructor(name) {
						name; // => '前端小智'
						this.name = name;
				}
		}
		const user = new User('前端小智');
		构造函数中的name参数的值为'前端小智'。如果没有定义该类的构造函数，则会创建一个默认的构造函数。默认的构造函数是一个空函数，它不修改实例。
		同时，一个JavaScript 类最多可以有一个构造函数。

总结：
		-第一步：封装js类方法
		-第二步：main.js中全局引入(如：utils)，挂载工具js文件，挂载时候注意使用 = new utils();
						例如696d6b：Vue.prototype.$utils = new utils()
		-第三步：this.$utils.类方法名()
*/
/**
 * JavaScript常用js工具类
 * @class Utils
 */
class Utils {
    /**
     * 随机数范围：生成随机数
     * @param min
     * @param max
     */
    __random(min, max) {
        if (arguments.length === 2) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        } else {
            return null;
        }
    }

    /**
     * 判断数组中是否存在某元素
     * @param arr
     * @param val
     */
    __containsElement(arr, val) {
        return arr.indexOf(val) != -1 ? true : false;
    }

    /**
     * 数组排序，{type} 1：从小到大 2：从大到小 3：随机
     * @param arr
     * @param type
     */
    __sort(arr, type) {
        return arr.sort((a, b) => {
            switch (type) {
                case 1:
                    return a - b;
                case 2:
                    return b - a;
                case 3:
                    return Math.random() - 0.5;
                default:
                    return arr;
            }
        });
    }

    /**
     * 将类数组转换为数组
     * @param ary
     */
    __formArray(ary) {
        let arr = [];
        if (Array.isArray(ary)) {
            arr = ary;
        } else {
            arr = Array.prototype.slice.call(ary);
        }
        return arr;
    }

    /**
     * 数组中的最大值
     * @param arr
     * @returns
     */
    __max(arr) {
        return Math.max.apply(null, arr);
    }

    /**
     * 数组中的最小值
     * @param arr
     */
    __min(arr) {
        return Math.min.apply(null, arr);
    }

    /**
     * 数组求和
     * @param arr
     */
    __sum(arr) {
        return arr.reduce((pre, cur) => {
            return pre + cur;
        });
    }

    /**
     * 数组求平均值
     * @param arr
     */
    __average(arr) {
        return this.__sum(arr) / arr.length;
    }

    /**
     * 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
     * @param str
     * @param type
     */
    __trim(str, type) {
        type = type || 1;
        switch (type) {
            case 1:
                return str.replace(/\s+/g, '');
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, '');
            case 3:
                return str.replace(/(^\s*)/g, '');
            case 4:
                return str.replace(/(\s*$)/g, '');
            default:
                return str;
        }
    }

    /**
     * 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
     * @param str
     * @param type
     */
    __changeCase(str, type) {
        type = type || 4;
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function (word) {
                    return (
                        word.substring(0, 1).toUpperCase() +
                        word.substring(1).toLowerCase()
                    );
                });
            case 2:
                return str.replace(/\b\w+\b/g, function (word) {
                    return (
                        word.substring(0, 1).toLowerCase() +
                        word.substring(1).toUpperCase()
                    );
                });
            case 3:
                return str
                    .split('')
                    .map(function (word) {
                        if (/[a-z]/.test(word)) {
                            return word.toUpperCase();
                        } else {
                            return word.toLowerCase();
                        }
                    })
                    .join('');
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    }

    /**
     * 获取日期 具体到日或者月type或者时分秒: 天day 月month hour时分秒
     * @param type
     */
    __getDate(type) {
        let mid;
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        month = month > 9 ? month : '0' + month;
        day = day > 9 ? day : '0' + day;
        hh = hh > 9 ? hh : '0' + hh;
        mm = mm > 9 ? mm : '0' + mm;
        ss = ss > 9 ? ss : '0' + ss;
        if (type == 'month') {
            mid = `${year}-${month}`;
        } else if (type == 'day') {
            mid = `${year}-${month}-${day}`;
        } else if (type == 'hour') {
            mid = `${year}-${month}-${day}  ${hh}:${mm}:${ss}`;
        }
        return mid;
    }

    /**
     * 标准时间格式化
     * @param date
     */
    __formatterDate(date) {
        date = new Date(date);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? '0' + d : d;
        let h = date.getHours();
        h = h < 10 ? '0' + h : h;
        let minute = date.getMinutes();
        minute = minute < 10 ? '0' + minute : minute;
        let second = date.getSeconds();
        second = second < 10 ? '0' + second : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }

    /**
     * 标准时间截取 年 月 日
     * @param date
     * */
    __filterymd(date) {
        if (date) {
            // 将日期以空格隔开，即['2020-06-13', '17:10:09']
            date = (date + '').split(/[ ]+/);
            let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
            // 用截取出来的年月日进行正则表达式匹配
            date = reg.exec(date[0])[0];
        }
        return date;
    }

    /**
     * 格式化秒为 时分秒
     * @param value
     * @returns
     */
    __formateSecond(value) {
        let result = parseInt(value);
        let h =
            Math.floor(result / 3600) < 10
                ? '0' + Math.floor(result / 3600)
                : Math.floor(result / 3600);
        let m =
            Math.floor((result / 60) % 60) < 10
                ? '0' + Math.floor((result / 60) % 60)
                : Math.floor((result / 60) % 60);
        let s =
            Math.floor(result % 60) < 10
                ? '0' + Math.floor(result % 60)
                : Math.floor(result % 60);
        result = `${h}:${m}:${s}`;
        return result;
    }

    /**
     * 标准日期格式化为：yy-mm-dd
     * @param {*} date
     * @returns
     */
    __formatDate(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month > 9 ? month : '0' + month;
        day = day > 9 ? day : '0' + day;
        return year + '-' + month + '-' + day;
    }

    /**
     * 判断某年某月最后一天：平年28 闰年29 月小30 月大31
     * @param val
     */
    __judgeEndDays(val) {
        let first_Day, last_Day, mid_var_y, mid_var_m, obj;
        mid_var_y = Number(val.split('-')[0]); //获取年并转为Number类型
        mid_var_m = Number(val.split('-')[1]) - 1; //获取月并转为Number类型
        if (mid_var_y && mid_var_m >= 0) {
            first_Day = this.__formatDate(new Date(mid_var_y, mid_var_m, 1));
            last_Day = this.__formatDate(new Date(mid_var_y, mid_var_m + 1, 0));
        }
        obj = {
            begin: first_Day,
            end: last_Day
        };
        return obj;
    }

    /**
     * 将非整10、100、……转为整10、100…
     * 提现：只能提整百、整千、整万……
     *  @param date: 所有date
     * 	@param param: 整百提取 param=100 、整千提取param = 1000……
     */
    __besExtract(date, param) {
        date = Math.floor(date / param) * param;
        return date;
    }

    /**
     * 将带有负号的负数改为无符号整数
     * @param val(String): 待处理数据
     */
    __handleMinus(val) {
        val = val.replace(/-/g, '');
        return val;
    }

    /**
     * 隐藏电话号码中间4位
     *  @param phone(String):11位电话号码
     */
    __hiddenMidPhone(phone) {
        let reg = /(\d{3})(\d{4})(\d{4})/;
        phone = phone.replace(reg, '$1 **** $2');
        return phone;
    }

    /**
     * 正则验证手机号码
     * @param phone:验证的手机号码
     */
    __rulesPhone(phone) {
        let reg = /^(13[0-9]|14[5|7]|15[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        let meetRules = reg.test(phone);
        return meetRules;
    }

    /**
     * 处理baseUrl+url连接处'/'问题
     * @param baseUrl
     * @param url
     */
    __combine(baseUrl, url) {
        let u = '';
        if (baseUrl && baseUrl.length > 0) {
            u +=
                baseUrl +
                (baseUrl.charAt(baseUrl.length - 1) === '/' ? '' : '/');
            u += url.charAt(0) === '/' ? url.substring(1) : url;
            return u;
        }
        return url;
    }

    /**
     * 时间戳转为 YY-MM:DD HH:MM:SS 格式
     * @param {*} time 时间戳
     *  - 13位是毫秒时间戳 10位是秒时间戳。
     *  - 10位需*1000，时间戳为13位的话不需乘1000
     * @returns
     */
    __timestampToTime(time) {
        if (time.toString().length == 10) {
            time = time * 1000;
        } else if (time.toString().length == 13) {
            time = time;
        }
        let date = new Date(time);
        let year = date.getFullYear(),
            month = ('0' + (date.getMonth() + 1)).slice(-2),
            sdate = ('0' + date.getDate()).slice(-2),
            hour = ('0' + date.getHours()).slice(-2),
            minute = ('0' + date.getMinutes()).slice(-2),
            second = ('0' + date.getSeconds()).slice(-2);
        let result =
            year +
            '-' +
            month +
            '-' +
            sdate +
            ' ' +
            hour +
            ':' +
            minute +
            ':' +
            second;
        return result;
    }

    /**
     * JavaScript 中常见false的6种情况,其余都为 true
     * @param {*} val  false  null undefined ""空的字符串 数字 0 (包括：—0、-0、+0) 数字 NaN
     * @returns
     */
    __judgTrueAndFalse(val) {
        if (!val) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 查找字符串【charAt()可以根据参数（非负整数的下标值）返回指定位置的字符：如果参数不在 0 和字符串的 length-1 之间，则返回空字符串；】
     * @param {*} str 源字符串
     * @param {*} index  0~length-1
     * @returns
     */
    charAtFindStr(str, index) {
        return str.charAt(index);
    }

    /**
     * 获取url参数
     * @param {*} param 键名
     * @returns
     */
    __getParam(param) {
        let query = window.location.search.substring(1);
        let vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            if (pair[0] == param) {
                return pair[1];
            }
        }
        return false;
    }

    /**
     * cookie中存储内容 document.cookie ='name='+ value || 'name=value'
     * @param {*} key 键名
     * @param {*} value 键值
     */
    __setCookie(key, value) {
        document.cookie = `${key}=` + value;
    }

    /**
     * 获取cookie中的内容
     * @param {*} key 键名
     * @returns
     */
    __getCookie(key) {
        let arr,
            reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
        if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
        else return null;
    }

    /**
     * local Storage 本地缓存中存储内容
     * @param {*} key 键名
     * @param {*} value 键值
     */
    __setStorage(key, value) {
        localStorage.setItem(key, value);
    }

    /**
     * 获取localStorage中的内容
     * @param {*} key
     * @returns
     */
    __getStorage(key) {
        return localStorage.getItem(key);
    }

    /**
     * 删除树结构中key不存在的节点
     * @param {*} list treeList
     * @param {*} key 指定键名
     * @returns
     */
    __delNullLeafNode(list, key) {
        list.forEach((item) => {
            item[key] === '' ||
            item[key] === undefined ||
            item[key] === null ||
            item[key].length < 1
                ? delete item[key]
                : __delNullLeafNode(item[key], key);
        });
        return list;
    }

    /**
     * json数组对象去重：利用ES6 Map 数据结构特性
     * @param {*} arr json数组对象
     * @param {*} key 自定义键名
     * @returns
     */
    __jsonUnique(arr, key) {
        let map = new Map();
        for (let i of arr) {
            // has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
            if (!map.has(i[key])) {
                // set方法设置键名key对应的键值为value
                map.set(i[key], i);
            }
        }
        arr = [...map.values()];
        return arr;
    }

    /**
     * 普通数组去重：利用ES6的Set数据结构中成员唯一的特性
     * @param {*} arr 源数据
     * @returns
     */
    __arrUnique(arr) {
        return [...new Set(arr)];
    }

    /**
     * ES6 扁平化函数 flat()
     * 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。
     * @param {*} arr
     * @returns
     */
    __arrFlatten(arr) {
        return arr.flat(Infinity);
    }

    /**
     * 树形结构数据扁平化即转为一维数组
     * 数组顺序：root顺序（索引升序）每个节点 root->leaf
     * @param {*} tree 源数据
     * @param {*} childs 自定义key
     * @param {*} arrAttr 自定义需要返回的字段
     * @returns
     */
    __treeToArray(tree, childs, arrAttr) {
        let attrList = [];
        let list = [];
        // tree为非数组类型并且长度为 0 ，则返回 [] 数组
        if (!Array.isArray(tree) && !tree.length) return [];
        // 如果传递的 key 不是字符串，则返回 [] 数组
        if (typeof childs !== 'string') return [];
        if (
            !Array.isArray(arrAttr) ||
            (Array.isArray(arrAttr) && !arrAttr.length)
        ) {
            attrList = Object.keys(tree[0]);
            attrList.splice(attrList.indexOf(childs), 1);
        } else {
            attrList = arrAttr;
        }
        const getObj = (arr) => {
            arr.forEach((row) => {
                let obj = {};
                attrList.forEach((item) => {
                    obj[item] = row[item];
                });
                list.push(obj);
                if (row[childs]) {
                    getObj(row[childs]);
                }
            });
            return list;
        };
        return getObj(tree);
    }

    /**
     * 线性数组树结构化：通过pid
     * @param {*} data
     * @returns
     */
    __arrToTree(data) {
        let result = [];
        let obj = {};
        data.forEach((item) => {
            obj[item.id] = item;
        });
        data.forEach((item) => {
            let parent = obj[item.pid];
            if (parent) {
                (parent.children || (parent.children = [])).push(item);
            } else {
                result.push(item);
            }
        });
        return result;
    }

    /**
     * 深拷贝：递归实现深拷贝
     * @param {source} source
     * @returns
     */
    __deepClone(source) {
        let target;
        //对象包含：数组、对象、方法
        if (typeof source === 'object') {
            target = Array.isArray(source) ? [] : {};
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    // 判断属性是引用数据类型还是基本数据类型
                    if (typeof source[key] !== 'object') {
                        // 对象属性：基本数据类型
                        target[key] = source[key];
                    } else {
                        // 对象属性：引用数据类型
                        target[key] = __deepClone(source[key]);
                    }
                }
            }
        } else {
            target = source;
        }
        return target;
    }

    /**
     * 返回数组并集：都是一维数组
     * @param {*} arr1
     * @param {*} arr2
     * @returns
     */
    __arrayUnion(arr1, arr2) {
        return [...new Set([...arr1, ...arr2])];
    }

    /**
     * 返回数组交集：都是一维数组
     * @param {*} arr1
     * @param {*} arr2
     * @returns
     */
    __arrayIntersect(arr1, arr2) {
        return [...new Set([...arr1].filter((value) => arr2.includes(value)))];
    }

    /**
     * 数组差集,出现在第一个数组中，但是没有在其他数组中
     * @param {*} arr1
     * @param {*} arr2
     * @returns
     */
    __arrayDiff(arr1, arr2) {
        return [...new Set([...arr1].filter((value) => !arr2.includes(value)))];
    }

    /**
     * money千分位（,）分隔
     * @param {*} n 具体数字
     * @returns 返回字符串
     */
    __formatMoney(n) {
        let num = n.toString();
        let len = num.length;
        if (len <= 3) {
            return num;
        } else {
            let temp = '';
            let remainder = len % 3;
            if (remainder > 0) {
                // 不是3的整数倍
                return (
                    num.slice(0, remainder) +
                    ',' +
                    num.slice(remainder, len).match(/\d{3}/g).join(',') +
                    temp
                );
            } else {
                // 3的整数倍
                return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
            }
        }
    }

    /**
     * 驼峰命名转换成短横线命名
     * @param {*} str 字符串
     * @returns
     */
    __camelCaseTo(str) {
        return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase());
    }

    /**
     * 短横线命名转换成驼峰命名
     * @param {*} str 字符串
     * @returns
     */
    __toCamelCase(str) {
        return str.replace(/-([a-z])/g, (i, item) => item.toUpperCase());
    }

    /**
     * 获取系统当前时间戳
     * @param {*} n 位数：只能是 10位（秒）或者 13位（毫秒）
     * @returns 返回自定义位数的时间戳
     */
    __getNowTimestamp(n) {
        let timeTamp;
        if (n === 10) {
            timeTamp = Math.round(new Date().getTime() / 1000);
        } else if (n === 13) {
            timeTamp = Date.now();
        }
        return timeTamp;
    }

    /**
     * YY-MM:DD HH:MM:SS 转为毫秒（13位）时间戳
     * @param {*} d
     * 	d: YY-MM:DD HH:MM:SS格式
     * @returns 13位毫秒时间戳
     */
    __getTimeToStamp(d) {
        let date = new Date(d);
        return date.getTime();
    }

    /**
     * 计算结束日期距离系统当前时间的：年月日时分秒
     * @param {*} endDate 结束时间：YY-MM:DD HH:MM:SS 格式
     * 返回 year+'年,'+month+'月,'+day+'天,'+hour+'小时,'+minute+'分,'+second+"秒";
     * @returns
     */
    __dateComputed(endDate) {
        let curDate = new Date(); //转换为中国标准时间
        endDate = new Date(endDate);
        curDate = curDate.getTime(); //转换为时间戳
        endDate = endDate.getTime();
        let runTime = (endDate - curDate) / 1000; //开始得出时间差,然后计算
        let year = Math.floor(runTime / 86400 / 365);
        runTime = runTime % (86400 * 365);
        let month = Math.floor(runTime / 86400 / 30);
        runTime = runTime % (86400 * 30);
        let day = Math.floor(runTime / 86400);
        runTime = runTime % 86400;
        let hour = Math.floor(runTime / 3600);
        runTime = runTime % 3600;
        let minute = Math.floor(runTime / 60);
        runTime = runTime % 60;
        let second = runTime.toFixed(0);
        return (
            year +
            '年' +
            month +
            '月' +
            day +
            '天' +
            ' ' +
            hour +
            '小时' +
            minute +
            '分' +
            second +
            '秒'
        );
    }

    /**
     * 截止日期到当前系统日期距离多少天
     * @param {*} endDate 截止日期
     *  - endDate格式：YY-MM-DD HH:mm:ss
     * @param {*} type 精确到：天、小时、分钟、秒
     * @returns 根据type返回自己所需
     */
    __diffTime(endDate, type) {
        let startDate = new Date();
        endDate = new Date(endDate);
        let diff = endDate.getTime() - startDate.getTime(); //时间差的毫秒数

        //计算出相差天数
        let days = Math.floor(diff / (24 * 3600 * 1000));

        //计算出小时数
        let leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000));

        //计算相差秒数
        let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000);

        let res;
        switch (type) {
            case 'day':
                res = days;
                break;
            case 'hours':
                res = days + '天' + hours + '小时';
                break;
            case 'minutes':
                res = days + '天' + hours + '小时' + minutes + '分';
                break;
            case 'seconds':
                res =
                    days +
                    '天' +
                    hours +
                    '小时' +
                    minutes +
                    '分' +
                    seconds +
                    '秒';
                break;
        }
        return res;
    }

    /**
     * 数据类型的检测
     * @param {any} data 要检测数据类型的数据
     * @returns {string} type 返回具体的小写类型名称
     */
    __isType(data) {
        return Object.prototype.toString
            .call(data)
            .replace(/\[object (\w+)\]/, '$1')
            .toLowerCase();
    }

    /**
     * 通过子节点的id查找他的所有父节点
     * @param {*} tree 树结构数据
     * @param {*} func 方法
     * @param {*} path []
     * @param {*} dataStructure 自定义返回的数据对象
     * @returns 返回所有父节点及本身节点组成的一维数组
     */
    __findNode(tree, func, path, dataStructure) {
        if (!tree) return [];
        for (const data of tree) {
            let newObj = {};
            for (const key in dataStructure) {
                newObj[key] = data[key];
            }
            path.push(newObj);
            if (func(data)) return path;
            if (data.children) {
                const findChildren = this.findNode(
                    data.children,
                    func,
                    path,
                    dataStructure
                );
                if (findChildren.length) return findChildren;
            }
            path.pop();
        }
        return [];
    }
}
export default new Utils();
