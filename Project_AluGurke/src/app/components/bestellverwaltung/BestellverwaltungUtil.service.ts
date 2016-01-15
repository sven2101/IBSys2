/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/BestellungBerechnenService.ts" />

class BestellverwaltungUtilService {

    auftragService: AuftragService;
    baumService: NewBaumService;
    programmService: ProgrammService;
    generierteBestellungen: boolean = false;
    teileService: NewTeileService;
    bestellService: BestellService;
    bestellungBerechnenService: BestellungBerechnenService;
    bestellungenBeiStrategieWecheselNeuBerechnen:boolean = true;

    constructor(auftragService: AuftragService, baumService: NewBaumService, programmService: ProgrammService,
        teileService: NewTeileService, bestellService: BestellService, bestellBerechnenService: BestellungBerechnenService) {
        this.auftragService = auftragService;
        this.baumService = baumService;
        this.programmService = programmService;
        this.teileService = teileService;
        this.bestellService = bestellService;
        this.bestellungBerechnenService = bestellBerechnenService;
    }

    zeileRot(reichweite: number, wbz: number, wbzAbw: number, multiplikator: number): boolean {

        var differenz = (reichweite - wbz - wbzAbw * multiplikator);

        if (Math.round(differenz) < 1) {
            return true;
        }
        return false;
    }

    getVerbrauch(teil_id: number, periode: number): number {
        if (periode === 1) {
            var verbrauch = this.auftragService.getAktuellenKaufTeilVerbrauch(teil_id);
            return verbrauch;
        }
        if (periode > 4) {
            periode = 4;
        }
        var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, teil_id) * this.programmService.getProgrammposition(1, periode).menge;
        var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, teil_id) * this.programmService.getProgrammposition(2, periode).menge;
        var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, teil_id) * this.programmService.getProgrammposition(3, periode).menge;
        return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
    }

    getAnzahlInBaum(baum: NewTeilKnoten, id: number): number {
        return this.baumService.getAnzahlInBaum(baum, id);
    }

    bestellungenGenerieren() {
        this.generierteBestellungen = true;
        
        for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {

            var kTeil: NewKaufTeil = this.teileService.alleKaufteile[i];

            var verbrauchAktuell = this.getVerbrauch(kTeil.id, 1);
            var verbrauch1 = this.getVerbrauch(kTeil.id, 2);
            var verbrauch2 = this.getVerbrauch(kTeil.id, 3);
            var verbrauch3 = this.getVerbrauch(kTeil.id, 4);


            var bestellung = this.bestellungBerechnenService.getBestellung(kTeil.id,
                [verbrauchAktuell, verbrauch1, verbrauch2, verbrauch3]);

            if (bestellung) {
                this.bestellService.neuBestellungErstellen(bestellung.eil,
                    kTeil, bestellung.menge, bestellung.periode, true);
            }
        }
    }

    deleteGenerierteBestellungen() {
        this.generierteBestellungen = false;
        for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {
            var bestellungen: Array<NeuBestellung> = this.bestellService.neuBestellungen['k' + this.teileService.alleKaufteile[i].id];

            for (var j = 0; j < bestellungen.length; j++) {
                if (bestellungen[j].generiert) {
                    bestellungen.splice(j, 1);
                }
            }
        }
    }

    generierteBestellungenExist(): boolean {

        var gibtGenerierteBestellung: boolean = false;
        for (var i = 0; i < this.teileService.alleKaufteile.length; i++) {

            var bestellungen: Array<NeuBestellung> = this.bestellService.neuBestellungen['k' + this.teileService.alleKaufteile[i].id];

            if(this.containsGenerierteBestellung(bestellungen)){
                gibtGenerierteBestellung = true;
                break;
            }
        }

        this.generierteBestellungen = gibtGenerierteBestellung;

        return gibtGenerierteBestellung;
    }
    
    containsGenerierteBestellung(bestellungen:Array<NeuBestellung>):boolean{
        
         for (var i = 0; i <bestellungen.length; i++) {
             if(bestellungen[i].generiert){
                 return true;
             }
         }
        
        return false;
    }
}

angular.module('BestellverwaltungModule').factory('BestellverwaltungUtilService', ['AuftragService', 'NewBaumService', 'ProgrammService', 'NewTeileService', 'BestellService', 'BestellungBerechnenService',
    (auftragService, baumService, programmService, teileService, bestellservice, BestellungBerechnenService) => new BestellverwaltungUtilService(auftragService, baumService, programmService, teileService, bestellservice, BestellungBerechnenService)]);