/**
 * Created by Max on 18.10.2015.
 */
var nArbeitsplatz = (function () {
    function nArbeitsplatz(id, eTeil, fertigungszeit, ruestzeit, nachfolger) {
        if (nachfolger === void 0) { nachfolger = null; }
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.nachfolger = nachfolger;
        this.eTeil = eTeil;
    }
    nArbeitsplatz.prototype.tiefeKopie = function () {
        return new nArbeitsplatz(this.id, this.eTeil, this.fertigungszeit, this.ruestzeit);
    };
    return nArbeitsplatz;
})();
