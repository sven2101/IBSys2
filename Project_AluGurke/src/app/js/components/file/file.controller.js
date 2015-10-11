/// <reference path="../../typeDefinitions/angular.d.ts" />
var FileController = (function () {
    function FileController(service) {
        this.test = "test";
        this.teil = service.teil;
    }
    return FileController;
})();
angular.module('FileModule').controller('FileController', ['TeileService', FileController]);
