/// <reference path="../../typeDefinitions/angular.d.ts" />

class FileController {
	
	test: string = "testt";
	teil;
	
	constructor (service) {
		this.teil = service.teil;
	}
}


angular.module('FileModule').controller('FileController',['TeileService',FileController]);