/// <reference path="Teil.ts" />
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
        this.arbeitsplatzFremdeAuftraege = new Array();
    }
    Arbeitsplatz.prototype.tiefeKopie = function () {
        return new Arbeitsplatz(this.id, this.erzeugnis_id, this.fertigungszeit, this.ruestzeit);
    };
    Arbeitsplatz.prototype.getAnzahl = function () {
        var anzahl = 0;
        for (var i = 0; i < this.auftraege.length; i++) {
            anzahl += this.auftraege[i].anzahl;
        }
        for (var i = 0; i < this.arbeitsplatzFremdeAuftraege.length; i++) {
            anzahl += this.arbeitsplatzFremdeAuftraege[i].anzahl;
        }
        if (this.auftragAufArbeitsplatz != null) {
            anzahl += this.auftragAufArbeitsplatz.anzahl;
        }
        return anzahl;
    };
    Arbeitsplatz.prototype.ultraTiefeKopie = function () {
        var x = new Arbeitsplatz(this.id, this.erzeugnis_id, 0, 0);
        x.arbeitszeit = this.arbeitszeit;
        x.arbeitsplatzFremdeAuftraege = this.arbeitsplatzFremdeAuftraege;
        x.auftraege = this.auftraege;
        return x;
    };
    return Arbeitsplatz;
})();
