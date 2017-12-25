/**
 * Created by xiaogang on 2016/12/29.
 */
"use strict";
var path = require('path');
var projectRoot = path.resolve(__dirname, '../'); //项目根目录
var _ENV = process.env.NODE_ENV || "dev";
module.exports = {
    env: _ENV || 'dev',
    isProd: _ENV === "prod",
    projectRoot: path.resolve(__dirname, '../'),
    folder: _ENV === "prod" ? "vue" : "vue-" + _ENV,//打包存放的文件夹
    entry: {
        app: path.join(__dirname, '../vue/app.js'),
        page: path.join(projectRoot, './vue/page.js')
    },
    publicPath: '',//html文件和webpack打包生成的js文件的引用路径
    dev: {},
    prod: {}
};


/**
 *
 *
 *
 *
 */