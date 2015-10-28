/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/ZugangBestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />

class BestellService {
	laufendeBestellungen: Array<Bestellung>;
	zugangBestellungen: Array<ZugangBestellung>;
	neuBestellungen: Array<NeuBestellung>;

	constructor($rootScope) {
		this.laufendeBestellungen = [];
		this.zugangBestellungen = [];
		this.erzeugeBestellungen();
		$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
			this.updateZugangBestellungen(dateiInhalt.results.inwardstockmovement.order);
		});
	}

	erzeugeBestellungen() {
		this.neuBestellungen = [
			new NeuBestellung(false, 21, 0),
			new NeuBestellung(false, 22, 0),
			new NeuBestellung(false, 23, 0),
			new NeuBestellung(false, 24, 0),
			new NeuBestellung(false, 25, 0),
			new NeuBestellung(false, 27, 0),
			new NeuBestellung(false, 28, 0),
			new NeuBestellung(false, 32, 0),
			new NeuBestellung(false, 33, 0),
			new NeuBestellung(false, 34, 0),
			new NeuBestellung(false, 35, 0),
			new NeuBestellung(false, 36, 0),
			new NeuBestellung(false, 37, 0),
			new NeuBestellung(false, 38, 0),
			new NeuBestellung(false, 39, 0),
			new NeuBestellung(false, 40, 0),
			new NeuBestellung(false, 41, 0),
			new NeuBestellung(false, 42, 0),
			new NeuBestellung(false, 43, 0),
			new NeuBestellung(false, 44, 0),
			new NeuBestellung(false, 45, 0),
			new NeuBestellung(false, 46, 0),
			new NeuBestellung(false, 47, 0),
			new NeuBestellung(false, 48, 0),
			new NeuBestellung(false, 52, 0),
			new NeuBestellung(false, 53, 0),
			new NeuBestellung(false, 57, 0),
			new NeuBestellung(false, 58, 0),
			new NeuBestellung(false, 59, 0),
		];
	}

	getNeubestellung(teil_id: number) {
		for (var i = 0; i < this.neuBestellungen.length; i++) {
			if (this.neuBestellungen[i].teil_id === teil_id) {
				return this.neuBestellungen[i];
			}
		}
	}

	updateLaufendeBestellungen(bestellungen) {
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			this.laufendeBestellungen.push(new Bestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod));
		}
	}

	updateZugangBestellungen(bestellungen) {
		//alert(bestellungen.length);
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			this.zugangBestellungen.push(new ZugangBestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod, b._time, b.materialcosts, b._ordercosts, b.entirecosts, b._piececosts));
		}
	}

	isEilBestellung(mode: number) {
		if (mode === 4) {
			return true;
		}
		return false;
	}
}

angular.module('app').factory('BestellService', ['$rootScope', ($rootScope) => new BestellService($rootScope)]);