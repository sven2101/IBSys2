/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Teil.ts" />

class TeileService {
	teil: Teil;
	ergebnisListe:Array<Teil>;
	constructor(){
		this.teil = new Teil("Kette", 21, 5, 1.8, 0.4, [], 300, 50, 450);
	}
	setListe(temp:Array<Teil>){
		this.ergebnisListe=temp;
	}
	getListe(){
		return this.ergebnisListe;
	}

}

angular.module('app').factory('TeileService', [() => new TeileService()]);