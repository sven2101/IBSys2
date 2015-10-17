/**
 * Created by Max on 13.10.2015.
 */
class ArbeitsplatzKnoten{

    nachfolger:ArbeitsplatzKnoten;
    arbeitsplatz:Arbeitsplatz;

    constructor(nachfolger:ArbeitsplatzKnoten, arbeitsplatz:Arbeitsplatz) {
        this.nachfolger = nachfolger;
        this.arbeitsplatz = arbeitsplatz;
    }
}