/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/BestellungBerechnenService.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="./BestellverwaltungUtil.service.ts" />

class ViewModel {

	verbrauchAktuell: number;
	reichweite: number;
	kaufTeil: NewKaufTeil;
	mengeAktuellerLagerZugang: number;
	mengeZukuenftigerLagerZugang: number;
	neueBestellungen: Array<NeuBestellung>;

	constructor(verbrauchAktuell: number, rw: number, kaufTeil: NewKaufTeil,
		malz: number, mzlz: number, nb: Array<NeuBestellung>) {
		this.verbrauchAktuell = verbrauchAktuell;
		this.reichweite = rw;
		this.kaufTeil = kaufTeil;
		this.mengeAktuellerLagerZugang = malz;
		this.mengeZukuenftigerLagerZugang = mzlz;
		this.neueBestellungen = nb;
	}
}

class KaufteilDispositionController {

	kaufTeileVM: Array<ViewModel>;
	baumService: NewBaumService;
	bestellService: BestellService;
	teileService: NewTeileService;
	programmService: ProgrammService;
	selectedViewModel: ViewModel;
	//neuBestellung: NeuBestellung;
	bestellungBerechnenService: BestellungBerechnenService;
	auftragService: AuftragService;
	utilService: BestellverwaltungUtilService;

	constructor(teileService: NewTeileService, baumService: NewBaumService, bestellService: BestellService,
		programmService: ProgrammService, bestellungBerechnenService: BestellungBerechnenService, auftragService: AuftragService,utilService:BestellverwaltungUtilService) {
		this.auftragService = auftragService;
		this.utilService = utilService;
		this.kaufTeileVM = [];
		this.baumService = baumService;
		this.bestellService = bestellService;
		this.teileService = teileService;
		this.programmService = programmService;
		this.createViewModel(teileService.alleKaufteile);
		this.selectedViewModel = this.kaufTeileVM[3];
		//this.neuBestellung = new NeuBestellung(false, 0, 0, 0, 1);
		this.bestellungBerechnenService = bestellungBerechnenService;
		
		//this.berechneteBestellungAktualisieren();
	}
    onSelected(){
        this.bestellungBerechnenService.onSelected();
    }

	createViewModel(kaufTeile: Array<NewKaufTeil>) {
		for (var i = 0; i < kaufTeile.length; i++) {
			var teil = kaufTeile[i];
			var verbrauchAktuell = this.getVerbrauch(teil.id, 1);
			var reichWeite = this.getReichweite(teil.lagerMenge, teil.id);
			var malz = this.getMengeAktuellerLagerZugang(teil.id);
			var mzlz = this.getMengeZukünftigerLagerzugang(teil.id);
			var nb = this.bestellService.neuBestellungen['k' + teil.id];

			var vm = new ViewModel(verbrauchAktuell, reichWeite, teil, malz, mzlz, nb);
			this.kaufTeileVM.push(vm);
		}
	}

	getMengeAktuellerLagerZugang(teil_id: number): number {
		var zugangBestellungen = this.bestellService.getZugangBestellungen(teil_id);
		if (zugangBestellungen.length === 0 || zugangBestellungen == null) {
			return 0;
		}

		var menge = 0;

		for (var i = 0; i < zugangBestellungen.length; i++) {
			menge += zugangBestellungen[i].menge;
		}
		return menge;
	}

	getMengeZukünftigerLagerzugang(teil_id: number): number {
		var laufendeBestellungen = this.bestellService.getLaufendeBestellungen(teil_id);
		if (laufendeBestellungen.length === 0 || laufendeBestellungen == null) {
			return 0;
		}
		var menge = 0;

		for (var i = 0; i < laufendeBestellungen.length; i++) {
			menge += laufendeBestellungen[i].menge;
		}
		return menge;
	}

	getVerbrauch(teil_id: number, periode: number): number {
		return this.utilService.getVerbrauch(teil_id,periode);
	}

	getReichweite(lagerMenge: number, teil_id: number):number {
		return this.utilService.getReichweite(lagerMenge,teil_id);
	}

	getAnzahlInBaum(baum: NewTeilKnoten, id: number): number {
		return this.baumService.getAnzahlInBaum(baum, id);
	}

	zeileRot(teil: ViewModel): boolean {
		return this.utilService.zeileRot(teil.reichweite,teil.kaufTeil.wbz);
	}

	zeileGelb(teil: ViewModel): boolean {
		return this.utilService.zeileGelb(teil.reichweite,teil.kaufTeil.wbz,teil.kaufTeil.wbzAbw);
	}

	sortieren(kriterium: string):void {
		this.kaufTeileVM.sort(function(a: ViewModel, b: ViewModel) {
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

	select(model: ViewModel):void {
		this.selectedViewModel = model;
		//this.neuBestellung.teil_id = model.kaufTeil.id;
		//this.berechneteBestellungAktualisieren();
	}

	/*neueBestellungErstellen() {
		if (this.neuBestellung.menge <= 0) {
			return;
		}
		this.bestellService.neuBestellungErstellen(this.neuBestellung.eil, this.neuBestellung.teil_id, this.neuBestellung.menge, 1);
		this.neuBestellung.menge = 0;
		this.neuBestellung.eil = false;
		//this.berechneteBestellungAktualisieren();
	}*/

	deleteNeueBestellung(bestellung: NeuBestellung):void {
		this.bestellService.deleteNeuBetellung(bestellung.teil_id, bestellung.timestamp);
		//this.berechneteBestellungAktualisieren();
	}

	//Max was here
	/*bestellung = null;
	timeLine = null;
	reichweite = null;
	
	//Max was here
	berechneteBestellungAktualisieren() {
		this.bestellung = this.getBerechneteBestellung();
		this.timeLine = this.getTimeLine();
		this.reichweite = this.getBerechneteReichweite();
	}
	
	//Max was here
	getBerechneteBestellung() {
		let x = this.selectedViewModel;
		return this.bestellungBerechnenService.getBestellung(x.kaufTeil.id, this.getGambleFaktor(), [x.verbrauch1, x.verbrauch2, x.verbrauch3, x.verbrauch4]);
	}
	//Max was here
	getTimeLine() {
		let x = this.selectedViewModel;
		return this.bestellungBerechnenService.getTimeLine(x.kaufTeil.id, this.getGambleFaktor(), [x.verbrauch1, x.verbrauch2, x.verbrauch3, x.verbrauch4]);
	}
	//Max was here
	getBerechneteReichweite() {
		let x = this.selectedViewModel;
		return this.bestellungBerechnenService.getReichweite(x.kaufTeil.id, this.getGambleFaktor(), [x.verbrauch1, x.verbrauch2, x.verbrauch3, x.verbrauch4]);
	}
	//Max was here
	gambleFaktor = 0;	

	//Max was here
	getGambleFaktor() {
		if (this.gambleFaktor < -100 || this.gambleFaktor > 100 || isNaN(this.gambleFaktor)) {
			this.gambleFaktor = 0;
		}
		return this.gambleFaktor / 100;
	}*/
}

angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', 'ProgrammService', 
'BestellungBerechnenService', 'AuftragService','BestellverwaltungUtilService','DispositionService', KaufteilDispositionController]);