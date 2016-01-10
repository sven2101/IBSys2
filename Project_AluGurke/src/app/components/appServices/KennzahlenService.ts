/// <reference path="../../typeDefinitions/angular.d.ts" />

class KennzahlenContainer {
	aktuell: number;
	durchschnitt: number;
	summe: number;

	constructor() {
		this.summe = -1; //so kann man überprüfen ob eine Summe über alle Perioden existiert.
	}
}

class KennzahlenContainerProzent{
	aktuell:string;
	durchschnitt:string;
	
	constructor(){
		
	}
}

class NormalVerkauf {
	verkaufsPreis: KennzahlenContainer;
	herstellerKosten: KennzahlenContainer;
	stückErgebnis: KennzahlenContainer;
	ergebnis: KennzahlenContainer;

	constructor() {
		this.verkaufsPreis = new KennzahlenContainer();
		this.herstellerKosten = new KennzahlenContainer();
		this.stückErgebnis = new KennzahlenContainer();
		this.ergebnis = new KennzahlenContainer();
	}
}

class DirektVerkauf{
	ergebnis:KennzahlenContainer;
	konventionalStrafe:KennzahlenContainer;
	
	constructor(){
		this.ergebnis = new KennzahlenContainer();
		this.konventionalStrafe = new KennzahlenContainer();
	}
}

class KennzahlenService {

	game: number;
	group: number;
	periode: number = 1;

	genutzteKapazität: KennzahlenContainer = new KennzahlenContainer();
	kannKapazität:KennzahlenContainer = new KennzahlenContainer();
	verhältnisKapazitäten:KennzahlenContainerProzent = new KennzahlenContainerProzent();
	produktivZeit: KennzahlenContainer = new KennzahlenContainer();
	auslastung:KennzahlenContainerProzent = new KennzahlenContainerProzent();
	vertriebsWunsch: KennzahlenContainer = new KennzahlenContainer();
	absatz: KennzahlenContainer = new KennzahlenContainer();
	lieferTreue:KennzahlenContainerProzent = new KennzahlenContainerProzent();
	leerZeit: KennzahlenContainer = new KennzahlenContainer();
	leerZeitenKosten: KennzahlenContainer = new KennzahlenContainer();
	durschnittlicherLagerwert: KennzahlenContainer = new KennzahlenContainer();
	lagerKosten: KennzahlenContainer = new KennzahlenContainer();
	ausschussMenge: KennzahlenContainer = new KennzahlenContainer();
	ausschussKosten: KennzahlenContainer = new KennzahlenContainer();

	normalVerkauf: NormalVerkauf;
	direktVerkauf: DirektVerkauf;
	markplatzErgebnis: KennzahlenContainer = new KennzahlenContainer();
	gesamtErgebnis: KennzahlenContainer = new KennzahlenContainer();

	constructor($rootScope) {
		$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.onNeueDatei(dateiInhalt);
		});
	}

	onNeueDatei(dateiInhalt) {
		this.game = dateiInhalt.results._game;
		this.group = dateiInhalt.results._group;
		this.periode = Number(dateiInhalt.results._period)+1;
		
		this.genutzteKapazität.aktuell = Number(dateiInhalt.results.result.general.capacity._current);
		this.genutzteKapazität.durchschnitt = Number(dateiInhalt.results.result.general.capacity._average);
		this.genutzteKapazität.summe = Number(dateiInhalt.results.result.general.capacity._all);
		
		this.kannKapazität.aktuell = Number(dateiInhalt.results.result.general.possiblecapacity._current);
		this.kannKapazität.durchschnitt = Number(dateiInhalt.results.result.general.possiblecapacity._average);
		this.kannKapazität.summe = Number(dateiInhalt.results.result.general.possiblecapacity._all);
		
		this.verhältnisKapazitäten.aktuell = dateiInhalt.results.result.general.relpossiblenormalcapacity._current;
		this.verhältnisKapazitäten.durchschnitt = dateiInhalt.results.result.general.relpossiblenormalcapacity._average;
		
		this.produktivZeit.aktuell = Number(dateiInhalt.results.result.general.productivetime._current);
		this.produktivZeit.durchschnitt = Number(dateiInhalt.results.result.general.productivetime._average);
		this.produktivZeit.summe = Number(dateiInhalt.results.result.general.productivetime._all);
		
		this.auslastung.aktuell = dateiInhalt.results.result.general.effiency._current;
		this.auslastung.durchschnitt = dateiInhalt.results.result.general.effiency._average;
		
		this.vertriebsWunsch.aktuell = Number(dateiInhalt.results.result.general.sellwish._current);
		this.vertriebsWunsch.durchschnitt = Number(dateiInhalt.results.result.general.sellwish._average);
		this.vertriebsWunsch.summe = Number(dateiInhalt.results.result.general.sellwish._all);
		
		this.absatz.aktuell = Number(dateiInhalt.results.result.general.salesquantity._current);
		this.absatz.durchschnitt = Number(dateiInhalt.results.result.general.salesquantity._average);
		this.absatz.summe = Number(dateiInhalt.results.result.general.salesquantity._all);
		
		this.lieferTreue.aktuell = dateiInhalt.results.result.general.deliveryreliability._current;
		this.lieferTreue.durchschnitt = dateiInhalt.results.result.general.deliveryreliability._average;
		
		this.leerZeit.aktuell = Number(dateiInhalt.results.result.general.idletime._current);
		this.leerZeit.durchschnitt = Number(dateiInhalt.results.result.general.idletime._average);
		this.leerZeit.summe = Number(dateiInhalt.results.result.general.idletime._all);
		
		this.leerZeitenKosten.aktuell = Number(dateiInhalt.results.result.general.idletimecosts._current);
		this.leerZeitenKosten.durchschnitt = Number(dateiInhalt.results.result.general.idletimecosts._average);
		this.leerZeitenKosten.summe = Number(dateiInhalt.results.result.general.idletimecosts._all);
		
		this.durschnittlicherLagerwert.aktuell = Number(dateiInhalt.results.result.general.storevalue._current);
		this.durschnittlicherLagerwert.durchschnitt = Number(dateiInhalt.results.result.general.storevalue._average);
		
		this.lagerKosten.aktuell = Number(dateiInhalt.results.result.general.storagecosts._current);
		this.lagerKosten.durchschnitt = Number(dateiInhalt.results.result.general.storagecosts._average);
		this.lagerKosten.summe = Number(dateiInhalt.results.result.general.storagecosts._all);
		
		this.ausschussMenge.aktuell = Number(dateiInhalt.results.result.defectivegoods.quantity._current);
		this.ausschussMenge.durchschnitt = Number(dateiInhalt.results.result.defectivegoods.quantity._average);
		this.ausschussMenge.summe = Number(dateiInhalt.results.result.defectivegoods.quantity._all);
		
		this.ausschussKosten.aktuell = Number(dateiInhalt.results.result.defectivegoods.costs._current);
		this.ausschussKosten.durchschnitt = Number(dateiInhalt.results.result.defectivegoods.costs._average);
		this.ausschussKosten.summe = Number(dateiInhalt.results.result.defectivegoods.costs._all);
		
		this.setNormalVerkauf(dateiInhalt.results.result.normalsale);
		this.setDirektVerkauf(dateiInhalt.results.result.directsale);
		
		this.markplatzErgebnis.aktuell = Number(dateiInhalt.results.result.marketplacesale.profit._current);
		this.markplatzErgebnis.durchschnitt = Number(dateiInhalt.results.result.marketplacesale.profit._average);
		this.markplatzErgebnis.summe = Number(dateiInhalt.results.result.marketplacesale.profit._all);
		
		this.gesamtErgebnis.aktuell = Number(dateiInhalt.results.result.summary.profit._current);
		this.gesamtErgebnis.durchschnitt = Number(dateiInhalt.results.result.summary.profit._average);
		this.gesamtErgebnis.summe = Number(dateiInhalt.results.result.summary.profit._all);
		
	}

	setNormalVerkauf(normalVerkauf) {
		this.normalVerkauf = new NormalVerkauf();

		this.normalVerkauf.verkaufsPreis.aktuell = Number(normalVerkauf.salesprice._current);
		this.normalVerkauf.verkaufsPreis.durchschnitt = Number(normalVerkauf.salesprice._average);

		this.normalVerkauf.ergebnis.aktuell = Number(normalVerkauf.profit._current);
		this.normalVerkauf.ergebnis.durchschnitt = Number(normalVerkauf.profit._average);
		this.normalVerkauf.ergebnis.summe = Number(normalVerkauf.profit._all);

		this.normalVerkauf.stückErgebnis.aktuell = Number(normalVerkauf.profitperunit._current);
		this.normalVerkauf.stückErgebnis.durchschnitt = Number(normalVerkauf.profitperunit._average);

		this.normalVerkauf.verkaufsPreis.aktuell = Number(normalVerkauf.salesprice._current);
		this.normalVerkauf.verkaufsPreis.durchschnitt = Number(normalVerkauf.salesprice._average);

		this.normalVerkauf.herstellerKosten.aktuell = this.normalVerkauf.verkaufsPreis.aktuell - this.normalVerkauf.stückErgebnis.aktuell;
		this.normalVerkauf.herstellerKosten.durchschnitt = this.normalVerkauf.verkaufsPreis.durchschnitt - this.normalVerkauf.stückErgebnis.durchschnitt;
	}

	setDirektVerkauf(direktVerkauf) {
		this.direktVerkauf = new DirektVerkauf();
		
		this.direktVerkauf.ergebnis.aktuell= Number(direktVerkauf.profit._current);
		this.direktVerkauf.ergebnis.durchschnitt= Number(direktVerkauf.profit._average);
		this.direktVerkauf.ergebnis.summe= Number(direktVerkauf.profit._all);
		
		this.direktVerkauf.konventionalStrafe.aktuell = Number(direktVerkauf.contractpenalty._current);
		this.direktVerkauf.konventionalStrafe.durchschnitt = Number(direktVerkauf.contractpenalty._average);
		this.direktVerkauf.konventionalStrafe.summe = Number(direktVerkauf.contractpenalty._all);
	}
}

angular.module('app').factory('KennzahlenService', ['$rootScope', ($rootScope) => new KennzahlenService($rootScope)]);