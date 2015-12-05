class Bestellung {
	id: number;
	eil: boolean;
	teil_id: number;
	menge: number;
	periode: number;
	
	gesamtKosten:number;
	materialKosten:number;
	bestellKosten:number;
	stueckKosten:number;
	
	constructor(id:number,eil:boolean,teil_id:number,menge:number, periode:number, 
				gesamtKosten:number,materialKosten:number,bestellKosten:number,stueckKosten:number){
		this.id = id;
		this.eil = eil;
		this.teil_id = teil_id;
		this.menge = menge;
		this.periode = periode;
		
		this.gesamtKosten =  gesamtKosten;
		this.materialKosten = materialKosten;
		this.bestellKosten = bestellKosten;
		this.stueckKosten = stueckKosten;
	}
}