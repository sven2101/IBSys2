/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />
var AuftragService = (function () {
    function AuftragService() {
        this.auftraege = new Array();
        this.auftraegeSetzen();
    }
    AuftragService.prototype.auftraegeSetzen = function () {
        this.auftraege = [
            new Auftrag(13, 100, 2),
            new Auftrag(13, 50, 1, 8),
            new Auftrag(18, 30, 2)
        ];
    };
    return AuftragService;
})();
angular.module('app').factory('AuftragService', [function () { return new AuftragService(); }]);
