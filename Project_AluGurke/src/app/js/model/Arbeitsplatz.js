/// <reference path="Teil.ts" />
/// <reference path="WarteListe.ts" />
/// <reference path="Auftrag.ts" />
var Arbeitsplatz = (function () {
    function Arbeitsplatz(id, eTeil, fertigungszeit, ruestzeit) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.eTeil = eTeil;
        this.name = id + '_' + eTeil;
    }
    Arbeitsplatz.prototype.tiefeKopie = function () {
        return new Arbeitsplatz(this.id, this.eTeil, this.fertigungszeit, this.ruestzeit);
    };
    return Arbeitsplatz;
})();
