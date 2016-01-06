/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/DispositionService.ts" />
/// <reference path="../FertigungsAuftraege/FertigungsAuftraege.controller.ts" />


class FertigungsAuftraegeService {

    auftragService: AuftragService;
    arbeitsplatzService: ArbeitsplatzService;
    dispositionService: DispositionService;
    models: Array<FertigungsAuftraegeModel>;
    constructor(auftragService: AuftragService, arbeitsplatzService: ArbeitsplatzService, dispositionService: DispositionService, $rootScope) {
        this.auftragService = auftragService;
        this.arbeitsplatzService = arbeitsplatzService
        this.dispositionService = dispositionService
        this.aendern();
        $rootScope.$on('mainController.neueSprache', (event, language) => {
            this.onTranslate(language);
        });
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
                        }
                    }
                    if (test == false) {
                        this.models.push(new FertigungsAuftraegeModel(this.auftragService.auftraegeTemp[j]));
                    }
                }

                this.models = this.models.concat(temp);
            }
            for (let i = 0; i < this.models.length; i++) {
                this.models[i].auftrag.setPriortaet(this.models[i].auftrag.prioritaetString);
                let liste = this.splitEvaluieren(this.models[i].split, this.models[i].auftrag.anzahl);
                if (this.models[i].split != this.models[i].split2) {
                    this.models[i].auftraege = [];
                    for (let j = 0; j < liste.length; j++) {
                        let x = new Auftrag(this.models[i].auftrag.erzeugnis_id, liste[j], this.models[i].auftrag.periode, this.models[i].auftrag.arbeitsplatz_id);
                        x.prioritaet = this.models[i].auftrag.prioritaet;
                        x.prioritaetString = this.models[i].auftrag.prioritaetString;
                        this.models[i].auftraege.push(x);
                        this.models[i].split2 = this.models[i].split;
                    }
                }
                else {
                    this.models[i].auftraege[this.models[i].auftraege.length - 1].anzahl = liste[liste.length - 1];
                }
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

        let liste: Array<string> = split.split(',');

        let ergebnis = new Array<number>();
        let summe = 0;
        for (let i = 0; i < liste.length; i++) {
            if (!isNaN(Number(liste[i])) && Number(liste[i]) > 0) {
                if (Number(liste[i]) < 10) {
                    ergebnis.push(10);
                    summe += 10;
                } else {
                    ergebnis.push(Math.round(Number(liste[i])));
                    summe += Math.round(Number(liste[i]));
                }

            } else {
                let x: Array<number> = new Array<number>();
                x.push(anzahl);
                return x;
            }
            if (summe > anzahl) {
                let x: Array<number> = new Array<number>();
                x.push(anzahl);
                return x;
            }
        }
        if (summe < anzahl) {
            ergebnis.push(Math.round((anzahl - summe)));
        }
        return ergebnis;//.sort(function(a,b){return a-b;});
    }

}
angular.module('app').factory('FertigungsAuftraegeService', ['AuftragService', 'ArbeitsplatzService', 'DispositionService', '$rootScope', (AuftragService, ArbeitsplatzService, DispositionService, $rootScope) => new FertigungsAuftraegeService(AuftragService, ArbeitsplatzService, DispositionService, $rootScope)]);