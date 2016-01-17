/**
 * Created by Max on 28.10.2015.
 */
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../disposition/disposition.controller.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/SettingsService.ts" />
/// <reference path="../../typeDefinitions/sweetalert.d.ts"/>
/// <reference path="../../typeDefinitions/toastr.d.ts"/>
var DispositionService = (function () {
    function DispositionService(bestellungBerechnenService, $rootScope, ProgrammService, NewTeileService, NewBaumService, AuftragService, ArbeitsplatzService, BestellService, settingsService) {
        var _this = this;
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
        this.settingsService = settingsService;
        this.scope = $rootScope;
        this.map = this.settingsService.dispositionDefaultWerte;
        this.dispoP1rekursuiv(this.newBaumService.kinderBaum);
        this.dispoP2rekursuiv(this.newBaumService.damenBaum);
        this.dispoP3rekursuiv(this.newBaumService.herrenBaum);
        this.altLastenVerteilen(this.models);
        this.flag = false;
        this.aendern();
        $rootScope.$on('pc.programmaenderung', function (event) {
            _this.aendern();
        });
    }
    DispositionService.prototype.changeFlagTrue = function () {
        if (!this.flag) {
            toastr.error("Die Priorisierung der Aufträge wurde zurückgesetzt");
        }
        this.flag = true;
    };
    DispositionService.prototype.changeFlagFalse = function () {
        this.flag = false;
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
        //if(this.filter2(x.eTeil.id)==on null){
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
            if (isNaN(this.models[i].geplanterLagerstand) || this.models[i].geplanterLagerstand < 0 || angular.isUndefined(this.models[i].geplanterLagerstand)) {
                this.models[i].geplanterLagerstand = 0;
                toastr.error("Es dürfen nur ganze Zahlen eingegeben werden", "Ungültige Eingabe!");
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
        this.auftragService.auftraegeTemp = auftraege2;
        for (var i = 0; i < this.auftragService.auftraegeTemp.length; i++) {
            var x = this.auftragService.auftraegeTemp[i];
            x.arbeitsplatz_id = this.arbeitsplatzService.getArbeitsplatzId(x.erzeugnis_id);
        }
        this.arbeitsplatzService.reset();
        for (var i = 0; i < this.auftragService.auftraege.length; i++) {
            //console.log(this.auftragService.auftraege[i].erzeugnis_id);
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftragSetzten(this.auftragService.auftraege[i]);
        }
        this.auftragService.altLastenVerteilen(this.models);
    };
    DispositionService.prototype.auftraegeAktualisieren = function (auftraege) {
        this.auftragService.auftraegeSetzen(auftraege);
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
    return DispositionService;
})();
angular.module('app').factory('DispositionService', ['BestellungBerechnenService', '$rootScope', "ProgrammService", "NewTeileService", "NewBaumService", "AuftragService", "ArbeitsplatzService", "BestellService", "SettingsService", function (BestellungBerechnenService, $rootScope, ProgrammService, NewTeileService, NewBaumService, AuftragService, ArbeitsplatzService, BestellService, SettingsService) { return new DispositionService(BestellungBerechnenService, $rootScope, ProgrammService, NewTeileService, NewBaumService, AuftragService, ArbeitsplatzService, BestellService, SettingsService); }]);
