/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="./lagerStatistik.service.ts" />

class LagerController {
	alleErzeugnisse: Array<NewErzeugnis>;
	alleKaufTeile: Array<NewKaufTeil>;

	showTab = {
		statistik: true,
		erzeugnisse: false,
		kaufTeile: false
	}
	showErzeugnisse: boolean;
	showKaufTeile: boolean;

	statistikService: LagerStatistikService;

	constructor(teileService: NewTeileService, statistikService: LagerStatistikService) {
		this.statistikService = statistikService;
		this.alleErzeugnisse = teileService.alleErzeugnisse;
		this.alleKaufTeile = teileService.alleKaufteile;
		this.showErzeugnisse = true;
		this.showKaufTeile = false;
	}

	toggleShowErzeugnisse(): void {
		this.showKaufTeile = false;
		this.showErzeugnisse = true;
	}

	toggleShowKaufTeile(): void {
		this.showErzeugnisse = false;
		this.showKaufTeile = true;
	}

	sortiereErzeugnisse(kriterium: string) {
		this.sortiere(this.alleErzeugnisse, kriterium);
	}

	sortiereKaufTeile(kriterium: string) {
		this.sortiere(this.alleKaufTeile, kriterium);
	}
	
	tabOnClick(contentToShow: string): void {
		for (var property in this.showTab) {
			if (this.showTab.hasOwnProperty(property)) {
				this.showTab[property] = false;
			}
		}
		this.showTab[contentToShow] = true;
	}

	sortiere(array: Array<any>, kriterium: string): void {
		array.sort(function(a: any, b: any) {
			var differenz = 0;

			if (a.hasOwnProperty(kriterium)) {
				if (typeof a[kriterium] === 'boolean') {
					differenz = a[kriterium] === b[kriterium] ? 0 : a[kriterium] ? -1 : 1;
				} else if (kriterium === 'id') {
					differenz = a.id - b.id;
				}
				else {
					differenz = b[kriterium] - a[kriterium];
				}
			}

			if (kriterium === 'summe') {
				differenz = b.teileWert * b.lagerMenge - a.teileWert * a.lagerMenge;
			}

			if (differenz < 0) {
				differenz = -1;
			} else {
				differenz = 1
			}

			if (differenz === 0) {
				return a['id'] - b['id'];
			}
			return differenz;
		});
	}
}

angular.module('LagerModule').controller('LagerController', ['NewTeileService', 'LagerStatistikService', LagerController]);