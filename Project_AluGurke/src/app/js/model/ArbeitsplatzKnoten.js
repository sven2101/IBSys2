/// <reference path="Arbeitsplatz.ts" />
var ArbeitsplatzKnoten = (function () {
    function ArbeitsplatzKnoten(arbeitsplatz, nachfolger) {
        if (nachfolger === void 0) { nachfolger = null; }
        this.arbeitsplatz = arbeitsplatz;
        this.nachfolger = nachfolger;
    }
    return ArbeitsplatzKnoten;
})();
