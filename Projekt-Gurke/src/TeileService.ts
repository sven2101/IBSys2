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
                        <th>Bauteile</th>
                    </tr>
                    <tbody>
                        <tr *for="#teil of liste">
                            <td>{{teil.name}}</td>
                            <td>{{teil.id}}</td>
                            <td>{{teil.anzahl}}</td>
                            <td>{{teil.bauteile.length}}</td>
                        </tr>
                    </tbody>
                </table>
    `,directives:[For,If]
})
class TeileService{
    p1:Teil;
    p2:Teil;
    p3:Teil;
    p4:Teil;
    p5:Teil;
    p6:Teil;
    liste:Array<Teil>;
    constructor(){
        this.liste=new Array();
        this.p1=new Teil("Nagel",6,1,[]);
        this.p2=new Teil("Mutter",5,1,[]);
        this.p3=new Teil("Schraube",4,7,[]);
        this.p4=new Teil("Lenker",3,1,[this.p2,this.p3]);
        this.p5=new Teil("Rahmen",2,3,[this.p1]);
        this.p6=new Teil("Fahrrad",1,7,[this.p5,this.p4]);
        this.teileberechnen(this.p6,1,this.liste);


    }
    teileberechnen(teil:Teil,anzahl:number,liste:Array<Teil>){

        if(teil.bauteile.length===0) {
            let nteil=this.tiefeCopy(teil);
            nteil.anzahl=anzahl;
            liste=this.add(nteil,liste);

        }
        else
        {
            teil.bauteile.forEach(pos=>{this.teileberechnen(pos,teil.anzahl*anzahl,liste)});
        }
    }
    aendern($event,inputP1){
        if($event===null||$event.which===13){
            this.liste=[];
            this.teileberechnen(this.p6,Number(inputP1),this.liste);
        }


    }
    tiefeCopy(teil:Teil):Teil{
        return new Teil(teil.name,teil.id,teil.anzahl,[]);
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
    constructor(nname:string,nid:number,nanzahl:number,nbauteile:Array<Teil>){
        this.name=nname;
        this.id=nid;
        this.anzahl=nanzahl;
        if(nbauteile!=null) {
            this.bauteile=nbauteile;
        }
        else
        {
            this.bauteile=[];
        }
    }
}
