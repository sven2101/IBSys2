/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellungBerechnenService.ts" />
/// <reference path="../appServices/SettingsService.ts" />
/// <reference path="../../typeDefinitions/toastr.d.ts"/>
class KapazitaetsplanungController{

    models:Array<KapazitaetModel>;
    kapazitaetsplanungService:KapazitaetsplanungService;
    dispositionService:DispositionService;
    bestellungBerechnenService:BestellungBerechnenService;
    ergebnis:Array<Arbeitsplatz>;
    settingsService:SettingsService;
  
    constructor(KapazitaetsplanungService,dispositionService,bestellungBerechnenService,settingsService){
        this.models=new Array<KapazitaetModel>();
        this.ergebnis=new Array<Arbeitsplatz>();
        this.kapazitaetsplanungService=KapazitaetsplanungService;
        this.dispositionService=dispositionService;
        this.models=this.kapazitaetsplanungService.models;
        this.settingsService=settingsService;
        
        this.ergebnis=this.kapazitaetsplanungService.ergebnis;
        this.bestellungBerechnenService=bestellungBerechnenService;        
        this.aendern();

    }
    aendern(){
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();        

    }
    berechnen(){        
        this.kapazitaetsplanungService.zeitSetzten();
        toastr.success("Die Arbeitszeiten wurden berechnet");
    }
    reset(){
        this.kapazitaetsplanungService.reset();
        toastr.success("Die Arbeitszeiten wurden zurückgesetzt");
    }
    onChanged(){
        this.bestellungBerechnenService.onSelected();       
    }
   

    zeileRot(model:KapazitaetModel):boolean{
        if(model.arbeitsplatz.arbeitszeit > model.zeitVerfuegung){
            return true;
        }
        return false;
    }



}
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",["KapazitaetsplanungService","DispositionService","BestellungBerechnenService","SettingsService",KapazitaetsplanungController]);
class KapazitaetModel{
    anzahlSchichten:string;
    ueberstunden:number;  
    arbeitsplatz:Arbeitsplatz;
    zeitVerfuegung:number;
    name:string;
    eTeile:Array<number>;

    constructor(arbeitsplatz:Arbeitsplatz) {
        this.name = arbeitsplatz.name;
        this.anzahlSchichten="1";
        this.ueberstunden=0;     
        this.arbeitsplatz=arbeitsplatz;
        this.zeitVerfuegung=2400;
        this.eTeile=new Array<number>();
        this.setName();
    }
    setName(){
        this.eTeile=[];
        if(this.name[1]=="_"){
            let temp=name.substring(1,name.length).split(",");
            name=name.substring(0,1);
            for(let i=0;i<temp.length;i++){
                this.eTeile.push(Number(temp[i]));
            }
        }
        else{
            let temp=name.substring(2,name.length).split(",");
            name=name.substring(0,2);
            for(let i=0;i<temp.length;i++){
                this.eTeile.push(Number(temp[i]));
            }
        }
    }

}



