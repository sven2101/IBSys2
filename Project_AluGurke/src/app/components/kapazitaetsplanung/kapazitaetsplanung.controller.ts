/// <reference path="../../typeDefinitions/angular.d.ts" />

class KapazitaetsplanungController{
    service:TeileService;
    liste:Array<Teil>;
    constructor(service){
        this.service=service;
    }
    arbeitsplaetzeSetzten(){
        this.liste=this.service.getListe();
    }


}

angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",[KapazitaetsplanungController]);