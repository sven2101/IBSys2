/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />

class DateiService {

	dateiName: string;
	dateiErzeugt: boolean;
	neuBestellungen: Array<NeuBestellung>;

	constructor(bestellService: BestellService) {
		this.dateiErzeugt = false;
		this.dateiName = "none";
		this.neuBestellungen = bestellService.neuBestellungen;
	}

	getInhalt() {
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
	}

	getOrders() {
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
	}
}

angular.module('app').factory('DateiService', ['BestellService', (BestellService) => new DateiService(BestellService)]);