/// <reference path="../../typeDefinitions/angular.d.ts" />

class Toggle {
	restrict: string;
	template: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		el.click(function(){
			$('#'+attrs.toggleid).toggle(0);
		});
	}
}

angular.module('BestellverwaltungModule').directive('toggle', [() => new Toggle()]);