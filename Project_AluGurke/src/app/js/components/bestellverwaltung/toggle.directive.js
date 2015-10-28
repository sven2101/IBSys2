/// <reference path="../../typeDefinitions/angular.d.ts" />
var Toggle = (function () {
    function Toggle() {
        this.restrict = 'A';
    }
    Toggle.prototype.link = function (scope, el, attrs, controller) {
        el.click(function () {
            $('#' + attrs.toggleid).toggle(0);
        });
    };
    return Toggle;
})();
angular.module('BestellverwaltungModule').directive('toggle', [function () { return new Toggle(); }]);
