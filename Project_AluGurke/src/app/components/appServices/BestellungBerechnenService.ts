/**
 * Created by Max on 04.11.2015.
 */
/// <reference path="BestellService.ts" />
/// <reference path="NewTeileService.ts" />
/// <reference path="../bestellverwaltung/bestellverwaltungUtil.service.ts" />
class BestellungBerechnenService {

    bestellService: BestellService;
    newTeileService: NewTeileService;
    bestellverwaltungUtilService: BestellverwaltungUtilService;
    $rootScope;
    multiplikator: number;
    multiplikatorString: String;
    aktuellePeriode;

    constructor(BestellService: BestellService, NewTeileService: NewTeileService, $rootScope, bestellverwaltungUtilService) {
        this.bestellService = BestellService;
        this.newTeileService = NewTeileService;
        this.bestellverwaltungUtilService=bestellverwaltungUtilService;
        this.$rootScope=$rootScope;
        this.aktuellePeriode=1;
        this.multiplikator=1;  
        this.multiplikatorString="sehr sicher";  
        this.$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
            this.onNeueDatei(dateiInhalt);
        });
    }
    onNeueDatei(dateiInhalt) {
        this.aktuellePeriode = Number(dateiInhalt.results._period) + 1;
    }
    //Marius API; für die Reichweite
    getReichweite(kTeilId: number, verbrauch: Array<number>, timeinterval = 50): number {
        return this.reichweiteBerechenen(this.timeLineGenerieren(kTeilId, this.aktuellePeriode, this.multiplikator, verbrauch, timeinterval));
    }
    //Marius API; für anstehende Bestellungen. Liefert null wenn nicht bestellt werden soll!!!!!!!!
    getBestellung(kTeilId: number, verbrauch: Array<number>, timeinterval = 20): NeuBestellung {
        return this.bestellungenGenerieren(kTeilId, this.aktuellePeriode, this.multiplikator, verbrauch, timeinterval);
    }
    //Marius API; berechnet einen Zeitstrahl auf Tagesbasis
    getTimeLine(kTeilId: number, verbrauch: Array<number>, timeinterval = 20): Array<number> {
        return this.timeLineGenerieren(kTeilId, this.aktuellePeriode, this.multiplikator, verbrauch, timeinterval);
    }

    zugangsBestellungenSuchen(teilId: number): Array<ZugangBestellung> {
        let result = [];
        for (var i = 0; i < this.bestellService.zugangBestellungen.length; i++) {
            if (this.bestellService.zugangBestellungen[i].teil_id == teilId) {
                result.push(this.bestellService.zugangBestellungen[i]);
            }
        }
        return result;
    }
    laufendeBestellungenSuchen(teil_id: number): Array<Bestellung> {
        let result = [];
        for (var i = 0; i < this.bestellService.laufendeBestellungen.length; i++) {
            if (this.bestellService.laufendeBestellungen[i].teil_id == teil_id) {
                result.push(this.bestellService.laufendeBestellungen[i]);
            }
        }
        return result;
    }
    ausgehendeBestellungSuchen(teilId: number): Array<NeuBestellung> {
        return this.bestellService.neuBestellungen['k' + teilId];
    }

    kaufTeilSuchen(teilId: number): NewKaufTeil {
        let temp = this.newTeileService.alleKaufteile;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === teilId) {

                return temp[i];
            }
        }
    }
    onSelected() {
        switch (this.multiplikatorString) {
            case "sehr riskant": this.multiplikator = -1;
                break;
            case "riskant": this.multiplikator = -0.5;
                break;
            case "normal": this.multiplikator = 0;
                break;
            case "sicher": this.multiplikator = 0.5;
                break;
            case "sehr sicher": this.multiplikator = 1;
                break;
        }
    }

    timeLineGenerieren(kTeilId: number, aktuellePeriode: number, multiplikator: number, verbrauch: Array<number>, timeinterval: number): Array<number> {
        let kTeil = this.newTeileService.getKaufTeil(kTeilId);
        let zugangBestellungen = this.zugangsBestellungenSuchen(kTeilId);
        let laufendeBestellungen = this.laufendeBestellungenSuchen(kTeilId);
        let ausgehendeBestellungen = this.ausgehendeBestellungSuchen(kTeilId);
        let timeline = Array<number>();
        timeline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let lagerstand = kTeil.lagerMenge;
        for (let i = 0; i < zugangBestellungen.length; i++) {
            if (zugangBestellungen[i].zeit.periode == aktuellePeriode) {
                timeline[0] += Number(zugangBestellungen[i].menge);
            }
        }
        for (let i = 0; i < laufendeBestellungen.length; i++) {
            let liefertermin = 0;
            if (laufendeBestellungen[i].eil == true) {
                liefertermin = Math.round(kTeil.wbz / 2);
            }
            else {
                liefertermin = kTeil.wbz + multiplikator * kTeil.wbzAbw - (aktuellePeriode - laufendeBestellungen[i].periode);
            }
            if (liefertermin <= 4) {
                if (liefertermin * 5 < 0) {
                    timeline[0] += Number(laufendeBestellungen[i].menge);
                } else {
                    timeline[Math.round(liefertermin * 5)] += Number(laufendeBestellungen[i].menge);
                }
            }
        }
        for (let i = 0; i < ausgehendeBestellungen.length; i++) {
            let liefertermin = 0;
            if (ausgehendeBestellungen[i].eil == true) {
                liefertermin = Math.round(kTeil.wbz / 2);
            }
            else {
                liefertermin = kTeil.wbz + multiplikator * kTeil.wbzAbw - (aktuellePeriode - ausgehendeBestellungen[i].periode);
            }
            if (liefertermin <= 4) {
                if (liefertermin * 5 < 0) {
                    timeline[0] += Number(ausgehendeBestellungen[i].menge);
                } else {
                    timeline[Math.round(liefertermin * 5)] += Number(ausgehendeBestellungen[i].menge);
                }
            }
        }
        let woche = 1
        for (let i = 0; i < 20; i++) {

            lagerstand = lagerstand - Math.round(verbrauch[woche - 1] / 5);
            timeline[i] += lagerstand;
            lagerstand = timeline[i];
            if (i == 4 || i == 9 || i == 14 || i == 19) {
                woche++;
            }
        }
        for (let i = 20; i < timeinterval; i++) {
            lagerstand = lagerstand - Math.round(verbrauch[3] / 5);
            timeline.push(lagerstand);    
        }
        return timeline;
    }

    reichweiteBerechenen(timeline: Array<number>) {
        let reichweite = 0;
        for (let i = 0; i < timeline.length; i++) {
            if (timeline[i] < 0) {
                break;
                /*if (i < timeline.length - 1) {
                    if (timeline[i + 1] < 0) {
                        break;
                    }
                }*/
            }
            else {
                reichweite += 0.2;
            }
        }
        reichweite = Math.round(reichweite * 100) / 100;
        return reichweite;
    }

    bestellungenGenerieren(kTeilId: number, aktuellePeriode: number, multiplikator: number, verbrauch: Array<number>, timeinterval = 20) {
        let kTeil = this.kaufTeilSuchen(kTeilId);
        let timeline = this.timeLineGenerieren(kTeilId, aktuellePeriode, multiplikator, verbrauch, timeinterval);
        let reichweite = this.reichweiteBerechenen(timeline);
        if (reichweite < kTeil.wbz + multiplikator * kTeil.wbzAbw) {
            //Eil
            let menge = 0;
            for (let i = reichweite * 5; i < timeline.length && i < (reichweite + kTeil.wbz + multiplikator * kTeil.wbzAbw) * 5; i++) {
                if (timeline[Math.round(i)] < 0) {
                    menge += timeline[Math.round(i)] * -1;
                }
            }
            if (menge * 2 > kTeil.discontMenge && menge < kTeil.discontMenge) {
                menge = kTeil.discontMenge;
            }
            return new NeuBestellung(true, kTeilId, menge, 0, this.aktuellePeriode);
        }

        if (reichweite - 1 < kTeil.wbz + multiplikator * kTeil.wbzAbw) {
            //Normal
            let menge = 0;
            for (let i = reichweite * 5; i < timeline.length && i < (reichweite + kTeil.wbz + multiplikator * kTeil.wbzAbw) * 5; i++) {
                if (timeline[Math.round(i)] < 0) {
                    menge += timeline[Math.round(i)] * -1;
                }
            }
            if (menge * 2 > kTeil.discontMenge && menge < kTeil.discontMenge) {
                menge = kTeil.discontMenge;
            }
            return new NeuBestellung(false, kTeilId, menge, 0, this.aktuellePeriode);
        }
        return null;
    }

}
angular.module('app').factory('BestellungBerechnenService', ['BestellService', 'NewTeileService', '$rootScope', 'BestellverwaltungUtilService', (BestellService, NewTeileService, $rootScope, BestellverwaltungUtilService) => new BestellungBerechnenService(BestellService, NewTeileService, $rootScope, BestellverwaltungUtilService)]);
