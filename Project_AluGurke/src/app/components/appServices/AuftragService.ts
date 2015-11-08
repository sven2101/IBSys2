/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="NewTeileService.ts" />
/// <reference path="NewBaumService.ts" />

class AuftragService {
    auftraege: Array<Auftrag>;
    auftraegeExport: Array<Auftrag>;
    auftraegeInWarteschlange: Array<Auftrag>;
    auftraegeAufMaschine: Array<Auftrag>;

    teileService: NewTeileService;
    baumService: NewBaumService;
    $rootScope;


    constructor($rootScope, teileService, baumService) {
        this.auftraege = new Array<Auftrag>();
        this.auftraegeAufMaschine = new Array<Auftrag>();
        this.auftraegeInWarteschlange = new Array<Auftrag>();
        this.auftraegeExport = new Array<Auftrag>();
        this.$rootScope = $rootScope;
        this.$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
            this.onNeueDatei(dateiInhalt);
        });
        this.auftraegeSetzen([]);

        this.teileService = teileService;
        this.baumService = baumService;
    }

    getVerbrauch(kaufTeilId: number): number {
        var gesamtVerbrauch = 0;
        var verwendendeErzeugnisse: Array<NewTeilKnoten> = this.getErzeugnisseDieKaufTeilVerwenden(kaufTeilId);

        for (var i = 0; i < verwendendeErzeugnisse.length; i++) {
            gesamtVerbrauch += this.getVerbrauchFürErzeugnis( verwendendeErzeugnisse[i], kaufTeilId);
        }

        return gesamtVerbrauch;
    }

    getErzeugnisseDieKaufTeilVerwenden(kaufTeilId: number): Array<NewTeilKnoten> {
        var erzeugnisse: Array<NewTeilKnoten> = [];

        for (var i = 0; i < this.teileService.alleErzeugnisse.length; i++) {
            var erzeugnisKnoten = this.baumService.getKnoten(this.teileService.alleErzeugnisse[i].id);
            if (erzeugnisKnoten.hatBestimmtesBauteil(kaufTeilId)) {
                erzeugnisse.push(erzeugnisKnoten);
            }
        }

        return erzeugnisse;
    }

    getVerbrauchFürErzeugnis(erzeugnisKnoten: NewTeilKnoten, kaufTeilId: number): number {
        var verbrauch = 0;
        var produktionsAufträge = this.getProduktionsAufträgeFürErzeugnis(erzeugnisKnoten.teil_id);
        var anzahlVerwendet;
        
        for(var i = 0; i < erzeugnisKnoten.bauteile.length;i++){
            if(erzeugnisKnoten.bauteile[i].teil_id === kaufTeilId){
                anzahlVerwendet = erzeugnisKnoten.bauteile[i].anzahl;
            }
        }

        for(var j = 0; j < produktionsAufträge.length;j++){
            verbrauch += anzahlVerwendet * produktionsAufträge[j].anzahl;
        }
        
        return verbrauch;
    }

    getProduktionsAufträgeFürErzeugnis(erzeugnisId: number): Array<Auftrag> {
        var produktionsAufträge: Array<Auftrag> = [];
        for (var i = 0; i < this.auftraegeExport.length; i++) {
            var auftrag = this.auftraegeExport[i];
            if (auftrag.erzeugnis_id === erzeugnisId) {
                produktionsAufträge.push(auftrag);
            }
        }
        return produktionsAufträge;
    }

    onNeueDatei(dateiInhalt) {
        this.updateAuftraegeInWarteschlange(dateiInhalt.results.waitinglistworkstations.workplace);
        this.updateAuftraegeAufMaschine(dateiInhalt.results.ordersinwork.workplace)

    }

    updateAuftraegeInWarteschlange(arbeitsplaetze: Array<any>) {
        this.auftraegeInWarteschlange = [];
        for (let i = 0; i < arbeitsplaetze.length; i++) {
            if (arbeitsplaetze[i]._timeneed != 0) {
                if (Array.isArray(arbeitsplaetze[i].waitinglist)) {
                    for (let j = 0; j < arbeitsplaetze[i].waitinglist.length; j++) {
                        let x = arbeitsplaetze[i].waitinglist[j];
                        this.auftraegeInWarteschlange.push(new Auftrag(x._item, x._amount, x._period));
                    }
                }
                let x = arbeitsplaetze[i].waitinglist;
                this.auftraegeInWarteschlange.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)));
            }
        }
    }

    updateAuftraegeAufMaschine(arbeitsplaetze: Array<any>) {
        this.auftraegeAufMaschine = [];
        for (let i = 0; i < arbeitsplaetze.length; i++) {
            let x = arbeitsplaetze[i];
            this.auftraegeAufMaschine.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)));
        }
    }


    auftraegeSetzen(auftraege: Array<Auftrag>) {

        //let x=this.mergeAuftraege(auftraege);
        this.auftraege = [];
        this.auftraegeExport = auftraege;
        this.auftraege = this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege = this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege = this.auftraege.concat(auftraege);
    }
    mergeAuftraege(auftraege: Array<Auftrag>) {
        let temp: Array<Auftrag> = new Array<Auftrag>();
        let temp2: Array<Auftrag> = new Array<Auftrag>();
        for (let i = 0; i < auftraege.length; i++) {
            if (auftraege[i].erzeugnis_id == 16 || auftraege[i].erzeugnis_id == 17 || auftraege[i].erzeugnis_id == 26) {
                let x = this.contains(temp, auftraege[i]);
                if (x == null) {
                    temp.push(auftraege[i]);
                }
                else {
                    if (auftraege[i].prioritaet < x.prioritaet) {
                        x.prioritaet = auftraege[i].prioritaet;
                    }
                    x.anzahl += auftraege[i].anzahl;
                }
            }
            else {
                temp2.push(auftraege[i]);
            }
        }
        return temp.concat(temp2);
    }

    contains(auftraege: Array<Auftrag>, auftrag: Auftrag) {
        for (let i = 0; i < auftraege.length; i++) {
            if (auftraege[i].erzeugnis_id == auftrag.erzeugnis_id) {
                return auftraege[i];
            }
        }
        return null;
    }

    altLastenVerteilen(models: Array<DispositionModel>) {
        for (let i = 0; i < this.auftraegeAufMaschine.length; i++) {
            for (let j = 0; j < models.length; j++) {
                if (models[j].eTeil.id == this.auftraegeAufMaschine[i].erzeugnis_id) {
                    models[j].auftragAufMaschine = this.auftraegeAufMaschine[i];
                }
            }
        }
        for (let j = 0; j < models.length; j++) {
            models[j].auftragInWarteschlange = [];
            for (let i = 0; i < this.auftraegeInWarteschlange.length; i++) {
                if (models[j].eTeil.id == this.auftraegeInWarteschlange[i].erzeugnis_id) {
                    models[j].auftragInWarteschlange.push(this.auftraegeInWarteschlange[i]);
                }
            }
        }
    }

}

angular.module('app').factory('AuftragService', ['$rootScope', 'NewTeileService', 'NewBaumService', ($rootScope, teileService, baumService) => new AuftragService($rootScope, teileService, baumService)]);