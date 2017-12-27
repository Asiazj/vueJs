/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var RemoveWebpackPlugin = require('remove-webpack-plugin');

var CONFIG = require('./config');
var projectRoot = CONFIG.projectRoot || path.resolve(__dirname, '../');
var _ENV = CONFIG.env || 'dev';//prod
var _buildFolder = CONFIG.folder;

module.exports = {
  devtool: _ENV == 'dev' ? '#eval-source-map' : false,//
  context: __dirname,//http://wxungang.github.io/1104/vue
  entry: {
    // cup: [path.join(projectRoot, './vue/modules/cup.js')],//cup 模块管理
    vueCommon: ['vue'],//需要抽离的库文件
    app: path.join(projectRoot, './vue/app.js')
  },
  output: {
    path: path.join(projectRoot, './build/' + _buildFolder),
    publicPath: '',//'./build/'+_buildFolder+'/',//path.join(__dirname, '../vue/build/dev/')
    filename: '[name].js',
    chunkFilename: 'chunks/[name].chunk.js',
    // crossOriginLoading: 'anonymous'
  },
  resolve: {
    alias: {},
    modules: ["node_modules"],
    mainFiles: ["index", "app"],
    extensions: [".js", ".json", '.vue', ".es6"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            'less': 'vue-style-loader!css-loader!less-loader',
            // 'css': ExtractTextPlugin.extract({
            //     loader: 'css-loader',
            //     fallbackLoader: 'vue-style-loader!css-loader!less-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            // })
          }
          //other vue-loader options go here
        }
      },
      {
        test: /\.(js|es6)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(gif|jpg|png|svg|ttf|eot|woff|otf)$/,//(png|jpg|gif|svg)//同时处理有问题[建议将正常图片和内联图片分开处理]
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]'//[path][name].[ext]?[hash]!./dir/file.png
        },
        exclude: [path.join(projectRoot, './vue/img')]//[path.join(projectRoot, './vue/img'),path.join(projectRoot, './vue/component')]
      },
      {
        test: /\.(gif|png|jpg)$/,//所有需要内联的一律 使用jpg
        loader: 'url-loader',//url-loader?limit=30000!./file.gif
        options: {
          limit: 30000,//超过limit 使用file-loader 转换
          name: '[path][name].[ext]?[hash]',
        },
        exclude: path.join(projectRoot, './vue/image')
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin("style.css"),
    // new RemoveWebpackPlugin([path.join(projectRoot, './build/' + _buildFolder)]),
    //注入一些全局变量
    new webpack.DefinePlugin({
      _ISPROD_: CONFIG.isProd,
      _VERSION_: JSON.stringify("1.0.0")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vueCommon'],
      // (the commons chunk name)

      // filename: "vueCommons.js",
      // (the filename of the commons chunk)

      minChunks: Infinity,
      // (Modules must be shared between 3 entries)

      // chunks: ["pageA", "pageB"],
      // (Only use these entries)
      // children: true,
      // async: true,
    }),
    // 可以和entry文件联合配置
    new HtmlWebpackPlugin({
      inject: false,
      title: 'vueJs of app',
      filename: 'app.html',
      template: '../vue/entry/template.ejs',
      scripts: ['./vueCommon.js', './app.js']
    }),
    //CopyWebpackPlugin = require('copy-webpack-plugin');
    // new CopyWebpackPlugin([
    //     {
    //         from: '../vue/less',//相对于context
    //         to: '../less'//相对于output.path
    //     }, {
    //         from: '../vue/common',//相对于context
    //         to: '../common'//相对于output.path
    //     },
    //     {
    //         from: '../vue/image',//相对于context
    //         to: '../image'//相对于output.path
    //     }
    // ], {
    //     ignore: ['*.html', '*.js'],
    //     copyUnmodified: true
    // })
  ]
};

