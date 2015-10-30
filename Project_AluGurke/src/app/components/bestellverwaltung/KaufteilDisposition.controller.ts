/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />

class ViewModel {
	id: number;
	mfw: boolean;
	teileWert: number;
	wbz: number;
	wbzAbw: number;
	discontMenge: number;
	bestellKosten: number;
	lagerMenge: number;
	verbrauch1: number;
	verbrauch2: number;
	verbrauch3: number;
	verbrauch4: number;
	reichweite: number;

	constructor(id: number, mfw: boolean, teileWert: number, wbz: number, wbzAbw: number, dm: number,
		bk: number, lm: number, v1: number, v2: number, v3: number, v4: number, rw: number) {
		this.id = id;
		this.mfw = mfw;
		this.teileWert = teileWert;
		this.wbz = wbz;
		this.wbzAbw = wbzAbw;
		this.discontMenge = dm;
		this.bestellKosten = bk;
		this.lagerMenge = lm;
		this.verbrauch1 = v1;
		this.verbrauch2 = v2;
		this.verbrauch3 = v3;
		this.verbrauch4 = v4;
		this.reichweite = rw;
	}
}

class KaufteilDispositionController {
	
	alleKaufTeile: Array<ViewModel>;
	baumService: NewBaumService;
	bestellService: BestellService;
	programmService: ProgrammService;
	

	constructor(teileService: NewTeileService, baumService: NewBaumService, bestellService: BestellService, programmService: ProgrammService) {
		this.alleKaufTeile = new Array();
		this.baumService = baumService;
		this.bestellService = bestellService;
		this.programmService = programmService;
		this.createViewModel(teileService.alleKaufteile);
	}

	createViewModel(kaufTeile: Array<NewKaufTeil>) {
		for (var i = 0; i < kaufTeile.length; i++) {
			var t = kaufTeile[i];
			this.alleKaufTeile.push(new ViewModel(t.id, t.mehrfachVerwendung, t.teileWert,
				t.wiederBeschaffungsZeit, t.wbzAbweichung,
				t.discontMenge, t.bestellKosten, t.lagerMenge, this.getVerbrauch(t.id, 1),
				this.getVerbrauch(t.id, 2), this.getVerbrauch(t.id, 3),
				this.getVerbrauch(t.id, 4), this.getReichweite(t.lagerMenge,t.id)));
		}
	}

	getVerbrauch(id: number, periode: number) {
		var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.programmService.getProgrammposition(1,periode).menge;
		var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.programmService.getProgrammposition(2,periode).menge;
		var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.programmService.getProgrammposition(3,periode).menge;
		return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
	}
	
	getReichweite(lagerMenge: number, teil_id:number) {
		if(lagerMenge === 0){
			return 0;
		}
		var gesamtVerbrauch = this.getVerbrauch(teil_id, 1) + this.getVerbrauch(teil_id, 2) + this.getVerbrauch(teil_id, 3) + this.getVerbrauch(teil_id, 4);
		if (gesamtVerbrauch === 0) {
			return Number.POSITIVE_INFINITY;
		}
		return lagerMenge / gesamtVerbrauch;
	}
	
	getAnzahlInBaum(baum: NewTeilKnoten, id: number) {
		var anzahl = 0;
		if (baum.teil_id === id) {
			anzahl += baum.anzahl;
		}
		if (baum.hatBauteile()) {
			for (var i = 0; i < baum.bauteile.length; i++) {
				anzahl += this.getAnzahlInBaum(baum.bauteile[i], id);
			}
		}
		return anzahl;
	}

	mussBestellen(teil: ViewModel) {
		if ((teil.reichweite - teil.wbz) < 1) {
			return true;
		}
		return false;
	}

	sollteBestellen(teil: ViewModel) {
		if (((teil.reichweite - teil.wbz) > 1) && ((teil.reichweite - teil.wbzAbw - teil.wbz) < 1)) {
			return true;
		}
		return false;
	}
	
	sortieren(kriterium: string){
		this.alleKaufTeile.sort(function(a:ViewModel,b:ViewModel){
			var erg = a[kriterium] - b[kriterium];
			if(erg === 0) {
				return a['id'] - b['id']
			}
			return erg;
		});
	}
}

angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', 'ProgrammService',KaufteilDispositionController]);