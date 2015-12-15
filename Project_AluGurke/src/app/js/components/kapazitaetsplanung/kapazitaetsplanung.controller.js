/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellungBerechnenService.ts" />
/// <reference path="../appServices/SettingsService.ts" />
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController(KapazitaetsplanungService, dispositionService, bestellungBerechnenService, settingsService) {
        this.models = new Array();
        this.ergebnis = new Array();
        this.kapazitaetsplanungService = KapazitaetsplanungService;
        this.dispositionService = dispositionService;
        this.models = this.kapazitaetsplanungService.models;
        this.settingsService = settingsService;
        this.ergebnis = this.kapazitaetsplanungService.ergebnis;
        this.bestellungBerechnenService = bestellungBerechnenService;
        this.aendern();
    }
    KapazitaetsplanungController.prototype.aendern = function () {
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();
    };
    KapazitaetsplanungController.prototype.berechnen = function () {
        this.kapazitaetsplanungService.zeitSetzten();
    };
    KapazitaetsplanungController.prototype.reset = function () {
        this.kapazitaetsplanungService.reset();
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", ["KapazitaetsplanungService", "DispositionService", "BestellungBerechnenService", "SettingsService", KapazitaetsplanungController]);
var KapazitaetModel = (function () {
    function KapazitaetModel(arbeitsplatz) {
        this.name = arbeitsplatz.name;
        this.anzahlSchichten = "1";
        this.ueberstunden = 0;
        this.arbeitsplatz = arbeitsplatz;
        this.zeitVerfuegung = 2400;
        this.eTeile = new Array();
        this.setName();
    }
    KapazitaetModel.prototype.setName = function () {
        this.eTeile = [];
        if (this.name[1] == "_") {
            var temp = name.substring(1, name.length).split(",");
            name = name.substring(0, 1);
            for (var i = 0; i < temp.length; i++) {
                this.eTeile.push(Number(temp[i]));
            }
        }
        else {
            var temp = name.substring(2, name.length).split(",");
            name = name.substring(0, 2);
            for (var i = 0; i < temp.length; i++) {
                this.eTeile.push(Number(temp[i]));
            }
        }
    };
    return KapazitaetModel;
})();
