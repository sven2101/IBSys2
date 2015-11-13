/**
 * Created by Max on 04.11.2015.
 */
/// <reference path="BestellService.ts" />
/// <reference path="NewTeileService.ts" />
var BestellungBerechnenService = (function () {
    function BestellungBerechnenService(BestellService, NewTeileService, $rootScope) {
        var _this = this;
        this.bestellService = BestellService;
        this.newTeileService = NewTeileService;
        this.$rootScope = $rootScope;
        this.aktuellePeriode = 1;
        this.$rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.onNeueDatei(dateiInhalt);
        });
    }
    BestellungBerechnenService.prototype.onNeueDatei = function (dateiInhalt) {
        this.aktuellePeriode = Number(dateiInhalt.results._period) + 1;
    };
    BestellungBerechnenService.prototype.getReichweite = function (kTeilId, multiplikator, verbrauch) {
        return this.reichweiteBerechenen(this.timeLineGenerieren(kTeilId, this.aktuellePeriode, multiplikator, verbrauch));
    };
    BestellungBerechnenService.prototype.getBestellung = function (kTeilId, multiplikator, verbrauch) {
        return this.bestellungenGenerieren(kTeilId, this.aktuellePeriode, multiplikator, verbrauch);
    };
    BestellungBerechnenService.prototype.getTimeLine = function (kTeilId, multiplikator, verbrauch) {
        return this.timeLineGenerieren(kTeilId, this.aktuellePeriode, multiplikator, verbrauch);
    };
    BestellungBerechnenService.prototype.zugangsBestellungenSuchen = function (teilId) {
        var result = [];
        for (var i = 0; i < this.bestellService.zugangBestellungen.length; i++) {
            if (this.bestellService.zugangBestellungen[i].teil_id == teilId) {
                result.push(this.bestellService.zugangBestellungen[i]);
            }
        }
        return result;
    };
    BestellungBerechnenService.prototype.laufendeBestellungenSuchen = function (teil_id) {
        var result = [];
        for (var i = 0; i < this.bestellService.laufendeBestellungen.length; i++) {
            if (this.bestellService.laufendeBestellungen[i].teil_id == teil_id) {
                result.push(this.bestellService.laufendeBestellungen[i]);
            }
        }
        return result;
    };
    BestellungBerechnenService.prototype.ausgehendeBestellungSuchen = function (teilId) {
        return this.bestellService.neuBestellungen['k' + teilId];
    };
    BestellungBerechnenService.prototype.kaufTeilSuchen = function (teilId) {
        var temp = this.newTeileService.alleKaufteile;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].id === teilId) {
                return temp[i];
            }
        }
    };
    BestellungBerechnenService.prototype.timeLineGenerieren = function (kTeilId, aktuellePeriode, multiplikator, verbrauch) {
        var kTeil = this.kaufTeilSuchen(kTeilId);
        var zugangBestellungen = this.zugangsBestellungenSuchen(kTeilId);
        var laufendeBestellungen = this.laufendeBestellungenSuchen(kTeilId);
        var ausgehendeBestellungen = this.ausgehendeBestellungSuchen(kTeilId);
        var timeline = Array();
        timeline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var lagerstand = kTeil.lagerMenge;
        for (var i = 0; i < zugangBestellungen.length; i++) {
            if (zugangBestellungen[i].zeit.periode == aktuellePeriode) {
                timeline[0] += Number(zugangBestellungen[i].menge);
            }
        }
        for (var i = 0; i < laufendeBestellungen.length; i++) {
            var liefertermin = 0;
            if (laufendeBestellungen[i].eil == true) {
                liefertermin = Math.round(kTeil.wbz / 2);
            }
            else {
                liefertermin = kTeil.wbz + multiplikator * kTeil.wbzAbw - (aktuellePeriode - laufendeBestellungen[i].periode);
            }
            if (liefertermin <= 4) {
                if (liefertermin * 5 < 0) {
                    timeline[0] += Number(laufendeBestellungen[i].menge);
                }
                else {
                    timeline[Math.round(liefertermin * 5)] += Number(laufendeBestellungen[i].menge);
                }
            }
        }
        for (var i = 0; i < ausgehendeBestellungen.length; i++) {
            var liefertermin = 0;
            if (ausgehendeBestellungen[i].eil == true) {
                liefertermin = Math.round(kTeil.wbz / 2);
            }
            else {
                liefertermin = kTeil.wbz + multiplikator * kTeil.wbzAbw - (aktuellePeriode - ausgehendeBestellungen[i].periode);
            }
            if (liefertermin <= 4) {
                if (liefertermin * 5 < 0) {
                    timeline[0] += Number(ausgehendeBestellungen[i].menge);
                }
                else {
                    timeline[Math.round(liefertermin * 5)] += Number(ausgehendeBestellungen[i].menge);
                }
            }
        }
        var woche = 1;
        for (var i = 0; i < timeline.length; i++) {
            lagerstand = lagerstand - Math.round(verbrauch[woche - 1] / 5);
            timeline[i] += lagerstand;
            lagerstand = timeline[i];
            if (i == 4 || i == 9 || i == 14 || i == 19) {
                woche++;
            }
        }
        return timeline;
    };
    BestellungBerechnenService.prototype.reichweiteBerechenen = function (timeline) {
        var reichweite = 0;
        for (var i = 0; i < timeline.length; i++) {
            if (timeline[i] < 0) {
                if (i < timeline.length - 1) {
                    if (timeline[i + 1] < 0) {
                        break;
                    }
                }
            }
            else {
                reichweite += 0.2;
            }
        }
        reichweite = Math.round(reichweite * 100) / 100;
        return reichweite;
    };
    BestellungBerechnenService.prototype.bestellungenGenerieren = function (kTeilId, aktuellePeriode, multiplikator, verbrauch) {
        var kTeil = this.kaufTeilSuchen(kTeilId);
        var timeline = this.timeLineGenerieren(kTeilId, aktuellePeriode, multiplikator, verbrauch);
        var reichweite = this.reichweiteBerechenen(timeline);
        if (reichweite < kTeil.wbz + multiplikator * kTeil.wbzAbw) {
            //Eil
            var menge = 0;
            for (var i = reichweite * 5; i < timeline.length && i < (reichweite + kTeil.wbz + multiplikator * kTeil.wbzAbw) * 5; i++) {
                if (timeline[Math.round(i)] < 0) {
                    menge += timeline[Math.round(i)] * -1;
                }
            }
            if (menge * 2 > kTeil.discontMenge && menge < kTeil.discontMenge) {
                menge = kTeil.discontMenge;
            }
            return new NeuBestellung(true, kTeilId, menge, 0);
        }
        if (reichweite - 1 < kTeil.wbz + multiplikator * kTeil.wbzAbw) {
            //Normal
            var menge = 0;
            for (var i = reichweite * 5; i < timeline.length && i < (reichweite + kTeil.wbz + multiplikator * kTeil.wbzAbw) * 5; i++) {
                if (timeline[Math.round(i)] < 0) {
                    menge += timeline[Math.round(i)] * -1;
                }
            }
            if (menge * 2 > kTeil.discontMenge && menge < kTeil.discontMenge) {
                menge = kTeil.discontMenge;
            }
            return new NeuBestellung(false, kTeilId, menge, 0);
        }
        return null;
    };
    return BestellungBerechnenService;
})();
angular.module('app').factory('BestellungBerechnenService', ['BestellService', 'NewTeileService', '$rootScope', function (BestellService, NewTeileService, $rootScope) { return new BestellungBerechnenService(BestellService, NewTeileService, $rootScope); }]);
