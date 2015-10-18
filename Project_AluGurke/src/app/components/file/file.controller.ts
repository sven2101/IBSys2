/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />

class FileController {
	
	baum: NewTeilKnoten;
	anzahl: number = 0;
	id=24;
	
	constructor (service) {
		this.baum=service.herrenBaum;
	}
	
	startTest() {
		this.anzahl = 0;
		this.testBaum(this.baum,this.id);
	}
	
	testBaum(baum: NewTeilKnoten,id: number) {
		if(baum.teil_id === id) {
			this.anzahl += baum.anzahl;
		}
		if (baum.hatBauteile()){
			for (var i = 0; i < baum.bauteile.length;i++) {
				this.testBaum(baum.bauteile[i],id);
			}
		}
		
	}
}


angular.module('FileModule').controller('FileController',['NewBaumService',FileController]);