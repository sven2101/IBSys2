/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/chart.d.ts" />

class ChartPie {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		el.append(canvas);

		var legendeContainer = $(document.createElement('div'));
		legendeContainer.css('opacity', 0);
		el.append(legendeContainer);

		var data = [
			{
				value: 300,
				color: "#F7464A",
				highlight: "#FF5A5E",
				label: "Kosten Eilbestellungen"
			},
			{
				value: 100,
				color: "#46BFBD",
				highlight: "#5AD3D1",
				label: "Kosten Normalbestellungen"
			}
		];

		var options = {

			   animationEasing : "easeInOutCubic",
			   animateScale: true,
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"label\" style=\"background-color:<%=segments[i].fillColor%>\">"
				+" </span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
				onAnimationComplete: function(){legendeContainer.animate({opacity:1});}
		}
		var pieChart = new Chart(ctx).Pie(data, options);
		legendeContainer.append(pieChart.generateLegend());

	}
}

angular.module('BestellverwaltungModule').directive('chartpie', [() => new ChartPie()]);