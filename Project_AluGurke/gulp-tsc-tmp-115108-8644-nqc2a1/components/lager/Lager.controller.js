/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
var LagerController = (function () {
    function LagerController(teileService) {
        this.alleErzeugnisse = teileService.alleErzeugnisse;
        this.alleKaufTeile = teileService.alleKaufteile;
        this.showErzeugnisse = true;
        this.showKaufTeile = true;
        this.erzeugeData();
    }
    LagerController.prototype.erzeugeData = function () {
        this.data = [];
        for (var i = 0; i < this.alleErzeugnisse.length; i++) {
            this.data.push(Math.round((this.alleErzeugnisse[i].lagerMenge * this.alleErzeugnisse[i].teileWert) * 100) / 100);
        }
    };
    return LagerController;
})();
angular.module('LagerModule').controller('LagerController', ['NewTeileService', LagerController]);
