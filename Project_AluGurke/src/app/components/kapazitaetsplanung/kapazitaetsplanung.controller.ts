/// <reference path="../../typeDefinitions/angular.d.ts" />

class KapazitaetsplanungController{
    arbeitsplatzService:ArbeitsplatzService;
    auftragService:AuftragService;
    ergebnisListe:Array<Arbeitsplatz>;
    test:Fertigungsreihe;
    $scope;
    constructor($scope,arpeitsplatzService,auftragsService){
        this.$scope=$scope;
        this.arbeitsplatzService=arpeitsplatzService;
        this.auftragService=auftragsService;

        this.ergebnisListe=new Array<Arbeitsplatz>();
        this.auftraegeSetzen();
        this.ergebnisListe=this.mergeArbeitsplaetze();
    }


    aendern(){
        this.test=this.arbeitsplatzService.map[(<HTMLInputElement>document.getElementById("input1")).value];
    }

    auftraegeSetzen(){
        for(let i=0;i<this.auftragService.auftraege.length;i++){
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftraegSetzten(this.auftragService.auftraege[i]);
        }
    }

    mergeArbeitsplaetze(){
        let liste =this.arbeitsplatzService.fertigungsreihen;
        let ergebnisListe=new Array<Arbeitsplatz>();
        for(let i=0;i<liste.length;i++){
            //ergebnisListe=ergebnisListe.concat(liste[i].alleArbeitsplaetze());
            let listeliste=liste[i].alleArbeitsplaetze();
            for(let j=0;j<listeliste.length;j++){
                let temp=this.search(ergebnisListe,listeliste[j]);
                if(temp===null){
                    var x=new Arbeitsplatz(listeliste[j].id,listeliste[j].erzeugnis_id,0,0);
                    x.auftraege=listeliste[j].auftraege;
                    x.arbeitsplatzFremdeAuftraege=listeliste[j].arbeitsplatzFremdeAuftraege;
                    x.arbeitszeit=listeliste[j].arbeitszeit;
                    ergebnisListe.push(x);
                }
                else{
                    temp.arbeitszeit+=listeliste[j].arbeitszeit;
                    temp.auftraege=temp.auftraege.concat(listeliste[j].auftraege);
                    temp.arbeitsplatzFremdeAuftraege=temp.arbeitsplatzFremdeAuftraege.concat(listeliste[j].arbeitsplatzFremdeAuftraege);
                    temp.name+=","+listeliste[j].erzeugnis_id;
                }
            }
        }
        return ergebnisListe;
    }
    contains(a, obj){
        for (let i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }
    search(a:Array<Arbeitsplatz>,obj:Arbeitsplatz){
        for(let i=0;i<a.length;i++){
            if(a[i].id===obj.id){
                return a[i];
            }
        }
        return null;
    }











}

angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",["$scope","ArbeitsplatzService","AuftragService",KapazitaetsplanungController]);

