/// <reference path="../../typeDefinitions/angular.d.ts" />

class InfoSheet {
	restrict: string;
	template: string;
	scope: any;

	constructor() {
		this.restrict = 'A';
		this.template = '<a href="">more...</a>';
		this.scope= {
			infoSheetScope: '=kiss'
		};
	}

	link(scope, el, attrs, controller) {
		el.click(function(scope) {
			$("table tr:eq(0)").append("<tr><td>hallo</td></tr>");
		});
	}
}

angular.module('BestellverwaltungModule').directive('infoSheet', [() => new InfoSheet()]);