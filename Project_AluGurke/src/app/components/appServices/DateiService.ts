/// <reference path="../../typeDefinitions/angular.d.ts" />

class DateiService {
	
	dateiName: string;
	dateiErzeugt: boolean;
	
	constructor(){
		this.dateiErzeugt = false;
		this.dateiName = "none";
	}
}

angular.module('app').factory('DateiService', [() => new DateiService()]);