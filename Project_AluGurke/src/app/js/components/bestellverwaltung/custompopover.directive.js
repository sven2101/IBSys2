/// <reference path="../../typeDefinitions/angular.d.ts" />
var CustomPopover = (function () {
    function CustomPopover() {
        this.restrict = 'A';
        this.template = '<span>king</span>';
    }
    CustomPopover.prototype.link = function (scope, el, attrs) {
        el.hover(function () {
            $(this).append('hallo');
        });
    };
    return CustomPopover;
})();
angular.module('BestellverwaltungModule').directive('customPopover', [function () { return new CustomPopover(); }]);
