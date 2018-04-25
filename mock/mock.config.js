/**
 * Created by zhuqianqian on 2017/12/01.
 */
define(
    [
        'utilities/constant/apiPath.constant',
        'mock/data/data'
    ],function (apiPath,jsonDB) {

        /**
         * 此处定义接口处理回调方法，对于需要特殊处理的接口，定义回调，覆盖默认的返回处理
         * @author admin
         * @date   2017/11/21
         * @param method
         * @param url
         * @param req 请求数据
         * @param res 返回数据
         * @returns {*} api处理结果
         */
        var initSelectTagCallBack = function(method, url, req, res){
            var param = JSON.parse(req);
            if(param.codeType == "PersonalIdentifyType") {
                return [200,res.PersonalIdentifyType]
            }else if(param.codeType == "BusinessNature") {
                return [200,res.BusinessNature]
            }
        };
        /**
         * 此处定义每个接口mock处理的映射表，相同系统接口请放在一起
         * name:接口名,无逻辑判断；desc:接口中文描述; method:接口处理方法(GET/POST); url:接口调用url,对应后台的url; data:接口返回值: callback:回调方法,用在需要对返回值特殊处理时,可空
         * @author admin
         * @date   2017/11/21
         */
        return [
            /** 系统接口 */
             {"name":"menu", "desc":"菜单查询", "method":"POST", "url":apiPath.menuData, "data":jsonDB['menuData']},
            // {"name":"reportRegistrationQuery", "desc":"报案登记查询", "method":"POST", "url":config.backend.prplregistList, "data":jsonDB['prplregistList']},
            // {"name":"reportTaskQuery", "desc":"报案任务查询", "method":"POST", "url":config.backend.queryPrpLregistList, "data":jsonDB['queryPrpLregistList']}
        ]
    }
);