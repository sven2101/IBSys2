/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../../model/Bestellung.ts" />

class ErweitertController {
	
	neuBestellungen: Array<Bestellung>;
	
	constructor(bestellService: BestellService){
		this.getNeuBestellungen(bestellService.neuBestellungen);
	}
	
	getNeuBestellungen(bestellungen:Array<Bestellung>){
		this.neuBestellungen = [];
		for (var i = 0; i < bestellungen.length;i++) {
			if (bestellungen[i].menge > 0){
				this.neuBestellungen.push(bestellungen[i]);
			}
		}
	}
}

angular.module('BestellverwaltungModule').controller('ErweitertController', ['BestellService', ErweitertController]);