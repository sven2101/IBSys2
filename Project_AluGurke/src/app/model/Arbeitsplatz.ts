/// <reference path="Teil.ts" />
/// <reference path="WarteListe.ts" />
/// <reference path="Auftrag.ts" />
class Arbeitsplatz{

    name:string;
    id:number;
    ruestzeit:number;
    fertigungszeit:number;
    auftraege:Array<Auftrag>;
    arbeitsplatzFremdeAuftraege:Array<Auftrag>;
    auftragAufArbeitsplatz:Auftrag;
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
        this.arbeitsplatzFremdeAuftraege=new Array<Auftrag>();
    }
    tiefeKopie(){
        return new Arbeitsplatz(this.id,this.erzeugnis_id,this.fertigungszeit,this.ruestzeit);
    }
    getAnzahl(){
        let anzahl=0;
        for(let i=0;i<this.auftraege.length;i++){
            anzahl+=this.auftraege[i].anzahl;
        }
        for(let i=0;i<this.arbeitsplatzFremdeAuftraege.length;i++){
            anzahl+=this.arbeitsplatzFremdeAuftraege[i].anzahl;
        }
        if(this.auftragAufArbeitsplatz!=null){
            anzahl+=this.auftragAufArbeitsplatz.anzahl;
        }
        return anzahl;
    }
    ultraTiefeKopie(){
        let x:Arbeitsplatz=new Arbeitsplatz(this.id,this.erzeugnis_id,0,0);
        x.arbeitszeit=this.arbeitszeit;
        x.arbeitsplatzFremdeAuftraege=this.arbeitsplatzFremdeAuftraege;
        x.auftraege=this.auftraege;
        return x;
    }

}