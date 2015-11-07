/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="KapazitaetsplanungService.ts" />
/// <reference path="AuftragService.ts" />


class DateiService {

	dateiName: string;
	dateiErzeugt: boolean;
	neuBestellungen: BsNeuBestellungenMap;
	auftragService:AuftragService;
	kapazitaetsplanungService:KapazitaetsplanungService

	constructor(bestellService: BestellService,auftragService:AuftragService,kapazitaetsplanungService:KapazitaetsplanungService) {
		this.dateiErzeugt = false;
		this.dateiName = "none";
		this.neuBestellungen = bestellService.neuBestellungen;
		this.auftragService=auftragService;
		this.kapazitaetsplanungService=kapazitaetsplanungService;
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
				productionlist: {
					production:this.getProductionList()
				},
				workingtimelist: {
					workingtimeList:this.getWorkingTime()
				}
			}
		};
		var x2js = new X2JS();

		var xml = x2js.json2xml_str(json);

		return xml;
	}

	getNewOrders() {
		var orders = [];
		for (var property in this.neuBestellungen) {
			if (this.neuBestellungen.hasOwnProperty(property)) {
				var array = this.neuBestellungen[property];
				for (var i = 0; i < array.length; i++) {

					var newOrder = {
						_article: array[i].teil_id,
						_quantity: array[i].menge,
						_modus: array[i] ? "4" : "5"
					}
					orders.push(newOrder);
				}
			}
		}
		return orders;
	}
	getProductionList(){
		let list=[];
		let auftrageExport=this.auftragService.auftraegeExport.sort(function(a,b){return a.prioritaet-b.prioritaet});
		for(let x in auftrageExport){
			list.push({
				_article:x.erzeugnis_id,
				_quantity:x.anzahl
			});
		}
		return list;
	}
	getWorkingTime(){
		let list=[];
		let kapa=this.kapazitaetsplanungService.models;
		kapa.sort(function(a,b){
			console.log(a);
			return Number(a.name.split("_")[0])-Number(b.name.split("_")[0])});
		for(let x in kapa){
			list.push({
				_station:x.name.split("_")[0],
				_shift:x.anzahlSchichten,
				_overtime:x.ueberstunden1+x.ueberstunden2+x.ueberstunden3
			});
		}
		return list;
	}
}

angular.module('app').factory('DateiService', ['BestellService',"AuftragService","KapazitaetsplanungService", (BestellService,AuftragService,KapazitaetsplanungService) => new DateiService(BestellService,AuftragService,KapazitaetsplanungService)]);