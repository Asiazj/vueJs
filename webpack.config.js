/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var webpack = require('webpack');
const CONFIG=require('./webpack/config');


var _ENV =CONFIG.env;
//默认获取dev环境
var webpackConfig =  require('./webpack/webpack.dev');
if(_ENV == 'prod'){
    webpackConfig=require('./webpack/webpack.prod');
}else if(_ENV == 'server'){
    webpackConfig=require('./webpack/webpack.server');
}if(_ENV == 'uat'){
    webpackConfig=require('./webpack/webpack.prod');
}

console.log(webpackConfig);

module.exports=webpackConfig;