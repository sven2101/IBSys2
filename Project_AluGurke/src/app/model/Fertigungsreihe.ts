/**
 * Created by Max on 25.10.2015.
 */
class Fertigungsreihe{

    ersterArbeitsplatz:ArbeitsplatzKnoten;
    map:{[key:number]:ArbeitsplatzKnoten;}

    constructor(arbeitsplatzKnoten:ArbeitsplatzKnoten){
        this.map={};
        this.ersterArbeitsplatz=arbeitsplatzKnoten;
        this.arbeitsplaetzeSetzten();
    }

    arbeitsplaetzeSetzten(){
        let temp:ArbeitsplatzKnoten=this.ersterArbeitsplatz;
        this.map[temp.arbeitsplatz.id]=temp;

        while(temp.nachfolger!=null){
            this.map[temp.nachfolger.arbeitsplatz.id]=temp.nachfolger;
            temp=temp.nachfolger;
        }
    }
    auftraegSetzten(x:Auftrag){
        let temp:ArbeitsplatzKnoten=null;
        if(x.arbeitsplatz_id!=0){
            temp=this.map[x.arbeitsplatz_id];
            temp.arbeitsplatz.auftraege.push(x);
            if(x.aufArbeitsplatz===true){
                temp.arbeitsplatz.auftragAufArbeitsplatz=x;
                temp.arbeitsplatz.arbeitszeit-=temp.arbeitsplatz.ruestzeit;
            }
            temp.arbeitsplatz.arbeitszeit=temp.arbeitsplatz.fertigungszeit*temp.arbeitsplatz.getAnzahl()+(temp.arbeitsplatz.auftraege.length+temp.arbeitsplatz.arbeitsplatzFremdeAuftraege.length)*temp.arbeitsplatz.ruestzeit;

        }
        else{
            temp=this.ersterArbeitsplatz;
            temp.arbeitsplatz.auftraege.push(x);
            if(x.aufArbeitsplatz===true){
                temp.arbeitsplatz.auftragAufArbeitsplatz=x;
                temp.arbeitsplatz.arbeitszeit-=temp.arbeitsplatz.ruestzeit;
            }
            temp.arbeitsplatz.arbeitszeit=temp.arbeitsplatz.fertigungszeit*temp.arbeitsplatz.getAnzahl()+(temp.arbeitsplatz.auftraege.length+temp.arbeitsplatz.arbeitsplatzFremdeAuftraege.length)*temp.arbeitsplatz.ruestzeit;

        }
        while(temp.nachfolger!=null){
            temp.nachfolger.arbeitsplatz.arbeitsplatzFremdeAuftraege=temp.arbeitsplatz.arbeitsplatzFremdeAuftraege.concat(temp.arbeitsplatz.auftraege);
            temp.nachfolger.arbeitsplatz.arbeitszeit=temp.nachfolger.arbeitsplatz.fertigungszeit*temp.nachfolger.arbeitsplatz.getAnzahl()+(temp.nachfolger.arbeitsplatz.auftraege.length+temp.nachfolger.arbeitsplatz.arbeitsplatzFremdeAuftraege.length)*temp.nachfolger.arbeitsplatz.ruestzeit;
            temp=temp.nachfolger;
        }
    }
    alleArbeitsplaetze(){
        let temp=this.ersterArbeitsplatz;
        let liste=new Array<Arbeitsplatz>();
        liste.push(temp.arbeitsplatz);
        while(temp.nachfolger!=null){
            liste.push(temp.nachfolger.arbeitsplatz);
            temp=temp.nachfolger;
        }
        return liste;
    }
    reset(){
        let temp=this.ersterArbeitsplatz;
        temp.arbeitsplatz.arbeitszeit=0;
        temp.arbeitsplatz.auftraege=[];
        while(temp.nachfolger!=null){
            temp.nachfolger.arbeitsplatz.arbeitszeit=0;
            temp.nachfolger.arbeitsplatz.auftraege=[];
            temp=temp.nachfolger;
        }
    }
}