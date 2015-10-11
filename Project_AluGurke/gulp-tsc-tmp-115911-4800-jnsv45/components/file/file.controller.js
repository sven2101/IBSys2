/// <reference path="../../typeDefinitions/angular.d.ts" />
var FileController = (function () {
    function FileController(service) {
        this.test = "testt";
    }
    return FileController;
})();
angular.module('FileModule').controller('FileController', ['TeileService', FileController]);
