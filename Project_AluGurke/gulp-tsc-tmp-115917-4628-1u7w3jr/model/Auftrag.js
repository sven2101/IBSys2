/// <reference path="Teil.ts" />
var Auftrag = (function () {
    function Auftrag(eTeil, anzahl, periode) {
        this.eTeil = eTeil;
        this.anzahl = anzahl;
        this.periode = periode;
    }
    return Auftrag;
})();
