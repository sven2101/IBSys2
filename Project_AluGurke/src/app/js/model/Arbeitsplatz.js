/// <reference path="Teil.ts" />
/// <reference path="WarteListe.ts" />
/// <reference path="Auftrag.ts" />
var Arbeitsplatz = (function () {
    function Arbeitsplatz(id, eTeil, fertigungszeit, ruestzeit, nachfolger) {
        if (nachfolger === void 0) { nachfolger = null; }
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.nachfolger = nachfolger;
        this.eTeil = eTeil;
    }
    Arbeitsplatz.prototype.tiefeKopie = function () {
        return new Arbeitsplatz(this.id, this.eTeil, this.fertigungszeit, this.ruestzeit);
    };
    return Arbeitsplatz;
})();
