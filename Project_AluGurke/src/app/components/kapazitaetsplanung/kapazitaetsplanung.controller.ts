/// <reference path="../../typeDefinitions/angular.d.ts" />

class KapazitaetsplanungController{
    arbeitsplatzService:ArbeitsplatzService;

    test:ArbeitsplatzKnoten;
    $scope;
    constructor($scope,service){
        this.$scope=$scope;
        this.arbeitsplatzService=service;
    }


    aendern(){
        this.test=this.arbeitsplatzService.map[(<HTMLInputElement>document.getElementById("input1")).value];
    }







}

angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",["$scope","ArbeitsplatzService",KapazitaetsplanungController]);

