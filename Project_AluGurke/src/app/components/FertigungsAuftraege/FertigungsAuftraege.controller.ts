/// <reference path="../../typeDefinitions/angular.d.ts" />

class FertigungsAuftraegeController{

    auftraege:Array<Auftrag>;
    auftragService:AuftragService;


    constructor( auftragService:AuftragService) {
        this.auftraege = new Array<Auftrag>();
        this.auftragService = auftragService;
        this.auftraege=this.auftragService.auftraegeExport;
    }
}
angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController",["AuftragService",FertigungsAuftraegeController]);


