/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/ZugangBestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />
var BsNeuBestellungenMap = (function () {
    function BsNeuBestellungenMap() {
        this.k21 = [];
        this.k22 = [];
        this.k23 = [];
        this.k24 = [];
        this.k25 = [];
        this.k27 = [];
        this.k28 = [];
        this.k32 = [];
        this.k33 = [];
        this.k34 = [];
        this.k35 = [];
        this.k36 = [];
        this.k37 = [];
        this.k38 = [];
        this.k39 = [];
        this.k40 = [];
        this.k41 = [];
        this.k42 = [];
        this.k43 = [];
        this.k44 = [];
        this.k45 = [];
        this.k46 = [];
        this.k47 = [];
        this.k48 = [];
        this.k52 = [];
        this.k53 = [];
        this.k57 = [];
        this.k58 = [];
        this.k59 = [];
    }
    return BsNeuBestellungenMap;
})();
var BestellService = (function () {
    function BestellService($rootScope) {
        var _this = this;
        this.laufendeBestellungen = [];
        this.zugangBestellungen = [];
        this.neuBestellungen = new BsNeuBestellungenMap();
        $rootScope.$on('fileController.neueDatei', function (event, dateiInhalt) {
            _this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
            _this.updateZugangBestellungen(dateiInhalt.results.inwardstockmovement.order);
        });
    }
    BestellService.prototype.updateLaufendeBestellungen = function (bestellungen) {
        for (var i = 0; i < bestellungen.length; i++) {
            var b = bestellungen[i];
            this.laufendeBestellungen.push(new Bestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod));
        }
    };
    BestellService.prototype.updateZugangBestellungen = function (bestellungen) {
        var ersteBestellungEndet = bestellungen[0]._time * 1;
        var startPeriode = bestellungen[0]._orderperiod * 1;
        for (var i = 0; i < bestellungen.length; i++) {
            var b = bestellungen[i];
            this.zugangBestellungen.push(new ZugangBestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod, this.getEndZeitpunkt(ersteBestellungEndet, startPeriode, b._time), b._materialcosts, b._ordercosts, b._entirecosts, b._piececosts));
        }
    };
    BestellService.prototype.getEndZeitpunkt = function (ersteBestellungEndet, startPeriode, bestellungEndet) {
        var anzahlTageErsteBestellung = ersteBestellungEndet / 60 / 24;
        var bestellungEndetTage = bestellungEndet / 60 / 24;
        var differenz = bestellungEndetTage - anzahlTageErsteBestellung;
        var restTage = anzahlTageErsteBestellung % 5;
        var anzahlPerioden = (anzahlTageErsteBestellung - restTage) / 5;
        var endPeriode = startPeriode - 1 + anzahlPerioden;
        var endTag = restTage + differenz + 1;
        if (endTag > 5) {
            endTag = endTag % 5;
            endPeriode += 1;
        }
        return { periode: endPeriode, tag: endTag };
    };
    BestellService.prototype.isEilBestellung = function (mode) {
        if (mode == 4) {
            return true;
        }
        return false;
    };
    return BestellService;
})();
angular.module('app').factory('BestellService', ['$rootScope', function ($rootScope) { return new BestellService($rootScope); }]);
