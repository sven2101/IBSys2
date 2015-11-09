/// <reference path="../../typeDefinitions/angular.d.ts" />
var ResourceService = (function () {
    function ResourceService($resource) {
        this.resource = $resource(':pfad', {}, {
            createFile: { method: 'POST', params: { pfad: 'file' } }
        });
    }
    return ResourceService;
})();
angular.module('app').factory('ResourceService', ['$resource', function ($resource) { return new ResourceService($resource); }]);
