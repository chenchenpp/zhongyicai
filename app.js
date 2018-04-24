/**
 * Created  on 20171106.
 * Angular入口模块
 */
define([
    'angular',
    'ngCookies',
    // 'ngAnimate',    //后期需要时放开注释
    // 'ngStorage',     //后期需要时放开注释
    'ocLazyLoad',
    'uiRouter',
    'business',
    'utilitie'
    // 'mock/backend-mocks', // mock模块仅供本地测试 提交生产时需要注释
    ],
    function (angular,a,d,g,h) {
        'use  strict';
        var app = angular.module('prpins', [
            'ngCookies',
            // 'ngAnimate',       //后期需要时放开注释
            // 'ngStorage',
            'oc.lazyLoad',
            'ui.router',
            'ui.router.state',
            // 'backend-mocks',  // mock模块仅供本地测试 提交生产时需要注释
            'business',
            'utilities'
        ]);

        app.config([
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
                app.register = {
                    controller: $controllerProvider.register,//按需加载控制器
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };
            }]);
        app.config(['$httpProvider', function($httpProvider){
            $httpProvider.interceptors.push(['$q', '$location',function($q, $location, $localStorage){
                return {
                    'request': function (config) {
                        config.headers = config.headers || {};
                        return config;
                    },
                    'responseError': function(response) {
                        if(response.status === 401 || response.status === 403) {
                            $location.path('/login');
                        }
                        return $q.reject(response);
                    }
                };
            }]);
        }]);

        // 禁用ie的 ajax request caching
        app.config(['$httpProvider',function($httpProvider){
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
            $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
        }]);
        app.run(['$state', '$stateParams', '$rootScope','promptServ',
            function ($state, $stateParams, $rootScope, promptServ) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on('$stateChangeStart',
                    function (event, toState, toParams, fromState, fromParams, options) {
                        if("calculate" ===fromState.name){
                            $(window).unbind("scroll")
                        }
                    }
                );
                $rootScope.$on('$locationChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams){
                        console.log("location change!");
                });
            }
        ]);
        return app;
    }
);