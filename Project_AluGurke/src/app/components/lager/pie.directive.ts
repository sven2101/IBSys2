/// <reference path="../../typeDefinitions/angular.d.ts" />

class LagerPie {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {

		el.highcharts({
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Lagerwert'
			},
			plotOptions: {
				pie: {
				}
			},
			tooltip: {
				formatter: function() {
					return this.y + ' €';
				}
			},
			series: [{
				name: "Lagerwert",
				colorByPoint: true,
				data: [
					{
						name: "Erzeugnisse",
						y: attrs.erzeugnisse * 1 === 0 ? 1 : attrs.erzeugnisse * 1,
						color: '#ffcc00'
					}, {
						name: "Kaufteile",
						y: attrs.kaufteile * 1=== 0 ? 1 : attrs.kaufteile * 1,
						color: '#3399ff'
					}]
			}]
		});
	}
}

angular.module('LagerModule').directive('lagerpie', [() => new LagerPie()]);