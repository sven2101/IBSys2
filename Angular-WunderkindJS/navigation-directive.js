/**
 * Created by sadrick on 03.06.15.
 */
angular.module('ppsApp').directive('navigation', function (routeNavigation) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "navigation-directive.tpl.html",
        controller: function ($scope) {
            $scope.routes = routeNavigation.routes;
            $scope.activeRoute = routeNavigation.activeRoute;
        }
    };
});
ppsApp.controller('menuController', function($scope, sharedProperties){
    $scope.sprache = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Sprache";
        } else {
            return "Language"
        }
    };
    $scope.onButtonDE = function () {
        sharedProperties.setLanguageValue("DE");
    };
    $scope.onButtonEN = function () {
        sharedProperties.setLanguageValue("EN");
    };

    $scope.kapazitaetsplanung = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Kapazitätsplanung";
        } else {
            return "Capacity Planning"
        }
    };
    $scope.kaufteil = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Kaufteildisposition";
        } else {
            return "Purchase Planning"
        }
    };
    $scope.dispo1 = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Dispositionplanung P1";
        } else {
            return "Material Planning P1"
        }
    };
    $scope.dispo2 = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Dispositionplanung P2";
        } else {
            return "Material Planning P2"
        }
    };
    $scope.dispo3 = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Dispositionplanung P3";
        } else {
            return "Material Planning P3"
        }
    };
});