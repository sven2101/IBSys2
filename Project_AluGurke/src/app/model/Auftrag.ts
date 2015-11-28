/// <reference path="NewErzeugnis.ts" />
/// <reference path="Arbeitsplatz.ts" />
class Auftrag{
    erzeugnis_id: number;
    anzahl:number;
    periode:number;
    arbeitsplatz_id:number;
    aufArbeitsplatz:boolean;
    prioritaet:number;
    prioritaetString:string;
    prioritaetString2:string;
    constructor(erzeugnis_id:number, anzahl:number, periode:number,arbeitsplatz_id:number=0) {
        this.erzeugnis_id = erzeugnis_id;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz_id=arbeitsplatz_id;
        this.aufArbeitsplatz=false;
        this.prioritaet=3;
        let prio=["kritisch","hoch","normal"];
        this.prioritaetString=prio[this.prioritaet-1];
    }
    setPriortaet(prio:string){
        if(prio==="normal"){
            this.prioritaet=3;
            return;
        }
        if(prio==="hoch"){
            this.prioritaet=2;
            return;
        }
        if(prio==="kritisch"){
            this.prioritaet=1;
            return;
        }
    }

}