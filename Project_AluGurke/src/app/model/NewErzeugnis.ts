class NewErzeugnis {
	id: number;
	bezeichnung: string;
	teileWert: number;
	lagerMenge: number;
	mehrfachVerwendung: boolean;

	constructor(id: number, bezeichnung: string, teileWert: number, lagerMenge: number, mehrfachVerwendung: boolean) {
		this.id = id;
		this.bezeichnung = bezeichnung;
		this.teileWert = teileWert;
		this.lagerMenge = lagerMenge;
		this.mehrfachVerwendung = mehrfachVerwendung;
	}
}
