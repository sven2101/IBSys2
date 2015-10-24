/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
/// <reference path="../appServices/ResourceService.ts" />

class FileController {

	baum: NewTeilKnoten;
	anzahl: number = 0;
	id = 24;
	dateiInhalt: any;
	$scope;
	kaufteile;
	teileService;
	resource;
	result = "nichts";

	constructor($scope, service, NewTeileService, bestellService, resourceService: ResourceService) {
		this.teileService = NewTeileService;
		this.$scope = $scope;
		this.baum = service.herrenBaum;
		this.kaufteile = NewTeileService.alleKaufteile;
		this.resource = resourceService.resource;
		this.$scope.$on('teileService.kaufTeile.updated', (event) => this.setTeileArray());
	}

	sendPostRequest() {
		var vm = this;
		this.resource.createFile({ content: 'Der Inhalt der Datei.' }, function(result, headers) {
			vm.result = result;
		});
	}

	setTeileArray() {
		this.$scope.$apply();
	}

	startTest() {
		this.anzahl = 0;
		this.testBaum(this.baum, this.id);
	}

	testBaum(baum: NewTeilKnoten, id: number) {
		if (baum.teil_id === id) {
			this.anzahl += baum.anzahl;
		}
		if (baum.hatBauteile()) {
			for (var i = 0; i < baum.bauteile.length; i++) {
				this.testBaum(baum.bauteile[i], id);
			}
		}
	}

	change(json) {
		var vm = this;
		this.$scope.$apply(function() {
			vm.dateiInhalt = json;
		});
		this.$scope.$emit('fileController.neueDatei', this.dateiInhalt);
	}
}


angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', 'BestellService', 'ResourceService', FileController]);