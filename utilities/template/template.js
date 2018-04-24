define(["angular"], function (angular) {
    angular.module("utilities.template", ['template/service/window.html']);
    angular.module("template/service/window.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/service/window.html",
            "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
            "    <div class=\"modal-dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
            "</div>");
    }]);
});
