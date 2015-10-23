/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../model/Bestellung.ts" />
var ViewModel = (function () {
    function ViewModel(id, mfw, teileWert, wbz, wbzAbw, dm, bk, lm, v1, v2, v3, v4, rw) {
        this.id = id;
        this.mfw = mfw;
        this.teileWert = teileWert;
        this.wbz = wbz;
        this.wbzAbw = wbzAbw;
        this.discontMenge = dm;
        this.bestellKosten = bk;
        this.lagerMenge = lm;
        this.verbrauch1 = v1;
        this.verbrauch2 = v2;
        this.verbrauch3 = v3;
        this.verbrauch4 = v4;
        this.reichweite = rw;
    }
    return ViewModel;
})();
var BestellverwaltungsController = (function () {
    function BestellverwaltungsController(teileService, baumService, bestellService) {
        this.alleKaufTeile = new Array();
        this.baumService = baumService;
        this.bestellService = bestellService;
        this.vertriebsWuensche = [
            { kinder: 150, damen: 100, herren: 100 },
            { kinder: 150, damen: 100, herren: 100 },
            { kinder: 150, damen: 100, herren: 100 },
            { kinder: 150, damen: 100, herren: 100 }];
        this.createViewModel(teileService.alleKaufteile);
    }
    BestellverwaltungsController.prototype.createViewModel = function (kaufTeile) {
        for (var i = 0; i < kaufTeile.length; i++) {
            var t = kaufTeile[i];
            this.alleKaufTeile.push(new ViewModel(t.id, t.mehrfachVerwendung, t.teileWert, t.wiederBeschaffungsZeit, t.wbzAbweichung, t.discontMenge, t.bestellKosten, t.lagerMenge, this.getVerbrauch(t.id, 1), this.getVerbrauch(t.id, 2), this.getVerbrauch(t.id, 3), this.getVerbrauch(t.id, 4), t.lagerMenge / this.getVerbrauch(t.id, 1)));
        }
    };
    BestellverwaltungsController.prototype.getVerbrauch = function (id, periode) {
        var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.vertriebsWuensche[periode - 1].kinder;
        var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.vertriebsWuensche[periode - 1].damen;
        var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.vertriebsWuensche[periode - 1].herren;
        return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
    };
    BestellverwaltungsController.prototype.getAnzahlInBaum = function (baum, id) {
        var anzahl = 0;
        if (baum.teil_id === id) {
            anzahl += baum.anzahl;
        }
        if (baum.hatBauteile()) {
            for (var i = 0; i < baum.bauteile.length; i++) {
                anzahl += this.getAnzahlInBaum(baum.bauteile[i], id);
            }
        }
        return anzahl;
    };
    BestellverwaltungsController.prototype.mussBestellen = function (teil) {
        if (teil.wbz < (teil.reichweite - 1)) {
            return false;
        }
        return true;
    };
    return BestellverwaltungsController;
})();
angular.module('BestellverwaltungModule').controller('BestellverwaltungController', ['NewTeileService', 'NewBaumService', 'BestellService', BestellverwaltungsController]);
