/// <reference path="../../typeDefinitions/angular.d.ts" />

class ResourceService {
	
	resource: any;
	
	constructor($resource) {
		this.resource = $resource(':pfad', {}, {
			createFile: {method: 'POST', params: {pfad: 'file'}},
			createUser: {method: 'POST', params: {pfad: 'addBenutzer'}},
			createSimulationFile: {method: 'POST', params: {pfad: 'addSimulationFile'}},
			login:	{method: 'POST', params: {pfad: 'checkLogin'}},
			logout:{method: 'GET', params: {pfad: 'logout'}},
			session:{method: 'GET', params: {pfad: 'session'}},
			getSimulationFiles:{method: 'GET', params: {pfad: 'getSimulationFiles'}},
			getSimulationFile:{method: 'GET', params: {pfad: 'getSimulationFile'}}
		});
	}
}

angular.module('app').factory('ResourceService', ['$resource',($resource) => new ResourceService($resource)]);