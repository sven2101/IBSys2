/// <reference path="../../typeDefinitions/angular.d.ts"/>
/// <reference path="../appServices/BestellService.ts"/>
/// <reference path="../appServices/NewTeileService.ts"/>
/// <reference path="../../model/Bestellung.ts"/>
/// <reference path="../../model/NeuBestellung.ts"/>
/// <reference path="../../model/NewKaufTeil.ts"/>

class ErweitertViewModel {
	kaufTeil: NewKaufTeil;
	bestellung: NeuBestellung;

	constructor(kaufTeil: NewKaufTeil, bestellung: NeuBestellung) {
		this.kaufTeil = kaufTeil;
		this.bestellung = bestellung;
	}

}


class ErweitertController {

	//neuBestellungen: Array<ErweitertViewModel>;

	constructor(bestellService: BestellService, teileService: NewTeileService) {
		//this.getNeuBestellungen(bestellService.neuBestellungen, teileService);
	}

	getNeuBestellungen(bestellungen: Array<NeuBestellung>, teileService: NewTeileService) {
		/*this.neuBestellungen = [];
		for (var i = 0; i < bestellungen.length; i++) {
			if (bestellungen[i].menge > 0) {
				this.neuBestellungen.push(new ErweitertViewModel(teileService.getKaufTeil(bestellungen[i].teil_id), bestellungen[i]));
			}
		}*/
	}
}

angular.module('BestellverwaltungModule').controller('ErweitertController', ['BestellService', 'NewTeileService', ErweitertController]);