/// <reference path="../../typeDefinitions/angular.d.ts" />

class TableRowToggle {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		el.click(function(){
			$('#'+attrs.tablerowtoggleid).toggle(0);
		});
	}
}

angular.module('BestellverwaltungModule').directive('tablerowtoggle', [() => new TableRowToggle()]);