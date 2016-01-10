/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/FertigungsAuftraegeService.ts" />

class FertigungsAuftraegeController {

    models: Array<FertigungsAuftraegeModel>;
    fertigungsAuftraegeService: FertigungsAuftraegeService;



    constructor(fertigungsAuftraegeService: FertigungsAuftraegeService) {

        this.fertigungsAuftraegeService = fertigungsAuftraegeService;
        this.aendern();
        this.models = this.fertigungsAuftraegeService.models;
        this.models.sort(function(a: FertigungsAuftraegeModel, b: FertigungsAuftraegeModel) { return (a.auftrag.arbeitsplatz_id - b.auftrag.arbeitsplatz_id) });


    }
    oeffnen(id: number) {
        let x = document.getElementById("fac_" + id);
        x.hidden = !x.hidden;
    }

    aendern() {
        this.fertigungsAuftraegeService.aendern();
    }
    prioAendern() {
        this.fertigungsAuftraegeService.prioAendern();
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

angular.module("FertigungsAuftraegeModule").controller("FertigungsAuftraegeController", ["FertigungsAuftraegeService", FertigungsAuftraegeController]);


