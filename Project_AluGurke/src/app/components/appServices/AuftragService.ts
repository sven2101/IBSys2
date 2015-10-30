/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />

class AuftragService {
	auftraege:Array<Auftrag>;
    auftraegeInWarteschlange:Array<Auftrag>;
    auftraegeAufMaschine:Array<Auftrag>;
    dispositionService:DispositionService;
    constructor(DispositionService){
        this.dispositionService=DispositionService;
        this.auftraege=new Array<Auftrag>();
        this.auftraegeAufMaschine=new Array<Auftrag>();
        this.auftraegeInWarteschlange=new Array<Auftrag>();
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
        this.auftraege=[];
        this.auftraege=this.auftraege.concat(this.auftraegeAufMaschine);
        this.auftraege=this.auftraege.concat(this.auftraegeInWarteschlange);
        this.auftraege=this.auftraege.concat(auftraege);
    }
}

angular.module('app').factory('AuftragService', [(DispositionService) => new AuftragService(DispositionService)]);