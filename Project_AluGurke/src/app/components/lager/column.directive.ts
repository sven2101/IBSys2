/// <reference path="../../typeDefinitions/angular.d.ts" />

class LagerColumn {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {

		console.log(attrs.mengeseries);

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
			yAxis: [
				{
					title: {
						text: 'Wert in Euro'
					}
				}, {
					title: {
						text: 'Stück'
					},
					opposite:true,
				}],
			series: [JSON.parse(attrs.wertseries), JSON.parse(attrs.mengeseries)]
		});
	}
}

angular.module('LagerModule').directive('lagercolumn', [() => new LagerColumn()]);