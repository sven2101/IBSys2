class NewKaufTeil {
	id: number;
	bezeichnung: string;
	preis: number;
	teileWert: number;
	teileWertNeu: number;
	lagerMenge: number;
	mfw: boolean;

	discontMenge: number;
	bestellKosten: number;
	wbz: number;
	wbzAbw: number;

	constructor(id: number, bezeichnung: string, preis: number, lagerMenge: number, mehrfachVerwendung: boolean,
		discontMenge: number, bestellKosten: number, wiederBeschaffungsZeit: number, wbzAbweichung: number) {
		this.id = id;
		this.bezeichnung = bezeichnung;
		this.preis = preis;
		this.lagerMenge = lagerMenge;
		this.mfw = mehrfachVerwendung;

		this.discontMenge = discontMenge;
		this.bestellKosten = bestellKosten;
		this.wbz = wiederBeschaffungsZeit;
		this.wbzAbw = wbzAbweichung;

		this.teileWert = 0;
		this.teileWertNeu = 0;
	}
}