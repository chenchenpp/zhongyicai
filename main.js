/**
 * Created  on 20171106.
 * requireJS入口文件
 */
require.config({
     baseUrl: '/zhongyicai',                //本地启动
    //baseUrl: '/',                              //nginx启动
    urlArgs: 'v=' + window.CACTUS.version,
    paths: {
        /*第三方库文件*/
        'domReady': 'lib/requirejs-domReady/domReady',
        'jquery': 'lib/jquery/jquery.min',
        'angular': 'lib/angular/angular',
        'ocLazyLoad': 'lib/ocLazyLoad/ocLazyLoad.require',
        'uiRouter': 'lib/angular-ui-router/angular-ui-router-0.2.10',
        'jedate': 'lib/laydate/laydate',
         'angular-mocks':'lib/angular-mocks/angular-mocks',  // mock模块仅供本地测试 提交生产时需要注释
         'ngStorage': 'lib/angular-storage/ngStorage.min',      //后期需要时放开注释
         'ngAnimate': 'lib/angular-animate/angular-animate',   //后期需要时放开注释
        'ngCookies': 'lib/angular-cookies/angular-cookies',
        'eCharts':'lib/eCharts/echarts.min',
        'angular-ui-tree':'lib/angular-ui-tree/angular-ui-tree.min',  //机构树插件
        'app':'app',
        /*业务模块入口文件*/
        'business': 'components/business.mod',
        // 基础组件、服务总入口
        'utilitie': 'utilities/utilities.mod'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'ocLazyLoad': ['angular'],
        'uiRouter': {
            'exports': 'uiRouter',
            deps: ['angular']
        },
        // 'ngAnimate': {
        //     'exports': 'ngAnimate',
        //     deps: ['angular']
        // },
        'ngCookies': {
            'exports': 'ngCookies',
            deps: ['angular']
        },
        'eCharts': {
            'exports': 'eCharts'
            //deps: ['angular']
        },
        'app': {
            'exports': 'app',
            deps: ['angular']
        },
        // 'ngStorage': {
        //     'exports': 'ngStorage',
        //     deps: ['angular']
        // },
    },
    priority: [
        'jquery',
        'angular',
        'uiRouter',
        'app'
    ],
    waitSeconds: 0
});

require([
        'jquery', /*jquery要在前面*/
        'angular',
        // 'ngCookies',
        // 'ngAnimate',   //后期需要时放开注释
        // 'ngStorage',  //后期需要时放开注释
        'eCharts',
        'app',
        'route'
    ],
    function ($, angular,eCharts) {
        window.echarts = eCharts;
        angular.element(document).ready(function () {
            //手工启动Angular APP
            angular.bootstrap(document, ['prpins']);
        });
    }
);
