/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/ZugangBestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />
var BestellService = (function () {
    function BestellService($rootScope) {
        var _this = this;
        this.laufendeBestellungen = [];
        this.zugangBestellungen = [];
        this.erzeugeBestellungen();
        $rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
            _this.updateZugangBestellungen(dateiInhalt.results.inwardstockmovement.order);
        });
    }
    BestellService.prototype.erzeugeBestellungen = function () {
        this.neuBestellungen = [
            new NeuBestellung(false, 21, 0),
            new NeuBestellung(false, 22, 0),
            new NeuBestellung(false, 23, 0),
            new NeuBestellung(false, 24, 0),
            new NeuBestellung(false, 25, 0),
            new NeuBestellung(false, 27, 0),
            new NeuBestellung(false, 28, 0),
            new NeuBestellung(false, 32, 0),
            new NeuBestellung(false, 33, 0),
            new NeuBestellung(false, 34, 0),
            new NeuBestellung(false, 35, 0),
            new NeuBestellung(false, 36, 0),
            new NeuBestellung(false, 37, 0),
            new NeuBestellung(false, 38, 0),
            new NeuBestellung(false, 39, 0),
            new NeuBestellung(false, 40, 0),
            new NeuBestellung(false, 41, 0),
            new NeuBestellung(false, 42, 0),
            new NeuBestellung(false, 43, 0),
            new NeuBestellung(false, 44, 0),
            new NeuBestellung(false, 45, 0),
            new NeuBestellung(false, 46, 0),
            new NeuBestellung(false, 47, 0),
            new NeuBestellung(false, 48, 0),
            new NeuBestellung(false, 52, 0),
            new NeuBestellung(false, 53, 0),
            new NeuBestellung(false, 57, 0),
            new NeuBestellung(false, 58, 0),
            new NeuBestellung(false, 59, 0),
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
    BestellService.prototype.updateZugangBestellungen = function (bestellungen) {
        //alert(bestellungen.length);
        for (var i = 0; i < bestellungen.length; i++) {
            var b = bestellungen[i];
            this.zugangBestellungen.push(new ZugangBestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod, b._time, b.materialcosts, b._ordercosts, b.entirecosts, b._piececosts));
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
