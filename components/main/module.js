/**
 * Created by Administrator on 2018/4/24.
 */
define([
    './main.ctrl',
    './main.dirc'
], function (mainCtrl, mainDirc) {
    'use strict';
    var mainMod = angular.module('mainMod', [])
        .controller('mainCtrl', mainCtrl);
    mainDirc.forEach(function (item) {
        mainMod.directive(item.name, item.dirc)
    })
});