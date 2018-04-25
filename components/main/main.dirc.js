/**
 * Created by Administrator on 2018/4/24.
 */
define([
    //'utilities/constant/tips.constant',
    //'utilities/constant/resultCode.constant'
], function (tips, resultCode) {
    'use strict';
    return [
        {
            name: 'barCharts',
            dirc: function () {
                return {
                    restrict: 'EA',
                    scope: {
                        data: '='
                    },
                    link: function ($scope, element, attr) {
                        var chart = element[0];
                        var barChart = echarts.init(chart);
                        // 指定图表的配置项和数据
                        var option = {
                            legend: {
                                data: ['销量']
                            },
                            xAxis: {
                                data: ["执业证书", "保险从业资格证", "业务许可证", "营业执照", "组织机构代码证", "中介协议"]
                            },
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'bar',
                                barWidth : 20,
                                data: [5, 20, 36, 10, 10, 20],
                                //头部显示文本
                                label:{
                                    normal:{
                                        show:true,
                                        position:'top',
                                        textStyle:{
                                            color:'black',
                                        }
                                    }
                                },
                                //柱状条样式
                                itemStyle:{
                                    normal:{
                                        //柱形图圆角，初始化效果
                                        barBorderRadius:[10, 10, 0, 0],
                                        color:"#1186F4",
                                    }
                                }
                            }]
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        barChart.setOption(option);
                    }

                };
            }
        },
        {
            name:'pieCharts',
            dirc:function(){
                return {
                    directive:'EA',
                    scope:{
                        data:'='
                    },
                    link:function($scope,ele,attr){
                        var ele=ele[0];
                        var pieCharts=echarts.init(ele);
                        var option={
                            series: [{
                                name: '销量',
                                type: 'pie',
                                radius: '80%',
                                data: [
                                    {value:20, name:'协议审核流程20个'},
                                    {value:30, name:'人员审核流程30个'},
                                    {value:30, name:'渠道审核流程30个'},
                                    {value:10, name:'基本法审核流程10个'},
                                    {value:20, name:'黑名单审核流程20个'},
                                    {value:30, name:'协议审核流程30个'},
                                    {value:0, name:'费用政策审核流程0个'},
                                    {value:10, name:'团队审核流程10个'},
                                    {value:8, name:'手续费批量调整审核流程8个'},
                                    {value:20, name:'结算单审核流程20个'},
                                    {value:20,name:'考核结果确认审核流程20个'}
                                ]
                            }],
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        pieCharts.setOption(option);
                    }
                }
            }
        }
    ]
});