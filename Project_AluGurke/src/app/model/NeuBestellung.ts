class NeuBestellung {
	eil: boolean;
	teil_id: number;
	menge: number;
	timestamp: number;
	kosten: number;
	periode:number;

	constructor(eil: boolean, teil_id: number, menge: number, kosten:number,periode:number) {
		this.eil = eil;
		this.teil_id = teil_id;
		this.menge = menge;
		this.kosten = kosten;
		this.timestamp = new Date().getTime();
		this.periode = periode;
	}
}