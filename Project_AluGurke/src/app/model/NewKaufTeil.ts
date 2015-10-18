class NewKaufTeil {
	id: number;
	bezeichnung: string;
	teileWert: number;
	lagerMenge: number;
	mehrfachVerwendung: boolean;

	discontMenge: number;
	bestellKosten: number;
	wiederBeschaffungsZeit: number;
	wbzAbweichung: number;

	constructor(id: number, bezeichnung: string, teileWert: number, lagerMenge: number, mehrfachVerwendung: boolean,
		discontMenge: number, bestellKosten: number, wiederBeschaffungsZeit: number, wbzAbweichung: number) {
		this.id = id;
		this.bezeichnung = bezeichnung;
		this.teileWert = teileWert;
		this.lagerMenge = lagerMenge;
		this.mehrfachVerwendung = mehrfachVerwendung;
		
		this.discontMenge = discontMenge;
		this.bestellKosten = bestellKosten;
		this.wiederBeschaffungsZeit = wiederBeschaffungsZeit;
		this.wbzAbweichung = wbzAbweichung;
	}


}