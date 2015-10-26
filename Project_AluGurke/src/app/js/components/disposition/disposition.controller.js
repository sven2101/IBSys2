/// <reference path="../../typeDefinitions/angular.d.ts" />
var DispositionController = (function () {
    function DispositionController(scope, auftragsService, newTeileService) {
        this.$scope = scope;
        this.auftragsService = auftragsService;
        this.newTeileService = newTeileService;
        this.eTeile = newTeileService.alleErzeugnisse;
        this.eTeile.sort(function (a, b) { return a.id - b.id; });
        this.auftraege = new Array();
        this.map = {};
    }
    DispositionController.prototype.aendern = function () {
        this.map = {};
        this.auftraege = [];
        for (var i = 0; i < this.eTeile.length; i++) {
            var anzahl = Number(document.getElementById("input_" + this.eTeile[i].id).value);
            var split = Number(document.getElementById("select_" + this.eTeile[i].id).value);
            if (!isNaN(anzahl) && anzahl > 0 && this.eTeile[i].lagerMenge < anzahl) {
                var auftrag = new Auftrag(this.eTeile[i].id, anzahl - this.eTeile[i].lagerMenge, 1);
                this.map[this.eTeile[i].id] = auftrag;
                var x = 0;
                while ((anzahl - this.eTeile[i].lagerMenge - x) % split !== 0) {
                    x += 1;
                }
                anzahl = (anzahl - this.eTeile[i].lagerMenge - x) / split;
                for (var j = 0; j < split; j++) {
                    var auftrag2 = new Auftrag(this.eTeile[i].id, anzahl + x, 1);
                    if (anzahl > 0 || x > 0) {
                        this.auftraege.push(auftrag2);
                    }
                    x = 0;
                }
            }
        }
        this.auftragsService.auftraege = this.auftraege;
    };
    return DispositionController;
})();
angular.module("DispositionModule").controller("DispositionController", ["$scope", "AuftragService", "NewTeileService", DispositionController]);
