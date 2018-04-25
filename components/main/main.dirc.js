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
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
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
                                data: [5, 20, 36, 10, 10, 20]
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
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            legend: {
                                data: ['销量']
                            },
                            xAxis: {},
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'pie',
                                data: [5, 20, 36, 10, 10, 20]
                            }]
                        }
                        // 使用刚指定的配置项和数据显示图表。
                        pieCharts.setOption(option);
                    }
                }
            }
        }
    ]
});