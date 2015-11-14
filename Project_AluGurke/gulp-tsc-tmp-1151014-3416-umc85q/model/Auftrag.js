/// <reference path="NewErzeugnis.ts" />
/// <reference path="Arbeitsplatz.ts" />
var Auftrag = (function () {
    function Auftrag(erzeugnis_id, anzahl, periode, arbeitsplatz_id) {
        if (arbeitsplatz_id === void 0) { arbeitsplatz_id = 0; }
        this.erzeugnis_id = erzeugnis_id;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz_id = arbeitsplatz_id;
        this.aufArbeitsplatz = false;
        this.prioritaet = 3;
    }
    Auftrag.prototype.setPriortaet = function (prio) {
        if (prio === "normal") {
            this.prioritaet = 3;
            return;
        }
        if (prio === "hoch") {
            this.prioritaet = 2;
            return;
        }
        if (prio === "kritisch") {
            this.prioritaet = 1;
            return;
        }
    };
    return Auftrag;
})();
