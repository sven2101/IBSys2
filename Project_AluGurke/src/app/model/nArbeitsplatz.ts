/**
 * Created by Max on 18.10.2015.
 */
class nArbeitsplatz{

    name:string;
    id:number;
    ruestzeit:number;
    fertigungszeit:number;
    nachfolger:nArbeitsplatz;
    auftraege:Array<Auftrag>;
    eTeil:number;

    constructor(id:number,eTeil:number,fertigungszeit:number,ruestzeit:number,nachfolger:nArbeitsplatz=null) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.nachfolger=nachfolger;
        this.eTeil=eTeil;
    }
    tiefeKopie(){
        return new nArbeitsplatz(this.id,this.eTeil,this.fertigungszeit,this.ruestzeit);
    }
}