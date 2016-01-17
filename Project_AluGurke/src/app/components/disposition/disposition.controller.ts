/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../model/DispositionModel.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/DispositionService.ts" />
/// <reference path="../appServices/KapazitaetsplanungService.ts" />

class DispositionController{


    auftragsService:AuftragService;
    newTeileService:NewTeileService;
    dispositionService:DispositionService;
    newBaumService:NewBaumService;
    models:Array<DispositionModel>;
    modelsP1:Array<DispositionModel>;
    modelsP2:Array<DispositionModel>;
    modelsP3:Array<DispositionModel>;
    knoten:Array<NewTeilKnoten>;
    kapazitaetsplanungService:KapazitaetsplanungService;
    fertigungsAuftraegeService:FertigungsAuftraegeService
    
    showTab = {
		P1: true,
		P2: false,
		P3: false	
	};
    


    constructor(dispositionService,kapazitaetsplanungService,fertigungsAuftraegeService){
        this.dispositionService=dispositionService;
        this.kapazitaetsplanungService=kapazitaetsplanungService;
        this.models=this.dispositionService.models;
        this.modelsP1=this.dispositionService.dispositionP1;
        this.modelsP2=this.dispositionService.dispositionP2;
        this.modelsP3=this.dispositionService.dispositionP3;   
        this.fertigungsAuftraegeService=fertigungsAuftraegeService;
        this.aendern();        
        
        
    }
    aendern(){
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();
        //this.fertigungsAuftraegeService.onDispoAendern();
    }
    tabOnClick(contentToShow: string): void {
		for (var property in this.showTab) {
			if (this.showTab.hasOwnProperty(property)) {
				this.showTab[property] = false;
			}
		}
		this.showTab[contentToShow] = true;
	}
}


angular.module("DispositionModule").controller("DispositionController",["DispositionService","KapazitaetsplanungService","FertigungsAuftraegeService",DispositionController]);

