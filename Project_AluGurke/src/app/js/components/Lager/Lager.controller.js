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
    }
    return LagerController;
})();
angular.module('LagerModule').controller('LagerController', ['NewTeileService', LagerController]);
