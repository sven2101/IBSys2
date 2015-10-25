class Bestellung {
	id: number;
	eil: boolean;
	teil_id: number;
	menge: number;
	periode: number;
	
	constructor(id:number,eil:boolean,teil_id:number,menge:number, periode:number){
		this.id = id;
		this.eil = eil;
		this.teil_id = teil_id;
		this.menge = menge;
		this.periode = periode;
	}
}