/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />
/// <reference path="../appServices/NewTeileService.ts" />

class LagerController {
	alleErzeugnisse:Array<NewErzeugnis>;
	alleKaufTeile:Array<NewKaufTeil>;
	
	data: Array<number>;
	
	showErzeugnisse: boolean;
	showKaufTeile: boolean;
	
	constructor(teileService: NewTeileService){
		this.alleErzeugnisse = teileService.alleErzeugnisse;
		this.alleKaufTeile = teileService.alleKaufteile;
		this.showErzeugnisse = true;
		this.showKaufTeile = true;
		this.erzeugeData();
	}
	
	erzeugeData(){
		this.data = [];
		for (var i = 0; i < this.alleErzeugnisse.length;i++) {
			this.data.push(Math.round((this.alleErzeugnisse[i].lagerMenge * this.alleErzeugnisse[i].teileWert)*100)/100);
		}
	}
}

angular.module('LagerModule').controller('LagerController', ['NewTeileService', LagerController]);