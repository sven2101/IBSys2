/**
 * Created by sven_ on 27.10.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/SettingsService.ts" />

class SettingsController {

    settingsService: SettingsService;
    model:SettingsModel;
    eTeile:Array<NewErzeugnis>;

    constructor( settingsService: SettingsService) {
        this.settingsService = settingsService;
        this.eTeile=this.settingsService.newTeileService.alleErzeugnisse;
        this.model=this.settingsService.model;
    }
    aendern(){
        this.settingsService.aendern();
    }
}


angular.module('SettingsModule').controller('SettingsController', ['SettingsService',SettingsController]);

class SettingsModel{
    bestellungGenerieren:boolean;
	arbeitszeitGenerieren:boolean;	
	strategieString:string;

    
    constructor(bestellungGenerieren:boolean,arbeitszeitGenerieren:boolean,strategieString:string){
        this.bestellungGenerieren=bestellungGenerieren;
        this.arbeitszeitGenerieren=arbeitszeitGenerieren;
        this.strategieString=strategieString;        
    }
    
}
