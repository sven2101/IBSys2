/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/FertigungsAuftraegeService.ts" />
/// <reference path="../appServices/AuftragService.ts" />

class FertigungsAuftraegeController {

    models: Array<FertigungsAuftraegeModel>;
    fertigungsAuftraegeService: FertigungsAuftraegeService;
    dispositionService: DispositionService;
    kapazitaetsplanungService: KapazitaetsplanungService;
    tab: number;
    auftragService: AuftragService;




    constructor(fertigungsAuftraegeService: FertigungsAuftraegeService, auftragService, dispositionService, kapazitaetsplanungService) {

        this.fertigungsAuftraegeService = fertigungsAuftraegeService;
        this.auftragService = auftragService;
        this.dispositionService = dispositionService;
        this.kapazitaetsplanungService = kapazitaetsplanungService;
        this.dispositionService.aendern();

        this.models = this.fertigungsAuftraegeService.models;
        
        this.tab = 1;
        //this.auftragService.auftraegeExport = this.auftragService.auftraegeExport.sort(function(a: Auftrag, b: Auftrag) { return (a.prioritaet - b.prioritaet) });
        this.aendern();
        this.onDrag();
        this.models.sort(function(a: FertigungsAuftraegeModel, b: FertigungsAuftraegeModel) { return (a.auftrag.arbeitsplatz_id - b.auftrag.arbeitsplatz_id) });
        
    }
    oeffnen(id: number) {
        let x = document.getElementById("fac_" + id);
        x.hidden = !x.hidden;
    }

    aendern() {

        this.fertigungsAuftraegeService.aendern();


    }
    changeFlagTrue() {
        this.fertigungsAuftraegeService.changeFlagTrue();
    }
    prioAendern() {
        this.fertigungsAuftraegeService.prioAendern();
    }
    onTabClick(){
        if (this.dispositionService.flag || this.fertigungsAuftraegeService.flag||this.auftragService.auftraegeUltraExport.length==0) {
            this.auftragService.auftraegeUltraExport=[];
            for(let i=0;i<this.auftragService.auftraegeExport.length;i++){
                this.auftragService.auftraegeUltraExport.push(new Auftrag(this.auftragService.auftraegeExport[i].erzeugnis_id,this.auftragService.auftraegeExport[i].anzahl,this.auftragService.auftraegeExport[i].periode,this.auftragService.auftraegeExport[i].arbeitsplatz_id));
            }            
        }
             
        this.dispositionService.changeFlagFalse();
        this.fertigungsAuftraegeService.changeFlagFalse();
    }

    onDrag() {
       
        for (let i = 0; i < this.auftragService.auftraegeUltraExport.length; i++) {
            this.auftragService.map[this.auftragService.auftraegeUltraExport[i].erzeugnis_id + "_" + this.auftragService.auftraegeUltraExport[i].arbeitsplatz_id + "_" + this.auftragService.auftraegeExport[i].anzahl] = i;

            this.auftragService.auftraegeUltraExport[i].prioritaet = i;
            this.auftragService.auftraegeUltraExport[i].bekannt;
        }
      

    }
    getAE() {
        
        return this.auftragService.auftraegeUltraExport;
    }
}
class FertigungsAuftraegeModel {
    auftrag: Auftrag;
    auftraege: Array<Auftrag>;
    split: String;
    split2: String;
    show: boolean = true;
    prioritaet: Array<string>;
    oldValue: number;

    constructor(auftrag: Auftrag) {
        this.auftrag = auftrag;
        this.auftraege = [];
        this.auftraege.push(this.auftrag);
        this.split = auftrag.anzahl.toString();
        this.split2 = "";
        this.show = false;
        let prio = ["kritisch", "hoch", "normal"];
        this.prioritaet = new Array<string>();
        this.prioritaet.push(prio[this.auftrag.prioritaet - 1]);
        this.oldValue = 0;
    }
    triggerShow() {
        this.show = !this.show;
        console.log(this.show);
    }


}

angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController", ["FertigungsAuftraegeService", "AuftragService", "DispositionService", "KapazitaetsplanungService", FertigungsAuftraegeController]);


