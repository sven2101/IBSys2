/// <reference path="../../typeDefinitions/angular.d.ts" />

class ResourceService {
	
	resource: any;
	
	constructor($resource) {
		this.resource = $resource(':pfad', {}, {
			createFile: {method: 'POST', params: {pfad: 'file'}}
		});
	}
}

angular.module('app').factory('ResourceService', ['$resource',($resource) => new ResourceService($resource)]);