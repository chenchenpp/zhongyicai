/**
 * Created by zqq on 2017/12/01.
 * 基础库模块总入口
 */

/*引入依赖模块的定义文件*/
define([
    'angular',
    'utilities/provider/provider',
    'utilities/filter/filter',
    'utilities/constant/module',
    'utilities/dirctive/basic.components',
    'utilities/service/service',
    'utilities/factory/finderFactory',//接口
    'utilities/template/template'
],function (angular,eventBusHandler, finderFactoryHandler) {
    return angular.module('utilities', [
            'utilities.provider',
            'utilities.filter',
            'utilities.constant',
            'utilities.dirctive',//分页
            'utilities.service'
        ])
    // .provider('eventBus',eventBusHandler)
        .factory('finder',finderFactoryHandler)
    'use strict';
    /*增加模块依赖*/
});