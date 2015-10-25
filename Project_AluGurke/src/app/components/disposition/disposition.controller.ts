/// <reference path="../../typeDefinitions/angular.d.ts" />

class DispositionController{

    $scope;
    auftragsService:AuftragService;
    newTeileService:NewTeileService;
    eTeile:Array<NewErzeugnis>;
    constructor(scope,auftragsService,newTeileService){
        this.$scope=scope;
        this.auftragsService=auftragsService;
        this.newTeileService=newTeileService;
        this.eTeile=newTeileService.alleErzeugnisse;
        this.eTeile.sort((a,b)=>{return a.id-b.id});
    }
    aendern(x){
        (<HTMLInputElement>document.getElementById("input_1")).value="test";
    }
}

angular.module("DispositionModule").controller("DispositionController",["$scope","AuftragService","NewTeileService",DispositionController]);

