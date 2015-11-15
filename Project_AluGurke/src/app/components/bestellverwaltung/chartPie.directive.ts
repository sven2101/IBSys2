/// <reference path="../../typeDefinitions/angular.d.ts" />

class ChartPie {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		
	}
}

angular.module('BestellverwaltungModule').directive('chartpie', [() => new ChartPie()]);