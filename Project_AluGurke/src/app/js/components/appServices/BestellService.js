/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />
var BestellService = (function () {
    function BestellService($rootScope) {
        var _this = this;
        this.laufendeBestellungen = [];
        this.erzeugeBestellungen();
        $rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
        });
    }
    BestellService.prototype.erzeugeBestellungen = function () {
        this.neuBestellungen = [
            new Bestellung(999, false, 21, 0, 99),
            new Bestellung(999, false, 22, 0, 99),
            new Bestellung(999, false, 23, 0, 99),
            new Bestellung(999, false, 24, 0, 99),
            new Bestellung(999, false, 25, 0, 99),
            new Bestellung(999, false, 27, 0, 99),
            new Bestellung(999, false, 28, 0, 99),
            new Bestellung(999, false, 32, 0, 99),
            new Bestellung(999, false, 33, 0, 99),
            new Bestellung(999, false, 34, 0, 99),
            new Bestellung(999, false, 35, 0, 99),
            new Bestellung(999, false, 36, 0, 99),
            new Bestellung(999, false, 37, 0, 99),
            new Bestellung(999, false, 38, 0, 99),
            new Bestellung(999, false, 39, 0, 99),
            new Bestellung(999, false, 40, 0, 99),
            new Bestellung(999, false, 41, 0, 99),
            new Bestellung(999, false, 42, 0, 99),
            new Bestellung(999, false, 43, 0, 99),
            new Bestellung(999, false, 44, 0, 99),
            new Bestellung(999, false, 45, 0, 99),
            new Bestellung(999, false, 46, 0, 99),
            new Bestellung(999, false, 47, 0, 99),
            new Bestellung(999, false, 48, 0, 99),
            new Bestellung(999, false, 52, 0, 99),
            new Bestellung(999, false, 53, 0, 99),
            new Bestellung(999, false, 57, 0, 99),
            new Bestellung(999, false, 58, 0, 99),
            new Bestellung(999, false, 59, 0, 99),
        ];
    };
    BestellService.prototype.getNeubestellung = function (teil_id) {
        for (var i = 0; i < this.neuBestellungen.length; i++) {
            if (this.neuBestellungen[i].teil_id === teil_id) {
                return this.neuBestellungen[i];
            }
        }
    };
    BestellService.prototype.updateLaufendeBestellungen = function (bestellungen) {
        for (var i = 0; i < bestellungen.length; i++) {
            var b = bestellungen[i];
            this.laufendeBestellungen.push(new Bestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod));
        }
    };
    BestellService.prototype.isEilBestellung = function (mode) {
        if (mode === 4) {
            return true;
        }
        return false;
    };
    return BestellService;
})();
angular.module('app').factory('BestellService', ['$rootScope', function ($rootScope) { return new BestellService($rootScope); }]);
