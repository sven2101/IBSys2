/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/DispositionService.ts" />

/// <reference path="../FertigungsAuftraege/FertigungsAuftraege.controller.ts" />
/// <reference path="../../typeDefinitions/sweetalert.d.ts"/>
/// <reference path="../../typeDefinitions/toastr.d.ts"/>


class FertigungsAuftraegeService {

    auftragService: AuftragService;
    arbeitsplatzService: ArbeitsplatzService;
    dispositionService: DispositionService;
    models: Array<FertigungsAuftraegeModel>;
    flag:boolean;
    
    constructor(auftragService: AuftragService, arbeitsplatzService: ArbeitsplatzService, dispositionService: DispositionService, $rootScope) {
        this.auftragService = auftragService;
        this.arbeitsplatzService = arbeitsplatzService
        this.dispositionService = dispositionService
        this.dispositionService.aendern();
        this.flag=false;
        this.aendern();
        $rootScope.$on('mainController.neueSprache', (event, language) => {
            this.onTranslate(language);
        });
    }
    
    changeFlagTrue(){
        if(!this.flag){
            toastr.warning("Die Priorisierung der Aufträge wurde zurückgesetzt");
        }
        this.flag=true;
        
    }
     changeFlagFalse(){
        this.flag=false;
    }
    
    onTranslate(language: string) {
        let languageArray: Array<string> = ["kritisch", "hoch", "normal"];
        switch (language) {
            case "en_US": languageArray = ["critical", "high", "normal"];
                break;
        }

        for (let i = 0; i < this.models.length; i++) {
            let x = this.models[i]
            x.auftrag.prioritaetString = languageArray[x.auftrag.prioritaet - 1];
            for (let j = 0; j < x.auftraege.length; j++) {
                x.auftraege[j].prioritaetString = languageArray[x.auftraege[j].prioritaet - 1];
            }
        }
    }
    prioAendern() {
        for (let i = 0; i < this.models.length; i++) {
            for (let j = 0; j < this.models[i].auftraege.length; j++) {

                if (this.models[i].auftrag.prioritaetString2 == this.models[i].auftraege[j].prioritaetString) {
                    this.models[i].auftraege[j].prioritaetString = this.models[i].auftrag.prioritaetString;
                }
                this.models[i].auftraege[j].setPriortaet(this.models[i].auftraege[j].prioritaetString);



            }
            this.models[i].auftrag.prioritaetString2 = this.models[i].auftrag.prioritaetString;
            this.models[i].auftrag.setPriortaet(this.models[i].auftrag.prioritaetString);
        }
        this.auftraegeSetzten();
    }
    onDispoAendern() {

        let temp: Array<FertigungsAuftraegeModel> = [];
        for (let i = 0; i < this.models.length; i++) {
            let test = false;
            for (let j = 0; j < this.auftragService.auftraegeTemp.length; j++) {
                let x = this.auftragService.auftraegeTemp[j];
                let y = this.models[i];
                if (y.auftrag.erzeugnis_id == x.erzeugnis_id) {
                    test = true;
                }
            }
            if (test) {
                temp.push(this.models[i]);
            }
        }
        this.models = temp;
        for (let j = 0; j < this.auftragService.auftraegeTemp.length; j++) {
            let test = false;
            for (let i = 0; i < this.models.length; i++) {
                let x = this.auftragService.auftraegeTemp[j];
                let y = this.models[i].auftrag;
                if (y.erzeugnis_id == x.erzeugnis_id) {
                    test = true;
                }
            }
            if (test == false) {
                this.models.push(new FertigungsAuftraegeModel(this.auftragService.auftraegeTemp[j]));
            }
        }


        for (let i = 0; i < this.models.length; i++) {
            for (let j = 0; j < this.auftragService.auftraegeTemp.length; j++) {
                let x = this.auftragService.auftraegeTemp[j];
                let y = this.models[i];
                if (y.auftrag.erzeugnis_id == x.erzeugnis_id) {
                    y.auftrag.anzahl = x.anzahl;
                    if (y.auftrag.anzahl != Number(y.split) && !isNaN(Number(y.split))) {
                        y.split = y.auftrag.anzahl.toString();
                    }
                }
            }

        }
    }
    aendern() {
        if (this.models === undefined) {
            this.models = new Array<FertigungsAuftraegeModel>();
            for (let i = 0; i < this.auftragService.auftraegeTemp.length; i++) {
                this.models.push(new FertigungsAuftraegeModel(this.auftragService.auftraegeTemp[i]));
            }

        } else {
            for (let i = 0; i < this.models.length; i++) {
                for (let j = 0; j < this.auftragService.auftraegeTemp.length; j++) {
                    let x = this.auftragService.auftraegeTemp[j];
                    let y = this.models[i];
                    if (y.auftrag.erzeugnis_id == x.erzeugnis_id) {
                        y.auftrag.anzahl = x.anzahl;

                    }
                }
                let temp: Array<FertigungsAuftraegeModel> = [];
                for (let j = 0; j < this.auftragService.auftraegeTemp.length; j++) {
                    let test = false;
                    for (let i = 0; i < this.models.length; i++) {
                        let x = this.auftragService.auftraegeTemp[j];
                        let y = this.models[i].auftrag;

                        if (y.erzeugnis_id == x.erzeugnis_id) {
                            test = true;
                            continue;
                        }
                    }

                    if (test == false) {


                        this.models.push(new FertigungsAuftraegeModel(this.auftragService.auftraegeTemp[j]));
                    }
                }

                this.models = this.models.concat(temp);
            }
            for (let i = 0; i < this.models.length; i++) {

                if (this.models[i].split2 == this.models[i].split && this.models[i].split2.indexOf(",")==-1) {
                    
                    this.models[i].split = this.models[i].auftrag.anzahl.toString();
                    this.models[i].auftraege=[new Auftrag(this.models[i].auftrag.erzeugnis_id, this.models[i].auftrag.anzahl, this.models[i].auftrag.periode, this.models[i].auftrag.arbeitsplatz_id)];
                    this.models[i].oldValue = this.models[i].auftrag.anzahl;
                    this.models[i].split2=this.models[i].split;
                   
                    continue;
                }

                let liste = this.splitEvaluieren(this.models[i].split, this.models[i].auftrag.anzahl);
                let xyz=false;
                /*
                if (liste == null) {
                    if (this.models[i].auftraege.length > 1 && this.models[i].auftrag.anzahl != this.models[i].oldValue) {
                        let summe = 0;
                        for (let j = 0; j < this.models[i].auftraege.length; j++) {
                            summe += this.models[i].auftraege[j].anzahl;
                        }
                        if (summe - this.models[i].auftrag.anzahl < 0) {
                            this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl += this.models[i].auftrag.anzahl - summe;

                            let split = this.models[i].split.split(",");
                            split[split.length - 1] = this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl.toString();
                            this.models[i].split = split.join(",");

                        } else {
                           
                            if (summe - this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl<this.models[i].auftrag.anzahl) {                              
                                this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl = this.models[i].auftrag.anzahl- (summe- this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl);

                                let split = this.models[i].split.split(",");
                                split[split.length - 1] = this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl.toString();
                                this.models[i].split = split.join(",");
                            }
                           
                            xyz=true;
                        }

                    } else {
                        this.models[i].auftraege = [new Auftrag(this.models[i].auftrag.erzeugnis_id, this.models[i].auftrag.anzahl, this.models[i].auftrag.periode, this.models[i].auftrag.arbeitsplatz_id)];
                    }
                    if(xyz){
                        this.models[i].split2 = this.models[i].split;
                    this.models[i].oldValue = this.models[i].auftrag.anzahl;
                    continue;
                    }
                }
               
                if (this.models[i].split == this.models[i].split2) {
                    this.models[i].split2 = this.models[i].split;
                    this.models[i].oldValue = this.models[i].auftrag.anzahl;
                    continue;
                }
                */
                this.models[i].auftraege = [];
                for (let j = 0; j < liste.length; j++) {
                    let x = new Auftrag(this.models[i].auftrag.erzeugnis_id, liste[j], this.models[i].auftrag.periode, this.models[i].auftrag.arbeitsplatz_id);
                    x.prioritaet = this.models[i].auftrag.prioritaet;
                    x.prioritaetString = this.models[i].auftrag.prioritaetString;
                    this.models[i].auftraege.push(x);

                }
                this.models[i].split2 = this.models[i].split;
                this.models[i].oldValue = this.models[i].auftrag.anzahl;
            }
        }
        this.auftraegeSetzten();

    }
    auftraegeSetzten() {
        let x = new Array<Auftrag>()
        for (let i = 0; i < this.models.length; i++) {
            for (let j = 0; j < this.models[i].auftraege.length; j++) {
                x.push(this.models[i].auftraege[j]);
            }
        }

        this.dispositionService.auftraegeAktualisieren(x);
    }
    splitEvaluieren(split: String, anzahl: number): Array<number> {

        let erlaubteZeichen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","];
        for (let i = 0; i < split.length; i++) {
            let test = false;
            for (let j = 0; j < erlaubteZeichen.length; j++) {
                if (split[i] == erlaubteZeichen[j]) {
                    test = true;
                    continue;
                }
            }
            if (!test) {
                toastr.error("Es dürfen nur ganze Zahlen oder Kommas eingegeben werden", "Ungültige Eingabe");

                return [anzahl];
            }
        }
        let liste: Array<string> = split.split(',');

        let ergebnis = new Array<number>();
        let summe = 0;
        for (let i = 0; i < liste.length; i++) {
            if (!isNaN(Number(liste[i])) && Number(liste[i]) > 0) {
                //if (Number(liste[i]) < 10) {                
                //   ergebnis.push(10);
                // summe += 10;
                //toastr.error("Die minimale Losgröße beträgt 10 ME","Ungültige Eingabe");
                //} else {
                ergebnis.push(Math.round(Number(liste[i])));
                summe += Math.round(Number(liste[i]));
                //}
            } else {
                let x: Array<number> = new Array<number>();
                x.push(anzahl);
                return x;
            }
            if (summe > anzahl) {
               
                    toastr.error("Die Summe der Auftragspositionen ist größer als der eigentliche Auftrag", "Ungültige Eingabe");
                
                let x: Array<number> = new Array<number>();
                x.push(anzahl);
                
                return x;
            }
        }
        if (summe < anzahl) {
            //ergebnis.push(anzahl-summe);  
                let x: Array<number> = new Array<number>();
                x.push(anzahl);     
            return x;
        }
        return ergebnis;//.sort(function(a,b){return a-b;});
    }

}
angular.module('app').factory('FertigungsAuftraegeService', ['AuftragService', 'ArbeitsplatzService', 'DispositionService', '$rootScope', (AuftragService, ArbeitsplatzService, DispositionService, $rootScope) => new FertigungsAuftraegeService(AuftragService, ArbeitsplatzService, DispositionService, $rootScope)]);