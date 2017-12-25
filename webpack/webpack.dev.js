/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var baseConfig = require('./webpack.base.js');

var devConfig=merge.smart(baseConfig,{
    // devServer: {
    //     historyApiFallback: true,
    //     noInfo: true,
    //     port: 9000,
    //     contentBase:path.resolve(__dirname,'../build'),
    //     headers:{
    //         vueInfo:'webpack2'
    //     },
    //     publicPath:'./'
    // },
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin()
    // ]
});


module.exports = devConfig;