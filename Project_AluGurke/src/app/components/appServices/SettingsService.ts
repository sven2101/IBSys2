/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../settings/settings.controller.ts" />

class SettingsService {
	bestellungGenerieren:boolean;
	arbeitszeitGenerieren:boolean;
	strategie:number;
	dispositionDefaultWerte:{[key:number]:number;}
    model:SettingsModel;
    newTeileService:NewTeileService
    
    constructor(newTeileService:NewTeileService){
        this.newTeileService=newTeileService;
        this.bestellungGenerieren=false;
        this.arbeitszeitGenerieren=false;
        this.strategie=50;
        this.model=new SettingsModel(false,false,'sicher');
        this.dispositionDefaultWerte={};
        this.defaultWerteSetzten();
        
    }
    aendern(){
        this.bestellungGenerieren=this.model.bestellungGenerieren;
        this.arbeitszeitGenerieren=this.model.arbeitszeitGenerieren;       
        switch(this.model.strategieString){
            case 'sehr riskant':this.strategie=-100;
            break;
            case 'riskant':this.strategie=-50;
            break;
            case 'normal':this.strategie=0;
            break;
            case 'sicher':this.strategie=50;
            break;
            case 'sehr sicher':this.strategie=100;
            break;
            default:;
            break;
        }  
        this.setDefaultWert();      
    }
	
	defaultWerteSetzten(){
        this.dispositionDefaultWerte[1]=20;
        this.dispositionDefaultWerte[26]=70;
        this.dispositionDefaultWerte[51]=30;
        this.dispositionDefaultWerte[16]=70;
        this.dispositionDefaultWerte[17]=30;
        this.dispositionDefaultWerte[50]=30;
        this.dispositionDefaultWerte[4]=70;
        this.dispositionDefaultWerte[10]=100;
        this.dispositionDefaultWerte[49]=30;
        this.dispositionDefaultWerte[7]=70;
        this.dispositionDefaultWerte[13]=100;
        this.dispositionDefaultWerte[18]=100;
        this.dispositionDefaultWerte[2]=20;
        this.dispositionDefaultWerte[56]=30;
        this.dispositionDefaultWerte[55]=30;
        this.dispositionDefaultWerte[5]=70;
        this.dispositionDefaultWerte[11]=100;
        this.dispositionDefaultWerte[54]=30;
        this.dispositionDefaultWerte[8]=70;
        this.dispositionDefaultWerte[14]=100;
        this.dispositionDefaultWerte[19]=100;
        this.dispositionDefaultWerte[3]=20;
        this.dispositionDefaultWerte[31]=30;
        this.dispositionDefaultWerte[30]=30;
        this.dispositionDefaultWerte[6]=70;
        this.dispositionDefaultWerte[12]=100;
        this.dispositionDefaultWerte[29]=30;
        this.dispositionDefaultWerte[9]=70;
        this.dispositionDefaultWerte[15]=100;
        this.dispositionDefaultWerte[20]=100;
    }
    setDefaultWert(){
        for(let i=0;i<this.newTeileService.alleErzeugnisse.length;i++){
            let x=this.dispositionDefaultWerte[this.newTeileService.alleErzeugnisse[i].id];
            if(isNaN(x)||x<0){
                this.dispositionDefaultWerte[this.newTeileService.alleErzeugnisse[i].id]=0;
            }              
        }
    }
	
	
}

angular.module('app').factory('SettingsService', ['NewTeileService',(NewTeileService) => new SettingsService(NewTeileService)]);