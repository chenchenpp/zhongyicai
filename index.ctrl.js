/**
 * Created by ZJon 2017/10/16.
 * 首页控制
 */
define(['app'], function (app) {
    'use strict';
    app.controller('IndexCtrl', ['$scope','$location',
        function ($scope,$location) {
            console.log(11111111111111)
            // if(AuthHandler.isLogined()){
            //     console.log("已登录");
            //
            // }else{
            //     console.log("未登录");
            //     $location.path("/login");
            // }
        }]);
});