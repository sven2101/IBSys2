/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />
var BestellService = (function () {
    function BestellService($rootScope) {
        var _this = this;
        this.laufendeBestellungen = [];
        $rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
        });
    }
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
