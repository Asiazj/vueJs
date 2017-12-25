/**
 * Created by xiaogang on 2016/12/7.
 */
"use strict";
//base
import Vue from 'vue';

//page
import App from './app.vue';

//render page
const root = new Vue({
    ...App
}).$mount('#root');
//扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中
// Now the app has started!

