/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/FertigungsAuftraegeService.ts" />
/// <reference path="../appServices/AuftragService.ts" />

class FertigungsAuftraegeController {

    models: Array<FertigungsAuftraegeModel>;
    fertigungsAuftraegeService: FertigungsAuftraegeService;
    dispositionService:DispositionService;
    kapazitaetsplanungService:KapazitaetsplanungService;
    tab: number;
    auftragService: AuftragService;




    constructor(fertigungsAuftraegeService: FertigungsAuftraegeService, auftragService,dispositionService,kapazitaetsplanungService) {

        this.fertigungsAuftraegeService = fertigungsAuftraegeService;
        this.auftragService = auftragService;
        this.dispositionService=dispositionService;
        this.kapazitaetsplanungService=kapazitaetsplanungService;  
        this.aendern();
        this.models = this.fertigungsAuftraegeService.models;
        this.models.sort(function(a: FertigungsAuftraegeModel, b: FertigungsAuftraegeModel) { return (a.auftrag.arbeitsplatz_id - b.auftrag.arbeitsplatz_id) });
        this.tab = 1;
        



    }
    oeffnen(id: number) {
        let x = document.getElementById("fac_" + id);
        x.hidden = !x.hidden;
    }

    aendern() {
        this.fertigungsAuftraegeService.dispositionService.aendern();
        this.fertigungsAuftraegeService.aendern();
        this.fertigungsAuftraegeService.onDispoAendern();
    }
    prioAendern() {
        this.fertigungsAuftraegeService.prioAendern();
    }
    onDrag() {
        for (let i = 0; i < this.auftragService.auftraegeExport.length; i++) {
            this.auftragService.map[this.auftragService.auftraegeExport[i].erzeugnis_id + this.auftragService.auftraegeExport[i].arbeitsplatz_id + this.auftragService.auftraegeExport[i].anzahl] = i;

            this.auftragService.auftraegeExport[i].prioritaet = i;

        }

    }
    getAE() {
        //this.auftragService.auftraegeExport =  this.auftragService.auftraegeExport.sort(function(a:Auftrag,b:Auftrag){return (a.prioritaet+b.prioritaet)});  
        return this.auftragService.auftraegeExport;
    }
}
class FertigungsAuftraegeModel {
    auftrag: Auftrag;
    auftraege: Array<Auftrag>;
    split: String;
    split2: String;
    show: boolean = true;
    prioritaet: Array<string>;

    constructor(auftrag: Auftrag) {
        this.auftrag = auftrag;
        this.auftraege = [];
        this.auftraege.push(this.auftrag);
        this.split = this.auftrag.anzahl.toString();
        this.show = false;
        let prio = ["kritisch", "hoch", "normal"];
        this.prioritaet = new Array<string>();
        this.prioritaet.push(prio[this.auftrag.prioritaet - 1]);

    }
    triggerShow() {
        this.show = !this.show;
        console.log(this.show);
    }


}

angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController", ["FertigungsAuftraegeService", "AuftragService","DispositionService","KapazitaetsplanungService", FertigungsAuftraegeController]);


