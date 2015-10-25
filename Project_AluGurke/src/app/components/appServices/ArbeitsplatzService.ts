/**
 * Created by Max on 18.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/ArbeitsplatzKnoten.ts" />

class ArbeitsplatzService {

    map:{[key:number]:Fertigungsreihe;}
    fertigungsreihen:Array<Fertigungsreihe>;
    arbeitsplaetze:Array<Arbeitsplatz>;
    constructor(){
        this.arbeitsplaetze=new  Array<Arbeitsplatz>();
        this.map={};
        this.fertigungsreihen=new Array<Fertigungsreihe>();
        this.arbeitsplaetzeSetzen();

    }
    arbeitsplaetzeSetzen(){
        this.arbeitsplaetze=[
            //P1
            new Arbeitsplatz(13,13,2,0),new Arbeitsplatz(12,13,3,0),new Arbeitsplatz(8,13,1,15),new Arbeitsplatz(7,13,2,20),new Arbeitsplatz(9,13,3,15),
            new Arbeitsplatz(6,18,3,15),new Arbeitsplatz(8,18,3,20),new Arbeitsplatz(7,18,2,20),new Arbeitsplatz(9,18,2,15),
            new Arbeitsplatz(10,7,4,20),new Arbeitsplatz(11,7,3,20),
            new Arbeitsplatz(10,4,4,20),new Arbeitsplatz(11,4,3,10),
            new Arbeitsplatz(13,10,2,0),new Arbeitsplatz(12,10,3,0),new Arbeitsplatz(8,10,1,15),new Arbeitsplatz(7,10,2,20),new Arbeitsplatz(9,10,3,15),
            new Arbeitsplatz(1,49,6,20),
            new Arbeitsplatz(15,17,3,15),
            new Arbeitsplatz(6,16,2,15),new Arbeitsplatz(14,16,3,0),
            new Arbeitsplatz(2,50,5,30),
            new Arbeitsplatz(3,51,5,20),
            new Arbeitsplatz(7,26,2,30),new Arbeitsplatz(15,26,3,15),
            new Arbeitsplatz(4,1,6,30),
            //P2
            new Arbeitsplatz(13,14,2,0),new Arbeitsplatz(12,14,3,0),new Arbeitsplatz(8,14,2,15),new Arbeitsplatz(7,14,2,20),new Arbeitsplatz(9,14,3,15),
            new Arbeitsplatz(6,19,3,15),new Arbeitsplatz(8,19,3,25),new Arbeitsplatz(7,19,2,20),new Arbeitsplatz(9,19,2,20),
            new Arbeitsplatz(10,8,4,20),new Arbeitsplatz(11,8,3,20),
            new Arbeitsplatz(10,5,4,20),new Arbeitsplatz(11,5,3,10),
            new Arbeitsplatz(13,11,2,0),new Arbeitsplatz(12,11,3,0),new Arbeitsplatz(8,11,2,15),new Arbeitsplatz(7,11,2,20),new Arbeitsplatz(9,11,3,15),
            new Arbeitsplatz(1,54,6,20),
            new Arbeitsplatz(2,55,5,30),
            new Arbeitsplatz(3,56,6,20),
            new Arbeitsplatz(4,2,7,20),
            //P3
            new Arbeitsplatz(13,15,2,0),new Arbeitsplatz(12,15,3,0),new Arbeitsplatz(8,15,2,15),new Arbeitsplatz(7,15,2,20),new Arbeitsplatz(9,15,3,15),
            new Arbeitsplatz(6,20,3,15),new Arbeitsplatz(8,20,3,20),new Arbeitsplatz(7,20,2,20),new Arbeitsplatz(9,20,2,15),
            new Arbeitsplatz(10,9,4,20),new Arbeitsplatz(11,9,3,20),
            new Arbeitsplatz(10,6,4,20),new Arbeitsplatz(11,6,3,20),
            new Arbeitsplatz(13,12,2,0),new Arbeitsplatz(12,12,3,0),new Arbeitsplatz(8,12,2,15),new Arbeitsplatz(7,12,2,20),new Arbeitsplatz(9,12,3,15),
            new Arbeitsplatz(1,29,6,20),
            new Arbeitsplatz(2,30,5,20),
            new Arbeitsplatz(3,31,6,20),
            new Arbeitsplatz(4,3,7,30)
        ];
        //P1
        this.map[13]=new Fertigungsreihe(this.getAP(13,13,this.getAP(12,13,this.getAP(8,13,this.getAP(7,13,this.getAP(9,13))))));
        this.map[18]=new Fertigungsreihe(this.getAP(6,18,this.getAP(8,18,this.getAP(7,18,this.getAP(9,18)))));
        this.map[7]=new Fertigungsreihe(this.getAP(10,7,this.getAP(11,7)));
        this.map[4]=new Fertigungsreihe(this.getAP(10,4,this.getAP(11,4)));
        this.map[10]=new Fertigungsreihe(this.getAP(13,10,this.getAP(12,10,this.getAP(8,10,this.getAP(7,10,this.getAP(9,10))))));
        this.map[49]=new Fertigungsreihe(this.getAP(1,49));
        this.map[17]=new Fertigungsreihe(this.getAP(15,17));
        this.map[16]=new Fertigungsreihe(this.getAP(6,16,this.getAP(14,16)));
        this.map[50]=new Fertigungsreihe(this.getAP(2,50));
        this.map[51]=new Fertigungsreihe(this.getAP(3,51));
        this.map[26]=new Fertigungsreihe(this.getAP(7,26,this.getAP(7,26)));
        this.map[1]=new Fertigungsreihe(this.getAP(4,1));
        //P2
        this.map[14]=new Fertigungsreihe(this.getAP(13,14,this.getAP(12,14,this.getAP(8,14,this.getAP(7,14,this.getAP(9,14))))));
        this.map[19]=new Fertigungsreihe(this.getAP(6,19,this.getAP(8,19,this.getAP(7,19,this.getAP(9,19)))));
        this.map[8]=new Fertigungsreihe(this.getAP(10,8,this.getAP(11,8)));
        this.map[5]=new Fertigungsreihe(this.getAP(10,5,this.getAP(11,5)));
        this.map[11]=new Fertigungsreihe(this.getAP(13,11,this.getAP(12,11,this.getAP(8,11,this.getAP(7,11,this.getAP(9,11))))));
        this.map[54]=new Fertigungsreihe(this.getAP(1,54));
        this.map[55]=new Fertigungsreihe(this.getAP(2,55));
        this.map[56]=new Fertigungsreihe(this.getAP(3,56));
        this.map[2]=new Fertigungsreihe(this.getAP(4,2));
        //P3
        this.map[15]=new Fertigungsreihe(this.getAP(13,15,this.getAP(12,15,this.getAP(8,15,this.getAP(7,15,this.getAP(9,15))))));
        this.map[20]=new Fertigungsreihe(this.getAP(6,20,this.getAP(8,20,this.getAP(7,20,this.getAP(9,20)))));
        this.map[9]=new Fertigungsreihe(this.getAP(10,9,this.getAP(11,9)));
        this.map[6]=new Fertigungsreihe(this.getAP(10,6,this.getAP(11,6)));
        this.map[12]=new Fertigungsreihe(this.getAP(13,12,this.getAP(12,12,this.getAP(8,12,this.getAP(7,12,this.getAP(9,12))))));
        this.map[29]=new Fertigungsreihe(this.getAP(1,29));
        this.map[30]=new Fertigungsreihe(this.getAP(2,30));
        this.map[31]=new Fertigungsreihe(this.getAP(3,31));
        this.map[3]=new Fertigungsreihe(this.getAP(4,3));

        this.fertigungsreihen=[this.map[13],this.map[18],this.map[7],this.map[4],this.map[10],this.map[49],this.map[17],this.map[16],this.map[50],this.map[51],this.map[26],this.map[1],
        this.map[14],this.map[19],this.map[8],this.map[5],this.map[11],this.map[54],this.map[55],this.map[56],this.map[2],this.map[15],this.map[20],this.map[9],this.map[6],this.map[12],
        this.map[29],this.map[30],this.map[31],this.map[3]
        ];
    }
    getAP(id:number,eTeil:number,nachfolger:ArbeitsplatzKnoten=null){
        for(let i:number=0;i<this.arbeitsplaetze.length;i++){
            if(this.arbeitsplaetze[i].id==id&&this.arbeitsplaetze[i].erzeugnis_id==eTeil){
                return new ArbeitsplatzKnoten(this.arbeitsplaetze[i].tiefeKopie(),nachfolger);
            }
        }
    }


}

angular.module('app').factory('ArbeitsplatzService', [() => new ArbeitsplatzService()]);