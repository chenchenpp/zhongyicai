define([
    'app',
    './menu.serv'
], function (app) {
    'use strict';
    app.controller('menuCtrl', ['$rootScope', '$scope', '$$menuServ', 'finder','$sce',
        function ($rootScope, $scope, $$menuServ, finder,$sce) {
            'use strict';
            $scope.menu = 'menu';
            $scope.isActive = true;
            $scope.leftFlag = true;
            $scope.navClick = function () {
                $scope.showNavMenu = !$scope.showNavMenu;
                $scope.isActive = !$scope.isActive;
                //$scope.leftFlag = !$scope.leftFlag;
                //$scope.rightFlag = !$scope.rightFlag;
            };
            $scope.navClickOpen = function () {
                $scope.showNavMenu = false;
                $scope.isActive = false;
                //$scope.leftFlag = true;
                //$scope.rightFlag = !$scope.rightFlag;
            }
            $scope.showNavMenu = true;
            $scope.$on('SHOWNAVMENU', function (event, toState) {
                $timeout(function () {
                    $scope.showNavMenu = !$scope.showNavMenu;
                });
            });

            //递归取菜单
            var changeData = function (data, id) {
                var result = [],temp;
                angular.forEach(data, function (item, index) {
                    if(item.actionURL=='main.index'){
                        item.childIsOpen=true;
                    }
                    if(item.upperId == id){
                        var obj = item;
                        temp = changeData(data, item.id);
                        if(temp.length > 0){
                            obj.nodes = temp;
                        }
                        result.push(obj);
                    }
                });
                return result
            }
            //处理当前子集节点与遍历节点是否有纵级关系
            var dealSubMenu = function (currentDomChild, checkDom) {
                var isRelation = false;
                $.each(currentDomChild, function (index, currentChild) {
                    if ((checkDom.$modelValue.menuId == currentChild.menuId)
                        || (checkDom.$modelValue.menuId == currentChild.upperMenuId)
                        || (checkDom.$modelValue.upperMenuId == currentChild.menuId)) {
                        isRelation = true;
                        return false;
                    } else if (currentDomChild.nodes && currentDomChild.nodes.length > 0) {
                        dealSubMenu(currentDomChild.nodes, checkDom);
                    }
                });
                return isRelation;
            };

            //处理纵向菜单(包括当前结点及当前结点到顶级结点的所有相关父节点)
            var dealDepthMenu = function (currentDomChild) {
                // var isRelation = false;
                //获取所有菜单
                var els = document.querySelectorAll('[ui-tree-node]');

                $.each(els, function (index, el) {
                    el = angular.element(el);
                    var checkDom = el.scope();

                    if (checkDom.$modelValue && currentDomChild && checkDom.$modelValue.menuId == currentDomChild.menuId) {
                        // isRelation = true;
                        // return false;
                        $scope.depthList.push(checkDom);
                        if (checkDom.$parentNodeScope != null) {//如果有父节点
                            dealDepthMenu(checkDom.$parentNodeScope.$modelValue, checkDom);//递归处理相关父节点
                        }
                    }
                });

                //子集有遍历
                // $.each(currentDomChild, function (index, currentChild) {
                //     if ((checkDom.$modelValue.menuId == currentChild.menuId)) {
                //         // isRelation = true;
                //         // return false;
                //         $scope.depthList.push(checkDom);
                //         if (currentDomChild.nodes && currentDomChild.nodes.length > 0) {
                //             dealSubMenuNew(currentDomChild.nodes, checkDom);
                //         }
                //     }
                // });
                // return isRelation;

            };

            //根据当前结点处理纵级横级菜单
            $scope.dealDepthHorList = function (currentDom) {
                $scope.depthList = [];
                $scope.horList = [];

                //处理纵向菜单
                dealDepthMenu(currentDom.$modelValue);
                //获取所有菜单
                var els = document.querySelectorAll('[ui-tree-node]');
                //处理横向菜单
                $.each(els, function (index, el) {
                    el = angular.element(el);
                    var checkDom = el.scope();
                    var isExist = false;
                    //排除纵向菜单
                    for (var i = 0; i < $scope.depthList.length; i++) {
                        if (checkDom.$modelValue.menuId == $scope.depthList[i].$modelValue.menuId) {
                            isExist = true;
                            return;
                        }
                    }
                    if (!isExist) {
                        $scope.horList.push(checkDom);
                    }
                });

                //console.log("纵向菜单 " , $scope.depthList.length);
                //console.log("横向菜单 ", $scope.horList.length);
            };

            //所有横级菜单折叠,不选中
            var dealHorToggleNoSelected = function () {
                $.each($scope.horList, function (index, hor) {
                    hor.$modelValue.childIsOpen = false;//设置当前节点不选中
                    if (!hor.collapsed) {//所有横级菜单折叠
                        hor.collapse();
                    }
                });
            };

            //设置纵级菜单选中
            var dealDepthSelectedStatus = function (status) {
                $.each($scope.depthList, function (index, depth) {
                    depth.$modelValue.childIsOpen = status;//设置当前节点选中或者未选中
                });
            };

            //设置兄弟节点只有一个被选中
            var siblingOnlySelectedOne = function (testDom) {
                $.each(testDom.siblings(), function (index, sibling) {
                    if (sibling.$modelValue.menuId == testDom.$modelValue.menuId) {
                        sibling.$modelValue.childIsOpen = true;//设置当前节点选中
                    } else {
                        sibling.$modelValue.childIsOpen = false;//设置其他节点未选中
                    }
                });
            };
            //菜单切换处理
            $scope.toggleDealNew = function (scope, menu) {
                //定位当前结点的树对象
                var testDom = scope.$parent.$nodeScope;

                //如果menu有值,则为有路由结点,需要设置当前结点及相关父类结点为选中状态,同时所有横级菜单折叠,不选中,
                //反之,无需设置当前结点及相关父类结点为选中状态,只需保证所有横级菜单折叠,不选中即可。
                if (menu) {
                    testDom.toggle();
                    //设置兄弟节点只有一个被选中
                    siblingOnlySelectedOne(testDom);

                    //根据当前结点处理纵级横级菜单
                    $scope.dealDepthHorList(testDom);

                    //设置相关纵级菜单选中,同时所有横级菜单折叠,不选中
                    //1.设置相关纵级菜单选中(参数true为选中,false为不选中)
                    //dealDepthSelectedStatus(true);
                    //2.所有横级菜单折叠,不选中
                    dealHorToggleNoSelected();

                } else {
                    testDom.toggle();
                    //根据当前结点处理纵级横级菜单
                    $scope.dealDepthHorList(testDom);
                    //设置相关纵级菜单不选中,同时所有横级菜单折叠,不选中
                    //1.设置相关纵级菜单选中(参数true为选中,false为不选中)
                    //dealDepthSelectedStatus(false);
                    //2.所有横级菜单折叠,不选中
                    dealHorToggleNoSelected();

                    //统一处理匹配路径的结点,并且返回设置纵级菜单选中
                    //1.查找到的匹配路由的结点◊
                    var dealSelectedRoute = function () {
                        var getDom = {};//查找到的匹配路由的结点
                        //获取所有菜单
                        var els = document.querySelectorAll('[ui-tree-node]');
                        //处理横向菜单
                        $.each(els, function (index, el) {
                            el = angular.element(el);
                            var checkDom = el.scope();
                            if (checkDom.$modelValue.url == $scope.currentURL.currentType) {
                                getDom = checkDom;
                                return false;
                            }
                        });
                        return getDom;
                    };

                    //2.根据当前结点处理纵级横级菜单
                    $scope.dealDepthHorList(dealSelectedRoute());

                    //设置相关纵级菜单选中,同时所有横级菜单折叠,不选中
                    //1.设置相关纵级菜单选中(参数true为选中,false为不选中)
                    //dealDepthSelectedStatus(true);
                }
            };


            //判断子节点是否打开,并更改父节点打开状态
            //function updateChildIsOpen(data,currentType){
            //    var result = false;
            //    if(data&&data.length>0){
            //        $.each(data,function(index,item){
            //            var childIsOpen = updateChildIsOpen(item.nodes,currentType);
            //            item.childIsOpen=childIsOpen;
            //            if(childIsOpen||item.url==currentType){
            //                item.childIsOpen = result =  true;
            //            }
            //        });
            //    }
            //    return result
            //}
            //外部调用
            //$scope.updateType_old = function(currentType){
            //    updateChildIsOpen($scope.data,currentType);
            //    console.log($scope.data);
            //};

            //设置菜单的不同背景
            $scope.menuColors = ["oneMenu", "twoMenu", "threeMenu", "fourMenu", "fiveMenu", "sixMenu"];
            // $scope.collapseAll = function () {
            //     $scope.$broadcast('angular-ui-tree:collapse-all');
            // };
            // $scope.collapseAll();//默认折叠
            /* *
             * 获取用户已登录信息
             * */
            finder.post("menuData", {}).then(

                function (answer) {
                    //debugger
                    console.log(answer);
                    if (answer.content.length) {
                        $$menuServ.setMenuDate(answer.content);
                        $scope.leftMenu = answer.content;
                        var icons = ['&#xe659;', '&#xe658;', '&#xe65a;']
                        var getimges = function (data) {
                            console.log(data)
                            data.iconLevel = !angular.isUndefined(data.iconLevel) ? data.iconLevel + 1 : 0;
                            var font = data.iconLevel == 0 ? '16px' : '15px';
                            angular.forEach(data, function (item) {
                                if (item.image) {
                                    item.image = $sce.trustAsHtml("<i class='iconfont' style='font-size:" + font + "'>" + icons[data.iconLevel % 3] + "</i>")
                                }
                                if (item.url == 'dashboard') {
                                    item.image = $sce.trustAsHtml("<i class='iconfont' style='font-size: 22px;margin-left: 18px'>&#xe680;</i>")
                                }
                                //if (item.iconLevel && item.childMenuList != 0) {
                                //    item.childMenuList.menuLevel = data.menuLevel;
                                //    getimges(item.childMenuList)
                                //}
                            });
                        }
                        getimges($scope.leftMenu);
                        $scope.data = changeData($scope.leftMenu,'0')
                        //localses.setObject('menuList', $scope.data)
                    }
                });
        }]);
});