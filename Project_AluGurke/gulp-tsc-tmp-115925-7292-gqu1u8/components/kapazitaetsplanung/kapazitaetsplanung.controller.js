/// <reference path="../../typeDefinitions/angular.d.ts" />
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController($scope, arpeitsplatzService, auftragsService) {
        this.$scope = $scope;
        this.arbeitsplatzService = arpeitsplatzService;
        this.auftragService = auftragsService;
    }
    KapazitaetsplanungController.prototype.aendern = function () {
        this.test = this.arbeitsplatzService.map[document.getElementById("input1").value];
    };
    KapazitaetsplanungController.prototype.auftraegeSetzen = function () {
        this.auftragService.auftraege.forEach(function (x) { return function (x) {
        }; });
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", ["$scope", "ArbeitsplatzService", "AuftragService", KapazitaetsplanungController]);
