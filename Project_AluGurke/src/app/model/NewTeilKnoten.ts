class NewTeilKnoten {
	teil_id: number;
	anzahl: number;
	bauteile: Array<NewTeilKnoten>;
	
	constructor(teile_id: number,anzahl: number, bauteile:Array<NewTeilKnoten>) {
		this.teil_id = teile_id;
		this.anzahl = anzahl;
		this.bauteile = bauteile;
	}
	
	hatBauteile() {
		if (this.bauteile !== null) {
			return true;
		}
		return false;
	}
}