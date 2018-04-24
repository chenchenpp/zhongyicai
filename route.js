/**
 * Created  on 20171106.
 * Angular 路由配置文件
 */
define(['app',
    'index.ctrl'
], function (app) {
    'use strict';
    console.log(app)
    return app.config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            var userPath = 'components/';

        }]);
});