/// <reference path="../../typeDefinitions/angular.d.ts" />
var DispositionController = (function () {
    function DispositionController(auftragsService, newTeileService, dispositionService, newBaumService, kapazitaetsplanungService) {
        this.dispositionService = dispositionService;
        this.kapazitaetsplanungService = kapazitaetsplanungService;
        this.models = this.dispositionService.models;
        this.modelsP1 = this.dispositionService.dispositionP1;
        this.modelsP2 = this.dispositionService.dispositionP2;
        this.modelsP3 = this.dispositionService.dispositionP3;
        this.auftragsService = auftragsService;
        this.aendern();
    }
    DispositionController.prototype.aendern = function () {
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();
    };
    return DispositionController;
})();
var DispositionModel = (function () {
    function DispositionModel(eTeil, x) {
        this.eTeil = eTeil;
        this.geplanterLagerstand = 50;
        this.split = "1";
        this.prioritaet = "normal";
        this.produktionsProgramm = x;
        this.anzahl = 0;
        this.periode = 1;
        this.auftraege = new Array();
        this.auftragInWarteschlange = new Array();
    }
    DispositionModel.prototype.getWarteschlange = function () {
        var x = 0;
        for (var i = 0; i < this.auftragInWarteschlange.length; i++) {
            x += this.auftragInWarteschlange[i].anzahl;
        }
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(x / 3);
        }
        return x;
    };
    DispositionModel.prototype.getMaterialAufMaschine = function () {
        if (this.auftragAufMaschine == null) {
            return 0;
        }
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(this.auftragAufMaschine.anzahl / 3);
        }
        return this.auftragAufMaschine.anzahl;
    };
    DispositionModel.prototype.getLagerMenge = function () {
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(this.eTeil.lagerMenge / 3);
        }
        return this.eTeil.lagerMenge;
    };
    DispositionModel.prototype.getProdProg = function () {
        if (this.oberModel == null) {
            return this.produktionsProgramm.menge;
        }
        else {
            return this.oberModel.anzahl;
        }
    };
    DispositionModel.prototype.getGeplanteLagermenge = function () {
        return this.geplanterLagerstand;
    };
    return DispositionModel;
})();
angular.module("DispositionModule").controller("DispositionController", ["AuftragService", "NewTeileService", "DispositionService", "NewBaumService", "KapazitaetsplanungService", DispositionController]);
