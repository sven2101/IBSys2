/**
 * Created by Max on 31.10.2015.
 */
/// <reference path="../appServices/ArbeitsplatzService.ts" />
/// <reference path="../appServices/DispositionService.ts"/>
/// <reference path="../kapazitaetsplanung/kapazitaetsplanung.controller.ts" />
var KapazitaetsplanungService = (function () {
    function KapazitaetsplanungService($rootScope, ArbeitsplatzService, AuftragService, DispositionService) {
        var _this = this;
        this.arbeitsplatzService = ArbeitsplatzService;
        this.auftragService = AuftragService;
        this.dispositionService = DispositionService;
        this.ergebnis = new Array();
        this.models = new Array();
        this.models.push(new KapazitaetModel(new Arbeitsplatz(5, 0, 0, 0)));
        this.$rootScope = $rootScope;
        this.$rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.onNeueDatei(dateiInhalt);
        });
        this.dispositionService.aendern();
        this.aendern();
    }
    KapazitaetsplanungService.prototype.onNeueDatei = function (dateiInhalt) {
        this.dispositionService.aendern();
        this.aendern();
    };
    KapazitaetsplanungService.prototype.aendern = function () {
        for (var i = 0; i < this.models.length; i++) {
            if (this.models[i].name[0] != "5") {
                if (isNaN(this.models[i].ueberstunden) || this.models[i].ueberstunden < 0 || this.models[i].anzahlSchichten == "3") {
                    this.models[i].ueberstunden = 0;
                }
                else if (this.models[i].ueberstunden > 240) {
                    this.models[i].ueberstunden = 240;
                }
                this.models[i].zeitVerfuegung = Number(this.models[i].anzahlSchichten) * 2400 + (Math.round(Number(this.models[i].ueberstunden * 5)));
            }
            else {
                this.models[i].zeitVerfuegung = 0;
            }
        }
        this.ergebnis = this.mergeArbeitsplaetze();
        this.models.sort(function (a, b) { return Number(a.name.split("_")[0]) - Number(b.name.split("_")[0]); });
        return this.models;
    };
    KapazitaetsplanungService.prototype.reset = function () {
        for (var i = 0; i < this.models.length; i++) {
            var x = this.models[i];
            x.anzahlSchichten = '1';
            x.ueberstunden = 0;
            x.zeitVerfuegung = 2400;
        }
    };
    KapazitaetsplanungService.prototype.zeitSetzten = function () {
        for (var i = 0; i < this.models.length; i++) {
            var model = this.models[i];
            if (model.arbeitsplatz.id === 5) {
                model.zeitVerfuegung = 0;
                continue;
            }
            var zeit = model.arbeitsplatz.arbeitszeit;
            model.ueberstunden = 0;
            if (zeit <= 2400) {
                model.anzahlSchichten = '1';
                model.zeitVerfuegung = 2400;
                continue;
            }
            else if (zeit <= 3600) {
                if ((zeit - 2400) * 0.9 < 2400 * 0.55) {
                    model.ueberstunden = Math.round((zeit - 2400) / 5);
                    model.anzahlSchichten = '1';
                    model.zeitVerfuegung = 2400 + model.ueberstunden * 5;
                    continue;
                }
                else {
                    model.anzahlSchichten = '2';
                    model.zeitVerfuegung = 4800;
                    continue;
                }
            }
            else if (zeit <= 4800) {
                model.anzahlSchichten = '2';
                model.zeitVerfuegung = 4800;
                continue;
            }
            else if (zeit <= 6000) {
                if ((zeit - 4800) * 0.9 < 2400 * 0.7) {
                    model.ueberstunden = Math.round((zeit - 4800) / 5);
                    model.anzahlSchichten = '2';
                    model.zeitVerfuegung = 4800 + model.ueberstunden * 5;
                    continue;
                }
                else {
                    model.anzahlSchichten = '3';
                    model.zeitVerfuegung = 7200;
                    continue;
                }
            }
            else {
                model.anzahlSchichten = '3';
                model.zeitVerfuegung = 7200;
                continue;
            }
        }
    };
    KapazitaetsplanungService.prototype.mergeArbeitsplaetze = function () {
        this.arbeitsplatzService.reset();
        for (var i = 0; i < this.auftragService.auftraege.length; i++) {
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftragSetzten(this.auftragService.auftraege[i]);
        }
        var liste = this.arbeitsplatzService.fertigungsreihen;
        var ergebnisListe = new Array();
        for (var i = 0; i < liste.length; i++) {
            var listeliste = liste[i].alleArbeitsplaetze();
            for (var j = 0; j < listeliste.length; j++) {
                var temp = this.search(ergebnisListe, listeliste[j]);
                if (temp === null) {
                    var x = new Arbeitsplatz(listeliste[j].id, listeliste[j].erzeugnis_id, 0, 0);
                    x.auftraege = listeliste[j].auftraege;
                    x.arbeitsplatzFremdeAuftraege = listeliste[j].arbeitsplatzFremdeAuftraege;
                    x.arbeitszeit = listeliste[j].arbeitszeit;
                    ergebnisListe.push(x);
                }
                else {
                    temp.arbeitszeit += listeliste[j].arbeitszeit;
                    temp.auftraege = temp.auftraege.concat(listeliste[j].auftraege);
                    temp.arbeitsplatzFremdeAuftraege = temp.arbeitsplatzFremdeAuftraege.concat(listeliste[j].arbeitsplatzFremdeAuftraege);
                    temp.name += "," + listeliste[j].erzeugnis_id;
                }
            }
        }
        for (var i = 0; i < ergebnisListe.length; i++) {
            var test = true;
            for (var j = 0; j < this.models.length; j++) {
                if (this.models[j].arbeitsplatz.name[0] == ergebnisListe[i].name[0] && this.models[j].arbeitsplatz.name[1] == ergebnisListe[i].name[1]) {
                    this.models[j].arbeitsplatz = ergebnisListe[i];
                    this.models[j].setName();
                    test = false;
                    break;
                }
            }
            if (test) {
                this.models.push(new KapazitaetModel(ergebnisListe[i]));
            }
        }
        return ergebnisListe;
    };
    KapazitaetsplanungService.prototype.contains = function (a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    };
    KapazitaetsplanungService.prototype.search = function (a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].id === obj.id) {
                return a[i];
            }
        }
        return null;
    };
    return KapazitaetsplanungService;
})();
angular.module('app').factory('KapazitaetsplanungService', ['$rootScope', "ArbeitsplatzService", "AuftragService", "DispositionService", function ($rootScope, ArbeitsplatzService, AuftragService, DispositionService) { return new KapazitaetsplanungService($rootScope, ArbeitsplatzService, AuftragService, DispositionService); }]);
