/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ResourceService.ts" />
/// <reference path="../appServices/KennzahlenService.ts" />
/// <reference path="../appServices/DateiService.ts" />

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

	constructor($scope, service, NewTeileService, bestellService, resourceService: ResourceService, dateiService:DateiService,kennzahlenService:KennzahlenService) {
		this.teileService = NewTeileService;
		this.$scope = $scope;
		this.baum = service.kinderBaum;
		this.kaufteile = NewTeileService.alleKaufteile;
		this.resource = resourceService.resource;
		this.zugangBestellungen = bestellService.zugangBestellungen;
		this.dateiService = dateiService;
	}
	
	sendPostRequest() {
		var vm = this;
		this.resource.createFile({ content: this.dateiService.getInhalt()}, function(result, headers) {
			vm.result = result.dateiName;
			vm.dateiService.dateiName = result.dateiName;
			vm.dateiService.dateiErzeugt = true;
		});
	}

	change(json) {
		var vm = this;
		this.$scope.$apply(function() {
			vm.dateiInhalt = json;
		});
		this.$scope.$emit('fileController.neueDatei', this.dateiInhalt);
	}
}


angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', 'BestellService', 'ResourceService', 'DateiService','KennzahlenService', FileController]);