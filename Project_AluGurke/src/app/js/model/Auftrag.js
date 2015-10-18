/**
 * Created by Max on 17.10.2015.
 */
var Auftrag = (function () {
    function Auftrag(eTeil, anzahl, periode, arbeitsplatz) {
        if (arbeitsplatz === void 0) { arbeitsplatz = null; }
        this.eTeil = eTeil;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz = arbeitsplatz;
    }
    return Auftrag;
})();
