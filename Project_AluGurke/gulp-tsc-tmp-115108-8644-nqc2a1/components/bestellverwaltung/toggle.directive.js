/// <reference path="../../typeDefinitions/angular.d.ts" />
var Toggle = (function () {
    function Toggle() {
        this.restrict = 'A';
    }
    Toggle.prototype.link = function (scope, el, attrs, controller) {
        el.children(".panel-body").hide();
        el.children(".panel-heading").css('cursor', 'pointer');
        el.children(".panel-heading").click(function () {
            $(this).siblings(".panel-body").slideToggle("slow");
        });
    };
    return Toggle;
})();
angular.module('BestellverwaltungModule').directive('toggle', [function () { return new Toggle(); }]);
