const webpack = require('webpack');
const path = require('path');
module.exports = {
    // 模式
    mode: 'production', // 也可以使用 production
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 打包文件夹:修改打包出口，在最外级目录打包出一个 index.js 文件，我们 import 默认会指向这个文件
        path: path.resolve(__dirname, 'lib'),
        // 打包文件
        filename: 'jtoolset-min.js',
        // 向外暴露的对象的名称
        library: 'jtoolset-min',
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
        //解决使用时候有default属性层级的问题
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
