/**
 * Created by Max on 28.10.2015.
 */
var DispositionService = (function () {
    function DispositionService(ProgrammService, NewTeileService, NewBaumService, AuftragService) {
        this.programmService = ProgrammService;
        this.newTeileService = NewTeileService;
        this.newBaumService = NewBaumService;
        this.auftragsService = AuftragService;
        this.dispositionP1 = new Array();
        this.dispositionP2 = new Array();
        this.dispositionP3 = new Array();
        this.models = new Array();
        this.dispoP1();
        this.dispoP2();
        this.dispoP3();
        this.aendern();
    }
    DispositionService.prototype.dispoP1 = function () {
        var dispo = new Array();
        var wurzel = this.newBaumService.kinderBaum;
        this.rekursiv(wurzel, dispo);
        this.dispositionP1 = [];
        for (var i = 0; i < dispo.length; i++) {
            this.dispositionP1.push(new DispositionModel(this.filter(dispo[i].teil_id), this.programmService.getProgrammposition(1)));
        }
        this.models = this.dispositionP1.concat(this.dispositionP2.concat(this.dispositionP3));
        this.dispositionP1.sort(function (a, b) { return a.eTeil.id - b.eTeil.id; });
    };
    DispositionService.prototype.dispoP2 = function () {
        var dispo = new Array();
        var wurzel = this.newBaumService.damenBaum;
        this.rekursiv(wurzel, dispo);
        this.dispositionP2 = [];
        for (var i = 0; i < dispo.length; i++) {
            this.dispositionP2.push(new DispositionModel(this.filter(dispo[i].teil_id), this.programmService.getProgrammposition(2)));
        }
        this.models = this.dispositionP1.concat(this.dispositionP2.concat(this.dispositionP3));
        this.dispositionP2.sort(function (a, b) { return a.eTeil.id - b.eTeil.id; });
    };
    DispositionService.prototype.dispoP3 = function () {
        var dispo = new Array();
        var wurzel = this.newBaumService.herrenBaum;
        this.rekursiv(wurzel, dispo);
        this.dispositionP3 = [];
        for (var i = 0; i < dispo.length; i++) {
            this.dispositionP3.push(new DispositionModel(this.filter(dispo[i].teil_id), this.programmService.getProgrammposition(3)));
        }
        this.models = this.dispositionP1.concat(this.dispositionP2.concat(this.dispositionP3));
        this.dispositionP3.sort(function (a, b) { return a.eTeil.id - b.eTeil.id; });
    };
    DispositionService.prototype.filter = function (x) {
        var y = this.newTeileService.alleErzeugnisse;
        for (var i = 0; i < y.length; i++) {
            if (y[i].id == x) {
                return y[i];
            }
        }
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
            this.models[i].anzahl = Number(this.models[i].getProdProg()) + Number(this.models[i].getGeplanteLagermenge()) - Number(this.models[i].getLagerMenge()) - Number(this.models[i].getMaterialAufMaschine() - Number(this.models[i].getWarteschlange()));
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
        this.auftragsService.auftraegeSetzen(auftraege);
    };
    return DispositionService;
})();
angular.module('app').factory('DispositionService', ["ProgrammService", "NewTeileService", "NewBaumService", "AuftragService", function (ProgrammService, NewTeileService, NewBaumService, AuftragService) { return new DispositionService(ProgrammService, NewTeileService, NewBaumService, AuftragService); }]);
