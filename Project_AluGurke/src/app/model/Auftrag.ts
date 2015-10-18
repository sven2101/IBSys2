/**
 * Created by Max on 17.10.2015.
 */
class Auftrag{
    eTeil:Teil;
    anzahl:number;
    periode:number;
    arbeitsplatz:nArbeitsplatz;

    constructor(eTeil:Teil, anzahl:number, periode:number,arbeitsplatz:nArbeitsplatz=null) {
        this.eTeil = eTeil;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz=arbeitsplatz;
    }
}