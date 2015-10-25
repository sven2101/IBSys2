/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../model/Bestellung.ts" />

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

	vertriebsWuensche: Array<{ kinder: number;damen: number; herren: number }>;

	constructor(teileService: NewTeileService, baumService: NewBaumService, bestellService: BestellService) {
		this.alleKaufTeile = new Array();
		this.baumService = baumService;
		this.bestellService = bestellService;
		this.vertriebsWuensche = [
			{ kinder: 200, damen: 100, herren: 50 },
			{ kinder: 200, damen: 150, herren: 50 },
			{ kinder: 250, damen: 150, herren: 100 },
			{ kinder: 250, damen: 150, herren: 100 }];
		this.createViewModel(teileService.alleKaufteile);
	}

	createViewModel(kaufTeile: Array<NewKaufTeil>) {
		for (var i = 0; i < kaufTeile.length; i++) {
			var t = kaufTeile[i];
			this.alleKaufTeile.push(new ViewModel(t.id, t.mehrfachVerwendung, t.teileWert,
				t.wiederBeschaffungsZeit, t.wbzAbweichung,
				t.discontMenge, t.bestellKosten, t.lagerMenge, this.getVerbrauch(t.id, 1),
				this.getVerbrauch(t.id, 2), this.getVerbrauch(t.id, 3),
				this.getVerbrauch(t.id, 4), t.lagerMenge / ((this.getVerbrauch(t.id, 1) + this.getVerbrauch(t.id, 2) + this.getVerbrauch(t.id, 3) + this.getVerbrauch(t.id, 4)) / 4)));
		}
	}

	getVerbrauch(id: number, periode: number) {
		var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.vertriebsWuensche[periode - 1].kinder;
		var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.vertriebsWuensche[periode - 1].damen;
		var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.vertriebsWuensche[periode - 1].herren;
		return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
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
}

angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', KaufteilDispositionController]);