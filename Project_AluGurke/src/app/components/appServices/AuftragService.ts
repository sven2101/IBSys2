/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="NewTeileService.ts" />
/// <reference path="NewBaumService.ts" />

class AuftragService {
    auftraege: Array<Auftrag>;
    auftraegeExport: Array<Auftrag>;
    auftraegeTemp: Array<Auftrag>;
    auftraegeInWarteschlange: Array<Auftrag>;
    auftraegeAufMaschine: Array<Auftrag>;
    auftraegeUltraExport : Array<Auftrag>;
    teileService: NewTeileService;
    baumService: NewBaumService;
    $rootScope;
    map:{[key:string]:number;}


    constructor($rootScope, teileService, baumService) {
        this.auftraege = new Array<Auftrag>();
        this.auftraegeAufMaschine = new Array<Auftrag>();
        this.auftraegeInWarteschlange = new Array<Auftrag>();
        this.auftraegeExport = new Array<Auftrag>();
        this.auftraegeUltraExport=new Array<Auftrag>();
        this.auftraegeTemp = new Array<Auftrag>();
        this.$rootScope = $rootScope;
        this.$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
            this.onNeueDatei(dateiInhalt);
        });
        this.auftraegeSetzen([]);
        this.map={};
        this.teileService = teileService;
        this.baumService = baumService;
    }

    getAktuellenKaufTeilVerbrauch(kaufTeilId: number): number {
        var gesamtVerbrauch = 0;
        
        var alleAuftraege = this.auftraegeExport.concat(this.auftraegeInWarteschlange);
       
        for (var i = 0; i < /*this.auftraegeExport.length*/ alleAuftraege.length; i++) {
           
            var erzeugnis = /*this.auftraegeExport[i]*/alleAuftraege[i].erzeugnis_id;
            var erzeugnisKnoten = this.baumService.getKnoten(erzeugnis);

            if (erzeugnisKnoten.hatBestimmtesBauteil(kaufTeilId)) {
                var anzahlVerwendet = this.getAnzahlVonKaufTeilInErzeugnis(erzeugnisKnoten,kaufTeilId);
                gesamtVerbrauch += anzahlVerwendet * /*this.auftraegeExport[i]*/alleAuftraege[i].anzahl;
            }
        }

        return gesamtVerbrauch;
    }

    getAnzahlVonKaufTeilInErzeugnis(erzeugnisKnoten: NewTeilKnoten, kaufTeilId: number): number {
        var anzahlVerwendet = 0;
        for (var x = 0; x < erzeugnisKnoten.bauteile.length; x++) {
            if (erzeugnisKnoten.bauteile[x].teil_id === kaufTeilId) {
                anzahlVerwendet = erzeugnisKnoten.bauteile[x].anzahl;
            }
        }
        
        return anzahlVerwendet;
    }

    getVerbrauchEteil(eTeil_id: number) {
        let verbrauch = 0;
        for (let i = 0; i < this.auftraegeExport.length; i++) {
            if (this.auftraegeExport[i].erzeugnis_id == eTeil_id) {
                verbrauch += this.auftraegeExport[i].anzahl;
            }
        }
        return verbrauch;
    }


    onNeueDatei(dateiInhalt) {


        this.updateAuftraegeInWarteschlange(dateiInhalt.results.waitinglistworkstations.workplace);

        this.updateAuftraegeAufMaschine(dateiInhalt.results.ordersinwork.workplace)

    }

    updateAuftraegeInWarteschlange(arbeitsplaetze: Array<any>) {
        this.auftraegeInWarteschlange = [];
        for (let i = 0; i < arbeitsplaetze.length; i++) {
            if (arbeitsplaetze[i].hasOwnProperty("waitinglist")) {
                if (Array.isArray(arbeitsplaetze[i].waitinglist)) {
                    for (let j = 0; j < arbeitsplaetze[i].waitinglist.length; j++) {
                        let x = arbeitsplaetze[i].waitinglist[j];
                        this.auftraegeInWarteschlange.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)));
                    }
                }
                else {
                    let x = arbeitsplaetze[i].waitinglist;
                    this.auftraegeInWarteschlange.push(new Auftrag(Number(x._item), Number(x._amount), Number(x._period)))
                }
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
        for(let i=0;i<this.auftraegeExport.length;i++){
            let y=this.map[this.auftraegeExport[i].erzeugnis_id+this.auftraegeExport[i].arbeitsplatz_id+this.auftraegeExport[i].anzahl];
            if(y==undefined){
               this.auftraegeExport[i].prioritaet=0; 
            }
            else{
                this.auftraegeExport[i].prioritaet=y;
            }
            
        }
        this.auftraegeExport =  this.auftraegeExport.sort(function(a:Auftrag,b:Auftrag){return (a.prioritaet-b.prioritaet)}); 
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
