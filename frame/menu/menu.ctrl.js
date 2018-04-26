define([
    'app',
    './menu.serv'
], function (app) {
    'use strict';
    app.controller('menuCtrl', ['$rootScope', '$scope', '$$menuServ', 'finder', '$sce',
        function ($rootScope, $scope, $$menuServ, finder, $sce) {
            'use strict';
            $scope.menu = 'menu';
            $scope.isActive = true;
            $scope.leftFlag = false;
            $scope.navClick = function () {
                $scope.isActive = !$scope.isActive;
                $scope.leftFlag = !$scope.leftFlag;
                $scope.rightFlag = !$scope.rightFlag;
            };
            $scope.navClickOpen = function () {
                $scope.isActive = false;
                $scope.leftFlag = true;
                $scope.rightFlag = !$scope.rightFlag;
            };
            //递归取菜单
            var changeData = function (data, id) {
                var result = [], temp;
                angular.forEach(data, function (item, index) {
                    if (item.upperId == id) {
                        var obj = item;
                        temp = changeData(data, item.id);
                        if (temp.length > 0) {
                            obj.nodes = temp;
                        }
                        result.push(obj);
                    }
                });
                return result
            };
            var curOpenNode;
            //菜单切换处理
            $scope.toggleDealNew = function (scope, menu) {
                //定位当前结点的树对象
                var testDom = scope.$nodeScope;
                // if (!menu) {
                    if(testDom.collapsed == false){ // 如果打开当前节点
                        // 关闭已经打开的兄弟节点
                        testDom.siblings().forEach(function (item) {
                            if(item.collapsed == true){
                                item.$broadcast("angular-ui-tree:expand-all");
                            }
                        });
                        //打开当前节点
                        testDom.toggle()
                    } else {
                        // 关闭当前节点以及后代节点
                        testDom.$broadcast("angular-ui-tree:expand-all");
                    }

                // }
            };

            //设置菜单的不同背景
            $scope.menuColors = ["oneMenu", "twoMenu", "threeMenu", "fourMenu", "fiveMenu", "sixMenu"];
            finder.post("menuData", {}).then(
                function (data) {
                    if (data.content.length) {
                        $$menuServ.setMenuDate(data.content);
                        $scope.leftMenu = data.content;
                        angular.forEach($scope.leftMenu, function (item) {
                            if (item.image) {
                                item.image = $sce.trustAsHtml("<i class='iconfont' style='font-size:16px'>" + item.image + "</i>")
                            }
                        });
                        $scope.data = changeData($scope.leftMenu, '0');
                    }
                });
        }]);
});