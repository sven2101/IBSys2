/// <reference path="../../typeDefinitions/angular.d.ts" />
var FertigungsAuftraegeController = (function () {
    function FertigungsAuftraegeController(auftragService) {
        this.auftraege = new Array();
        this.auftragService = auftragService;
        this.auftraege = this.auftragService.auftraegeExport;
    }
    return FertigungsAuftraegeController;
})();
angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController", ["AuftragService", FertigungsAuftraegeController]);
