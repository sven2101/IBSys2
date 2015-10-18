/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />

class FileController {

	baum: NewTeilKnoten;
	anzahl: number = 0;
	id = 24;
	dateiInhalt: any;
	$scope;
	kaufteile;

	constructor($scope,service,NewTeileService) {
		this.$scope = $scope;
		this.baum = service.herrenBaum;
		this.kaufteile = NewTeileService.alleKaufteile;
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
		this.$scope.$emit('neueDatei',this.dateiInhalt);
	}
}


angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService','NewTeileService', FileController]);