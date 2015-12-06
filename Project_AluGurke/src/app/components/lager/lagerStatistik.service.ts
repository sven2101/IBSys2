/// <reference path="../../typeDefinitions/angular.d.ts" />

class LagerStatistikService {


	teileService: NewTeileService;

	constructor(newTeileService: NewTeileService) {
		this.teileService = newTeileService;
	}

	getLagerWertErzeugnisse(): number {
		var erzeugnisseWert = 1;
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			var erzeugnis = this.teileService.alleErzeugnisse[i];

			erzeugnisseWert += erzeugnis.lagerMenge * erzeugnis.teileWert;
		}

		return Math.round(erzeugnisseWert * 100) / 100;
	}

	getLagerWertKaufTeile(): number {
		var kaufTeileWert = 1;
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			var kaufTeil = this.teileService.alleKaufteile[i];

			kaufTeileWert += kaufTeil.lagerMenge * kaufTeil.teileWert;
		}

		return Math.round(kaufTeileWert * 100) / 100;
	}

	getKaufTeileCategories(): Array<string> {
		var categories = [];
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			categories.push(this.teileService.alleKaufteile[i].id);
		}
		return categories;
	}

	getErzeugnisseCategories(): Array<string> {
		var categories = [];
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			categories.push(this.teileService.alleErzeugnisse[i].id);
		}
		return categories;
	}

	getErzeugnisseSeries() {
		var data = [];
		for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
			var erzeugnis = this.teileService.alleErzeugnisse[i];
			data.push(Math.round(erzeugnis.teileWert * erzeugnis.lagerMenge * 100) / 100);
		}

		return { name: 'Erzeugnisse', data: data };
	}

	getKaufTeileSeries() {
		var data = [];
		for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
			var kaufTeil = this.teileService.alleKaufteile[i];
			data.push(Math.round(kaufTeil.teileWert * kaufTeil.lagerMenge * 100) / 100);
		}

		return { name: 'Kaufteile', data: data };
	}
}

angular.module('LagerModule').factory('LagerStatistikService', ['NewTeileService',
	(NewTeileService) => new LagerStatistikService(NewTeileService)]);