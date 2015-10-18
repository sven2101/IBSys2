/// <reference path="Arbeitsplatz.ts" />
var ArbeitsplatzKnoten = (function () {
    function ArbeitsplatzKnoten(nachfolger, arbeitsplatz) {
        this.nachfolger = nachfolger;
        this.arbeitsplatz = arbeitsplatz;
    }
    return ArbeitsplatzKnoten;
})();
