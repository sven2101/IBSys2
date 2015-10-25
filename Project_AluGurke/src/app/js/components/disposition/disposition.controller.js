/// <reference path="../../typeDefinitions/angular.d.ts" />
var DispositionController = (function () {
    function DispositionController(scope, auftragsService, newTeileService) {
        this.$scope = scope;
        this.auftragsService = auftragsService;
        this.newTeileService = newTeileService;
        this.eTeile = newTeileService.alleErzeugnisse;
        this.eTeile.sort(function (a, b) { return a.id - b.id; });
    }
    DispositionController.prototype.aendern = function (x) {
        document.getElementById("input_1").value = "test";
    };
    return DispositionController;
})();
angular.module("DispositionModule").controller("DispositionController", ["$scope", "AuftragService", "NewTeileService", DispositionController]);
