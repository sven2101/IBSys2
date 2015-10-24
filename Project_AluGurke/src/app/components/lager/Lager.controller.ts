/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />
/// <reference path="../appServices/NewTeileService.ts" />

class LagerController {
	alleErzeugnisse:Array<NewErzeugnis>;
	alleKaufTeile:Array<NewKaufTeil>;
	
	showErzeugnisse: boolean;
	showKaufTeile: boolean;
	
	constructor(teileService: NewTeileService){
		this.alleErzeugnisse = teileService.alleErzeugnisse;
		this.alleKaufTeile = teileService.alleKaufteile;
		this.showErzeugnisse = true;
		this.showKaufTeile = true;
	}
}

angular.module('LagerModule').controller('LagerController', ['NewTeileService', LagerController]);