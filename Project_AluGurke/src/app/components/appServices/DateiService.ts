/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />

class DateiService {

	dateiName: string;
	dateiErzeugt: boolean;
	neuBestellungen: BsNeuBestellungenMap;

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
					order: this.getNewOrders()
				},
				productionlist: [],
				workingtimelist: []
			}
		};
		var x2js = new X2JS();

		var xml = x2js.json2xml_str(json);

		return xml;
	}

	getNewOrders() {
		var orders = [];
		for (var property in this.neuBestellungen) {
			console.log(property);
			if (this.neuBestellungen.hasOwnProperty(property)) {
				var array = this.neuBestellungen[property];
				for (var i = 0; i < array.length; i++) {

					var newOrder = {
						_article: array[i].teil_id,
						_quantity: array[i].menge,
						_modus: "5"
					}
					if (array[i].eil) {
						newOrder._modus = "4";
					}
					orders.push(newOrder);
				}
			}
		}
		return orders;
	}
}

angular.module('app').factory('DateiService', ['BestellService', (BestellService) => new DateiService(BestellService)]);