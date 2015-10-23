/// <reference path="../../typeDefinitions/angular.d.ts" />
var InfoSheet = (function () {
    function InfoSheet() {
        this.restrict = 'A';
        this.template = '<a href="">more...</a>';
        this.scope = {
            infoSheetScope: '=kiss'
        };
    }
    InfoSheet.prototype.link = function (scope, el, attrs, controller) {
        el.click(function (scope) {
            $("table tr:eq(0)").append("<tr><td>hallo</td></tr>");
        });
    };
    return InfoSheet;
})();
angular.module('BestellverwaltungModule').directive('infoSheet', [function () { return new InfoSheet(); }]);
