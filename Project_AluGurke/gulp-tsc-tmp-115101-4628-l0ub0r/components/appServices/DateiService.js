/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />
var DateiService = (function () {
    function DateiService(bestellService) {
        this.dateiErzeugt = false;
        this.dateiName = "none";
        this.neuBestellungen = bestellService.neuBestellungen;
    }
    DateiService.prototype.getInhalt = function () {
        var json = {
            input: {
                qualitycontrol: {
                    _type: "no",
                    _losequantity: "0",
                    _delay: "0"
                },
                sellwish: [],
                selldirect: [],
                orderlist: {
                    order: this.getNewOrders()
                },
                productionlist: [],
                workingtimelist: []
            }
        };
        var x2js = new X2JS();
        var xml = x2js.json2xml_str(json);
        return xml;
    };
    DateiService.prototype.getNewOrders = function () {
        var orders = [];
        for (var property in this.neuBestellungen) {
            if (this.neuBestellungen.hasOwnProperty(property)) {
                var array = this.neuBestellungen[property];
                for (var i = 0; i < array.length; i++) {
                    var newOrder = {
                        _article: array[i].teil_id,
                        _quantity: array[i].menge,
                        _modus: array[i] ? "4" : "5"
                    };
                    orders.push(newOrder);
                }
            }
        }
        return orders;
    };
    return DateiService;
})();
angular.module('app').factory('DateiService', ['BestellService', function (BestellService) { return new DateiService(BestellService); }]);
