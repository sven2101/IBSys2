/**
 * Created by Max on 07.05.2015.
 */
/// <reference path="./../angular/angular.d.ts"/>
/// <reference path="../../lib/angular/angular.min.js"/>
angular.module('AngularApp.laender', [])
    .controller('LaenderController', LaenderController);

    function LaenderController($http) {
        this.name="test";
    function get(){
        $http.get("http://www.w3schools.com/angular/customers.php")
        .success(function (response) { return response.records; })}
    }

