/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />
/// <reference path="../../model/ZugangBestellung.ts" />
/// <reference path="../../model/NeuBestellung.ts" />

class BsNeuBestellungenMap {
	k21: Array<NeuBestellung> = [];
	k22: Array<NeuBestellung> = [];
	k23: Array<NeuBestellung> = [];
	k24: Array<NeuBestellung> = [];
	k25: Array<NeuBestellung> = [];
	k27: Array<NeuBestellung> = [];
	k28: Array<NeuBestellung> = [];
	k32: Array<NeuBestellung> = [];
	k33: Array<NeuBestellung> = [];
	k34: Array<NeuBestellung> = [];
	k35: Array<NeuBestellung> = [];
	k36: Array<NeuBestellung> = [];
	k37: Array<NeuBestellung> = [];
	k38: Array<NeuBestellung> = [];
	k39: Array<NeuBestellung> = [];
	k40: Array<NeuBestellung> = [];
	k41: Array<NeuBestellung> = [];
	k42: Array<NeuBestellung> = [];
	k43: Array<NeuBestellung> = [];
	k44: Array<NeuBestellung> = [];
	k45: Array<NeuBestellung> = [];
	k46: Array<NeuBestellung> = [];
	k47: Array<NeuBestellung> = [];
	k48: Array<NeuBestellung> = [];
	k52: Array<NeuBestellung> = [];
	k53: Array<NeuBestellung> = [];
	k57: Array<NeuBestellung> = [];
	k58: Array<NeuBestellung> = [];
	k59: Array<NeuBestellung> = [];
}

class BestellService {
	laufendeBestellungen: Array<Bestellung>;
	zugangBestellungen: Array<ZugangBestellung>;

	neuBestellungen: BsNeuBestellungenMap;

	constructor($rootScope) {
		this.laufendeBestellungen = [];
		this.zugangBestellungen = [];
		this.neuBestellungen = new BsNeuBestellungenMap();

		$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
			this.updateZugangBestellungen(dateiInhalt.results.inwardstockmovement.order);
		});
	}

	updateLaufendeBestellungen(bestellungen) {
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			this.laufendeBestellungen.push(new Bestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod));
		}
	}

	updateZugangBestellungen(bestellungen) {
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			this.zugangBestellungen.push(new ZugangBestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod, b._time, b._materialcosts, b._ordercosts, b._entirecosts, b._piececosts));
		}
	}

	isEilBestellung(mode: number) {
		if (mode == 4) {
			return true;
		}
		return false;
	}
}

angular.module('app').factory('BestellService', ['$rootScope', ($rootScope) => new BestellService($rootScope)]);