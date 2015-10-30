/// <reference path="../../typeDefinitions/angular.d.ts" />
var DispositionController = (function () {
    function DispositionController(auftragsService, newTeileService, dispositionService, newBaumService) {
        this.dispositionService = dispositionService;
        this.models = this.dispositionService.models;
        this.modelsP1 = this.dispositionService.dispositionP1;
        this.modelsP2 = this.dispositionService.dispositionP2;
        this.modelsP3 = this.dispositionService.dispositionP3;
        this.auftragsService = auftragsService;
        this.aendern();
    }
    DispositionController.prototype.aendern = function () {
        this.dispositionService.aendern();
    };
    return DispositionController;
})();
var DispositionModel = (function () {
    function DispositionModel(eTeil, x) {
        this.eTeil = eTeil;
        this.geplanterLagerstand = 100;
        this.split = "1";
        this.prioritaet = "normal";
        this.produktionsProgramm = x;
        this.anzahl = 666;
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
            x = Math.round(x / 3);
        }
        return x;
    };
    DispositionModel.prototype.getMaterialAufMaschine = function () {
        if (this.auftragAufMaschine == null) {
            return 0;
        }
        else {
            if (this.eTeil.mehrfachVerwendung) {
                return Math.round(this.auftragAufMaschine.anzahl / 3);
            }
            return this.auftragAufMaschine.anzahl;
        }
    };
    DispositionModel.prototype.getLagerMenge = function () {
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(this.eTeil.lagerMenge / 3);
        }
        else {
            return this.eTeil.lagerMenge;
        }
    };
    DispositionModel.prototype.getProdProg = function () {
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(this.produktionsProgramm.menge / 3);
        }
        else {
            return this.produktionsProgramm.menge;
        }
    };
    DispositionModel.prototype.getGeplanteLagermenge = function () {
        if (this.eTeil.mehrfachVerwendung) {
            //return Math.round(this.geplanterLagerstand/3);
            return this.geplanterLagerstand;
        }
        else {
            return this.geplanterLagerstand;
        }
    };
    return DispositionModel;
})();
angular.module("DispositionModule").controller("DispositionController", ["AuftragService", "NewTeileService", "DispositionService", "NewBaumService", DispositionController]);
