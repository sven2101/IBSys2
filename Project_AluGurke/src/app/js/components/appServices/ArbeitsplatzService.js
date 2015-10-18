/**
 * Created by Max on 18.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Teil.ts" />
var ArbeitsplatzService = (function () {
    function ArbeitsplatzService() {
        this.arbeitsplaetze = new Array();
    }
    ArbeitsplatzService.prototype.arbeitsplaetzeSetzen = function () {
        this.arbeitsplaetze = [
            //E13
            new nArbeitsplatz(13, 13, 2, 0), new nArbeitsplatz(12, 13, 3, 0), new nArbeitsplatz(8, 13, 1, 15), new nArbeitsplatz(7, 13, 2, 20), new nArbeitsplatz(9, 13, 3, 15),
            //E14
            new nArbeitsplatz(13, 14, 2, 0), new nArbeitsplatz(12, 14, 3, 0), new nArbeitsplatz(8, 14, 2, 15), new nArbeitsplatz(7, 14, 2, 20), new nArbeitsplatz(9, 14, 3, 15),
        ];
        nArbeitsplatz[13] = this.getAP(13, 13, this.getAP(12, 13, this.getAP(8, 13, this.getAP(7, 13, this.getAP(9, 13)))));
        nArbeitsplatz[14] = this.getAP(13, 14, this.getAP(12, 14, this.getAP(8, 14, this.getAP(7, 14, this.getAP(9, 14)))));
    };
    ArbeitsplatzService.prototype.getAP = function (id, eTeil, nachfolger) {
        if (nachfolger === void 0) { nachfolger = null; }
        for (x in this.arbeitsplaetze) {
            if (function (x) { return x.id === id && x.eTeil === eTeil; }) {
                var temp = x.tiefeKopie();
                temp.nachfolger = nachfolger;
                return temp;
            }
        }
    };
    ArbeitsplatzService.prototype.auftragSetzten = function (auftrag) {
        var arbeitsplatz = this.map[auftrag.eTeil];
        if (auftrag.arbeitsplatz == null) {
            arbeitsplatz.auftraege.push(auftrag);
        }
        else {
            var temp = arbeitsplatz;
            while (temp.id !== auftrag.arbeitsplatz.id) {
                temp = temp.nachfolger;
            }
            temp.auftraege.push(auftrag);
        }
    };
    return ArbeitsplatzService;
})();
angular.module('app').factory('ArbeitsplatzService', [function () { return new ArbeitsplatzService(); }]);
