({
    baseUrl: "../",
    paths: {
        /*第三方库文件*/
        'domReady': 'lib/requirejs-domReady/domReady',
        'jquery': 'lib/jquery/jquery.min',
        'angular': 'lib/angular/angular',
        'ocLazyLoad': 'lib/ocLazyLoad/ocLazyLoad.require',
        'uiRouter': 'lib/angular-ui-router/angular-ui-router-0.2.10',
        'jedate': 'lib/laydate/laydate',
        // 'angular-mocks':'lib/angular-mocks/angular-mocks',  // mock模块仅供本地测试 提交生产时需要注释
        // 'ngStorage': 'lib/angular-storage/ngStorage.min',      //后期需要时放开注释
        // 'ngAnimate': 'lib/angular-animate/angular-animate',   //后期需要时放开注释
        'ngCookies': 'lib/angular-cookies/angular-cookies',
        /*业务模块入口文件*/
        'business': 'components/business.mod',
        // 基础组件、服务总入口
        'utilitie': 'utilities/utilities.mod'
    },
    uglify2:{
        defines: {
            DEBUG: ['name', 'true'],
            debugger: false
        },
        compress: {
            // sequences: false,
            drop_debugger: false, // 是否删除debugger 默认为true
            // keep_fnames:true,
            // ie8:true
        },
        mangle:{
            keep_fnames:true
        },
        debugger: false
    },
    optimize: "uglify2",
    // skipDirOptimize: false,
    preserveLicenseComments:false,
    generateSourceMaps: true, // 启用资源映射地图
    removeCombined: true,
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
        }
        // 'ngStorage': {
        //     'exports': 'ngStorage',
        //     deps: ['angular']
        // },
    },
    dir: "../dist",
    // mainConfigFile : "main.js",
    optimizeCss:'standard.keepLines',
    modules: [{
        name: "main",
        exclude:[
// 'lib/angular-ui-router/angular-ui-router-0.2.10'
        ]}
    ]
})
