/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="KapazitaetsplanungService.ts" />
/// <reference path="AuftragService.ts" />
var DateiService = (function () {
    function DateiService(bestellService, auftragService, kapazitaetsplanungService) {
        this.dateiErzeugt = false;
        this.dateiName = "none";
        this.neuBestellungen = bestellService.neuBestellungen;
        this.auftragService = auftragService;
        this.kapazitaetsplanungService = kapazitaetsplanungService;
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
                productionlist: {
                    production: this.getProductionList()
                },
                workingtimelist: {
                    workingtimeList: this.getWorkingTime()
                }
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
    DateiService.prototype.getProductionList = function () {
        var list = [];
        var auftrageExport = this.auftragService.auftraegeExport.sort(function (a, b) { return a.prioritaet - b.prioritaet; });
        for (var x in auftrageExport) {
            list.push({
                _article: x.erzeugnis_id,
                _quantity: x.anzahl
            });
        }
        return list;
    };
    DateiService.prototype.getWorkingTime = function () {
        var list = [];
        var kapa = this.kapazitaetsplanungService.models;
        kapa.sort(function (a, b) {
            console.log(a);
            return Number(a.name.split("_")[0]) - Number(b.name.split("_")[0]);
        });
        for (var x in kapa) {
            list.push({
                _station: x.name.split("_")[0],
                _shift: x.anzahlSchichten,
                _overtime: x.ueberstunden1 + x.ueberstunden2 + x.ueberstunden3
            });
        }
        return list;
    };
    return DateiService;
})();
angular.module('app').factory('DateiService', ['BestellService', "AuftragService", "KapazitaetsplanungService", function (BestellService, AuftragService, KapazitaetsplanungService) { return new DateiService(BestellService, AuftragService, KapazitaetsplanungService); }]);
