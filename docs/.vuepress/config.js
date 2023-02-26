/*
 * @Author: JIAOXIAOYUAN
 * @Description:配置文件
 *
 */

const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: '/images/favicon.png' }
        ],
        ['script', {}]
    ],
    title: 'j-utils',
    description: '一个 JavaScript 实用工具库',
    themeConfig: {
        logo: '/images/favicon.png',
        nav,
        sidebar,
        sidebarDepth: 0
    },
    markdown: {
        // lineNumbers: true,
        extractHeaders: ['h1', 'h2', 'h3', 'h4']
    },
    smoothScroll: true
};
