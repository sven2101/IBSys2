/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../../model/PieChartData.ts" />

class BestellUeberblickController {

	bestellService: BestellService;
	teileService: NewTeileService;

	anzahlNeuBestellungen: number = 0;
	anzahlNormalBestellungen: number = 0;
	anzahlEilBestellungen: number = 0;

	gesamtKosten: number = 0;
	normalKosten: number = 0;
	eilKosten: number = 0;

	data = [
		{
			value: 300,
			color: "#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		}
	];

	neueBestellungen: Array<NeuBestellung>;

	constructor(bestellService: BestellService, teileService: NewTeileService) {
		this.neueBestellungen = [];
		this.bestellService = bestellService;
		this.teileService = teileService;
		this.setNeueBestellungen();
		this.analysiereBestellungen(this.neueBestellungen);
	}

	setNeueBestellungen(): void {
		for (var array in this.bestellService.neuBestellungen) {
			if (this.bestellService.neuBestellungen.hasOwnProperty(array)) {
				for (var i = 0; i < this.bestellService.neuBestellungen[array].length; i++) {
					this.neueBestellungen.push(this.bestellService.neuBestellungen[array][i]);
				}
			}
		}
	}

	analysiereBestellungen(neueBestellungen: Array<NeuBestellung>): void {
		this.anzahlNeuBestellungen = neueBestellungen.length;
		for (var i = 0; i < neueBestellungen.length; i++) {
			this.erhoeheEilOderNormalAnzahl(neueBestellungen[i]);
			this.analysiereKosten(neueBestellungen[i]);
		}
	}

	analysiereKosten(bestellung: NeuBestellung): void {

		this.gesamtKosten += bestellung.kosten;
		this.erhoeheEilOderNormalKosten(bestellung);
	}

	getBestellKosten(bestellung: NeuBestellung): number {
		var kaufTeil = this.teileService.getKaufTeil(bestellung.teil_id);
		if (bestellung.eil) {
			return kaufTeil.bestellKosten * 10;
		}
		return kaufTeil.bestellKosten;
	}

	getMaterialKosten(bestellung: NeuBestellung) {
		var kaufTeil = this.teileService.getKaufTeil(bestellung.teil_id);

		return kaufTeil.preis * bestellung.menge;
	}
	
	getStueckKosten(bestellung: NeuBestellung){
		return bestellung.kosten / bestellung.menge;
	}

	erhoeheEilOderNormalKosten(bestellung: NeuBestellung): void {
		if (bestellung.eil) {
			this.eilKosten += bestellung.kosten;
		} else {
			this.normalKosten += bestellung.kosten;
		}
	}

	erhoeheEilOderNormalAnzahl(bestellung: NeuBestellung): void {
		if (bestellung.eil) {
			this.anzahlEilBestellungen++;
		} else {
			this.anzahlNormalBestellungen++;
		}
	}
}

angular.module('BestellverwaltungModule').controller('BestellUeberblickController', [
	'BestellService', 'NewTeileService', BestellUeberblickController]);