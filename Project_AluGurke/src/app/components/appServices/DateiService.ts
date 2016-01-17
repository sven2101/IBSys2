/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="KapazitaetsplanungService.ts" />
/// <reference path="AuftragService.ts" />
/// <reference path="FertigungsAuftraegeService.ts" />


class DateiService {

	dateiName: string;
	dateiErzeugt: boolean;
	auftragService:AuftragService;
	kapazitaetsplanungService:KapazitaetsplanungService;
	programmService: ProgrammService;
    bestellService:BestellService;
    dispositionService:DispositionService;
    fertigungsAuftraegeService:FertigungsAuftraegeService;
    

	constructor(bestellService: BestellService,auftragService:AuftragService,
	kapazitaetsplanungService:KapazitaetsplanungService,programmService:ProgrammService,dispositionService,fertigungsAuftraegeService) {
		this.dateiErzeugt = false;
		this.dateiName = "none";
        this.bestellService=bestellService;
		this.auftragService=auftragService;
		this.kapazitaetsplanungService=kapazitaetsplanungService;
		this.programmService = programmService;
        this.dispositionService=dispositionService;
        this.fertigungsAuftraegeService=fertigungsAuftraegeService;
	}

	getInhalt() {
        if(this.auftragService.auftraegeExport.length>75){
            sweetAlert("Ungültige Eingabe","Es dürfen nur 75 Produktionsaufträge erstellt werden!", "error");
            return null;
        }
       
		var json = {
			input: {
				qualitycontrol: {
					_type: "no",
					_losequantity: "0",
					_delay: "0"
				},
				sellwish: {
					item:this.getSellWish()
				},
				selldirect: {
					item: this.getDirectSales()
				},
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
        json.input.productionlist=json.input.productionlist.production.length==0?null:json.input.productionlist;
        json.input.orderlist=json.input.orderlist.order.length==0?null:json.input.orderlist;
		var x2js = new X2JS();

		var xml = x2js.json2xml_str(json);

		return xml;
	}

	getNewOrders() {
		var orders = [];
		for (var property in this.bestellService.neuBestellungen) {
			if (this.bestellService.neuBestellungen.hasOwnProperty(property)) {
				var array = this.bestellService.neuBestellungen[property];
				for (var i = 0; i < array.length; i++) {

					var newOrder = {
						_article: array[i].teil_id,
						_quantity: array[i].menge,
						_modus: array[i].eil ? "4" : "5"
					}
					orders.push(newOrder);
				}
			}
		}
		return orders;
	}
	
	getSellWish(){
		var wish = [];
		var p1 = {
			_article: 1,
			_quantity: this.programmService.produktionsprogramm[0].menge
		};
		var p2 = {
			_article: 2,
			_quantity: this.programmService.produktionsprogramm[4].menge
		};
		var p3 = {
			_article: 3,
			_quantity: this.programmService.produktionsprogramm[8].menge
		};
		
		wish.push(p1);
		wish.push(p2);
		wish.push(p3);
		return wish;
	}
	
	getDirectSales(){
		var directSales = [];
		var price = this.programmService.directsales[1].preis;
		if(angular.isUndefined(price)){
			price=0;
		}
		var penalty = this.programmService.directsales[1].konventionalstrafe;
		if(angular.isUndefined(penalty)){
			penalty=0;
		}
		var p1 = {
			_article: 1,
			_quantity:this.programmService.directsales[1].menge,
			_price:price,
			_penalty:penalty
		};
		price = this.programmService.directsales[2].preis;
		if(angular.isUndefined(price)){
			price=0;
		}
		penalty = this.programmService.directsales[2].konventionalstrafe;
		if(angular.isUndefined(penalty)){
			penalty=0;
		}
		var p2 = {
			_article: 2,
			_quantity:this.programmService.directsales[2].menge,
			_price:price,
			_penalty:penalty
		};
		price = this.programmService.directsales[3].preis;
		if(angular.isUndefined(price)){
			price=0;
		}
		penalty = this.programmService.directsales[3].konventionalstrafe;
		if(angular.isUndefined(penalty)){
			penalty=0;
		}
		var p3 = {
			_article: 3,
			_quantity:this.programmService.directsales[3].menge,
			_price:price,
			_penalty:penalty
		};
		
		directSales.push(p1);
		directSales.push(p2);
		directSales.push(p3);
		
		return directSales;
	}
	
	getProductionList(){
		let list=[];
		let auftrageExport=this.auftragService.auftraegeExport;
        if(!this.dispositionService.flag&&!this.fertigungsAuftraegeService.flag){
            auftrageExport=this.auftragService.auftraegeUltraExport;
        }
		for(let i=0;i< auftrageExport.length;i++){
			list.push({
				_article:auftrageExport[i].erzeugnis_id,
				_quantity:auftrageExport[i].anzahl
			});
		}
		return list;
	}
	getWorkingTime(){
		let list=[];
		let kapa=this.kapazitaetsplanungService.models;
		kapa.sort(function(a,b){		
			return Number(a.name.split("_")[0])-Number(b.name.split("_")[0])});
		for(let i=0;i<kapa.length;i++){
			list.push({
				_station:kapa[i].name.split("_")[0],
				_shift:kapa[i].anzahlSchichten,
				_overtime:kapa[i].ueberstunden
			});
		}
		return list;
	}
}

angular.module('app').factory('DateiService', ['BestellService','AuftragService','KapazitaetsplanungService','ProgrammService','DispositionService','FertigungsAuftraegeService', 
(BestellService,AuftragService,KapazitaetsplanungService,programmService,DispositionService,FertigungsAuftraegeService) => new DateiService(BestellService,AuftragService,KapazitaetsplanungService,programmService,DispositionService,FertigungsAuftraegeService)]);
