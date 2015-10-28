/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../../model/Bestellung.ts"/>
/// <reference path="../../model/NeuBestellung.ts"/>
/// <reference path="../../model/NewKaufTeil.ts"/>
var ErweitertViewModel = (function () {
    function ErweitertViewModel() {
    }
    return ErweitertViewModel;
})();
var ErweitertController = (function () {
    function ErweitertController(bestellService) {
        this.getNeuBestellungen(bestellService.neuBestellungen);
    }
    ErweitertController.prototype.getNeuBestellungen = function (bestellungen) {
        this.neuBestellungen = [];
        for (var i = 0; i < bestellungen.length; i++) {
            if (bestellungen[i].menge > 0) {
                this.neuBestellungen.push(bestellungen[i]);
            }
        }
    };
    return ErweitertController;
})();
angular.module('BestellverwaltungModule').controller('ErweitertController', ['BestellService', ErweitertController]);
