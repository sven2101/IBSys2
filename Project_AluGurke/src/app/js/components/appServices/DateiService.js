/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
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
                    order: this.getOrders()
                },
                productionlist: [],
                workingtimelist: []
            }
        };
        var x2js = new X2JS();
        var xml = x2js.json2xml_str(json);
        return xml;
    };
    DateiService.prototype.getOrders = function () {
        var orders = [];
        for (var i = 0; i < this.neuBestellungen.length; i++) {
            if (this.neuBestellungen[i].menge !== 0) {
                var newOrder = {
                    _article: this.neuBestellungen[i].teil_id,
                    _quantity: this.neuBestellungen[i].menge,
                    _modus: "5"
                };
                if (this.neuBestellungen[i].eil) {
                    newOrder._modus = "4";
                }
                orders.push(newOrder);
            }
        }
        return orders;
    };
    return DateiService;
})();
angular.module('app').factory('DateiService', ['BestellService', function (BestellService) { return new DateiService(BestellService); }]);
