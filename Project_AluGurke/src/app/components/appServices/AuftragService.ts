/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />

class AuftragService {
	auftraege:Array<Auftrag>;
    auftraegeExport:Array<Auftrag>;
    auftraegeInWarteschlange:Array<Auftrag>;
    auftraegeAufMaschine:Array<Auftrag>;   
    $rootScope;


    constructor($rootScope){    
        this.auftraege=new Array<Auftrag>();
        this.auftraegeAufMaschine=new Array<Auftrag>();
        this.auftraegeInWarteschlange=new Array<Auftrag>();
        this.auftraegeExport=new Array<Auftrag>();
        this.$rootScope=$rootScope;
        this.$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.onNeueDatei(dateiInhalt);
		});
        this.auftraegeSetzen([]);
        
    }
    
    getVerbrauchEteil(eTeil_id:number){
        let verbrauch=0;
        for(let i=0;i<this.auftraegeExport.length;i++){
            if(this.auftraegeExport[i].erzeugnis_id==eTeil_id){
                verbrauch+=this.auftraegeExport[i].anzahl;
            }
        }
        return verbrauch;
    }
    
    
    onNeueDatei(dateiInhalt) {       
		this.updateAuftraegeInWarteschlange(dateiInhalt.results.waitinglistworkstations.workplace);
        this.updateAuftraegeAufMaschine(dateiInhalt.results.ordersinwork.workplace)
		
	}
    updateAuftraegeInWarteschlange(arbeitsplaetze:Array<any>){
        this.auftraegeInWarteschlange=[];   
        for(let i=0;i<arbeitsplaetze.length;i++){            
            if(arbeitsplaetze[i]._timeneed!=0){            
                if(Array.isArray(arbeitsplaetze[i].waitinglist)){
                    for(let j=0;j<arbeitsplaetze[i].waitinglist.length;j++){
                        let x=arbeitsplaetze[i].waitinglist[j];
                        this.auftraegeInWarteschlange.push(new Auftrag(x._item,x._amount,x._period));                        
                    }
                }
                let x=arbeitsplaetze[i].waitinglist;
                this.auftraegeInWarteschlange.push(new Auftrag(Number(x._item),Number(x._amount),Number(x._period)));                
            }
        }
    }
    updateAuftraegeAufMaschine(arbeitsplaetze:Array<any>){
        this.auftraegeAufMaschine=[];        
        for(let i=0;i<arbeitsplaetze.length;i++){
            let x=arbeitsplaetze[i];            
            this.auftraegeAufMaschine.push(new Auftrag(Number(x._item),Number(x._amount),Number(x._period)));
        }
    }
    

    auftraegeSetzen(auftraege:Array<Auftrag>){

        //let x=this.mergeAuftraege(auftraege);
        this.auftraege=[];
        this.auftraegeExport=auftraege;
        this.auftraege=this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege=this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege=this.auftraege.concat(auftraege);
    }
    mergeAuftraege(auftraege:Array<Auftrag>){
        let temp:Array<Auftrag>=new Array<Auftrag>();
        let temp2:Array<Auftrag>=new Array<Auftrag>();
        for(let i=0;i<auftraege.length;i++){
            if(auftraege[i].erzeugnis_id==16||auftraege[i].erzeugnis_id==17||auftraege[i].erzeugnis_id==26){
                let x=this.contains(temp,auftraege[i]);
                if(x==null){
                    temp.push(auftraege[i]);
                }
                else{
                    if(auftraege[i].prioritaet<x.prioritaet){
                        x.prioritaet=auftraege[i].prioritaet;
                    }
                    x.anzahl+=auftraege[i].anzahl;
                }
            }
            else{
                temp2.push(auftraege[i]);
            }
        }
        return temp.concat(temp2);
    }

    contains(auftraege:Array<Auftrag>,auftrag:Auftrag){
        for(let i=0;i<auftraege.length;i++){
            if(auftraege[i].erzeugnis_id==auftrag.erzeugnis_id){
                return auftraege[i];
            }
        }
        return null;
    }
     altLastenVerteilen(models:Array<DispositionModel>){
        for(let i=0;i<this.auftraegeAufMaschine.length;i++){
            for(let j=0;j<models.length;j++){
                if(models[j].eTeil.id==this.auftraegeAufMaschine[i].erzeugnis_id){
                    models[j].auftragAufMaschine=this.auftraegeAufMaschine[i];
                }
            }
        }
        for(let j=0;j<models.length;j++){
            models[j].auftragInWarteschlange=[];
            for(let i=0;i<this.auftraegeInWarteschlange.length;i++){
                if(models[j].eTeil.id==this.auftraegeInWarteschlange[i].erzeugnis_id){
                    models[j].auftragInWarteschlange.push(this.auftraegeInWarteschlange[i]);
                }
            }
        }
    }

}

angular.module('app').factory('AuftragService', ['$rootScope',($rootScope) => new AuftragService($rootScope)]);