/// <reference path="../../typeDefinitions/angular.d.ts" />

class CustomPopover {
	restrict: string;
	template: string;

	constructor() {
		this.restrict = 'A';
		this.template = '<span>king</span>'
	}

	link(scope, el, attrs) {
		el.hover(function(){
			$(this).append('hallo');
		});
	}
}

angular.module('BestellverwaltungModule').directive('customPopover', [() => new CustomPopover()]);