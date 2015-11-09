/// <reference path="../../typeDefinitions/angular.d.ts" />

class TableRowToggle {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		el.click(function(){
			$(this).next().toggle(0,function(){
				$(this).children().fadeToggle(400);
			});
		});
	}
}

angular.module('BestellverwaltungModule').directive('tablerowtoggle', [() => new TableRowToggle()]);