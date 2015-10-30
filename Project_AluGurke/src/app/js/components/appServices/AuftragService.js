/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />
var AuftragService = (function () {
    function AuftragService(DispositionService) {
        this.dispositionService = DispositionService;
        this.auftraege = new Array();
        this.auftraegeAufMaschine = new Array();
        this.auftraegeInWarteschlange = new Array();
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
        this.auftraege = [];
        this.auftraege = this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege = this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege = this.auftraege.concat(auftraege);
    };
    return AuftragService;
})();
angular.module('app').factory('AuftragService', [function (DispositionService) { return new AuftragService(DispositionService); }]);
