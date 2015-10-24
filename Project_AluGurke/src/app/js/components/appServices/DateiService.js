/// <reference path="../../typeDefinitions/angular.d.ts" />
var DateiService = (function () {
    function DateiService() {
        this.dateiErzeugt = false;
        this.dateiName = "none";
    }
    return DateiService;
})();
angular.module('app').factory('DateiService', [function () { return new DateiService(); }]);
