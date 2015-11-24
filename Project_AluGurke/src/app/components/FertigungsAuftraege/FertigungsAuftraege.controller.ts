/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/FertigungsAuftraegeService.ts" />

class FertigungsAuftraegeController{

    models:Array<FertigungsAuftraegeModel>;
    fertigungsAuftraegeService:FertigungsAuftraegeService;
   


    constructor(fertigungsAuftraegeService:FertigungsAuftraegeService) { 
        this.fertigungsAuftraegeService = fertigungsAuftraegeService;       
        //this.models.sort(function(a:FertigungsAuftraegeModel, b:FertigungsAuftraegeModel){return a.erzeugnis_id-b.erzeugnis_id});
        this.models=this.fertigungsAuftraegeService.models;
        this.aendern();   
    }
    
    aendern(){
        this.fertigungsAuftraegeService.aendern();

    }
}
class FertigungsAuftraegeModel{
    auftrag:Auftrag;
    
    constructor(auftrag:Auftrag){
        this.auftrag=auftrag;
    }
    
}

angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController",["FertigungsAuftraegeService",FertigungsAuftraegeController]);


