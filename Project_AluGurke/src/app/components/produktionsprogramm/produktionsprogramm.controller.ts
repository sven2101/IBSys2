/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/ResourceService.ts" />
/// <reference path="../appServices/DispositionService.ts" />
/// <reference path="../appServices/FertigungsAuftraegeService.ts" />
class ProduktionsprogrammController {

    programmService: ProgrammService;
    resource;
    periode:number;
    dispositionService:DispositionService;
    fertigungsAuftraegeService:FertigungsAuftraegeService;
    constructor(programmService: ProgrammService, resourceService: ResourceService, $scope,kennzahlenService: KennzahlenService,dispositionService,fertigungsAuftraegeService) {
        this.programmService = programmService;
        this.resource = resourceService.resource;
        this.periode = kennzahlenService.periode;
        this.dispositionService=dispositionService;
        this.fertigungsAuftraegeService=fertigungsAuftraegeService;
        var vm = this;
        $scope.$watch(
            function() {
                return vm.programmService.produktionsprogramm[0].menge;
            }, function(newVal, oldVal) {
                if(newVal!=oldVal)
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.produktionsprogramm[4].menge;
            }, function(newVal, oldVal) {
                  if(newVal!=oldVal)
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.produktionsprogramm[8].menge;
            }, function(newVal, oldVal) {
                  if(newVal!=oldVal)
                $scope.$emit('pc.programmaenderung');
            });

        $scope.$watch(
            function() {
                return vm.programmService.directsales[1].menge;
            }, function(newVal, oldVal) {
                  if(newVal!=oldVal)
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.directsales[2].menge;
            }, function(newVal, oldVal) {
                  if(newVal!=oldVal)
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.directsales[3].menge;
            }, function(newVal, oldVal) {
                  if(newVal!=oldVal)
                $scope.$emit('pc.programmaenderung');
            });
    }
    onkeydown(){     
        this.dispositionService.changeFlagTrue();
        this.fertigungsAuftraegeService.changeFlagTrue();
    }
}


angular.module('ProduktionsprogrammModule').controller('ProduktionsprogrammController', ['ProgrammService', 'ResourceService', '$scope','KennzahlenService','DispositionService','FertigungsAuftraegeService', ProduktionsprogrammController]);
