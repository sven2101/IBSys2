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
    altLastenVerteilen(){
        for(let i=0;i<this.auftraegeAufMaschine.length;i++){
            for(let j=0;j<this.dispositionService.models.length;j++){
                if(this.dispositionService.models[j].eTeil.id==this.auftraegeAufMaschine[i].erzeugnis_id){
                    this.dispositionService.models[j].auftragAufMaschine=this.auftraegeAufMaschine[i];
                }
            }
        }

        for(let j=0;j<this.dispositionService.models.length;j++){
            this.dispositionService.models[j].auftragInWarteschlange=[];
            for(let i=0;i<this.auftraegeInWarteschlange.length;i++){
                if(this.dispositionService.models[j].eTeil.id==this.auftraegeInWarteschlange[i].erzeugnis_id){
                    this.dispositionService.models[j].auftragInWarteschlange.push(this.auftraegeInWarteschlange[i]);
                }
            }
        }
    }

    auftraegeSetzen(auftraege:Array<Auftrag>){

        let x=this.mergeAuftraege(auftraege);
        this.auftraege=[];
        this.auftraegeExport=x;
        this.auftraege=this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege=this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege=this.auftraege.concat(x);
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