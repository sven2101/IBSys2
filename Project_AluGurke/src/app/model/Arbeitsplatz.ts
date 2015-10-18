/// <reference path="Teil.ts" />
/// <reference path="WarteListe.ts" />
/// <reference path="Auftrag.ts" />
class Arbeitsplatz{

    name:string;
    id:number;
    ruestzeit:number;
    fertigungszeit:number;
    auftraege:Array<Auftrag>;
    erzeugnis_id:number;
    arbeitszeit:number;

    constructor(id:number,eTeil:number,fertigungszeit:number,ruestzeit:number) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.erzeugnis_id=eTeil;
        this.name=id+'_'+eTeil;
        this.arbeitszeit=0
        this.auftraege=new Array<Auftrag>();
    }
    tiefeKopie(){
        return new Arbeitsplatz(this.id,this.erzeugnis_id,this.fertigungszeit,this.ruestzeit);
    }
}