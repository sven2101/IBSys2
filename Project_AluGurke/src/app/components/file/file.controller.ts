/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ResourceService.ts" />
/// <reference path="../appServices/KennzahlenService.ts" />
/// <reference path="../appServices/DateiService.ts" />
/// <reference path="../../typeDefinitions/sweetalert.d.ts"/>

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
    kennzahlenService:KennzahlenService

	constructor($scope, service, NewTeileService, bestellService, resourceService: ResourceService, dateiService:DateiService,kennzahlenService:KennzahlenService) {
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
        let x=this.dateiService.getInhalt();
        if(x===null){
           sweetAlert("Ungültige Eingabe","Es dürfen nur ganze Zahlen eingegeben werden!", "error"); 
           return;
        }        
		this.resource.createFile({ content: x, periode: this.kennzahlenService.periode}, function(result, headers) {
			vm.result = result.dateiName;
			vm.dateiService.dateiName = result.dateiName;
			vm.dateiService.dateiErzeugt = true;
		});
	}

	change(json) {
		var vm = this;
		var aktuellePeriode=Number(json.results._period);
		this.resource.createSimulationFile({ dateiInhalt: json,periode: aktuellePeriode}, function(result, headers) {
			if(result.erg == '200') {
				swal({   title: "Die Datei wurde erfolgreich importiert", type:"success" });
			}else if(result.erg == '300') {

                swal({   title: "Die Datei wurde erfolgreich importiert",text:"Die Periode "+aktuellePeriode+" wurde in der Datenbank ersetzt! ", type:"success" });
				
			}
			else if(result.erg == '404') {
				alert("Benutzer nicht gefunden");
			}else if(result.erg == '500') {
				alert("Internal Server Error!");
			}
		});
        swal({   title: "Die Datei wurde erfolgreich importiert", timer: 1500,type:"success" });
		this.$scope.$apply(function() {
			vm.dateiInhalt = json;
		});
       
        
		this.$scope.$emit('fileController.neueDatei', this.dateiInhalt);
        
	}    
}


angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', 'BestellService', 'ResourceService', 'DateiService','KennzahlenService', FileController]);