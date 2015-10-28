class ZugangBestellung {
	id: number;
	eil: boolean;
	teil_id: number;
	menge: number;
	bestellPeriode: number;
	zeit: number;
	materialKosten: number;
	bestellKosten: number;
	gesamtKosten: number;
	stückKosten: number;


	constructor(id: number, eil: boolean, teil_id: number, menge: number, bestellPeriode: number, zeit: number, materialKosten: number, bestellKosten: number, gesamtKosten: number, stückKosten: number) {
		this.id = id;
		this.eil = eil;
		this.teil_id = teil_id;
		this.menge = menge;
		this.bestellPeriode = bestellPeriode;
		this.zeit = zeit;
		this.materialKosten = materialKosten;
		this.bestellKosten = bestellKosten;
		this.gesamtKosten = gesamtKosten;
		this.stückKosten = stückKosten;
	}
}