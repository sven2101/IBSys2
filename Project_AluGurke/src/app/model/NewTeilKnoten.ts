class NewTeilKnoten {
	teil_id: number;
	anzahl: number;
	bauteile: Array<NewTeilKnoten>;

	constructor(teile_id: number, anzahl: number, bauteile: Array<NewTeilKnoten>) {
		this.teil_id = teile_id;
		this.anzahl = anzahl;
		this.bauteile = bauteile;
	}

	hatBauteile(): boolean {
		if (this.bauteile !== null) {
			return true;
		}
		return false;
	}

	hatBestimmtesBauteil(bauteilId: number): boolean {
		if (!this.hatBauteile()) {
			return false;
		}
		for (var i = 0; i < this.bauteile.length; i++) {
			if (this.bauteile[i].teil_id === bauteilId) {
				return true;
			}
		}
		return false;
	}
}