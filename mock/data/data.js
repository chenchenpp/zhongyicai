/**
 * Created by zqq on 2017/12/01.
 * 本地模拟假数据
 */
define({
    //菜单模块
    "menuData": {
        "resultMsg": "成功",
        "resultCode": "0000",
            content: [
                {
                    "actionURL": "dashboard",
                    "id": "A000000000000000001",
                    "image": "&#xe62a;",
                    "menuCName": "工作台",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {"actionURL": "gisListMange",
                    "id": "A000000000000000101",
                    "image": "&#xe62a;",
                    "menuCName": "清单管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "gisListUpload",
                    "id": "A000000000000000102",
                    "image": "&#xe62a;",
                    "menuCName": "清单导入",
                    "menuLevel": 2,
                    "upperId": "A000000000000000101"
                }, {
                    "actionURL": "gisListQuery",
                    "id": "A000000000000000103",
                    "image": "&#xe62a;",
                    "menuCName": "清单查询",
                    "menuLevel": 2,
                    "upperId": "A000000000000000101"
                }, {
                    "actionURL": "proposalMange",
                    "id": "A000000000000000002",
                    "image": "&#xe62a;",
                    "menuCName": "投保单管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIproposal3107edit",
                    "id": "A000000000000000003",
                    "image": "&#xe62a;",
                    "menuCName": "投保单录入",
                    "menuLevel": 2,
                    "upperId": "A000000000000000002"
                }, {
                    "actionURL": "UIProposalToPolicy",
                    "id": "A1000000000000000032",
                    "image": "&#xe62a;",
                    "menuCName": "已核投保单转保单",
                    "menuLevel": 2,
                    "upperId": "A000000000000000002"
                }, {
                    "actionURL": "UIProposalWriteOff",
                    "id": "A1000000000000000033",
                    "image": "&#xe62a;",
                    "menuCName": "已核投保单注销",
                    "menuLevel": 2,
                    "upperId": "A000000000000000002"
                }, {
                    "actionURL": "---------",
                    "id": "A000000000000000004",
                    "image": '&#xe62a;',
                    "menuCName": "联合出单",
                    "menuLevel": 2,
                    "upperId": "A000000000000000002"
                }, {
                    "actionURL": "UIPrPoEnQuery",
                    "id": "A000000000000000005",
                    "image": '&#xe62a;',
                    "menuCName": "投保单查询",
                    "menuLevel": 2,
                    "upperId": "A000000000000000002"
                }, {
                    "actionURL": "UIPrPoEnGuaranteeQuery",
                    "id": "A000000000000000006",
                    "image": '&#xe62a;',
                    "menuCName": "保单管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "modifyMange",
                    "id": "A000000000000000007",
                    "image": '&#xe62a;',
                    "menuCName": "批改管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIEndorseGeneralMarking.main",
                    "id": "A000000000000000008",
                    "image": '&#xe62a;',
                    "menuCName": "普通批改",
                    "menuLevel": 2,
                    "upperId": "A000000000000000007"
                }, {
                    "actionURL": "UIEndorseSpecial",
                    "id": "A000000000000000009",
                    "image": '&#xe62a;',
                    "menuCName": "特殊批改",
                    "menuLevel": 2,
                    "upperId": "A000000000000000007"
                }, {
                    "actionURL": "UIPrPoEnOrderQuery",
                    "id": "A0000000000000000010",
                    "image": '&#xe62a;',
                    "menuCName": "批单查询",
                    "menuLevel": 2,
                    "upperId": "A000000000000000007"
                }, {
                    "actionURL": "stampMange",
                    "id": "A0000000000000000011",
                    "image": '&#xe62a;',
                    "menuCName": "单证打印",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIPrPoEnInsuranceQuery",
                    "id": "A0000000000000000012",
                    "image": '&#xe62a;',
                    "menuCName": "投保单打印",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000011"
                }, {
                    "actionURL": "UIPrPoEnPolicyQuery",
                    "id": "A0000000000000000013",
                    "image": '&#xe62a;',
                    "menuCName": "保单打印",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000011"
                }, {
                    "actionURL": "UIPrPoEnEndorsementQuery",
                    "id": "A0000000000000000014",
                    "image": '&#xe62a;',
                    "menuCName": "批单打印",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000011"
                }, {
                    "actionURL": "UIPrPoEnVoucherQuery",
                    "id": "A0000000000000000015",
                    "image": '&#xe62a;',
                    "menuCName": "凭证打印",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000011"
                }, {
                    "actionURL": "UIPrPoEnUploadFile",
                    "id": "A0000000000000000016",
                    "image": '&#xe62a;',
                    "menuCName": "影像管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "---------",
                    "id": "A0000000000000000017",
                    "image": '&#xe62a;',
                    "menuCName": "凭证短信管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIEndorseSendIng",
                    "id": "A0000000000000000018",
                    "image": '&#xe62a;',
                    "menuCName": "凭证短信发送",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000017"
                }, {
                    "actionURL": "UIPrPoEnSendMessageQuery",
                    "id": "A0000000000000000019",
                    "image": '&#xe62a;',
                    "menuCName": "短信发送查询",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000017"
                }, {
                    "actionURL": "UIEndorseTemplate",
                    "id": "A0000000000000000020",
                    "image": '&#xe62a;',
                    "menuCName": "短信模板管理",
                    "menuLevel": 2,
                    "upperId": "A0000000000000000017"
                }, {
                    "actionURL": "UIPrPoEnClauseManage",
                    "id": "A0000000000000000021",
                    "image": '&#xe62a;',
                    "menuCName": "条款版本管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIProposalManagement",
                    "id": "A0000000000000000022",
                    "image": '&#xe62a;',
                    "menuCName": "投保模板管理",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIPrPoEnPayManage",
                    "id": "A0000000000000000023",
                    "image": '&#xe62a;',
                    "menuCName": "支付信息维护",
                    "menuLevel": 1,
                    "upperId": "0"
                }, {
                    "actionURL": "UIPrPoEnPayManageEnter",
                    "id": "A0000000000000000023",
                    "image": '&#xe62a;',
                    "menuCName": "支付信息录入",
                    "menuLevel": 2,
                    "upperId": "0"
                }, {
                    "actionURL": "UIPrPoEnPayManageMaint",
                    "id": "A0000000000000000023",
                    "image": '&#xe62a;',
                    "menuCName": "支付信息维护",
                    "menuLevel": 2,
                    "upperId": "0"
                },{
                    "actionURL": "UIPrPoEnPayManageQuery",
                    "id": "A0000000000000000023",
                    "image": '&#xe62a;',
                    "menuCName": "支付信息查询",
                    "menuLevel": 2,
                    "upperId": "0"
                },
                {
                    "actionURL": "UIPrPoEnPayManageEdit",
                    "id": "A0000000000000000023",
                    "image": '&#xe62a;',
                    "menuCName": "支付信息修改",
                    "menuLevel": 2,
                    "upperId": "0"
                },{
                    "actionURL": "UIPrPoEnCustomer",
                    "id": "A0000000000000000024",
                    "image": '&#xe62a;',
                    "menuCName": "客户设置",
                    "menuLevel": 1,
                    "upperId": "0"
                },
                {
                    "actionURL": "UIPrPoEnBusinessQuery",
                    "id": "A0000000000000000025",
                    "image": '&#xe62a;',
                    "menuCName": "业务清单查询",
                    "menuLevel": 1,
                    "upperId": "0"
                }
            ]
    },
});