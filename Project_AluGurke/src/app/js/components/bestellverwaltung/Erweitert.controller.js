/// <reference path="../../typeDefinitions/angular.d.ts"/>
/// <reference path="../appServices/BestellService.ts"/>
/// <reference path="../appServices/NewTeileService.ts"/>
/// <reference path="../../model/Bestellung.ts"/>
/// <reference path="../../model/NeuBestellung.ts"/>
/// <reference path="../../model/NewKaufTeil.ts"/>
var ErweitertViewModel = (function () {
    function ErweitertViewModel(kaufTeil, bestellung) {
        this.kaufTeil = kaufTeil;
        this.bestellung = bestellung;
    }
    return ErweitertViewModel;
})();
var ErweitertController = (function () {
    //neuBestellungen: Array<ErweitertViewModel>;
    function ErweitertController(bestellService, teileService) {
        //this.getNeuBestellungen(bestellService.neuBestellungen, teileService);
    }
    ErweitertController.prototype.getNeuBestellungen = function (bestellungen, teileService) {
        /*this.neuBestellungen = [];
        for (var i = 0; i < bestellungen.length; i++) {
            if (bestellungen[i].menge > 0) {
                this.neuBestellungen.push(new ErweitertViewModel(teileService.getKaufTeil(bestellungen[i].teil_id), bestellungen[i]));
            }
        }*/
    };
    return ErweitertController;
})();
angular.module('BestellverwaltungModule').controller('ErweitertController', ['BestellService', 'NewTeileService', ErweitertController]);
