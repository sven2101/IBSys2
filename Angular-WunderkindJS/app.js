/**
 * Created by sadrick on 03.06.15.
 */
var ppsApp = angular.module('ppsApp', [
    'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pps.html",
        name: "Kapazitätsplanung"
    }).when("/kaufteil", {
        templateUrl: "kaufteil.html",
        name: "Kaufteildisposition"
    }).when("/p1", {
        templateUrl: "p1.html",
        name: "Dispositionsplanung P1"
    }).when("/p2", {
        templateUrl: "p2.html",
        name: "Dispositionsplanung P2"
    }).when("/p3", {
        templateUrl: "p3.html",
        name: "Dispositionsplanung P3"
    }).when("/input", {
        templateUrl: "xmlinput.html",
        name: "PPS Connect"
    }).otherwise({
        redirectTo: "/"
    });
}).run(function ($rootScope, $location, $route) {
    $rootScope.$location = $location;
    $rootScope.$route = $route;
    $rootScope.keys = Object.keys;
});


