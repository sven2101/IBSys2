/**
 * Created by Max on 18.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Teil.ts" />

class ArbeitsplatzService {

    map:{[eTeil:number]:nArbeitsplatz;};
    arbeitsplaetze:Array<nArbeitsplatz>;
    constructor(){
        this.arbeitsplaetze=new  Array<nArbeitsplatz>();
    }
    arbeitsplaetzeSetzen(){
        this.arbeitsplaetze=[
            //E13
            new nArbeitsplatz(13,13,2,0),new nArbeitsplatz(12,13,3,0),new nArbeitsplatz(8,13,1,15),new nArbeitsplatz(7,13,2,20),new nArbeitsplatz(9,13,3,15),
            //E14
            new nArbeitsplatz(13,14,2,0),new nArbeitsplatz(12,14,3,0),new nArbeitsplatz(8,14,2,15),new nArbeitsplatz(7,14,2,20),new nArbeitsplatz(9,14,3,15),
        ];







        nArbeitsplatz[13]=this.getAP(13,13,this.getAP(12,13,this.getAP(8,13,this.getAP(7,13,this.getAP(9,13)))));
        nArbeitsplatz[14]=this.getAP(13,14,this.getAP(12,14,this.getAP(8,14,this.getAP(7,14,this.getAP(9,14)))));
    }
    getAP(id:number,eTeil:number,nachfolger:nArbeitsplatz=null){
        for(x in this.arbeitsplaetze){
            if(x=>x.id===id&&x.eTeil===eTeil){
                let temp= x.tiefeKopie();
                temp.nachfolger=nachfolger;
                return temp;
            }
        }

    }
    auftragSetzten(auftrag:Auftrag){
        let arbeitsplatz:nArbeitsplatz=this.map[auftrag.eTeil];
        if(auftrag.arbeitsplatz==null){
            arbeitsplatz.auftraege.push(auftrag);
        }
        else{
            let temp:nArbeitsplatz=arbeitsplatz;
            while(temp.id!==auftrag.arbeitsplatz.id){
                temp=temp.nachfolger;
            }
            temp.auftraege.push(auftrag);
        }
    }


}

angular.module('app').factory('ArbeitsplatzService', [() => new ArbeitsplatzService()]);