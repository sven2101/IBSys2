class NeuBestellung {
	eil: boolean;
	teil_id: number;
	menge: number;
	split: Array<number>;
	
	constructor(eil:boolean,teil_id:number,menge:number){
		this.eil = eil;
		this.teil_id = teil_id;
		this.menge = menge;
		this.split = [];
	}
}