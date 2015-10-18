/// <reference path="../../typeDefinitions/angular.d.ts" />

class KapazitaetsplanungController{
    service:ArbeitsplatzService;
    liste:Array<Teil>;
    test:ArbeitsplatzKnoten;

    constructor(){
        this.service=new ArbeitsplatzService();
        this.test=this.service.map[1];
        this.service.arbeitsplaetzeSetzen();
    }
    aendern(){
        this.test=this.service.map[1];
        //this.test=this.service.map[(<HTMLInputElement>document.getElementById("input1")).value];
    }







}

angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",[KapazitaetsplanungController]);

