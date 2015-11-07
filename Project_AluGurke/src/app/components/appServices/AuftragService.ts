/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />

class AuftragService {
	auftraege:Array<Auftrag>;
    auftraegeExport:Array<Auftrag>;
    auftraegeInWarteschlange:Array<Auftrag>;
    auftraegeAufMaschine:Array<Auftrag>;
    dispositionService:DispositionService;


    constructor(DispositionService){
        this.dispositionService=DispositionService;
        this.auftraege=new Array<Auftrag>();
        this.auftraegeAufMaschine=new Array<Auftrag>();
        this.auftraegeInWarteschlange=new Array<Auftrag>();
        this.auftraegeExport=new Array<Auftrag>();
        this.auftraegeSetzen([]);
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

}

angular.module('app').factory('AuftragService', [(DispositionService) => new AuftragService(DispositionService)]);