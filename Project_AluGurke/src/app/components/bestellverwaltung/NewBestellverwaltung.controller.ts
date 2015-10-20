/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />

class NewBestellverwaltungsController {

	alleKaufTeile: Array<NewKaufTeil>;
	baumService: NewBaumService;
	danger = true;

	vertriebsWuensche: Array<{kinder:number,damen:number,herren:number}>;

	constructor(teileService: NewTeileService, baumService: NewBaumService) {
		this.alleKaufTeile = teileService.alleKaufteile;
		this.baumService = baumService;
		
		this.vertriebsWuensche = [{kinder: 150, damen:100, herren:100},{kinder: 150, damen:100, herren:100},{kinder: 150, damen:100, herren:100},{kinder: 150, damen:100, herren:100}];
	}

	getVerbrauch(id: number, periode: number) {
		var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, id) * this.vertriebsWuensche[periode-1].kinder;
		var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, id) * this.vertriebsWuensche[periode-1].damen;
		var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, id) * this.vertriebsWuensche[periode-1].herren;
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
	
	mussBestellen(teil: NewKaufTeil){
		if((teil.wiederBeschaffungsZeit) < (teil.lagerMenge/this.getVerbrauch(teil.id,1)-1)) {
			return false;
		}
		return true;
	}
}

angular.module('BestellverwaltungModule').controller('NewBestellverwaltungController', ['NewTeileService', 'NewBaumService', NewBestellverwaltungsController]);