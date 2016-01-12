/// <reference path="../../typeDefinitions/angular.d.ts" />

class LagerStatistikService {


	teileService: NewTeileService;

	constructor(newTeileService: NewTeileService) {
		this.teileService = newTeileService;
	}

	getLagerWertErzeugnisse(): number {
		var erzeugnisseWert = 0;
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			var erzeugnis = this.teileService.alleErzeugnisse[i];

			erzeugnisseWert += erzeugnis.lagerMenge * erzeugnis.teileWert;
		}

		return Math.round(erzeugnisseWert * 100) / 100;
	}

	getLagerWertKaufTeile(): number {
		var kaufTeileWert = 0;
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			var kaufTeil = this.teileService.alleKaufteile[i];

			kaufTeileWert += kaufTeil.lagerMenge * kaufTeil.teileWert;
		}

		return Math.round(kaufTeileWert * 100) / 100;
	}

	getKaufTeileCategories(): Array<string> {
		var categories = [];
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			categories.push(this.teileService.alleKaufteile[i].bezeichnung+"("+this.teileService.alleKaufteile[i].id+")");
		}
		return categories;
	}

	getErzeugnisseCategories(): Array<string> {
		var categories = [];
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			categories.push(this.teileService.alleErzeugnisse[i].bezeichnung+"("+this.teileService.alleErzeugnisse[i].id+")");
		}
		return categories;
	}

	getErzeugnisseLagerWertSeries() {
		var data = [];
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			var erzeugnis = this.teileService.alleErzeugnisse[i];
			data.push({ y: Math.round(erzeugnis.teileWert * erzeugnis.lagerMenge * 100) / 100, color: '#ffcc00' });
		}

		return { name: 'Lagerwert Erzeugnis', data: data, yAxis: 0, color: '#ffcc00',tooltip:{pointFormat: "{point.y}  €"} };
	}
	
	getErzeugnisseLagerMengeSeries() {
		var data = [];
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			data.push( this.teileService.alleErzeugnisse[i].lagerMenge*1);
		}
		
		return { name: 'Lagermenge Erzeugnis', data: data, yAxis: 1, color: 'red',tooltip:{pointFormat: "{point.y}  ME"} };
	}

	getKaufTeileLagerWertSeries() {
		var data = [];
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			var kaufTeil = this.teileService.alleKaufteile[i];
			data.push(Math.round(kaufTeil.teileWert * kaufTeil.lagerMenge * 100) / 100);
		}

		return { name: 'Lagerwert Kaufteil', data: data, yAxis: 0, color: '#3399ff',tooltip:{pointFormat: "{point.y}  €"} };
	}
	
	getKaufTeileLagerMengeSeries(){
		var data = [];
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			var kaufTeil = this.teileService.alleKaufteile[i];
			data.push(kaufTeil.lagerMenge);
		}

		return { name: 'Lagermenge Kaufteil', data: data, yAxis: 1, color: 'green' ,tooltip:{pointFormat: "{point.y}  ME"}};
	}
}

angular.module('LagerModule').factory('LagerStatistikService', ['NewTeileService',
	(NewTeileService) => new LagerStatistikService(NewTeileService)]);