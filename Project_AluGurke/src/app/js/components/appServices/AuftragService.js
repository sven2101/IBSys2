/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="NewTeileService.ts" />
/// <reference path="NewBaumService.ts" />
var AuftragService = (function () {
    function AuftragService($rootScope, teileService, baumService) {
        var _this = this;
        this.auftraege = new Array();
        this.auftraegeAufMaschine = new Array();
        this.auftraegeInWarteschlange = new Array();
        this.auftraegeExport = new Array();
        this.auftraegeTemp = new Array();
        this.$rootScope = $rootScope;
        this.$rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.onNeueDatei(dateiInhalt);
        });
        this.auftraegeSetzen([]);
        this.teileService = teileService;
        this.baumService = baumService;
    }
    AuftragService.prototype.getAktuellenKaufTeilVerbrauch = function (kaufTeilId) {
        var gesamtVerbrauch = 0;
        for (var i = 0; i < this.auftraegeExport.length; i++) {
            var erzeugnis = this.auftraegeExport[i].erzeugnis_id;
            var erzeugnisKnoten = this.baumService.getKnoten(erzeugnis);
            if (erzeugnisKnoten.hatBestimmtesBauteil(kaufTeilId)) {
                var anzahlVerwendet = this.getAnzahlVonKaufTeilInErzeugnis(erzeugnisKnoten, kaufTeilId);
                gesamtVerbrauch += anzahlVerwendet * this.auftraegeExport[i].anzahl;
            }
        }
        return gesamtVerbrauch;
    };
    AuftragService.prototype.getAnzahlVonKaufTeilInErzeugnis = function (erzeugnisKnoten, kaufTeilId) {
        var anzahlVerwendet = 0;
        for (var x = 0; x < erzeugnisKnoten.bauteile.length; x++) {
            if (erzeugnisKnoten.bauteile[x].teil_id === kaufTeilId) {
                anzahlVerwendet = erzeugnisKnoten.bauteile[x].anzahl;
            }
        }
        return anzahlVerwendet;
    };
    AuftragService.prototype.getVerbrauchEteil = function (eTeil_id) {
        var verbrauch = 0;
        for (var i = 0; i < this.auftraegeExport.length; i++) {
            if (this.auftraegeExport[i].erzeugnis_id == eTeil_id) {
                verbrauch += this.auftraegeExport[i].anzahl;
            }
        }
        return verbrauch;
    };
    AuftragService.prototype.onNeueDatei = function (dateiInhalt) {
        this.updateAuftraegeInWarteschlange(dateiInhalt.results.waitinglistworkstations.workplace);
        this.updateAuftraegeAufMaschine(dateiInhalt.results.ordersinwork.workplace);
    };
    AuftragService.prototype.updateAuftraegeInWarteschlange = function (arbeitsplaetze) {
        this.auftraegeInWarteschlange = [];
        for (var i = 0; i < arbeitsplaetze.length; i++) {
            if (arbeitsplaetze[i].hasOwnProperty("waitinglist")) {
                if (Array.isArray(arbeitsplaetze[i].waitinglist)) {
                    for (var j = 0; j < arbeitsplaetze[i].waitinglist.length; j++) {
                        var x = arbeitsplaetze[i].waitinglist[j];
                        this.auftraegeInWarteschlange.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)));
                    }
                }
                else {
                    var x = arbeitsplaetze[i].waitinglist;
                    this.auftraegeInWarteschlange.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)));
                }
            }
        }
    };
    AuftragService.prototype.updateAuftraegeAufMaschine = function (arbeitsplaetze) {
        this.auftraegeAufMaschine = [];
        for (var i = 0; i < arbeitsplaetze.length; i++) {
            var x = arbeitsplaetze[i];
            this.auftraegeAufMaschine.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)));
        }
    };
    AuftragService.prototype.auftraegeSetzen = function (auftraege) {
        //let x=this.mergeAuftraege(auftraege);
        this.auftraege = [];
        this.auftraegeExport = auftraege;
        this.auftraege = this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege = this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege = this.auftraege.concat(auftraege);
    };
    AuftragService.prototype.mergeAuftraege = function (auftraege) {
        var temp = new Array();
        var temp2 = new Array();
        for (var i = 0; i < auftraege.length; i++) {
            if (auftraege[i].erzeugnis_id == 16 || auftraege[i].erzeugnis_id == 17 || auftraege[i].erzeugnis_id == 26) {
                var x = this.contains(temp, auftraege[i]);
                if (x == null) {
                    temp.push(auftraege[i]);
                }
                else {
                    if (auftraege[i].prioritaet < x.prioritaet) {
                        x.prioritaet = auftraege[i].prioritaet;
                    }
                    x.anzahl += auftraege[i].anzahl;
                }
            }
            else {
                temp2.push(auftraege[i]);
            }
        }
        return temp.concat(temp2);
    };
    AuftragService.prototype.contains = function (auftraege, auftrag) {
        for (var i = 0; i < auftraege.length; i++) {
            if (auftraege[i].erzeugnis_id == auftrag.erzeugnis_id) {
                return auftraege[i];
            }
        }
        return null;
    };
    AuftragService.prototype.altLastenVerteilen = function (models) {
        for (var i = 0; i < this.auftraegeAufMaschine.length; i++) {
            for (var j = 0; j < models.length; j++) {
                if (models[j].eTeil.id == this.auftraegeAufMaschine[i].erzeugnis_id) {
                    models[j].auftragAufMaschine = this.auftraegeAufMaschine[i];
                }
            }
        }
        for (var j = 0; j < models.length; j++) {
            models[j].auftragInWarteschlange = [];
            for (var i = 0; i < this.auftraegeInWarteschlange.length; i++) {
                if (models[j].eTeil.id == this.auftraegeInWarteschlange[i].erzeugnis_id) {
                    models[j].auftragInWarteschlange.push(this.auftraegeInWarteschlange[i]);
                }
            }
        }
    };
    return AuftragService;
})();
angular.module('app').factory('AuftragService', ['$rootScope', 'NewTeileService', 'NewBaumService', function ($rootScope, teileService, baumService) { return new AuftragService($rootScope, teileService, baumService); }]);
