/**
 * Created by Max on 17.10.2015.
 */
class Auftrag{
    eTeil:Teil;
    anzahl:number;
    periode:number;


    constructor(eTeil:Teil, anzahl:number, periode:number) {
        this.eTeil = eTeil;
        this.anzahl = anzahl;
        this.periode = periode;
    }
}