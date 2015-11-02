/// <reference path="../../typeDefinitions/angular.d.ts" />

class Fade {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		el.click(function(){
			$('#'+attrs.out).fadeOut(450, function(){
				$('#'+attrs.in).fadeIn(300);
			});
		});
	}
}

angular.module('BestellverwaltungModule').directive('fade', [() => new Fade()]);