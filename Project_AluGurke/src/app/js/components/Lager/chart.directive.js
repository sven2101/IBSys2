/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/d3js.d.ts" />
var Chart = (function () {
    function Chart() {
        this.restrict = 'A';
        this.scope = {
            data: '=data'
        };
        //this.template = '{{data}}';
    }
    Chart.prototype.link = function (scope, el, attrs, controller) {
        var data = [];
        for (var i = 0; i < scope.data.length; i++) {
            data.push(scope.data[i]);
        }
        data = [3122.6, 3266.6, 8254, 4085, 3985, 3268, 2509.5, 1792.5, 3585, 1240, 1465, 1465, 1240, 732.5, 1465, 1684.8, 1467.8, 1315, 1291.5, 1555, 1680, 5543.2, 6376.5, 0, 9696, 6031.5, 4124.1, 10213.5, 34465.75, 9573.6];
        var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, 1000]);
        d3.select(el.get(0))
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) { return x(d) + "px"; })
            .style("background-color", "grey")
            .style("margin", "1px")
            .text(function (d) { return d; });
    };
    return Chart;
})();
angular.module('LagerModule').directive('chart', [function () { return new Chart(); }]);
