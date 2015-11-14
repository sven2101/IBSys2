/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/SettingsService.ts" />
var SettingsController = (function () {
    function SettingsController(settingsService) {
        this.settingsService = settingsService;
    }
    return SettingsController;
})();
angular.module('SettingsModule').controller('SettingsController', ['SettingsService', SettingsController]);
var SettingsModel = (function () {
    function SettingsModel(bestellungGenerieren, arbeitszeitGenerieren, strategie, eTeile) {
        this.bestellungGenerieren = bestellungGenerieren;
        this.arbeitszeitGenerieren = arbeitszeitGenerieren;
        this.strategie = strategie;
        this.eTeile = eTeile;
        switch (strategie) {
            case -100:
                this.strategieString = 'sehr riskant';
                break;
            case -50:
                this.strategieString = 'riskant';
                break;
            case 0:
                this.strategieString = 'normal';
                break;
            case 50:
                this.strategieString = 'sicher';
                break;
            case 100:
                this.strategieString = 'sehr sicher';
                break;
            default:
                this.strategie = 0;
                this.strategieString = 'normal';
                break;
        }
    }
    return SettingsModel;
})();
