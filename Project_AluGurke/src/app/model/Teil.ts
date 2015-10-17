class Teil {

	name: string;
	id: number;
	anzahl: number;
	bauteile: Array<Teil>;
	wert: number;
	lieferzeitNormal: number;
	lieferzeitEil: number;
	lagerstand: number;
	rabattmenge: number;
	bestellkosten: number;
	lieferAbweichung: number;
	bedarfPeriode: Array<number>;
	reichweite: number;
	bestellmenge: number;

	constructor(nname: string, nid: number, nwert, nlieferzeitNormal, nlieferAbweichung, nbauteile: Array<Teil>, nrabattmenge: number, nbestellkosten: number, nlagerstand: number, nanzahl: number = 1) {
		this.name = nname;
		this.id = nid;
		this.anzahl = nanzahl;
		this.wert = nwert;
		this.lieferzeitNormal = nlieferzeitNormal;
		this.lieferzeitEil = nlieferzeitNormal/2;
		this.lagerstand = nlagerstand;
		this.rabattmenge = nrabattmenge;
		this.bestellkosten = nbestellkosten;
		this.lieferAbweichung = nlieferAbweichung;
		this.bedarfPeriode = [0, 0, 0, 0];
		this.reichweite = 4;
		this.bestellmenge = 0;
		if (nbauteile != null) {
			this.bauteile = nbauteile;
		}
		else {
			this.bauteile = [];
		}
	}
	
	//erstellt eine tiefe Kopie eines Bauteils, einschlie�lich aller Unterbauteile
	getCopy(): Teil {
		if (this.bauteile.length === 0) {
			let teil: Teil = new Teil(this.name, this.id, this.wert, this.lieferzeitNormal, this.lieferAbweichung, [], this.rabattmenge, this.bestellkosten, this.lagerstand, this.anzahl);
			teil.bedarfPeriode = [this.bedarfPeriode[0], this.bedarfPeriode[1], this.bedarfPeriode[2], this.bedarfPeriode[3]];
			return teil;
		}
		else {
			let liste: Array<Teil> = new Array<Teil>();
			for (let i = 0; i < this.bauteile.length; i++) {
				liste.push(this.bauteile[i]);
			}
			let teil: Teil = new Teil(this.name, this.id, this.wert, this.lieferzeitNormal, this.lieferAbweichung, liste, this.rabattmenge, this.bestellkosten, this.lagerstand, this.anzahl);
			teil.bedarfPeriode = [this.bedarfPeriode[0], this.bedarfPeriode[1], this.bedarfPeriode[2], this.bedarfPeriode[3]];
			return teil;
		}
	}

}
