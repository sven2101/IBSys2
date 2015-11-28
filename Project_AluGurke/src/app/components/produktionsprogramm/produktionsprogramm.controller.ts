/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/ResourceService.ts" />
class ProduktionsprogrammController {

    programmService: ProgrammService;
    resource;
    constructor(programmService: ProgrammService, resourceService: ResourceService, $scope) {
        this.programmService = programmService;
        this.resource = resourceService.resource;
        var vm = this;
        $scope.$watch(
            function() {
                return vm.programmService.produktionsprogramm[0].menge;
            }, function(newVal, oldVal) {
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.produktionsprogramm[4].menge;
            }, function(newVal, oldVal) {
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.produktionsprogramm[8].menge;
            }, function(newVal, oldVal) {
                $scope.$emit('pc.programmaenderung');
            });

        $scope.$watch(
            function() {
                return vm.programmService.directsales[1].menge;
            }, function(newVal, oldVal) {
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.directsales[2].menge;
            }, function(newVal, oldVal) {
                $scope.$emit('pc.programmaenderung');
            });
        $scope.$watch(
            function() {
                return vm.programmService.directsales[3].menge;
            }, function(newVal, oldVal) {
                $scope.$emit('pc.programmaenderung');
            });
    }
}


angular.module('ProduktionsprogrammModule').controller('ProduktionsprogrammController', ['ProgrammService', 'ResourceService', '$scope', ProduktionsprogrammController]);
