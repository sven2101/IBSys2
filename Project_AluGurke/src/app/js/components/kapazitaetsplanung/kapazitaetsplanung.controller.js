/// <reference path="../../typeDefinitions/angular.d.ts" />
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController($scope, arpeitsplatzService, auftragsService) {
        this.$scope = $scope;
        this.arbeitsplatzService = arpeitsplatzService;
        this.auftragService = auftragsService;
        this.ergebnisListe = new Array();
        this.arbeitsplatzService.reset();
        this.auftraegeSetzen();
        this.ergebnisListe = this.mergeArbeitsplaetze();
    }
    KapazitaetsplanungController.prototype.aendern = function () {
        this.test = this.arbeitsplatzService.map[document.getElementById("input1").value];
    };
    KapazitaetsplanungController.prototype.auftraegeSetzen = function () {
        for (var i = 0; i < this.auftragService.auftraege.length; i++) {
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftraegSetzten(this.auftragService.auftraege[i]);
        }
    };
    KapazitaetsplanungController.prototype.mergeArbeitsplaetze = function () {
        var liste = this.arbeitsplatzService.fertigungsreihen;
        var ergebnisListe = new Array();
        for (var i = 0; i < liste.length; i++) {
            var listeliste = liste[i].alleArbeitsplaetze();
            for (var j = 0; j < listeliste.length; j++) {
                var temp = this.search(ergebnisListe, listeliste[j]);
                if (temp === null) {
                    var x = new Arbeitsplatz(listeliste[j].id, listeliste[j].erzeugnis_id, 0, 0);
                    x.auftraege = listeliste[j].auftraege;
                    x.arbeitsplatzFremdeAuftraege = listeliste[j].arbeitsplatzFremdeAuftraege;
                    x.arbeitszeit = listeliste[j].arbeitszeit;
                    ergebnisListe.push(x);
                }
                else {
                    temp.arbeitszeit += listeliste[j].arbeitszeit;
                    temp.auftraege = temp.auftraege.concat(listeliste[j].auftraege);
                    temp.arbeitsplatzFremdeAuftraege = temp.arbeitsplatzFremdeAuftraege.concat(listeliste[j].arbeitsplatzFremdeAuftraege);
                    temp.name += "," + listeliste[j].erzeugnis_id;
                }
            }
        }
        return ergebnisListe;
    };
    KapazitaetsplanungController.prototype.contains = function (a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    };
    KapazitaetsplanungController.prototype.search = function (a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].id === obj.id) {
                return a[i];
            }
        }
        return null;
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", ["$scope", "ArbeitsplatzService", "AuftragService", KapazitaetsplanungController]);
