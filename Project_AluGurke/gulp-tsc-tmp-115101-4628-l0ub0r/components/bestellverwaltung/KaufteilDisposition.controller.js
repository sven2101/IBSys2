/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
var ViewModel = (function () {
    function ViewModel(v1, v2, v3, v4, rw, kaufTeil) {
        this.verbrauch1 = v1;
        this.verbrauch2 = v2;
        this.verbrauch3 = v3;
        this.verbrauch4 = v4;
        this.reichweite = rw;
        this.kaufTeil = kaufTeil;
    }
    return ViewModel;
})();
var KaufteilDispositionController = (function () {
    function KaufteilDispositionController(teileService, baumService, bestellService, programmService) {
        this.alleKaufTeile = [];
        this.baumService = baumService;
        this.bestellService = bestellService;
        this.teileService = teileService;
        this.programmService = programmService;
        this.createViewModel(teileService.alleKaufteile);
        this.selectedViewModel = this.alleKaufTeile[3];
        this.neuBestellung = new NeuBestellung(false, 0, 0, 0);
    }
    KaufteilDispositionController.prototype.createViewModel = function (kaufTeile) {
        for (var i = 0; i < kaufTeile.length; i++) {
            var t = kaufTeile[i];
            this.alleKaufTeile.push(new ViewModel(this.getVerbrauch(t.id, 1), this.getVerbrauch(t.id, 2), this.getVerbrauch(t.id, 3), this.getVerbrauch(t.id, 4), this.getReichweite(t.lagerMenge, t.id), t));
        }
    };
    KaufteilDispositionController.prototype.getVerbrauch = function (id, periode) {
        var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.programmService.getProgrammposition(1, periode).menge + this.programmService.getDirectsalesPosition(1).menge;
        var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.programmService.getProgrammposition(2, periode).menge + this.programmService.getDirectsalesPosition(2).menge;
        var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.programmService.getProgrammposition(3, periode).menge + this.programmService.getDirectsalesPosition(3).menge;
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
        var reichweite = 0;
        var menge = lagerMenge;
        for (var i = 1; i <= 4; i++) {
            if (menge - this.getVerbrauch(teil_id, i) >= 0) {
                reichweite += 1;
                menge -= this.getVerbrauch(teil_id, i);
            }
            else {
                reichweite += menge / this.getVerbrauch(teil_id, i);
            }
        }
        return lagerMenge / (gesamtVerbrauch / 4);
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
        if ((teil.reichweite - teil.kaufTeil.wbz) < 1) {
            return true;
        }
        return false;
    };
    KaufteilDispositionController.prototype.sollteBestellen = function (teil) {
        if (((teil.reichweite - teil.kaufTeil.wbz) > 1) && ((teil.reichweite - teil.kaufTeil.wbzAbw - teil.kaufTeil.wbz) < 1)) {
            return true;
        }
        return false;
    };
    KaufteilDispositionController.prototype.sortieren = function (kriterium) {
        this.alleKaufTeile.sort(function (a, b) {
            var erg;
            if (a.hasOwnProperty(kriterium)) {
                erg = a[kriterium] - b[kriterium];
            }
            else {
                erg = a.kaufTeil[kriterium] - b.kaufTeil[kriterium];
            }
            if (erg === 0) {
                return a.kaufTeil['id'] - b.kaufTeil['id'];
            }
            return erg;
        });
    };
    KaufteilDispositionController.prototype.select = function (model) {
        this.selectedViewModel = model;
        this.neuBestellung.teil_id = model.kaufTeil.id;
    };
    KaufteilDispositionController.prototype.neueBestellungErstellen = function () {
        if (this.neuBestellung.menge <= 0) {
            return;
        }
        this.bestellService.neuBestellungen['k' + this.selectedViewModel.kaufTeil.id].push(new NeuBestellung(this.neuBestellung.eil, this.neuBestellung.teil_id, this.neuBestellung.menge, this.getNeuBestellungsKosten(this.neuBestellung)));
        this.selectedViewModel.kaufTeil.teileWertNeu = this.getNeuenTeileWert();
        this.neuBestellung.menge = 0;
        this.neuBestellung.eil = false;
    };
    KaufteilDispositionController.prototype.deleteNeueBestellung = function (bestellung) {
        var neuBestellungen;
        neuBestellungen = this.bestellService.neuBestellungen['k' + this.selectedViewModel.kaufTeil.id];
        for (var i = 0; i < neuBestellungen.length; i++) {
            if (neuBestellungen[i].timestamp === bestellung.timestamp) {
                neuBestellungen.splice(i, 1);
            }
        }
        this.selectedViewModel.kaufTeil.teileWertNeu = this.getNeuenTeileWert();
    };
    KaufteilDispositionController.prototype.getNeuenTeileWert = function () {
        var bestandAlt = this.selectedViewModel.kaufTeil.lagerMenge;
        var teileWertAlt = this.selectedViewModel.kaufTeil.teileWert;
        var bestellKosten = 0;
        var bestellMenge = 0;
        var bestellungen = this.bestellService.neuBestellungen['k' + this.selectedViewModel.kaufTeil.id];
        for (var i = 0; i < bestellungen.length; i++) {
            bestellKosten += bestellungen[i].kosten;
            bestellMenge += bestellungen[i].menge;
        }
        var teileWertNeu = (bestandAlt * teileWertAlt + bestellKosten) / (bestandAlt * 1 + bestellMenge * 1);
        return Math.round(teileWertNeu * 100) / 100;
    };
    KaufteilDispositionController.prototype.getLaufendeBestellungen = function (teil_id) {
        var result = [];
        for (var i = 0; i < this.bestellService.laufendeBestellungen.length; i++) {
            if (this.bestellService.laufendeBestellungen[i].teil_id == teil_id) {
                result.push(this.bestellService.laufendeBestellungen[i]);
            }
        }
        return result;
    };
    KaufteilDispositionController.prototype.getLaufendeBestellungKosten = function (bestellung) {
        var kosten = 0;
        kosten += bestellung.menge * this.selectedViewModel.kaufTeil.preis;
        if (bestellung.menge >= this.selectedViewModel.kaufTeil.discontMenge && !bestellung.eil) {
            kosten = Math.round(kosten * 0.9 * 100) / 100;
        }
        if (bestellung.eil) {
            kosten += 10 * this.selectedViewModel.kaufTeil.bestellKosten;
        }
        else {
            kosten += this.selectedViewModel.kaufTeil.bestellKosten;
        }
        return kosten;
    };
    KaufteilDispositionController.prototype.getNeuBestellungsKosten = function (bestellung) {
        var materialKosten = 0;
        var bestellKosten = 0;
        if (bestellung.menge >= this.selectedViewModel.kaufTeil.discontMenge && !bestellung.eil) {
            materialKosten += bestellung.menge * this.selectedViewModel.kaufTeil.preis * 0.9;
        }
        else {
            materialKosten += bestellung.menge * this.selectedViewModel.kaufTeil.preis;
        }
        if (bestellung.eil) {
            bestellKosten += 10 * this.selectedViewModel.kaufTeil.bestellKosten;
        }
        else {
            bestellKosten += this.selectedViewModel.kaufTeil.bestellKosten;
        }
        return bestellKosten + materialKosten;
    };
    return KaufteilDispositionController;
})();
angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', 'ProgrammService', KaufteilDispositionController]);
