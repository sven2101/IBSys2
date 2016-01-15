/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ResourceService.ts" />
/// <reference path="../appServices/KennzahlenService.ts" />
/// <reference path="../appServices/DateiService.ts" />
/// <reference path="../../typeDefinitions/sweetalert.d.ts"/>
/// <reference path="../../typeDefinitions/toastr.d.ts"/>
class FileController {

    baum: NewTeilKnoten;
    anzahl: number = 0;
    id = 24;
    dateiInhalt: any;
    $scope;
    kaufteile;
    teileService;
    resource;
    result: string;
    dateiService: DateiService;
    zugangBestellungen: Array<ZugangBestellung>;
    kennzahlenService: KennzahlenService

    constructor($scope, service, NewTeileService, bestellService, resourceService: ResourceService, dateiService: DateiService, kennzahlenService: KennzahlenService) {
        this.teileService = NewTeileService;
        this.$scope = $scope;
        this.baum = service.kinderBaum;
        this.kaufteile = NewTeileService.alleKaufteile;
        this.resource = resourceService.resource;
        this.zugangBestellungen = bestellService.zugangBestellungen;
        this.dateiService = dateiService;
        this.kennzahlenService = kennzahlenService;
    }

    sendPostRequest() {
        var vm = this;
        let x = this.dateiService.getInhalt();
        if (x === null) {
            sweetAlert("Fehler", "Es dürfen nicht mehr als 75 Aufträge erstellt werden!", "error");
            return;
        }
        this.resource.createFile({ content: x, periode: this.kennzahlenService.periode }, function(result, headers) {
            vm.result = result.dateiName;
            vm.dateiService.dateiName = result.dateiName;
            vm.dateiService.dateiErzeugt = true;
        });
    }

    change(json) {
        var vm = this;
        var aktuellePeriode = Number(json.results._period);
        this.resource.createSimulationFile({ dateiInhalt: json, periode: aktuellePeriode }, function(result, headers) {

            
            if (result.erg == '200') {
                toastr.success("Die Periode " + aktuellePeriode + " wurde in die Datenbank eingefügt", 'Die Datei wurde erfolgreich importiert');
            } else if (result.erg == '300') {
                toastr.success("Die Periode " + aktuellePeriode + " wurde in der Datenbank ersetzt! ", 'Die Datei wurde erfolgreich importiert');
            } else {
                toastr.success('Die Datei wurde erfolgreich importiert');
            }
        });

        this.$scope.$apply(function() {
            vm.dateiInhalt = json;
        });


        this.$scope.$emit('fileController.neueDatei', this.dateiInhalt);

    }
}


angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', 'BestellService', 'ResourceService', 'DateiService', 'KennzahlenService', FileController]);