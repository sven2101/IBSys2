/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
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
var KaufteilDispositionController = (function () {
    function KaufteilDispositionController(teileService, baumService, bestellService, programmService) {
        this.alleKaufTeile = new Array();
        this.baumService = baumService;
        this.bestellService = bestellService;
        this.programmService = programmService;
        this.createViewModel(teileService.alleKaufteile);
    }
    KaufteilDispositionController.prototype.createViewModel = function (kaufTeile) {
        for (var i = 0; i < kaufTeile.length; i++) {
            var t = kaufTeile[i];
            this.alleKaufTeile.push(new ViewModel(t.id, t.mehrfachVerwendung, t.teileWert, t.wiederBeschaffungsZeit, t.wbzAbweichung, t.discontMenge, t.bestellKosten, t.lagerMenge, this.getVerbrauch(t.id, 1), this.getVerbrauch(t.id, 2), this.getVerbrauch(t.id, 3), this.getVerbrauch(t.id, 4), this.getReichweite(t.lagerMenge, t.id)));
        }
    };
    KaufteilDispositionController.prototype.getVerbrauch = function (id, periode) {
        var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.programmService.getProgrammposition(1, periode).menge;
        var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.programmService.getProgrammposition(2, periode).menge;
        var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.programmService.getProgrammposition(3, periode).menge;
        return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
    };
    KaufteilDispositionController.prototype.getReichweite = function (lagerMenge, teil_id) {
        if (lagerMenge === 0) {
            return 0;
        }
        var gesamtVerbrauch = this.getVerbrauch(teil_id, 1) + this.getVerbrauch(teil_id, 2) + this.getVerbrauch(teil_id, 3) + this.getVerbrauch(teil_id, 4);
        if (gesamtVerbrauch === 0) {
            return Number.POSITIVE_INFINITY;
        }
        return lagerMenge / gesamtVerbrauch;
    };
    KaufteilDispositionController.prototype.getAnzahlInBaum = function (baum, id) {
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
    KaufteilDispositionController.prototype.mussBestellen = function (teil) {
        if ((teil.reichweite - teil.wbz) < 1) {
            return true;
        }
        return false;
    };
    KaufteilDispositionController.prototype.sollteBestellen = function (teil) {
        if (((teil.reichweite - teil.wbz) > 1) && ((teil.reichweite - teil.wbzAbw - teil.wbz) < 1)) {
            return true;
        }
        return false;
    };
    KaufteilDispositionController.prototype.sortieren = function (kriterium) {
        this.alleKaufTeile.sort(function (a, b) {
            var erg = a[kriterium] - b[kriterium];
            if (erg === 0) {
                return a['id'] - b['id'];
            }
            return erg;
        });
    };
    return KaufteilDispositionController;
})();
angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', 'ProgrammService', KaufteilDispositionController]);
