/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />
var AuftragService = (function () {
    function AuftragService(DispositionService) {
        this.dispositionService = DispositionService;
        this.auftraege = new Array();
        this.auftraegeAufMaschine = new Array();
        this.auftraegeInWarteschlange = new Array();
        this.auftraegeExport = new Array();
        this.auftraegeSetzen([]);
    }
    AuftragService.prototype.altLastenVerteilen = function () {
        for (var i = 0; i < this.auftraegeAufMaschine.length; i++) {
            for (var j = 0; j < this.dispositionService.models.length; j++) {
                if (this.dispositionService.models[j].eTeil.id == this.auftraegeAufMaschine[i].erzeugnis_id) {
                    this.dispositionService.models[j].auftragAufMaschine = this.auftraegeAufMaschine[i];
                }
            }
        }
        for (var j = 0; j < this.dispositionService.models.length; j++) {
            this.dispositionService.models[j].auftragInWarteschlange = [];
            for (var i = 0; i < this.auftraegeInWarteschlange.length; i++) {
                if (this.dispositionService.models[j].eTeil.id == this.auftraegeInWarteschlange[i].erzeugnis_id) {
                    this.dispositionService.models[j].auftragInWarteschlange.push(this.auftraegeInWarteschlange[i]);
                }
            }
        }
    };
    AuftragService.prototype.auftraegeSetzen = function (auftraege) {
        var x = this.mergeAuftraege(auftraege);
        this.auftraege = [];
        this.auftraegeExport = x;
        this.auftraege = this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege = this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege = this.auftraege.concat(x);
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
    return AuftragService;
})();
angular.module('app').factory('AuftragService', [function (DispositionService) { return new AuftragService(DispositionService); }]);
