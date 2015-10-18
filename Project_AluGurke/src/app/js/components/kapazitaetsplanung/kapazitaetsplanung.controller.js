/// <reference path="../../typeDefinitions/angular.d.ts" />
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController() {
        this.arbeitsplatzService = new ArbeitsplatzService();
        this.auftragsService = new AuftragService();
        for (var i = void 0; i < this.auftragsService.auftraege.length; i++) {
            this.arbeitsplatzService.auftragSetzen(this.auftragsService.auftraege[i]);
        }
    }
    KapazitaetsplanungController.prototype.aendern = function () {
        this.test = this.arbeitsplatzService.map[document.getElementById("input1").value];
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", [KapazitaetsplanungController]);
