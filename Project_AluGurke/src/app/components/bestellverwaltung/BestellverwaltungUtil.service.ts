/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/AuftragService.ts" />

class BestellverwaltungUtilService {
	
	auftragService:AuftragService;
	baumService:NewBaumService;
	programmService:ProgrammService;
	
	constructor(auftragService:AuftragService,baumService:NewBaumService,programmService:ProgrammService){
		this.auftragService = auftragService;
		this.baumService = baumService;
		this.programmService = programmService;
	}
	
	zeileRot(reichweite:number, wbz:number): boolean {
		if ((reichweite - wbz) < 1) {
			return true;
		}
		return false;
	}

	zeileGelb(reichweite:number, wbz:number,wbzAbw:number): boolean {
		if ((!this.zeileRot(reichweite,wbz) && ((reichweite - wbzAbw - wbz) < 1))) {
			return true;
		}
		return false;
	}
	
	getVerbrauch(teil_id: number, periode: number): number {
		if (periode === 1) {
			var verbrauch = this.auftragService.getAktuellenKaufTeilVerbrauch(teil_id);
			if(verbrauch !== 0){
				return verbrauch;
			}
		}
		if (periode > 4) {
			periode = 4;
		}
		var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, teil_id) * this.programmService.getProgrammposition(1, periode).menge + this.programmService.getDirectsalesPosition(1).menge;
		var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, teil_id) * this.programmService.getProgrammposition(2, periode).menge + this.programmService.getDirectsalesPosition(2).menge;
		var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, teil_id) * this.programmService.getProgrammposition(3, periode).menge + this.programmService.getDirectsalesPosition(3).menge;
		return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
	}
	
	getAnzahlInBaum(baum: NewTeilKnoten, id: number): number {
		return this.baumService.getAnzahlInBaum(baum, id);
	}
	
	getReichweite(lagerMenge: number, teil_id: number):number {
		if (lagerMenge === 0) {
			return 0;
		}
		
		var gesamtVerbrauch = this.getVerbrauch(teil_id, 1) + this.getVerbrauch(teil_id, 2) + this.getVerbrauch(teil_id, 3) + this.getVerbrauch(teil_id, 4);
		if (gesamtVerbrauch === 0) {
			return Number.POSITIVE_INFINITY;
		}
		
		var reichweite = 0;
		for (var i = 1; i <= 10; i++) {
			if (lagerMenge - this.getVerbrauch(teil_id, i) >= 0) {
				reichweite += 1;
				lagerMenge -= this.getVerbrauch(teil_id, i);
			} else {
				reichweite += lagerMenge / this.getVerbrauch(teil_id, i);
				break;
			}
		}
		return reichweite;
	}

}

angular.module('BestellverwaltungModule').factory('BestellverwaltungUtilService', ['AuftragService','NewBaumService','ProgrammService',
(auftragService,baumService,programmService) => new BestellverwaltungUtilService(auftragService,baumService,programmService)]);