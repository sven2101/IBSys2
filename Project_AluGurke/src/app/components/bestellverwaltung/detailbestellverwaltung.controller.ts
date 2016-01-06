/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/highcharts.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/KennzahlenService.ts" />
/// <reference path="../appServices/BestellungBerechnenService.ts" />
/// <reference path="../appServices/SettingsService.ts" />
/// <reference path="./BestellverwaltungUtil.service.ts" />

class DetailBestellVerwaltungController {
    teil_id: number;
    kaufTeil: NewKaufTeil;
    reichweite: number;
    periode: number;

    neueBestellungen: Array<NeuBestellung>;
    bestellService: BestellService;
    neueBestellung: NeuBestellung;
    generierteBestellung: NeuBestellung;

    aktuellerLagerzugang: Array<ZugangBestellung>;
    laufendeBestellungen: Array<Bestellung>;

    verbrauchAktuell: number;
    verbrauch1: number;
    verbrauch2: number;
    verbrauch3: number;

    timeLine: Array<number>;

    utilService: BestellverwaltungUtilService;
    bestellungBerechnenService: BestellungBerechnenService

    constructor($routeParams, teileService: NewTeileService, utilService: BestellverwaltungUtilService,
        kennzahlenService: KennzahlenService, bestellService: BestellService, bestellungBerechnenService: BestellungBerechnenService,
        settingsService: SettingsService) {
        this.utilService = utilService;
        this.bestellungBerechnenService = bestellungBerechnenService;
        this.bestellService = bestellService;
        this.teil_id = $routeParams.kaufteilid;
        this.periode = kennzahlenService.periode;
        this.kaufTeil = teileService.getKaufTeil(this.teil_id);
        //this.reichweite = utilService.getReichweite(this.kaufTeil.lagerMenge, this.kaufTeil.id);
        
        this.neueBestellungen = bestellService.neuBestellungen['k' + this.kaufTeil.id];
        this.neueBestellung = new NeuBestellung(false, this.kaufTeil.id, 0, 0, 1);
        this.aktuellerLagerzugang = bestellService.getZugangBestellungen(this.kaufTeil.id);
        this.laufendeBestellungen = bestellService.getLaufendeBestellungen(this.kaufTeil.id);

        this.verbrauchAktuell = utilService.getVerbrauch(this.kaufTeil.id, 1);
        this.verbrauch1 = utilService.getVerbrauch(this.kaufTeil.id, 2);
        this.verbrauch2 = utilService.getVerbrauch(this.kaufTeil.id, 3);
        this.verbrauch3 = utilService.getVerbrauch(this.kaufTeil.id, 4);

        this.reichweite = this.bestellungBerechnenService.getReichweite(this.kaufTeil.id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        this.setGenerierteBestellung();

        this.setTimeLine();
        this.chart(this.timeLine, 'K' + this.kaufTeil.id + ' ' + this.kaufTeil.bezeichnung);
    }
    onChanged() {
        this.bestellungBerechnenService.onSelected();
        this.setTimeLine();
        this.reichweite = this.bestellungBerechnenService.getReichweite(this.kaufTeil.id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        this.setGenerierteBestellung();
    }

    setGenerierteBestellung(): void {
        this.generierteBestellung = this.bestellungBerechnenService.getBestellung(this.kaufTeil.id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        if (this.generierteBestellung) {
            this.generierteBestellung.kosten = this.bestellService.getBestellungsKosten(this.generierteBestellung.menge, this.generierteBestellung.eil, this.kaufTeil);

        }
    }

    generierteBestellungUebernehmen() {
        this.bestellService.neuBestellungErstellen(this.generierteBestellung.eil, this.kaufTeil, this.generierteBestellung.menge, this.periode);
        this.reichweite = this.bestellungBerechnenService.getReichweite(this.kaufTeil.id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        this.setTimeLine();
        this.setGenerierteBestellung();
    }

    setTimeLine() {
        this.timeLine = this.bestellungBerechnenService.getTimeLine(this.teil_id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        this.chart(this.timeLine, this.kaufTeil.bezeichnung);
    }

    zeileRot(): boolean {
        return this.utilService.zeileRot(this.reichweite, this.kaufTeil.wbz, this.kaufTeil.wbzAbw, this.bestellungBerechnenService.multiplikator);
    }

    zeileGelb(): boolean {
        return this.utilService.zeileGelb(this.reichweite, this.kaufTeil.wbz, this.kaufTeil.wbzAbw);
    }

    deleteNeueBestellung(bestellung: NeuBestellung): void {
        this.bestellService.deleteNeuBetellung(bestellung.teil_id, bestellung.timestamp);
        this.setTimeLine();
        this.reichweite = this.bestellungBerechnenService.getReichweite(this.kaufTeil.id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        this.setGenerierteBestellung();
    }

    createNeueBestellung() {
        if (this.neueBestellung.menge > 1) {
            this.bestellService.neuBestellungErstellen(this.neueBestellung.eil, this.kaufTeil, this.neueBestellung.menge, this.bestellungBerechnenService.aktuellePeriode);
        }
        this.setTimeLine();
        this.reichweite = this.bestellungBerechnenService.getReichweite(this.kaufTeil.id, [this.verbrauchAktuell, this.verbrauch1, this.verbrauch2, this.verbrauch3]);
        this.setGenerierteBestellung();
    }
    chart(data: Array<number>, linienName: string) {
        let categories = new Array<string>();

        let periode = this.periode;        

        for (let i = 0; i < 20; i++) {
            if (i % 5 === 0) {
                periode++;
            }

            categories.push('Periode ' + periode + '<br>Tag ' + ((i % 5) + 1));
        }      
        $('#timelineChart').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: ''
            },

            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() {
                        return this.value + 'ME';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: false
                    },
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: linienName,
                data: data

            }]
        });
    }

}

angular.module('BestellverwaltungModule').controller('DetailBestellVerwaltungController', [
    '$routeParams', 'NewTeileService', 'BestellverwaltungUtilService', 'KennzahlenService',
    'BestellService', 'BestellungBerechnenService', 'SettingsService', DetailBestellVerwaltungController]);