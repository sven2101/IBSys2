/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/KennzahlenService.ts" />
/// <reference path="./BestellverwaltungUtil.service.ts" />

class DetailBestellVerwaltungController {
	teil_id:number;
	kaufTeil: NewKaufTeil;
	reichweite:number;
	periode:number;
	
	neueBestellungen:Array<NeuBestellung>;
	bestellService:BestellService;
	neueBestellung:NeuBestellung;
	
	aktuellerLagerzugang:Array<ZugangBestellung>;
	laufendeBestellungen:Array<Bestellung>;
	
	verbrauchAktuell:number;
	verbrauch1:number;
	verbrauch2:number;
	verbrauch3:number;
	
	utilService: BestellverwaltungUtilService;
	
	constructor($routeParams,teileService: NewTeileService,utilService:BestellverwaltungUtilService,kennzahlenService:KennzahlenService,bestellService:BestellService){
		this.utilService = utilService;
		this.bestellService = bestellService;
		this.teil_id = $routeParams.kaufteilid;
		this.periode = kennzahlenService.periode;
		this.kaufTeil = teileService.getKaufTeil(this.teil_id);
		this.reichweite = utilService.getReichweite(this.kaufTeil.lagerMenge,this.kaufTeil.id);
		
		this.neueBestellungen = bestellService.neuBestellungen['k'+this.kaufTeil.id];
		this.neueBestellung = new NeuBestellung(false,this.kaufTeil.id,0,0,1);
		this.aktuellerLagerzugang = bestellService.getZugangBestellungen(this.kaufTeil.id);
		this.laufendeBestellungen = bestellService.getLaufendeBestellungen(this.kaufTeil.id);
		
		this.verbrauchAktuell = utilService.getVerbrauch(this.kaufTeil.id,1);
		this.verbrauch1 = utilService.getVerbrauch(this.kaufTeil.id,2);
		this.verbrauch2 = utilService.getVerbrauch(this.kaufTeil.id,3);
		this.verbrauch3 = utilService.getVerbrauch(this.kaufTeil.id,4);
	}
	
	zeileRot(): boolean {
		return this.utilService.zeileRot(this.reichweite,this.kaufTeil.wbz);
	}

	zeileGelb(): boolean {
		return this.utilService.zeileGelb(this.reichweite,this.kaufTeil.wbz,this.kaufTeil.wbzAbw);
	}
	
	deleteNeueBestellung(bestellung: NeuBestellung):void {
		this.bestellService.deleteNeuBetellung(bestellung.teil_id, bestellung.timestamp);
	}
	
	createNeueBestellung(){
		if(this.neueBestellung.menge > 1){
			this.bestellService.neuBestellungErstellen(this.neueBestellung.eil,this.kaufTeil,this.neueBestellung.menge,1); //TODO Periode berechnen
		}
		
	}
}

angular.module('BestellverwaltungModule').controller('DetailBestellVerwaltungController', [
	'$routeParams','NewTeileService','BestellverwaltungUtilService','KennzahlenService','BestellService',DetailBestellVerwaltungController]);