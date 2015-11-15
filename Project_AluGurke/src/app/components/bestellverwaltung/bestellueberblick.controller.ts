/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellService.ts" />

class BestellUeberblickController {

	bestellService: BestellService;

	anzahlNeuBestellungen: number = 0;
	anzahlNormalBestellungen: number = 0;
	anzahlEilBestellungen: number = 0;
	
	gesamtKosten:number = 0;
	normalKosten:number = 0;
	eilKosten:number = 0;
	
	data = [
    {
        value: 300,
        color:"#F7464A",
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

	constructor(bestellService: BestellService) {
		this.neueBestellungen = [];
		this.bestellService = bestellService;
		this.setNeueBestellungen();
		this.analysiere(this.neueBestellungen);
	}

	setNeueBestellungen() {
		for (var array in this.bestellService.neuBestellungen) {
			if (this.bestellService.neuBestellungen.hasOwnProperty(array)) {
				for (var i = 0; i < this.bestellService.neuBestellungen[array].length; i++) {
					this.neueBestellungen.push(this.bestellService.neuBestellungen[array][i]);
					this.analysiereKosten(this.bestellService.neuBestellungen[array][i]);
				}
			}
		}
	}

	analysiere(neueBestellungen: Array<NeuBestellung>) {
		this.anzahlNeuBestellungen = neueBestellungen.length;
		for (var i = 0; i < neueBestellungen.length; i++) {
			this.setEilOderNormalAnzahl(neueBestellungen[i]);
		}
	}
	
	analysiereKosten(bestellung:NeuBestellung){
		this.gesamtKosten +=bestellung.kosten;
		if(bestellung.eil){
			this.eilKosten += bestellung.kosten;
		} else {
			this.normalKosten += bestellung.kosten;
		}
	}
	
	setEilOderNormalAnzahl(bestellung: NeuBestellung) {
		if (bestellung.eil) {
			this.anzahlEilBestellungen++;
		} else {
			this.anzahlNormalBestellungen++;
		}
	}
}

angular.module('BestellverwaltungModule').controller('BestellUeberblickController', [
	'BestellService', BestellUeberblickController]);