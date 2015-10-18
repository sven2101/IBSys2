/// <reference path="NewErzeugnis.ts" />
/// <reference path="Arbeitsplatz.ts" />
class Auftrag{
    erzeugnis_id: number;
    anzahl:number;
    periode:number;
    arbeitsplatz_id:number;

    constructor(erzeugnis_id:number, anzahl:number, periode:number,arbeitsplatz_id:number=0) {
        this.erzeugnis_id = erzeugnis_id;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz_id=arbeitsplatz_id;
    }
}