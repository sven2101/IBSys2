/// <reference path="Arbeitsplatz.ts" />
class ArbeitsplatzKnoten{

    nachfolger:ArbeitsplatzKnoten;

    arbeitsplatz:Arbeitsplatz;

    constructor(arbeitsplatz:Arbeitsplatz,nachfolger:ArbeitsplatzKnoten=null) {
        this.arbeitsplatz = arbeitsplatz;
        this.nachfolger = nachfolger;


    }
}