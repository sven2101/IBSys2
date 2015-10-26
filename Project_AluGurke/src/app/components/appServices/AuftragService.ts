/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Auftrag.ts" />

class AuftragService {
	auftraege:Array<Auftrag>;

    constructor(){
        this.auftraege=new Array<Auftrag>();
        //this.auftraegeSetzen();
    }

    auftraegeSetzen(){
        this.auftraege=[
            new Auftrag(13,100,2),
            new Auftrag(13,50,1,8),
            new Auftrag(18,30,2),
            new Auftrag(10,100,2),
            new Auftrag(11,100,2),
            new Auftrag(12,100,2),
            new Auftrag(16,100,2),
            new Auftrag(9,100,2,11),
            new Auftrag(6,100,2,11),
        ]
    }
}

angular.module('app').factory('AuftragService', [() => new AuftragService()]);