/// <reference path="../../typeDefinitions/angular.d.ts" />
var FileController = (function () {
    function FileController() {
        this.test = "test";
    }
    return FileController;
})();
angular.module("FileModule").controller("FileController", [FileController]);
