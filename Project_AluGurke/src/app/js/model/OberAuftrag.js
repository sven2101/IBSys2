/**
 * Created by Max on 28.10.2015.
 */
var OberAuftrag = (function () {
    function OberAuftrag(anzahl, eTeil, periode) {
        this.auftraege = new Array();
        this.anzahl = anzahl;
        this.eTeil = eTeil;
        this.periode = periode;
        this.auftraege.push(new Auftrag(eTeil, anzahl, periode));
    }
    return OberAuftrag;
})();
