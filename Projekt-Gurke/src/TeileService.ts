/**
 * Created by Max on 13.08.2015.
 */

/// <reference path="../typings/angular2/2.2angular2.d.ts" />
"use strict";
import {Component, View, bootstrap,For,If} from 'angular2/angular2'

// Annotation section
@Component({
    selector: 'TeileService'
})
@View({
    template:`
            <h1 align="center">Teileverwaltung</h1>
            <table align="center">
                <tr>
                    <th>Produkt</th>
                    <th>Periode 1</th>
                    <th>Periode 2</th>
                    <th>Periode 3</th>
                    <th>Periode 4 </th>
                </tr>
                <tbody>
                    <tr>
                        <th>P1</th>
                        <th><input id="i11" class="form-control" type="text" placeholder="Anzahl P1" (keyup)="aendern()"></th>
                        <th><input id="i12" class="form-control" type="text" placeholder="Anzahl P1" (keyup)="aendern()"></th>
                        <th><input id="i13" class="form-control" type="text" placeholder="Anzahl P1" (keyup)="aendern()"></th>
                        <th><input id="i14" class="form-control" type="text" placeholder="Anzahl P1" (keyup)="aendern()"></th>
                    </tr>
                    <tr>
                        <th>P2</th>
                        <th><input id="i21" class="form-control" type="text" placeholder="Anzahl P2" (keyup)="aendern()"></th>
                        <th><input id="i22" class="form-control" type="text" placeholder="Anzahl P2" (keyup)="aendern()"></th>
                        <th><input id="i23" class="form-control" type="text" placeholder="Anzahl P2" (keyup)="aendern()"></th>
                        <th><input id="i24" class="form-control" type="text" placeholder="Anzahl P2" (keyup)="aendern()"></th>
                    </tr>
                    <tr>
                        <th>P3</th>
                        <th><input id="i31" class="form-control" type="text" placeholder="Anzahl P3" (keyup)="aendern()"></th>
                        <th><input id="i32" class="form-control" type="text" placeholder="Anzahl P3" (keyup)="aendern()"></th>
                        <th><input id="i33" class="form-control" type="text" placeholder="Anzahl P3" (keyup)="aendern()"></th>
                        <th><input id="i34" class="form-control" type="text" placeholder="Anzahl P3" (keyup)="aendern()"></th>
                    </tr>
                </tbody>
            </table>
            <h3 align="center">Teilebedarf <button class="btn btn-success">Bestellen</button></h3>
            <table aligh="center" class="table table-striped table-hover ">
                <tr>
                    <th>Id</th>
                    <th>Lieferzeit in Perioden</th>
                    <th>Abweichung in Perioden</th>
                    <th>Reichweite in Perioden</th>
                    <th>Lagerstand</th>
                    <th>Bedarf Periode 1</th>
                    <th>Bedarf Periode 2</th>
                    <th>Bedarf Periode 3</th>
                    <th>Bedarf Periode 4</th>
                    <th>Rabattmenge</th>
                    <th>Bestellmenge</th>
                    <th>Eilbestellung</th>

                </tr>
                <tbody>
                    <tr id="{{teil.id}}" *for="#teil of ergebnisListe;">
                        <td>{{"K"+teil.id}}</td>
                        <td>{{teil.lieferzeitNormal}}</td>
                        <td>{{teil.lieferAbweichung}}</td>
                        <td>{{teil.reichweite}}</td>
                        <td>{{teil.lagerstand}}</td>
                        <td>{{teil.bedarfPeriode[0]}}</td>
                        <td>{{teil.bedarfPeriode[1]}}</td>
                        <td>{{teil.bedarfPeriode[2]}}</td>
                        <td>{{teil.bedarfPeriode[3]}}</td>
                        <td>{{teil.rabattmenge}}</td>
                        <td><input class="form-control" type="text" value={{teil.bestellmenge}}></td>
                        <td><input type="checkbox"></td>
                    </tr>
                </tbody>
            </table>
    `,directives:[For,If]
})
class TeileService{

    //Liste aller Bauteile
    gesamtListe:Array<Teil>;
    //Liste die im Template verwendet wird, enthält nur Kaufteile
    ergebnisListe:Array<Teil>;
    //Liste aller vorhandenen Teil, fungiert als Katalog aus dem tiefe Kopien entnommen werden
    listeTeile:Array<Teil>;

    constructor(){
        this.gesamtListe=new Array<Teil>();
        this.listeTeile=new Array<Teil>();
        this.ergebnisListe=new Array<Teil>();

        this.teileSetzen();
        this.teileberechnen(this.getTeil(1),0,this.gesamtListe,0);
        this.ergebnisListe=this.getKaufteile(this.gesamtListe);
    }

    //Berechent zu einem Bauteil alle dazugehörigen Bauteile mittels Strukturstücklisten und speichert si in einer Liste
    teileberechnen(teil:Teil,anzahl:number,liste:Array<Teil>,periode:number){
        if(teil.bauteile.length===0) {
            let nteil=this.tiefeCopy(teil,teil.anzahl*anzahl);
            nteil.bedarfPeriode[periode]=teil.anzahl*anzahl;
            this.add(nteil,liste,periode);
        }
        else{
            let nteil=this.tiefeCopy(teil,teil.anzahl*anzahl);
            nteil.bedarfPeriode[periode]=teil.anzahl*anzahl;
            this.add(nteil,liste,periode);
            teil.bauteile.forEach(pos=>{this.teileberechnen(pos,teil.anzahl*anzahl,liste,periode)});
        }
    }
    //Baut die Strukturstücklisten auf und speichert jedes Teil im Katalog, muss nur einmal initial gemacht werden
    teileSetzen(){
        this.listeTeile=[
        //Kaufteile
        new Teil("Kette",21,5,1.8,0.4,[],300,50),
        new Teil("Kette",22,6.5,1.7,0.4,[],300,50),
        new Teil("Kette",23,6.5,1.2,0.2,[],300,50),
        new Teil("Mutter 3/8“",24,0.06,3.2,0.3,[],6100,100),
        new Teil("Scheibe 3/8“",25,0.06,0.9,0.2,[],3600,50),
        new Teil("Schraube 3/8“",27,0.1,0.9,0.2,[],1800,75),
        new Teil("Rohr 3/4“",28,1.2,1.7,0.4,[],4500,50),
        new Teil("Farbe",32,0.75,2.1,0.5,[],2700,50),
        new Teil("Felge cpl.",33,22,1.9,0.5,[],900,75),
        new Teil("Speiche",34,0.1,1.6,0.3,[],22000,50),
        new Teil("Konus",35,1,2.2,0.4,[],3600,75),
        new Teil("Freilauf",36,8,1.2,0.1,[],900,100),
        new Teil("Gabel",37,1.5,1.5,0.3,[],900,50),
        new Teil("Freilauf",38,1.5,1.7,0.4,[],300,50),
        new Teil("Blech",39,1.5,1.5,0.3,[],1800,75),
        new Teil("Lenker",40,2.5,1.7,0.2,[],900,50),
        new Teil("Mutter 3/4“",41,0.06,0.9,0.2,[],900,50),
        new Teil("Griff",42,0.1,1.2,0.3,[],1800,50),
        new Teil("Sattel",43,5,2.0,0.5,[],2700,75),
        new Teil("Stange 1/2“",44,0.5,1.0,0.2,[],900,50),
        new Teil("Mutter 1/4“",45,0.06,1.7,0.3,[],900,50),
        new Teil("Schraube 1/4“",46,0.1,0.9,0.3,[],900,50),
        new Teil("Zahnkranz",47,3.5,1.41,0.1,[],900,50),
        new Teil("Pedal",48,1.5,1.0,0.2,[],1800,75),
        new Teil("Felge cpl.",52,22.0,1.6,0.4,[],600,50),
        new Teil("Speiche",53,0.1,1.6,0.2,[],22000,50),
        new Teil("Felge cpl.",57,22.0,1.7,0.3,[],600,50),
        new Teil("Speiche",58,0.1,1.6,0.5,[],22000,50),
        new Teil("Schweißdraht",59,0.15,0.7,0.2,[],1800,50),
        ];
        //Nicht-Kaufteile
        this.listeTeile.push(new Teil("e26",26,0,0,0,[this.getTeil(44,2),this.getTeil(47),this.getTeil(48,2)],0,0));
        this.listeTeile.push(new Teil("e16",16,0,0,0,[this.getTeil(24),this.getTeil(28),this.getTeil(40),this.getTeil(41),this.getTeil(42,2)],0,0));
        this.listeTeile.push(new Teil("e17",17,0,0,0,[this.getTeil(43),this.getTeil(44),this.getTeil(45),this.getTeil(46)],0,0));
        this.listeTeile.push(new Teil("e4",4,0,0,0,[this.getTeil(35,2),this.getTeil(36),this.getTeil(52),this.getTeil(53,36)],0,0));
        this.listeTeile.push(new Teil("e10",10,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0));
        this.listeTeile.push(new Teil("e7",7,0,0,0,[this.getTeil(35,2),this.getTeil(37),this.getTeil(38),this.getTeil(52),this.getTeil(53,36)],0,0));
        this.listeTeile.push(new Teil("e13",13,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0));
        this.listeTeile.push(new Teil("e18",18,0,0,0,[this.getTeil(28,3),this.getTeil(32),this.getTeil(59,2)],0,0));
        this.listeTeile.push(new Teil("e49",49,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(7),this.getTeil(13),this.getTeil(18)],0,0));
        this.listeTeile.push(new Teil("e50",50,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(4),this.getTeil(10),this.getTeil(49)],0,0));
        this.listeTeile.push(new Teil("e51",51,0,0,0,[this.getTeil(24),this.getTeil(27),this.getTeil(16),this.getTeil(17),this.getTeil(50)],0,0));
        this.listeTeile.push(new Teil("p1",1,0,0,0,[this.getTeil(21),this.getTeil(24),this.getTeil(27),this.getTeil(26),this.getTeil(51)],0,0));
    }
    //liefert eine tiefe Kopie eines Bauteiles aus dem Katalog zurück und setzt optional dessen Anzahl
    getTeil(id:number,anzahl:number=1):Teil{
        for(let i=0;i<this.listeTeile.length;i++){
            if(this.listeTeile[i].id===id){
                return this.tiefeCopy(this.listeTeile[i],anzahl);
            }
        }
        return null;
    }
    //liefert eine tiefe Kopie eines beliebigen Bauteiles zurück und setzt dessen Anzahl
    tiefeCopy(teil:Teil,anzahl:number):Teil{
        let nteil=teil.getCopy();
        nteil.anzahl=anzahl;
        nteil.bedarfPeriode=[teil.bedarfPeriode[0],teil.bedarfPeriode[1],teil.bedarfPeriode[2],teil.bedarfPeriode[3]];
        return nteil;
    }
    //fügt ein Bauteil einer Liste hinzu, ist dieses schon in dieser vorhanden wird desssen Anzahl hochgezählt
    add(teil:Teil,liste:Array<Teil>,periode:number){
        for(let i=0;i<liste.length;i++){
            if(liste[i].id===teil.id){
                liste[i].anzahl+=teil.anzahl;
                liste[i].bedarfPeriode[periode]+=teil.bedarfPeriode[periode];
                return;
            }
        }
        liste.push(teil);
    }
    //filtert aus einer Liste alle Kaufteile heraus
    getKaufteile(liste:Array<Teil>):Array<Teil>{
        let nliste:Array<Teil>=new Array<Teil>();
        liste.forEach(pos=>{
            if(pos.bauteile.length===0){
                nliste.push(pos);
            }
        })
        return nliste;
    }
    //wird durch das event "keyup" aus dem Template gerufen und führt die einzelnen Schritte der eigentlichen Berechnung aus
    aendern(){
        this.gesamtListe=[];
        this.teileberechnen(this.getTeil(1),0,this.gesamtListe,0);
        let inputs=["11","12","13","14"];//,"21","22","23","24","31","32","33","34"];
        for(let i=0;i<inputs.length;i++){
            let input:string = (<HTMLInputElement>document.getElementById("i"+inputs[i])).value;
            let number:number = (<any>input) * 1;
            if (isNaN(number)) {
                window.alert("keine zulässige Eingabe");
                return;
            }
            else{
                let teil:Teil=this.getTeil((<any>inputs[i][0])*1);
                let periode:number=(<any>inputs[i][1])*1;
                let liste:Array<Teil>=new Array<Teil>();
                this.teileberechnen(teil,number,this.gesamtListe,periode-1);
            }
        }
        this.reichweiteBerechnen(this.gesamtListe);
        this.bestellmengeBerechnen(this.gesamtListe);
        this.ergebnisListe=this.getKaufteile(this.gesamtListe);
        this.ergebnisListe.sort((a,b)=>{return a.id-b.id});
    }
    //berechnet die Reichweite des jeweiligen Bauteiles
    reichweiteBerechnen(liste:Array<Teil>){
        for(let i=0;i<liste.length;i++){
            let teil:Teil=liste[i];
            if(teil.lagerstand-teil.bedarfPeriode[0]<=0){
                if(teil.lagerstand===0){
                    teil.reichweite=0;
                }
                else {
                    teil.reichweite = 0 + teil.lagerstand / teil.bedarfPeriode[0];
                }
            }
            else if(teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]<=0){
                if((teil.lagerstand-teil.bedarfPeriode[0])===0){
                    teil.reichweite=1;
                }
                else {
                    teil.reichweite = 1 + (teil.lagerstand - teil.bedarfPeriode[0]) / teil.bedarfPeriode[1];
                }
            }
            else if(teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]-teil.bedarfPeriode[2]<=0){
                if((teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1])===0){
                    teil.reichweite=2;
                }
                else {
                    teil.reichweite = 2 + (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1]) / teil.bedarfPeriode[2];
                }
            }
            else if(teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]-teil.bedarfPeriode[2]-teil.bedarfPeriode[3]<=0){
                if((teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]-teil.bedarfPeriode[2])===0){
                    teil.reichweite=3;
                }
                else {
                    teil.reichweite = 3 + (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] - teil.bedarfPeriode[2]) / teil.bedarfPeriode[3];
                }
            }
            else{
                teil.reichweite=4;
            }
            teil.reichweite=1*(<any>teil.reichweite.toString().substring(0,6));
        }


    }
    //berechnet die nötige Bestellmenge, im Moment wird bestellt, sobald die Reichweite unter der Lieferzeit+Abweichung liegt
    bestellmengeBerechnen(liste:Array<Teil>){
        for(let i=0;i<liste.length;i++){
            let teil:Teil=liste[i];
            let bedarf:number=teil.bedarfPeriode[0]+teil.bedarfPeriode[1]+teil.bedarfPeriode[2]+teil.bedarfPeriode[3]
            if(teil.reichweite<teil.lieferzeitNormal+teil.lieferAbweichung){
                teil.bestellmenge=(-1)*(teil.lagerstand-bedarf);
                if(teil.bestellmenge<teil.rabattmenge){
                    teil.bestellmenge=teil.rabattmenge;
                }
            }
        }
    }
}

bootstrap(TeileService);

//beschreibt ein Bauteil
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
    bedarfPeriode:Array<number>;
    reichweite:number;
    bestellmenge:number;

    constructor(nname:string,nid:number,nwert,nlieferzeitNormal,nlieferAbweichung,nbauteile:Array<Teil>,nrabattmenge:number,nbestellkosten,nanzahl:number=1){
        this.name=nname;
        this.id=nid;
        this.anzahl=nanzahl;
        this.wert=nwert;
        this.lieferzeitNormal=nlieferzeitNormal;
        this.lieferzeitEil=0;
        this.lagerstand=300;
        this.inWarteschlange=0;
        this.rabattmenge=nrabattmenge;
        this.bestellkosten=nbestellkosten;
        this.lieferAbweichung=nlieferAbweichung;
        this.bedarfPeriode=[0,0,0,0];
        this.reichweite=4;
        this.bestellmenge=0;
        if(nbauteile!=null) {
            this.bauteile=nbauteile;
        }
        else{
            this.bauteile=[];
        }
    }
    //erstellt eine tiefe Kopie eines Bauteils, einschließlich aller Unterbauteile
    getCopy():Teil{
        if(this.bauteile.length===0){
            let teil:Teil=new Teil(this.name,this.id,this.wert,this.lieferzeitNormal,this.lieferAbweichung,[],this.rabattmenge,this.bestellkosten,this.anzahl);
            teil.bedarfPeriode=[this.bedarfPeriode[0],this.bedarfPeriode[1],this.bedarfPeriode[2],this.bedarfPeriode[3]];
            return teil;
        }
        else
        {
            let liste:Array<Teil>=new Array<Teil>();
            for(let i=0;i<this.bauteile.length;i++){
                liste.push(this.bauteile[i]);
            }
            let teil:Teil=new Teil(this.name,this.id,this.wert,this.lieferzeitNormal,this.lieferAbweichung,liste,this.rabattmenge,this.bestellkosten,this.anzahl);
            teil.bedarfPeriode=[this.bedarfPeriode[0],this.bedarfPeriode[1],this.bedarfPeriode[2],this.bedarfPeriode[3]];
            return teil;
        }
    }

}
