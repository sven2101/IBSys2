/// <reference path="../../typeDefinitions/angular.d.ts" />
var Fade = (function () {
    function Fade() {
        this.restrict = 'A';
    }
    Fade.prototype.link = function (scope, el, attrs, controller) {
        el.click(function () {
            $('#' + attrs.out).fadeOut(500, function () {
                $('#' + attrs.in).fadeIn(300);
            });
        });
    };
    return Fade;
})();
angular.module('BestellverwaltungModule').directive('fade', [function () { return new Fade(); }]);
