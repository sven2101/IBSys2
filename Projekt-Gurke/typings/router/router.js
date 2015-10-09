/**
 * Created by Max on 07.05.2015.
 */
var module = angular.module("AngularApp", ["ngNewRouter", "AngularApp.navigation","AngularApp.profile","AngularApp.laender"]);
module.controller("MainController", function($router){

    $router.config([
        {path:"/", redirectTo: "navigation"}, // Maps the default path to navigation component.
        {path:"/navigation", component: "navigation"},
        {path:"/profile", component:  "profile"}, // Maps /profile to navigation component.
        {path:"/Bestellung",component:"bestellung"},
        {path:"/waehrung",component:"waehrung"},
        {path:"/laender",component:"laender"}
    ]);
});