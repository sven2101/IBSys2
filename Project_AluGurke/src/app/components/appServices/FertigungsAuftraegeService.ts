/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/DispositionService.ts" />
/// <reference path="../FertigungsAuftraege/FertigungsAuftraege.controller.ts" />


class FertigungsAuftraegeService{
	
	auftragService:AuftragService;
	dispositionService:DispositionService
	models:Array<FertigungsAuftraegeModel>;
	constructor(auftragService:AuftragService,dispositionService:DispositionService){
		this.auftragService=auftragService;		
		this.aendern();
	}
	
	aendern(){
		if(this.models===undefined){
			this.models=new Array<FertigungsAuftraegeModel>();
			for(let i=0;i<this.auftragService.auftraegeExport.length;i++){
				this.models.push(new FertigungsAuftraegeModel(this.auftragService.auftraegeExport[i]));
			}
		}else{
			
		}					
	}
	
}
angular.module('app').factory('FertigungsAuftraegeService', ['AuftragService','DispositionService',(AuftragService,DispositionService) => new FertigungsAuftraegeService(AuftragService,DispositionService)]);