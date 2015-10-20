/// <reference path="../../typeDefinitions/angular.d.ts" />
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController(service) {
        this.arbeitsplatzService = service;
    }
    KapazitaetsplanungController.prototype.aendern = function () {
        this.test = this.arbeitsplatzService.map[document.getElementById("input1").value];
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", ["ArbeitsplatzService", KapazitaetsplanungController]);
