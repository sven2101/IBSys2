/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/DispositionService.ts" />

class FertigungsAuftraegeController{

    auftraege:Array<Auftrag>;
    auftragService:AuftragService;
    dispositionService:DispositionService;


    constructor( auftragService:AuftragService,dispositionService:DispositionService) {
        this.auftraege = new Array<Auftrag>();
        this.auftragService = auftragService;
        this.auftraege=this.auftragService.auftraegeExport;
        this.auftraege.sort(function(a:Auftrag, b:Auftrag){return a.erzeugnis_id-b.erzeugnis_id});
        this.dispositionService=dispositionService;
    }
}
angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController",["AuftragService","DispositionService",FertigungsAuftraegeController]);


