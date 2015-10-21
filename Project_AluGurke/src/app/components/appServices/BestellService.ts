/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Bestellung.ts" />

class BestellService {
	laufendeBestellungen: Array<Bestellung>;

	constructor($rootScope) {
		this.laufendeBestellungen = [];
		$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
		});
	}

	updateLaufendeBestellungen(bestellungen) {
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			this.laufendeBestellungen.push(new Bestellung(b._id, this.isEilBestellung(b._mode), b._article, b._amount, b._orderperiod));
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