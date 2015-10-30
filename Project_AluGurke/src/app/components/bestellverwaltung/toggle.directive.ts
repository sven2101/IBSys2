/// <reference path="../../typeDefinitions/angular.d.ts" />

class Toggle {
	restrict: string;
	template: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		el.children(".panel-body").hide();
		el.children(".panel-heading").css('cursor', 'pointer');
		el.children(".panel-heading").click(function () {
			$(this).siblings(".panel-body").slideToggle("slow");
		});
	}
}

angular.module('BestellverwaltungModule').directive('toggle', [() => new Toggle()]);