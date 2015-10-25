/// <reference path="NewErzeugnis.ts" />
/// <reference path="Arbeitsplatz.ts" />
var Auftrag = (function () {
    function Auftrag(erzeugnis_id, anzahl, periode, arbeitsplatz_id) {
        if (arbeitsplatz_id === void 0) { arbeitsplatz_id = 0; }
        this.erzeugnis_id = erzeugnis_id;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz_id = arbeitsplatz_id;
    }
    return Auftrag;
})();
