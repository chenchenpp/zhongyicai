/**
 * Created by ZJon 2017/10/16.
 * 首页控制
 */
define(['app'], function (app) {
    'use strict';
    app.controller('IndexCtrl', ['$scope','$rootScope','$timeout','$state',
        function ($scope,$rootScope,$timeout,$state) {
            console.log(11111111111111)
            // if(AuthHandler.isLogined()){
            //     console.log("已登录");
            //
            // }else{
            //     console.log("未登录");
            //     $location.path("/login");
            // }
            /*
             * 菜单刷新高亮显示
             * */
            $scope.currentURL ={
                currentType:"main"
            };
            $rootScope.$on("$stateChangeSuccess",function (event) {
                $timeout(function(){
                    $scope.currentURL.currentType = $state.$current.name;
                },200)
            });
        }]);
});