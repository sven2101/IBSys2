/// <reference path="../../typeDefinitions/angular.d.ts" />

class LagerColumn {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		
		el.highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: attrs.title
			},
			xAxis: {
				categories: JSON.parse(attrs.categories),
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Wert in Euro'
				}
			},
			series: [JSON.parse(attrs.series)]
		});
	}
}

angular.module('LagerModule').directive('lagercolumn', [() => new LagerColumn()]);