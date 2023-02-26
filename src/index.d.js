let utils = {};
let haveDefault = ['http', 'sentry'];
// console.log(require);
const modules = require.context('./modules/', true, /index.js$/);

modules.keys().forEach((modulesKey) => {
    let attr = modulesKey
        .replace('./', '')
        .replace('.js', '')
        .replace('/index', '');
    if (haveDefault.includes(attr)) {
        utils[attr] = modules(modulesKey).default;
    } else {
        utils[attr] = modules(modulesKey);
    }
});

module.exports = utils;
