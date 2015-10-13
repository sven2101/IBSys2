/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Teil.ts" />

class TeileService {
	
	teil: Teil;
	
	constructor(){
		this.teil = new Teil("Kette", 21, 5, 1.8, 0.4, [], 300, 50, 450);
	}
}

angular.module('app').factory('TeileService', [() => new TeileService()]);