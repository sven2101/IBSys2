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
	teileServicee: NewTeileService;

	constructor($rootScope,teileService:NewTeileService) {
		this.teileServicee = teileService;
		this.laufendeBestellungen = [];
		this.zugangBestellungen = [];
		this.neuBestellungen = new BsNeuBestellungenMap();
		$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.updateLaufendeBestellungen(dateiInhalt.results.futureinwardstockmovement.order);
			this.updateZugangBestellungen(dateiInhalt.results.inwardstockmovement.order);
			this.neuBestellungen = new BsNeuBestellungenMap();
		});
	}

	updateLaufendeBestellungen(bestellungen) {
		this.laufendeBestellungen = [];
		
		if(!angular.isArray(bestellungen)||bestellungen.length === 0){
			return;
		}
		
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			var kaufTeil = this.teileServicee.getKaufTeil(Number(b._article));
			var gesamtKosten = this.getBestellungsKosten(Number(b._amount), this.isEilBestellung(b._mode), kaufTeil);
			var bestellKosten = kaufTeil.bestellKosten;
			var materialKosten = gesamtKosten - bestellKosten;
			var stueckKosten = Math.round(gesamtKosten/Number(b._amount) * 100)/100;
			this.laufendeBestellungen.push(new Bestellung(Number(b._id), this.isEilBestellung(b._mode), Number(b._article), Number(b._amount), Number(b._orderperiod),
															gesamtKosten,materialKosten,bestellKosten,stueckKosten));
		}
	}

	updateZugangBestellungen(bestellungen) {
		
		this.zugangBestellungen = [];
		
		if(!angular.isArray(bestellungen)||bestellungen.length === 0){
			return;
		}
		var ersteBestellungEndet = bestellungen[0]._time * 1;
		var startPeriode = bestellungen[0]._orderperiod * 1;
		for (var i = 0; i < bestellungen.length; i++) {
			var b = bestellungen[i];
			this.zugangBestellungen.push(new ZugangBestellung(Number(b._id), this.isEilBestellung(b._mode), Number(b._article), Number(b._amount), Number(b._orderperiod),
				this.getEndZeitpunkt(ersteBestellungEndet, startPeriode, b._time), Number(b._materialcosts), Number(b._ordercosts), Number(b._entirecosts), Number(b._piececosts)));
		}
	}

	getEndZeitpunkt(ersteBestellungEndet: number, startPeriode: number, bestellungEndet: number): { periode: number, tag: number } {
		var anzahlTageErsteBestellung = ersteBestellungEndet / 60 / 24;
		var bestellungEndetTage = bestellungEndet / 60 / 24;
		var differenz = bestellungEndetTage - anzahlTageErsteBestellung;
		var restTage = anzahlTageErsteBestellung % 5;
		var anzahlPerioden = (anzahlTageErsteBestellung - restTage) / 5;

		var endPeriode = startPeriode - 1 + anzahlPerioden;
		var endTag = restTage + differenz + 1;

		if (endTag > 5) {
			endTag = endTag % 5;
			endPeriode += 1;
		}
		return { periode: endPeriode, tag: endTag };
	}

	isEilBestellung(mode: number): boolean {
		if (mode == 4) {
			return true;
		}
		return false;
	}

	deleteNeuBetellung(kaufTeilId: number, timestamp: number) {
		var neuBestellungen = this.neuBestellungen['k' + kaufTeilId];

		for (var i = 0; i < neuBestellungen.length; i++) {
			if (neuBestellungen[i].timestamp === timestamp) {
				neuBestellungen.splice(i, 1);
			}
		}
	}

	neuBestellungErstellen(eil: boolean, teil: NewKaufTeil, menge: number, periode: number): void {
		var kosten = this.getBestellungsKosten(menge, eil, teil);
		var bestellung = new NeuBestellung(eil, teil.id, menge, kosten, periode);
		this.neuBestellungen['k' + bestellung.teil_id].push(bestellung);
	}

	getBestellungsKosten(menge: number, eil: boolean, kaufTeil: NewKaufTeil): number {
		var materialKosten = 0;
		var bestellKosten = 0;
        
        console.log(eil);

		if (menge >= kaufTeil.discontMenge && !eil) {
			materialKosten += menge * kaufTeil.preis * 0.9;
		} else {
			materialKosten += menge * kaufTeil.preis;
		}
		if (eil) {
			bestellKosten += 10 * kaufTeil.bestellKosten;
		} else {
			bestellKosten += kaufTeil.bestellKosten
		}

		return bestellKosten + materialKosten;
	}

	getLaufendeBestellungen(teil_id: number): Array<Bestellung> {
		var bestellungen = new Array<Bestellung>();
		for (var i = 0; i < this.laufendeBestellungen.length; i++) {
			if (this.laufendeBestellungen[i].teil_id == teil_id) {
				bestellungen.push(this.laufendeBestellungen[i]);
			}
		}
		return bestellungen;
	}

	getZugangBestellungen(teil_id: number): Array<ZugangBestellung> {
		var aktuellerZugang = new Array<ZugangBestellung>();

		for (var i = 0; i < this.zugangBestellungen.length; i++) {
			if (this.zugangBestellungen[i].teil_id == teil_id) {
				aktuellerZugang.push(this.zugangBestellungen[i]);
			}
		}

		return aktuellerZugang;
	}
}

angular.module('app').factory('BestellService', ['$rootScope','NewTeileService', ($rootScope,teileServicee) => new BestellService($rootScope,teileServicee)]);