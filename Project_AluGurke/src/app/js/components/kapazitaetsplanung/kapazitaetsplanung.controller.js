/// <reference path="../../typeDefinitions/angular.d.ts" />
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController() {
        this.service = new ArbeitsplatzService();
        this.test = this.service.map[1];
        this.service.arbeitsplaetzeSetzen();
    }
    KapazitaetsplanungController.prototype.aendern = function () {
        this.test = this.service.map[1];
        //this.test=this.service.map[(<HTMLInputElement>document.getElementById("input1")).value];
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", [KapazitaetsplanungController]);
