/// <reference path="../../typeDefinitions/angular.d.ts" />

class BestellverwaltungUtilService {
	
	constructor(){
		
	}
	
	zeileRot(reichweite:number, wbz:number): boolean {
		if ((reichweite - wbz) < 1) {
			return true;
		}
		return false;
	}

	zeileGelb(reichweite:number, wbz:number,wbzAbw:number): boolean {
		if ((!this.zeileRot(reichweite,wbz) && ((reichweite - wbzAbw - wbz) < 1))) {
			return true;
		}
		return false;
	}
}

angular.module('BestellverwaltungModule').factory('BestellverwaltungUtilService', [() => new BestellverwaltungUtilService()]);