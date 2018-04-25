/**
 * Created  on 20171106.
 * Angular 路由配置文件
 */
define(['app',
    'index.ctrl',
    'frame/menu/menu.ctrl'
], function (app) {
    'use strict';
    return app.config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            var userPath = 'components/';
            $urlRouterProvider.when("/","/main").otherwise("/main");
            $stateProvider.state("main",{
                url:"/main",
                templateUrl:userPath+"main/main.html",
                controller:"mainCtrl",
                resolve:{
                    loadCommunity:['$ocLazyLoad',function($ocLazyLoad){
                        return $ocLazyLoad.load([
                            userPath + 'main/module.js']);
                    }]
                }
            })
        }]);
});