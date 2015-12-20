/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class HomeController {
    resource;
    allSimulationFiles;
    selectedSimulationFile;
    constructor(resourceService: ResourceService) {
        this.resource = resourceService.resource;
        this.saveSimulationFiles();
        this.getSimulationFileByPeriod(1);

    }

    saveSimulationFiles() {
        var vm = this;
        this.resource.getSimulationFiles('', function(result, headers) {
            if (result.erg != '404' && result.erg != '502')
            {
                vm.allSimulationFiles=result.simulationFile;
                vm.chart(vm.getStockMovement(result.simulationFile));
            }
        });
    }

    getSimulationFileByPeriod(periodeNum : number){
        var vm = this;
        this.resource.getSimulationFile({periode : periodeNum}, function(result, headers) {
            if (result.erg != '404' && result.erg != '502')
            {
                vm.selectedSimulationFile=result.simulationFile;
            }
        });
    }

    getStockMovement(json){
        var stockMovement =[];
        for(var i=0; i < json.length; i++){
            var obj = JSON.parse(json[i].datei);
            var number = Number(obj.results.warehousestock.totalstockvalue);
            stockMovement.push(number);
        }
        return stockMovement;
    }

    chart(data: Array<number>) {

        let categories = new Array<string>();

        for (let i = 0; i < data.length; i++) {

            categories.push('Periode ' +(i+1));
        }

        $('#stockMovement').highcharts({
            chart: {
                type: 'area',
                spacingBottom: 30
            },
            title: {
                text: ''
            },
            subtitle: {
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" \u20AC";
                    }
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y +" \u20AC";
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.2
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Entwicklung des Lagerwertes',
                data: data
            }]
        });
    }
}
angular.module('HomeModule').controller('HomeController', ['ResourceService',HomeController]);
