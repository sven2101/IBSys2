/// <reference path="../../typeDefinitions/angular.d.ts" />

class ResourceService {
	
	resource: any;
	
	constructor($resource) {
		this.resource = $resource(':pfad', {}, {
			createFile: {method: 'POST', params: {pfad: 'file'}},
			createUser: {method: 'POST', params: {pfad: 'addBenutzer'}},
			login:	{method: 'POST', params: {pfad: 'checkLogin'}},
			session:{method: 'GET', params: {pfad: 'session'}}
		});
	}
}

angular.module('app').factory('ResourceService', ['$resource',($resource) => new ResourceService($resource)]);