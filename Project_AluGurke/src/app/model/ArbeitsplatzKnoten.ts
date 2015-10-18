/// <reference path="Arbeitsplatz.ts" />
class ArbeitsplatzKnoten{

    nachfolger:ArbeitsplatzKnoten;
    arbeitsplatz:Arbeitsplatz;

    constructor(nachfolger:ArbeitsplatzKnoten, arbeitsplatz:Arbeitsplatz) {
        this.nachfolger = nachfolger;
        this.arbeitsplatz = arbeitsplatz;
    }
}