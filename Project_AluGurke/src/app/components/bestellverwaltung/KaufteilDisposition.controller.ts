/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/BestellungBerechnenService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />

class ViewModel {

	verbrauch1: number;
	verbrauch2: number;
	verbrauch3: number;
	verbrauch4: number;
	reichweite: number;
	kaufTeil: NewKaufTeil;
	laufendeBestellungen:Array<ZugangBestellung>;
	eingehendeBestellungen: Array<Bestellung>;

	constructor(v1: number, v2: number, v3: number, v4: number, rw: number, kaufTeil: NewKaufTeil,lb:Array<ZugangBestellung>,eb:Array<Bestellung>) {
		this.verbrauch1 = v1;
		this.verbrauch2 = v2;
		this.verbrauch3 = v3;
		this.verbrauch4 = v4;
		this.reichweite = rw;
		this.kaufTeil = kaufTeil;
		this.laufendeBestellungen = lb;
		this.eingehendeBestellungen = eb;		
	}
}

class KaufteilDispositionController {

	alleKaufTeile: Array<ViewModel>;
	baumService: NewBaumService;
	bestellService: BestellService;
	teileService: NewTeileService;
	programmService: ProgrammService;
	selectedViewModel: ViewModel;
	neuBestellung: NeuBestellung;
	//Max was here
	bestellungBerechnenService:BestellungBerechnenService;

	constructor(teileService: NewTeileService, baumService: NewBaumService, bestellService: BestellService, programmService: ProgrammService,bestellungBerechnenService:BestellungBerechnenService) {
		this.alleKaufTeile = [];
		this.baumService = baumService;
		this.bestellService = bestellService;
		this.teileService = teileService;
		this.programmService = programmService;
		this.createViewModel(teileService.alleKaufteile);
		this.selectedViewModel = this.alleKaufTeile[3];
		this.neuBestellung = new NeuBestellung(false, 0, 0, 0);
		//Max was here
		this.bestellungBerechnenService=bestellungBerechnenService;				
		this.berechneteBestellungAktualisieren();
	}

	createViewModel(kaufTeile: Array<NewKaufTeil>) {
		for (var i = 0; i < kaufTeile.length; i++) {
			var t = kaufTeile[i];
			this.alleKaufTeile.push(new ViewModel(this.getVerbrauch(t.id, 1),
				this.getVerbrauch(t.id, 2), this.getVerbrauch(t.id, 3),
				this.getVerbrauch(t.id, 4), this.getReichweite(t.lagerMenge, t.id), t,this.getLaufendeBestellungen(t.id),this.getEingehendeBestellungen(t.id)));
			this.alleKaufTeile[i].kaufTeil.teileWertNeu = this.getNeuenTeileWert(this.alleKaufTeile[i]);
		}
	}

	getVerbrauch(id: number, periode: number) {
		var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.programmService.getProgrammposition(1, periode).menge + this.programmService.getDirectsalesPosition(1).menge;
		var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.programmService.getProgrammposition(2, periode).menge + this.programmService.getDirectsalesPosition(2).menge;
		var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.programmService.getProgrammposition(3, periode).menge + this.programmService.getDirectsalesPosition(3).menge;
		return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
	}

	getReichweite(lagerMenge: number, teil_id: number) {
		if (lagerMenge === 0) {
			return 0;
		}
		var gesamtVerbrauch = this.getVerbrauch(teil_id, 1) + this.getVerbrauch(teil_id, 2) + this.getVerbrauch(teil_id, 3) + this.getVerbrauch(teil_id, 4);
		if (gesamtVerbrauch === 0) {
			return Number.POSITIVE_INFINITY;
		}
		var reichweite = 0;
		for (var i = 1; i <= 4; i++) {
			if (lagerMenge - this.getVerbrauch(teil_id, i) >= 0) {
				reichweite += 1;
				lagerMenge -= this.getVerbrauch(teil_id, i);
			} else {
				reichweite += lagerMenge / this.getVerbrauch(teil_id, i);
			}
		}
		return lagerMenge / (gesamtVerbrauch / 4);
	}

	getAnzahlInBaum(baum: NewTeilKnoten, id: number):number {
		return this.baumService.getAnzahlInBaum(baum,id);
	}

	zeileRot(teil: ViewModel):boolean {
		if ((teil.reichweite - teil.kaufTeil.wbz) < 1) {
			return true;
		}
		return false;
	}

	zeileGelb(teil: ViewModel):boolean {
		if (((teil.reichweite - teil.kaufTeil.wbz) > 1) && ((teil.reichweite - teil.kaufTeil.wbzAbw - teil.kaufTeil.wbz) < 1)) {
			return true;
		}
		return false;
	}

	sortieren(kriterium: string) {
		this.alleKaufTeile.sort(function(a: ViewModel, b: ViewModel) {
			var differenz;
			if (a.hasOwnProperty(kriterium)) {
				differenz = a[kriterium] - b[kriterium];

			} else {
				differenz = a.kaufTeil[kriterium] - b.kaufTeil[kriterium];
			}
			if (differenz === 0) {
				return a.kaufTeil['id'] - b.kaufTeil['id'];
			}
			return differenz;
		});
	}

	select(model: ViewModel) {
		this.selectedViewModel = model;
		this.neuBestellung.teil_id = model.kaufTeil.id;
		this.berechneteBestellungAktualisieren();
	}

	neueBestellungErstellen() { //In den Bestellungsservice verschieben
		if (this.neuBestellung.menge <= 0) {
			return;
		}
		let x=new NeuBestellung(this.neuBestellung.eil, this.neuBestellung.teil_id, this.neuBestellung.menge, this.getNeuBestellungsKosten(this.neuBestellung));
		x.periode=this.bestellungBerechnenService.aktuellePeriode;
		this.bestellService.neuBestellungen['k' + this.selectedViewModel.kaufTeil.id].push(x);
		this.selectedViewModel.kaufTeil.teileWertNeu = this.getNeuenTeileWert(this.selectedViewModel);
		this.neuBestellung.menge = 0;
		this.neuBestellung.eil = false;		
		this.berechneteBestellungAktualisieren();
	}

	deleteNeueBestellung(bestellung: NeuBestellung) {
		this.bestellService.deleteNeuBetellung(bestellung.teil_id,bestellung.timestamp);
		this.selectedViewModel.kaufTeil.teileWertNeu = this.getNeuenTeileWert(this.selectedViewModel);
		this.berechneteBestellungAktualisieren();
	}

	getNeuenTeileWert(viewModel: ViewModel) { 
		return this.teileService.getKaufTeilTeileWertNeu(viewModel.kaufTeil.lagerMenge,viewModel.kaufTeil.teileWert,viewModel.kaufTeil.id);
	}

	getLaufendeBestellungen(teil_id: number) {
		var result = [];
		for (var i = 0; i < this.bestellService.laufendeBestellungen.length; i++) {
			if (this.bestellService.laufendeBestellungen[i].teil_id == teil_id) {
				result.push(this.bestellService.laufendeBestellungen[i]);
			}
		}
		return result;
	}
	
	getEingehendeBestellungen(teil_id: number){// auch verschieben
		var result = [];
		for (var i = 0; i < this.bestellService.zugangBestellungen.length; i++) {
			if (this.bestellService.zugangBestellungen[i].teil_id == teil_id) {
				result.push(this.bestellService.zugangBestellungen[i]);
			}
		}
		return result;
	}

	getLaufendeBestellungKosten(bestellung: Bestellung) { //verschieben in Bestellungsservice
		var kosten = 0;
		kosten += bestellung.menge * this.selectedViewModel.kaufTeil.preis;
		if(bestellung.menge >= this.selectedViewModel.kaufTeil.discontMenge && !bestellung.eil) {
			kosten = Math.round(kosten * 0.9*100)/100;
		}
		if (bestellung.eil) {
			kosten += 10 * this.selectedViewModel.kaufTeil.bestellKosten;
		} else {
			kosten += this.selectedViewModel.kaufTeil.bestellKosten
		}
		return kosten;
	}

	getNeuBestellungsKosten(bestellung: NeuBestellung) { // verschieben
		var materialKosten = 0;
		var bestellKosten = 0;
		if (bestellung.menge >= this.selectedViewModel.kaufTeil.discontMenge && !bestellung.eil) {
			materialKosten += bestellung.menge * this.selectedViewModel.kaufTeil.preis * 0.9;
		} else {
			materialKosten += bestellung.menge * this.selectedViewModel.kaufTeil.preis;
		}
		if (bestellung.eil) {
			bestellKosten += 10 * this.selectedViewModel.kaufTeil.bestellKosten;
		} else {
			bestellKosten += this.selectedViewModel.kaufTeil.bestellKosten
		}
		return bestellKosten + materialKosten;
	}
	//Max was here
	bestellung=null;
	timeLine=null;
	reichweite=null;
	
	//Max was here
	berechneteBestellungAktualisieren(){
		this.bestellung=this.getBerechneteBestellung();
		this.timeLine=this.getTimeLine();
		this.reichweite=this.getBerechneteReichweite();
	}
	
	//Max was here
	getBerechneteBestellung(){
		let x=this.selectedViewModel;
		return this.bestellungBerechnenService.getBestellung(x.kaufTeil.id,this.getGambleFaktor(),[x.verbrauch1,x.verbrauch2,x.verbrauch3,x.verbrauch4]);
	}
	//Max was here
	getTimeLine(){
		let x=this.selectedViewModel;
		return this.bestellungBerechnenService.getTimeLine(x.kaufTeil.id,this.getGambleFaktor(),[x.verbrauch1,x.verbrauch2,x.verbrauch3,x.verbrauch4]);
	}
	//Max was here
	getBerechneteReichweite(){
		let x=this.selectedViewModel;
		return this.bestellungBerechnenService.getReichweite(x.kaufTeil.id,this.getGambleFaktor(),[x.verbrauch1,x.verbrauch2,x.verbrauch3,x.verbrauch4]);
	}
	//Max was here
	gambleFaktor=0;	

	//Max was here
	getGambleFaktor(){
		if(this.gambleFaktor<-100||this.gambleFaktor>100||isNaN(this.gambleFaktor)){
			this.gambleFaktor=0;
		}
		return this.gambleFaktor/100;
	}
}

angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', 'ProgrammService','BestellungBerechnenService', KaufteilDispositionController]);