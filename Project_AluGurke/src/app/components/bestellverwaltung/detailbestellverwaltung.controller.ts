/// <reference path="../../typeDefinitions/angular.d.ts" />
class DetailBestellVerwaltungController {
	teil_id:number;
	constructor($routeParams){
		this.teil_id = $routeParams.kaufteilid;
	}
}

angular.module('BestellverwaltungModule').controller('DetailBestellVerwaltungController', [
	'$routeParams',DetailBestellVerwaltungController]);