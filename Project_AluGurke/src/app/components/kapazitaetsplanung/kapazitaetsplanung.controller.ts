/// <reference path="../../typeDefinitions/angular.d.ts" />

class KapazitaetsplanungController{
    arbeitsplatzService:ArbeitsplatzService;
    auftragsService:AuftragService;
    test:ArbeitsplatzKnoten;

    constructor(){
        this.arbeitsplatzService=new ArbeitsplatzService();
        this.auftragsService=new AuftragService();
        for(let i:number;i<this.auftragsService.auftraege.length;i++){
            this.arbeitsplatzService.auftragSetzen(this.auftragsService.auftraege[i]);
        }


    }


    aendern(){
        this.test=this.arbeitsplatzService.map[(<HTMLInputElement>document.getElementById("input1")).value];


    }







}

angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",[KapazitaetsplanungController]);

