/// <reference path="../../typeDefinitions/angular.d.ts" />
var one = (function () {
    function one() {
    }
    return one;
})();
angular.module('BestellverwaltungModule').factory('AuftragService', [function () { return new AuftragService(); }]);
