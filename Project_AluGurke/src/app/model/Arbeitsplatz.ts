/**
 * Created by Max on 18.10.2015.
 */
class Arbeitsplatz{

    name:string;
    id:number;
    ruestzeit:number;
    fertigungszeit:number;
    nachfolger:Arbeitsplatz;
    auftraege:Array<Auftrag>;
    eTeil:number;

    constructor(id:number,eTeil:number,fertigungszeit:number,ruestzeit:number,nachfolger:Arbeitsplatz=null) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.nachfolger=nachfolger;
        this.eTeil=eTeil;
    }
    tiefeKopie(){
        return new Arbeitsplatz(this.id,this.eTeil,this.fertigungszeit,this.ruestzeit);
    }
}