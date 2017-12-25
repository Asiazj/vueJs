/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var merge = require('webpack-merge');
var webpack = require('webpack');
var baseConfig = require('./webpack.base.js');


var prodConfig = merge.smart(baseConfig, {
    devtool: false,
    plugins: [
        //webpack plugins docs=>删除重复代码
        //new webpack.optimize.DedupePlugin(),
        //压缩工具
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
                drop_console: true,
                dead_code: true
            },
            mangle: {
                except: ['$', "$script"]
            },
            output: {
                comments: false
            },
            sourceMap: false
        })

    ]

});

module.exports = prodConfig;