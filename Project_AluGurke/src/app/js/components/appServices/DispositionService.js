/**
 * Created by Max on 28.10.2015.
 */
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/AuftragService.ts" />
var DispositionService = (function () {
    function DispositionService(bestellungBerechnenService, $rootScope, ProgrammService, NewTeileService, NewBaumService, AuftragService, ArbeitsplatzService, BestellService) {
        this.programmService = ProgrammService;
        this.newTeileService = NewTeileService;
        this.newBaumService = NewBaumService;
        this.auftragService = AuftragService;
        this.bestellService = BestellService;
        this.dispositionP1 = new Array();
        this.dispositionP2 = new Array();
        this.dispositionP3 = new Array();
        this.models = new Array();
        this.arbeitsplatzService = ArbeitsplatzService;
        this.map = {};
        this.scope = $rootScope;
        this.bestellungBerechnenService = bestellungBerechnenService;
        this.x = this.bestellungBerechnenService.getBestellung(35, 1, 1, [100, 100, 100, 100]);
        //this.scope.$watch(this.programmService.getProgrammposition(1),alert("l�uft bei dir"));
        this.defaultWerteSetzten();
        this.dispoP1rekursuiv(this.newBaumService.kinderBaum);
        this.dispoP2rekursuiv(this.newBaumService.damenBaum);
        this.dispoP3rekursuiv(this.newBaumService.herrenBaum);
        this.altLastenVerteilen(this.models);
        this.aendern();
    }
    DispositionService.prototype.defaultWerteSetzten = function () {
        this.map[1] = 20;
        this.map[26] = 70;
        this.map[51] = 30;
        this.map[16] = 70;
        this.map[17] = 30;
        this.map[50] = 30;
        this.map[4] = 70;
        this.map[10] = 100;
        this.map[49] = 30;
        this.map[7] = 70;
        this.map[13] = 100;
        this.map[18] = 100;
        this.map[2] = 20;
        this.map[56] = 30;
        this.map[55] = 30;
        this.map[5] = 70;
        this.map[11] = 100;
        this.map[54] = 30;
        this.map[8] = 70;
        this.map[14] = 100;
        this.map[19] = 100;
        this.map[3] = 20;
        this.map[31] = 30;
        this.map[30] = 30;
        this.map[6] = 70;
        this.map[12] = 100;
        this.map[29] = 30;
        this.map[9] = 70;
        this.map[15] = 100;
        this.map[20] = 100;
    };
    DispositionService.prototype.dispoP1 = function () {
        var dispo = new Array();
        var wurzel = this.newBaumService.kinderBaum;
        this.rekursiv(wurzel, dispo);
        this.dispositionP1 = [];
        for (var i = 0; i < dispo.length; i++) {
            var temp = this.filter2(dispo[i].teil_id);
            if (temp == null) {
                var x = new DispositionModel(this.filter(dispo[i].teil_id), this.programmService.getProgrammposition(1), this.programmService.getDirectsalesPosition(1));
                this.dispositionP1.push(x);
                this.models.push(x);
            }
            else {
                this.dispositionP1.push(temp);
            }
        }
        this.dispositionP1.sort(function (a, b) { return a.eTeil.id - b.eTeil.id; });
    };
    DispositionService.prototype.dispoP2 = function () {
        var dispo = new Array();
        var wurzel = this.newBaumService.damenBaum;
        this.rekursiv(wurzel, dispo);
        this.dispositionP2 = [];
        for (var i = 0; i < dispo.length; i++) {
            var temp = this.filter2(dispo[i].teil_id);
            if (temp == null) {
                var x = new DispositionModel(this.filter(dispo[i].teil_id), this.programmService.getProgrammposition(2), this.programmService.getDirectsalesPosition(2));
                this.dispositionP2.push(x);
                this.models.push(x);
            }
            else {
                this.dispositionP2.push(temp);
            }
        }
        this.dispositionP2.sort(function (a, b) { return a.eTeil.id - b.eTeil.id; });
    };
    DispositionService.prototype.dispoP3 = function () {
        var dispo = new Array();
        var wurzel = this.newBaumService.herrenBaum;
        this.rekursiv(wurzel, dispo);
        this.dispositionP3 = [];
        for (var i = 0; i < dispo.length; i++) {
            var temp = this.filter2(dispo[i].teil_id);
            if (temp == null) {
                var x = new DispositionModel(this.filter(dispo[i].teil_id), this.programmService.getProgrammposition(3), this.programmService.getDirectsalesPosition(3));
                this.dispositionP3.push(x);
                this.models.push(x);
            }
            else {
                this.dispositionP3.push(temp);
            }
        }
        this.dispositionP3.sort(function (a, b) { return a.eTeil.id - b.eTeil.id; });
    };
    DispositionService.prototype.dispoP1rekursuiv = function (wurzel, oberModel) {
        if (oberModel === void 0) { oberModel = null; }
        var x = new DispositionModel(this.filter(wurzel.teil_id), this.programmService.getProgrammposition(1), this.programmService.getDirectsalesPosition(1));
        if (wurzel.teil_id != 1 || wurzel.teil_id != 2 || wurzel.teil_id != 3) {
            x.oberModel = oberModel;
        }
        x.geplanterLagerstand = this.map[x.eTeil.id];
        this.dispositionP1.push(x);
        //if(this.filter2(x.eTeil.id)==null){
        this.models.push(x);
        //}
        for (var i = 0; i < wurzel.bauteile.length; i++) {
            if (wurzel.bauteile[i].bauteile != null) {
                this.dispoP1rekursuiv(wurzel.bauteile[i], x);
            }
        }
    };
    DispositionService.prototype.dispoP2rekursuiv = function (wurzel, oberModel) {
        if (oberModel === void 0) { oberModel = null; }
        var x = new DispositionModel(this.filter(wurzel.teil_id), this.programmService.getProgrammposition(2), this.programmService.getDirectsalesPosition(2));
        if (wurzel.teil_id != 1 || wurzel.teil_id != 2 || wurzel.teil_id != 3) {
            x.oberModel = oberModel;
        }
        x.geplanterLagerstand = this.map[x.eTeil.id];
        this.dispositionP2.push(x);
        //if(this.filter2(x.eTeil.id)==null){
        this.models.push(x);
        //}
        for (var i = 0; i < wurzel.bauteile.length; i++) {
            if (wurzel.bauteile[i].bauteile != null) {
                this.dispoP2rekursuiv(wurzel.bauteile[i], x);
            }
        }
    };
    DispositionService.prototype.dispoP3rekursuiv = function (wurzel, oberModel) {
        if (oberModel === void 0) { oberModel = null; }
        var x = new DispositionModel(this.filter(wurzel.teil_id), this.programmService.getProgrammposition(3), this.programmService.getDirectsalesPosition(3));
        if (wurzel.teil_id != 1 || wurzel.teil_id != 2 || wurzel.teil_id != 3) {
            x.oberModel = oberModel;
        }
        x.geplanterLagerstand = this.map[x.eTeil.id];
        this.dispositionP3.push(x);
        //if(this.filter2(x.eTeil.id)==null){
        this.models.push(x);
        //}
        for (var i = 0; i < wurzel.bauteile.length; i++) {
            if (wurzel.bauteile[i].bauteile != null) {
                this.dispoP3rekursuiv(wurzel.bauteile[i], x);
            }
        }
    };
    DispositionService.prototype.filter = function (x) {
        var y = this.newTeileService.alleErzeugnisse;
        for (var i = 0; i < y.length; i++) {
            if (y[i].id == x) {
                return y[i];
            }
        }
    };
    DispositionService.prototype.filter2 = function (x) {
        for (var i = 0; i < this.models.length; i++) {
            if (this.models[i].eTeil.id == x) {
                return this.models[i];
            }
        }
        return null;
    };
    DispositionService.prototype.rekursiv = function (knoten, teile) {
        if (knoten.hatBauteile()) {
            for (var i = 0; i < knoten.bauteile.length; i++) {
                this.rekursiv(knoten.bauteile[i], teile);
            }
            teile.push(knoten);
        }
    };
    DispositionService.prototype.aendern = function () {
        var auftraege = new Array();
        var auftraegeMFV = new Array();
        var map;
        for (var i = 0; i < this.models.length; i++) {
            this.models[i].auftraege = [];
            if (isNaN(this.models[i].geplanterLagerstand)) {
                this.models[i].geplanterLagerstand = 0;
            }
            this.models[i].anzahl = Number(this.models[i].getProdProg()) + Number(this.models[i].getGeplanteLagermenge()) - (Number(this.models[i].getLagerMenge()) + Number(this.models[i].getMaterialAufMaschine() + Number(this.models[i].getWarteschlange())));
            if (this.models[i].anzahl <= 0 || isNaN(this.models[i].anzahl)) {
                this.models[i].anzahl = 0;
            }
            else {
                var x = this.models[i].anzahl;
                var y = 0;
                while (x % Number(this.models[i].split) != 0) {
                    x -= 1;
                    y += 1;
                }
                for (var j = 0; j < Number(this.models[i].split); j++) {
                    var auftrag = new Auftrag(this.models[i].eTeil.id, y + x / Number(this.models[i].split), this.models[i].periode);
                    auftrag.setPriortaet(this.models[i].prioritaet);
                    y = 0;
                    this.models[i].auftraege.push(auftrag);
                }
            }
        }
        for (var i = 0; i < this.models.length; i++) {
            auftraege = auftraege.concat(this.models[i].auftraege);
        }
        var auftraege2 = new Array();
        for (var i = 0; i < auftraege.length; i++) {
            var test = false;
            for (var j = 0; j < auftraege2.length; j++) {
                if (auftraege[i].erzeugnis_id == auftraege2[j].erzeugnis_id && this.filter(auftraege2[j].erzeugnis_id).mehrfachVerwendung) {
                    auftraege2[j].anzahl += auftraege[i].anzahl;
                    test = true;
                    break;
                }
            }
            if (!test) {
                auftraege2.push(auftraege[i]);
            }
        }
        this.auftragService.auftraegeSetzen(auftraege2);
        this.arbeitsplatzService.reset();
        for (var i = 0; i < this.auftragService.auftraege.length; i++) {
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftragSetzten(this.auftragService.auftraege[i]);
        }
        this.auftragService.altLastenVerteilen(this.models);
    };
    DispositionService.prototype.altLastenVerteilen = function (models) {
        for (var i = 0; i < this.auftragService.auftraegeAufMaschine.length; i++) {
            for (var j = 0; j < models.length; j++) {
                if (models[j].eTeil.id == this.auftragService.auftraegeAufMaschine[i].erzeugnis_id) {
                    models[j].auftragAufMaschine = this.auftragService.auftraegeAufMaschine[i];
                }
            }
        }
        for (var j = 0; j < models.length; j++) {
            models[j].auftragInWarteschlange = [];
            for (var i = 0; i < this.auftragService.auftraegeInWarteschlange.length; i++) {
                if (models[j].eTeil.id == this.auftragService.auftraegeInWarteschlange[i].erzeugnis_id) {
                    models[j].auftragInWarteschlange.push(this.auftragService.auftraegeInWarteschlange[i]);
                }
            }
        }
    };
    //Max was here
    DispositionService.prototype.bestellungenSuchen = function (teilId) {
        var temp = new Array();
        for (var i = 0; i < this.bestellService.zugangBestellungen.length; i++) {
            if (this.bestellService.zugangBestellungen[i].teil_id === teilId) {
                temp.push(this.bestellService.zugangBestellungen[i]);
            }
        }
        return temp;
    };
    //Max was here
    DispositionService.prototype.kaufTeilSuchen = function (teilId) {
        var temp = this.newTeileService.alleKaufteile;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].id === teilId) {
                return temp[i];
            }
        }
    };
    //Max was here
    DispositionService.prototype.timeLineGenerieren = function (kTeilId, aktuellePeriode, x, verbrauch) {
        if (verbrauch === void 0) { verbrauch = [500, 500, 500, 500]; }
        //kTeilId=35;
        var kTeil = this.kaufTeilSuchen(kTeilId);
        var multiplikator = x;
        var bestellungen = this.bestellungenSuchen(kTeilId);
        var timeline = Array();
        timeline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var periode = 1;
        var lagerstand = kTeil.lagerMenge + 400;
        for (var i = 0; i < bestellungen.length; i++) {
            var liefertermin = kTeil.wbz + multiplikator * kTeil.wbzAbw - (aktuellePeriode - bestellungen[i].bestellPeriode);
            timeline[Math.round(liefertermin * 5)] = bestellungen[i].menge;
        }
        for (var i = 0; i < timeline.length; i++) {
            lagerstand = lagerstand - Math.round(verbrauch[periode - 1] / 5);
            timeline[i] += lagerstand;
            lagerstand = timeline[i];
            if (i == 4 || i == 9 || i == 14 || i == 19) {
                periode++;
            }
        }
        return timeline;
    };
    DispositionService.prototype.reichweiteBerechenen = function (timeline) {
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
        return reichweite;
    };
    DispositionService.prototype.bestellungBerechnen = function (reichweite, kTeilId, multiplikator, timeline) {
        var kTeil = this.kaufTeilSuchen(kTeilId);
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
    DispositionService.prototype.bestellungenGenerieren = function (kTeilId, aktuellePeriode, x, verbrauch) {
        if (verbrauch === void 0) { verbrauch = [500, 500, 500, 500]; }
        var kTeil = this.kaufTeilSuchen(kTeilId);
        var multiplikator = x;
        var bestellungen = this.bestellungenSuchen(kTeilId);
        //bestellungen.push(new ZugangBestellung(35,false,42,500,1,null,0,0,0,0));
        bestellungen.push(new ZugangBestellung(35, false, 42, 900, 2, null, 0, 0, 0, 0));
        var timeline = Array();
        timeline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var periode = 1;
        var lagerstand = kTeil.lagerMenge + 400;
        for (var i = 0; i < bestellungen.length; i++) {
            var liefertermin = kTeil.wbz + multiplikator * kTeil.wbzAbw - (aktuellePeriode - bestellungen[i].bestellPeriode);
            timeline[Math.round(liefertermin * 5)] = bestellungen[i].menge;
        }
        for (var i = 0; i < timeline.length; i++) {
            lagerstand = lagerstand - Math.round(verbrauch[periode - 1] / 5);
            timeline[i] += lagerstand;
            lagerstand = timeline[i];
            if (i == 4 || i == 9 || i == 14 || i == 19) {
                periode++;
            }
        }
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
    return DispositionService;
})();
angular.module('app').factory('DispositionService', ['BestellungBerechnenService', '$rootScope', "ProgrammService", "NewTeileService", "NewBaumService", "AuftragService", "ArbeitsplatzService", "BestellService", function (BestellungBerechnenService, $rootScope, ProgrammService, NewTeileService, NewBaumService, AuftragService, ArbeitsplatzService, BestellService) { return new DispositionService(BestellungBerechnenService, $rootScope, ProgrammService, NewTeileService, NewBaumService, AuftragService, ArbeitsplatzService, BestellService); }]);
