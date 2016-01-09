/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../../model/PieChartData.ts" />

class BestellUeberblickController {

    bestellService: BestellService;
    teileService: NewTeileService;

    anzahlNeuBestellungen: number = 0;
    anzahlNormalBestellungen: number = 0;
    anzahlEilBestellungen: number = 0;

    gesamtKosten: number = 0;
    normalKosten: number = 0;
    eilKosten: number = 0;

    showTab = {
        neueBestellungen: true,
        laufendeBestellungen: false,
        lagerZugang: false,
        teileWertEntwicklung: false
    };

    neueBestellungen: Array<NeuBestellung>;
    laufendeBestellungen: Array<Bestellung>;
    lagerZugang: Array<ZugangBestellung>;

    kaufTeile: Array<NewKaufTeil>;

    constructor(bestellService: BestellService, teileService: NewTeileService) {
        this.neueBestellungen = [];
        this.bestellService = bestellService;
        this.teileService = teileService;
        this.setNeueBestellungen();
        this.laufendeBestellungen = bestellService.laufendeBestellungen;
        this.lagerZugang = bestellService.zugangBestellungen;
        this.analysiereBestellungen(this.neueBestellungen);
        this.setKaufTeile();
    }

    setNeueBestellungen(): void {
        for (var array in this.bestellService.neuBestellungen) {
            if (this.bestellService.neuBestellungen.hasOwnProperty(array)) {
                for (var i = 0; i < this.bestellService.neuBestellungen[array].length; i++) {
                    this.neueBestellungen.push(this.bestellService.neuBestellungen[array][i]);
                }
            }
        }
    }

    setKaufTeile(): void {
        this.kaufTeile = [];

        for (var i = 0; i < this.neueBestellungen.length; i++) {
            var teil_id = this.neueBestellungen[i].teil_id;
            if (this.isInKaufTeile(teil_id)) {
                continue;
            }
            this.kaufTeile.push(this.teileService.getKaufTeil(teil_id));
        }

        for (var k = 0; k < this.laufendeBestellungen.length; k++) {
            var teil_id = this.laufendeBestellungen[k].teil_id;
            if (this.isInKaufTeile(teil_id)) {
                continue;
            }
            this.kaufTeile.push(this.teileService.getKaufTeil(teil_id));
        }
    }

    analysiereBestellungen(neueBestellungen: Array<NeuBestellung>): void {
        this.anzahlNeuBestellungen = neueBestellungen.length;
        for (var i = 0; i < neueBestellungen.length; i++) {
            this.erhoeheEilOderNormalAnzahl(neueBestellungen[i]);
            this.analysiereKosten(neueBestellungen[i]);
        }
    }

    analysiereKosten(bestellung: NeuBestellung): void {

        this.gesamtKosten += bestellung.kosten;
        this.erhoeheEilOderNormalKosten(bestellung);
    }

    getBestellKosten(bestellung: NeuBestellung): number {
        var kaufTeil = this.teileService.getKaufTeil(bestellung.teil_id);
        if (bestellung.eil) {
            return kaufTeil.bestellKosten * 10;
        }
        return kaufTeil.bestellKosten;
    }

    getMaterialKosten(bestellung: NeuBestellung) {
        var kaufTeil = this.teileService.getKaufTeil(bestellung.teil_id);
        var materialKosten = kaufTeil.preis * bestellung.menge;

        if (bestellung.menge >= kaufTeil.discontMenge && !bestellung.eil) {
            materialKosten = materialKosten * 0.9;
        }
        return materialKosten;
    }

    getStueckKosten(bestellung: NeuBestellung) {
        return bestellung.kosten / bestellung.menge;
    }

    erhoeheEilOderNormalKosten(bestellung: NeuBestellung): void {
        if (bestellung.eil) {
            this.eilKosten += bestellung.kosten;
        } else {
            this.normalKosten += bestellung.kosten;
        }
    }

    erhoeheEilOderNormalAnzahl(bestellung: NeuBestellung): void {
        if (bestellung.eil) {
            this.anzahlEilBestellungen++;
        } else {
            this.anzahlNormalBestellungen++;
        }
    }

    tabOnClick(contentToShow: string): void {
        for (var property in this.showTab) {
            if (this.showTab.hasOwnProperty(property)) {
                this.showTab[property] = false;
            }
        }
        this.showTab[contentToShow] = true;
    }

    isInKaufTeile(teil_id: number): boolean {
        for (var i = 0; i < this.kaufTeile.length; i++) {
            if (this.kaufTeile[i].id === teil_id) {
                return true;
            }
        }
        return false;
    }

    getTeileWertMitNeuenBestellungen(kaufTeil: NewKaufTeil): number {

        var teileWert = 0;

        var wert = kaufTeil.teileWert * kaufTeil.lagerMenge;
        var divisor = kaufTeil.lagerMenge;

        for (var i = 0; i < this.neueBestellungen.length; i++) {
            if (this.neueBestellungen[i].teil_id === kaufTeil.id) {
                divisor += this.neueBestellungen[i].menge;
                wert += this.neueBestellungen[i].kosten;
            }
        }

        if (divisor === 0) {
            divisor = 1;
        }

        if (wert === 0) {
            wert = kaufTeil.teileWert;
        }

        teileWert = Math.round(wert / divisor * 100) / 100;
        return teileWert;
    }

    getTeileWertMitLaufendenBestellungen(kaufTeil: NewKaufTeil): number {

        var teileWert = 0;

        var wert = kaufTeil.teileWert * kaufTeil.lagerMenge;
        var divisor = kaufTeil.lagerMenge;

        for (var i = 0; i < this.laufendeBestellungen.length; i++) {
            if (this.laufendeBestellungen[i].teil_id === kaufTeil.id) {
                divisor += this.laufendeBestellungen[i].menge;
                wert += this.laufendeBestellungen[i].gesamtKosten;
            }
        }

        if (divisor === 0) {
            divisor = 1;
        }

        if (wert === 0) {
            wert = kaufTeil.teileWert;
        }
        
        teileWert = Math.round(wert / divisor * 100) / 100;
        return teileWert;
    }

    getTeileWertMitLaufendenUndNeuenBestellungen(kaufTeil: NewKaufTeil): number {
        var teileWert = 0;

        var wert = kaufTeil.teileWert * kaufTeil.lagerMenge;
        var divisor = kaufTeil.lagerMenge;

        for (var k = 0; k < this.neueBestellungen.length; k++) {
            if (this.neueBestellungen[k].teil_id === kaufTeil.id) {
                divisor += this.neueBestellungen[k].menge;
                wert += this.neueBestellungen[k].kosten;
            }
        }


        for (var i = 0; i < this.laufendeBestellungen.length; i++) {
            if (this.laufendeBestellungen[i].teil_id === kaufTeil.id) {
                divisor += this.laufendeBestellungen[i].menge;
                wert += this.laufendeBestellungen[i].gesamtKosten;
            }
        }

        teileWert = Math.round(wert / divisor * 100) / 100;

        return teileWert;
    }
}

angular.module('BestellverwaltungModule').controller('BestellUeberblickController', [
    'BestellService', 'NewTeileService', BestellUeberblickController]);