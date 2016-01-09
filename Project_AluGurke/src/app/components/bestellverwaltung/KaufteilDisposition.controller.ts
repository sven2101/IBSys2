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
	bestellungBerechnenService: BestellungBerechnenService;
	auftragService: AuftragService;
	utilService: BestellverwaltungUtilService;

	constructor(teileService: NewTeileService, baumService: NewBaumService, bestellService: BestellService,
		programmService: ProgrammService, bestellungBerechnenService: BestellungBerechnenService, auftragService: AuftragService,utilService:BestellverwaltungUtilService) {
		this.bestellungBerechnenService = bestellungBerechnenService;
		//this.auftragService = auftragService;
		this.utilService = utilService;
		this.kaufTeileVM = [];
		this.baumService = baumService;
		this.bestellService = bestellService;
		this.teileService = teileService;
		this.programmService = programmService;
		this.createViewModel(teileService.alleKaufteile);
	}
    
    onChanged():void{
        this.bestellungBerechnenService.onSelected();
        this.changeReichweite();
    }
    
    changeReichweite():void{
        for(var i = 0; i < this.kaufTeileVM.length;i++){
            var vm = this.kaufTeileVM[i];
           vm.reichweite = this.getReichweite(vm.kaufTeil.lagerMenge,vm.kaufTeil.id);
        }
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
        var verbrauch1 = this.utilService.getVerbrauch(teil_id,1);
        var verbrauch2 = this.utilService.getVerbrauch(teil_id,2);
        var verbrauch3 = this.utilService.getVerbrauch(teil_id,3);
        var verbrauch4 = this.utilService.getVerbrauch(teil_id,4);
        var verbrauchArray = [verbrauch1,verbrauch2,verbrauch3,verbrauch4];
       
        return this.bestellungBerechnenService.getReichweite(teil_id,verbrauchArray);
	}

	getAnzahlInBaum(baum: NewTeilKnoten, id: number): number {
		return this.baumService.getAnzahlInBaum(baum, id);
	}

	zeileRot(teil: ViewModel): boolean {
		return this.utilService.zeileRot(teil.reichweite,teil.kaufTeil.wbz,teil.kaufTeil.wbzAbw,this.bestellungBerechnenService.multiplikator);
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
			} else if(differenz <= 0){
                differenz = -1;
            } else {
                differenz = 1;
            }
			return differenz;
		});
	}

	deleteNeueBestellung(bestellung: NeuBestellung):void {
		this.bestellService.deleteNeuBetellung(bestellung.teil_id, bestellung.timestamp);
		this.changeReichweite();
	}
}

angular.module('BestellverwaltungModule').controller('KaufteilDispositionController', ['NewTeileService', 'NewBaumService', 'BestellService', 'ProgrammService', 
'BestellungBerechnenService', 'AuftragService','BestellverwaltungUtilService','DispositionService', KaufteilDispositionController]);