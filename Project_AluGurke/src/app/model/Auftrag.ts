/// <reference path="Teil.ts" />
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