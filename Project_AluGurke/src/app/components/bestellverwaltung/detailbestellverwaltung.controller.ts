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
	
	verbrauchAktuell:number;
	verbrauch1:number;
	verbrauch2:number;
	verbrauch3:number;
	
	utilService: BestellverwaltungUtilService;
	
	constructor($routeParams,teileService: NewTeileService,utilService:BestellverwaltungUtilService,kennzahlenService:KennzahlenService){
		this.utilService = utilService;
		this.teil_id = $routeParams.kaufteilid;
		this.periode = kennzahlenService.periode;
		this.kaufTeil = teileService.getKaufTeil(this.teil_id);
		this.reichweite = utilService.getReichweite(this.kaufTeil.lagerMenge,this.kaufTeil.id);
		
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
}

angular.module('BestellverwaltungModule').controller('DetailBestellVerwaltungController', [
	'$routeParams','NewTeileService','BestellverwaltungUtilService','KennzahlenService',DetailBestellVerwaltungController]);