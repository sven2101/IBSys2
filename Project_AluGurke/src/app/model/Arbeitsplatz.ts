/// <reference path="Teil.ts" />
/// <reference path="WarteListe.ts" />
/// <reference path="Auftrag.ts" />
class Arbeitsplatz{

    name:string;
    id:number;
    ruestzeit:number;
    fertigungszeit:number;
    auftraege:Array<Auftrag>;
    eTeil:number;

    constructor(id:number,eTeil:number,fertigungszeit:number,ruestzeit:number) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.eTeil=eTeil;
        this.name=id+'_'+eTeil;
    }
    tiefeKopie(){
        return new Arbeitsplatz(this.id,this.eTeil,this.fertigungszeit,this.ruestzeit);
    }
}