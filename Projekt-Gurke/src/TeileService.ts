/**
 * Created by Max on 13.08.2015.
 */

/// <reference path="../typings/angular2/2.2angular2.d.ts" />
import {Component, View, bootstrap,For,If} from 'angular2/angular2'

// Annotation section
@Component({
    selector: 'TeileService'
})
@View({
    template:`
            <h1>{{liste.length}}</h1>
            <input #inputp1 placeholder="Anzahl Fahrrad 1" (keyup)="aendern($event,inputp1.value)">
            <button (click)="aendern(null,inputp1.value)">OK</button>
                <table class="table table-striped table-hover ">
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Anzahl</th>
                        <th>Wert in Euro</th>
                        <th>LZ-N</th>
                        <th>LZ-E</th>
                        <th>Rabattmenge</th>
                        <th>Bestellmenge</th>
                    </tr>
                    <tbody>
                        <tr *for="#teil of liste">
                            <td>{{teil.name}}</td>
                            <td>{{teil.id}}</td>
                            <td>{{teil.anzahl}}</td>
                            <td>{{teil.wert}}</td>
                            <td>{{teil.lieferzeitNormal}}</td>
                            <td>{{teil.lieferzeitEil}}</td>
                            <td>{{teil.rabattmenge}}</td>
                            <td><input></td>
                        </tr>
                    </tbody>
                </table>
    `,directives:[For,If]
})
class TeileService{
    p1:Teil;
    liste:Array<Teil>;
    listeKaufteile:Array<Teil>;
    constructor(){
        /**

        this.p1=new Teil("Nagel",6,1,[]);
        this.p2=new Teil("Mutter",5,1,[]);
        this.p3=new Teil("Schraube",4,7,[]);
        this.p4=new Teil("Lenker",3,1,[this.p2,this.p3]);
        this.p5=new Teil("Rahmen",2,3,[this.p1]);
        this.p6=new Teil("Fahrrad",1,7,[this.p5,this.p4]);
        */
        this.liste=new Array<Teil>();
        this.listeKaufteile=new Array<Teil>();
        this.kaufteileSetzten();

        this.p1=new Teil("p1",1,156.13,1.0,0,[],0,0);
        this.p1Setzten();
        this.teileberechnen(this.p1,1,this.liste);


    }
    teileberechnen(teil:Teil,anzahl:number,liste:Array<Teil>){

        if(teil.bauteile.length===0) {
            let nteil=this.tiefeCopy(teil,teil.anzahl*anzahl);
            liste=this.add(nteil,liste);

        }
        else
        {
            let nteil=this.tiefeCopy(teil,teil.anzahl*anzahl);
            liste.push(nteil);
            teil.bauteile.forEach(pos=>{this.teileberechnen(pos,teil.anzahl*anzahl,liste)});
        }
    }
    aendern($event,inputP1){
        if($event===null||$event.which===13){
            this.liste=[];
            this.p1.anzahl=inputP1;
            this.teileberechnen(this.p1,1,this.liste);
        }


    }
    p1Setzten(){

            let e26=new Teil("e26",26,10.50,1.0,0,[this.getKT(44,2),this.getKT(47,1),this.getKT(48,2)],0,0);
        this.p1.bauteile=[this.getKT(21,1),this.getKT(24,1),this.getKT(27,1),e26];
    }
    kaufteileSetzten(){
        this.listeKaufteile=[
        new Teil("Kette",21,5,1.8,0.4,[],300,50),
        new Teil("Kette",22,6.5,1.7,0.4,[],300,50),
        new Teil("Kette",23,6.5,1.2,0.2,[],300,50),
        new Teil("Mutter 3/8ì",24,0.06,3.2,0.3,[],6100,100),
        new Teil("Scheibe 3/8ì",25,0.06,0.9,0.2,[],3600,50),
        new Teil("Schraube 3/8ì",27,0.1,0.9,0.2,[],1800,75),
        new Teil("Rohr 3/4ì",28,1.2,1.7,0.4,[],4500,50),
        new Teil("Farbe",32,0.75,2.1,0.5,[],2700,50),
        new Teil("Felge cpl.",33,22,1.9,0.5,[],900,75),
        new Teil("Speiche",34,0.1,1.6,0.3,[],22000,50),
        new Teil("Konus",35,1,2.2,0.4,[],3600,75),
        new Teil("Freilauf",36,8,1.2,0.1,[],900,100),
        new Teil("Gabel",37,1.5,1.5,0.3,[],900,50),
        new Teil("Freilauf",38,1.5,1.7,0.4,[],300,50),
        new Teil("Blech",39,1.5,1.5,0.3,[],1800,75),
        new Teil("Lenker",40,2.5,1.7,0.2,[],900,50),
        new Teil("Mutter 3/4ì",41,0.06,0.9,0.2,[],900,50),
        new Teil("Griff",42,0.1,1.2,0.3,[],1800,50),
        new Teil("Sattel",43,5,2.0,0.5,[],2700,75),
        new Teil("Stange 1/2ì",44,0.5,1.0,0.2,[],900,50),
        new Teil("Mutter 1/4ì",45,0.06,1.7,0.3,[],900,50),
        new Teil("Schraube 1/4ì",46,0.1,0.9,0.3,[],900,50),
        new Teil("Zahnkranz",47,3.5,1.41,0.1,[],900,50),
        new Teil("Pedal",48,1.5,1.0,0.2,[],1800,75),
        new Teil("Felge cpl.",52,22.0,1.6,0.4,[],600,50),
        new Teil("Speiche",53,0.1,1.6,0.2,[],22000,50),
        new Teil("Felge cpl.",57,22.0,1.7,0.3,[],600,50),
        new Teil("Speiche",58,0.1,1.6,0.5,[],22000,50),
        new Teil("Schweiﬂdraht",59,0.15,0.7,0.2,[],1800,50),
        ];
    }
    getKT(id:number,anzahl:number):Teil{
        for(let i=0;i<this.listeKaufteile.length;i++){
            if(this.listeKaufteile[i].id===id){
                return this.tiefeCopy(this.listeKaufteile[i],anzahl);
            }
        }
        return null;
    }
    tiefeCopy(teil:Teil,anzahl:number):Teil{
        return new Teil(teil.name,teil.id,teil.wert,teil.lieferzeitNormal,teil.lieferAbweichung,[],teil.rabattmenge,teil.bestellkosten,anzahl);
    }
    add(teil:Teil,liste:Array<Teil>):Array<Teil>{
        liste.forEach(pos=>{
            if(pos.id===teil.id){
                pos.anzahl+=teil.id;
                return liste;
            }
        });
        liste.push(teil);
        return liste;
    }
}
bootstrap(TeileService);

class Teil{
    name:string;
    id:number;
    anzahl:number;
    bauteile:Array<Teil>;
    wert:number;
    lieferzeitNormal:number;
    lieferzeitEil:number;
    lagerstand:number;
    inWarteschlange:number;
    rabattmenge:number;
    bestellkosten:number;
    lieferAbweichung:number;
    constructor(nname:string,nid:number,nwert,nlieferzeitNormal,nlieferAbweichung,nbauteile:Array<Teil>,nrabattmenge:number,nbestellkosten,nanzahl:number=1){
        this.name=nname;
        this.id=nid;
        this.anzahl=nanzahl;
        this.wert=nwert;
        this.lieferzeitNormal=nlieferzeitNormal;
        this.lieferzeitEil=0;
        this.lagerstand=0;
        this.inWarteschlange=0;
        this.rabattmenge=nrabattmenge;
        this.bestellkosten=nbestellkosten;
        this.lieferAbweichung=nlieferAbweichung;
        if(nbauteile!=null) {
            this.bauteile=nbauteile;
        }
        else
        {
            this.bauteile=[];
        }
    }
}
