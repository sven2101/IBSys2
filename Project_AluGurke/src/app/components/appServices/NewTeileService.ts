/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />

class NewTeileService {
	alleKaufteile: Array<NewKaufTeil>;
	alleErzeugnisse: Array<NewErzeugnis>;
	bestellService: BestellService;
	$rootScope;

	constructor($rootScope,bestellService:BestellService) {
		this.bestellService = bestellService;
		this.erzeugeKaufTeile();
		this.erzeugeErzeignisse();
		this.$rootScope = $rootScope;
		this.$rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
			this.onNeueDatei(dateiInhalt);
		});
	}

	onNeueDatei(dateiInhalt) {
		this.updateKaufTeile(dateiInhalt.results.warehousestock.article);
		this.$rootScope.$broadcast('teileService.kaufTeile.updated');
		this.updateErzeugnisse(dateiInhalt.results.warehousestock.article);
		this.$rootScope.$broadcast('teileService.erzeugnisse.updated');
	}

	updateKaufTeile(artikel) {
		for (var i = 0; i < this.alleKaufteile.length; i++) {
			for (var j = 0; j < artikel.length; j++) {
				if (this.alleKaufteile[i].id == artikel[j]._id) {
					this.alleKaufteile[i].lagerMenge = Number(artikel[j]._amount);
					this.alleKaufteile[i].teileWert = Number(artikel[j]._price);
					this.alleKaufteile[i].teileWertNeu = Number(artikel[j]._price);
					if(this.bestellService.neuBestellungen['k'+this.alleKaufteile[i].id].length != 0){
						this.alleKaufteile[i].teileWertNeu = 
						this.getKaufTeilTeileWertNeu(this.alleKaufteile[i].lagerMenge,this.alleKaufteile[i].teileWert,
						this.alleKaufteile[i].id);
					}
					
				}
			}
		}
	}
	
	getKaufTeilTeileWertNeu(lagerMenge:number,teileWertAlt:number,id:number):number{
		var bestellKosten = 0;
		var bestellMenge = 0;
		var bestellungen = this.bestellService.neuBestellungen['k' +id];
		for (var i = 0; i < bestellungen.length; i++) {
			bestellKosten += bestellungen[i].kosten;
			bestellMenge += bestellungen[i].menge;
		}
		if(lagerMenge == 0 && bestellMenge == 0) {
			return teileWertAlt;
		}
		var teileWertNeu = (lagerMenge * teileWertAlt + bestellKosten) / (lagerMenge * 1 + bestellMenge * 1);
		return Math.round(teileWertNeu * 100) / 100;
	}
	
	updateErzeugnisse(artikel) {
		for (var i = 0; i < this.alleErzeugnisse.length; i++) {
			for (var j = 0; j < artikel.length; j++) {
				if (this.alleErzeugnisse[i].id == artikel[j]._id) {
					this.alleErzeugnisse[i].lagerMenge = artikel[j]._amount;
					this.alleErzeugnisse[i].teileWert = artikel[j]._price;
				}
			}
		}
	}

	getErzeugnis(id: number) {
		for (var i = 0; i < this.alleErzeugnisse.length; i++) {
			if (this.alleErzeugnisse[i].id === id) {
				return this.alleErzeugnisse[i]
			}
		}
		return null;
	}

	getKaufTeil(id: number) {
		for (var i = 0; i < this.alleKaufteile.length; i++) {
			if (this.alleKaufteile[i].id === id) {
				return this.alleKaufteile[i];
			}
		}
	}

	erzeugeKaufTeile() {
		this.alleKaufteile = [
			new NewKaufTeil(21, 'Kette(K)', 5.00, 0, false, 300, 50, 1.8, 0.4),
			new NewKaufTeil(22, 'Kette(D)', 6.50, 0, false, 300, 50, 1.7, 0.4),
			new NewKaufTeil(23, 'Kette(H)', 6.50, 0, false, 300, 50, 1.2, 0.2),
			new NewKaufTeil(24, 'Mutter 3/8', 0.06, 0, true, 6100, 100, 3.2, 0.3),
			new NewKaufTeil(25, 'Schaibe 3/8', 0.06, 0, true, 3600, 50, 0.9, 0.2),
			new NewKaufTeil(27, 'Schraube 3/8', 0.10, 0, true, 1800, 75, 0.9, 0.2),
			new NewKaufTeil(28, 'Rohr 3/4', 1.20, 0, true, 4500, 50, 1.7, 0.4),
			new NewKaufTeil(32, 'Farbe', 0.75, 0, true, 2700, 50, 2.1, 0.5),
			new NewKaufTeil(33, 'Felge cpl.(H)', 22.00, 0, false, 900, 75, 1.9, 0.5),
			new NewKaufTeil(34, 'Speiche(H)', 0.10, 0, false, 22000, 50, 1.6, 0.3),
			new NewKaufTeil(35, 'Konus', 1.00, 0, true, 3600, 75, 2.2, 0.4),
			new NewKaufTeil(36, 'Freilauf', 8.00, 0, true, 900, 100, 1.2, 0.1),
			new NewKaufTeil(37, 'Gabel', 1.50, 0, true, 900, 50, 1.5, 0.3),
			new NewKaufTeil(38, 'Welle', 1.50, 0, true, 300, 50, 1.7, 0.4),
			new NewKaufTeil(39, 'Blech', 1.50, 0, true, 900, 75, 1.5, 0.3),
			new NewKaufTeil(40, 'Lenker', 2.50, 0, true, 900, 50, 1.7, 0.2),
			new NewKaufTeil(41, 'Mutter 3/4', 0.06, 0, true, 900, 50, 0.9, 0.2),
			new NewKaufTeil(42, 'Griff', 0.10, 0, true, 1800, 50, 1.2, 0.3),
			new NewKaufTeil(43, 'Griff', 5.00, 0, true, 1900, 75, 2.0, 0.5),
			new NewKaufTeil(44, 'Stange 1/2', 0.50, 0, true, 2700, 50, 1.0, 0.3),
			new NewKaufTeil(45, 'Mutter 1/4', 0.06, 0, true, 900, 50, 1.7, 0.3),
			new NewKaufTeil(46, 'Schraube 1/4', 0.10, 0, true, 900, 50, 0.9, 0.3),
			new NewKaufTeil(47, 'Zahnkranz', 3.50, 0, true, 900, 50, 1.41, 0.1),
			new NewKaufTeil(48, 'Pedal', 1.50, 0, true, 1800, 75, 1.0, 0.2),
			new NewKaufTeil(52, 'Felge cpl.(K)', 22.00, 0, false, 600, 50, 1.6, 0.4),
			new NewKaufTeil(53, 'Speiche(K)', 0.10, 0, false, 22000, 50, 1.6, 0.2),
			new NewKaufTeil(57, 'Felge cpl.(D)', 22.00, 0, false, 600, 50, 1.7, 0.3),
			new NewKaufTeil(58, 'Speiche(D)', 0.10, 0, false, 22000, 50, 1.6, 0.5),
			new NewKaufTeil(59, 'Schweißdraht', 0.15, 0, true, 1800, 50, 1.7, 0.2)]
	}

	erzeugeErzeignisse() {
		this.alleErzeugnisse = [new NewErzeugnis(1, 'Kinderfahrrad', 156.13, 0, false),
			new NewErzeugnis(2, 'Damenfahrrad', 163.33, 0, false),
			new NewErzeugnis(3, 'Herrenfahrrad', 165.08, 0, false),
			new NewErzeugnis(4, 'Hinterradgruppe(K)', 40.85, 0, false),
			new NewErzeugnis(5, 'Hinterradgruppe(D)', 39.85, 0, false),
			new NewErzeugnis(6, 'Hinterradgruppe(H)', 40.85, 0, false),
			new NewErzeugnis(7, 'Vorderradgruppe(K)', 35.85, 0, false),
			new NewErzeugnis(8, 'Vorderradgruppe(D)', 35.85, 0, false),
			new NewErzeugnis(9, 'Vorderradgruppe(H)', 35.85, 0, false),
			new NewErzeugnis(10, 'Schutzblech h.(K)', 12.40, 0, false),
			new NewErzeugnis(11, 'Schutzblech h.(D)', 14.65, 0, false),
			new NewErzeugnis(12, 'Schutzblech h.(H)', 14.65, 0, false),
			new NewErzeugnis(13, 'Schutzblech v.(K)', 12.40, 0, false),
			new NewErzeugnis(14, 'Schutzblech v.(D)', 14.65, 0, false),
			new NewErzeugnis(15, 'Schutzblech v.(H)', 14.65, 0, false),
			new NewErzeugnis(16, 'Lenker cpl.', 7.02, 0, true),
			new NewErzeugnis(17, 'Sattel cpl.', 7.16, 0, true),
			new NewErzeugnis(18, 'Rahmen(K)', 13.15, 0, false),
			new NewErzeugnis(19, 'Rahmen(D)', 14.35, 0, false),
			new NewErzeugnis(20, 'Rahmen(H)', 15.55, 0, false),
			new NewErzeugnis(26, 'Pedal cpl.', 10.50, 0, true),
			new NewErzeugnis(29, 'Vorderrad mont.', 69.29, 0, false),
			new NewErzeugnis(30, 'Rahmen u. Räder', 127.53, 0, false),
			new NewErzeugnis(31, 'Fahrrad o. Ped.', 144.42, 0, false),
			new NewErzeugnis(49, 'Vorderrad cpl.', 64.64, 0, false),
			new NewErzeugnis(50, 'Rahmen u. Räder', 120.63, 0, false),
			new NewErzeugnis(51, 'Fahrrad o. Pedal', 137.47, 0, false),
			new NewErzeugnis(54, 'Vorderrad cpl.', 68.09, 0, false),
			new NewErzeugnis(55, 'Rahmen u. Räder', 125.33, 0, false),
			new NewErzeugnis(56, 'Fahrrad o. Pedal', 119.67, 0, false)]
	}
}

angular.module('app').factory('NewTeileService', ['$rootScope','BestellService', ($rootScope,bestellService) => new NewTeileService($rootScope,bestellService)]);