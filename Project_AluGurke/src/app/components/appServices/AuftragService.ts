/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />

class AuftragService {
	auftraege:Array<Auftrag>;

    constructor(){
        this.auftraege=new Array<Auftrag>();
        this.auftraegeSetzen();
    }

    auftraegeSetzen(){
        this.auftraege=[
            new Auftrag(13,100,2),
            new Auftrag(13,50,1,8),
            new Auftrag(18,30,2)
        ]
    }
}

angular.module('app').factory('AuftragService', [() => new AuftragService()]);