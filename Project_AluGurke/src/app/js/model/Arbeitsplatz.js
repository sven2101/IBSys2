/// <reference path="WarteListe.ts" />
/// <reference path="Auftrag.ts" />
var Arbeitsplatz = (function () {
    function Arbeitsplatz(id, eTeil, fertigungszeit, ruestzeit) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.erzeugnis_id = eTeil;
        this.name = id + '_' + eTeil;
        this.arbeitszeit = 0;
        this.auftraege = new Array();
    }
    Arbeitsplatz.prototype.tiefeKopie = function () {
        return new Arbeitsplatz(this.id, this.erzeugnis_id, this.fertigungszeit, this.ruestzeit);
    };
    return Arbeitsplatz;
})();
