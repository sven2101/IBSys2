/**
 * Created by Max on 25.10.2015.
 */
var Fertigungsreihe = (function () {
    function Fertigungsreihe(arbeitsplatzKnoten) {
        this.map = {};
        this.ersterArbeitsplatz = arbeitsplatzKnoten;
        this.arbeitsplaetzeSetzten();
    }
    Fertigungsreihe.prototype.arbeitsplaetzeSetzten = function () {
        var temp = this.ersterArbeitsplatz;
        this.map[temp.arbeitsplatz.id] = temp;
        while (temp.nachfolger != null) {
            this.map[temp.nachfolger.arbeitsplatz.id] = temp.nachfolger;
            temp = temp.nachfolger;
        }
    };
    Fertigungsreihe.prototype.auftraegSetzten = function (x) {
        var temp = null;
        if (x.arbeitsplatz_id != 0) {
            temp = this.map[x.arbeitsplatz_id];
            temp.arbeitsplatz.auftraege.push(x);
            if (x.aufArbeitsplatz === true) {
                temp.arbeitsplatz.auftragAufArbeitsplatz = x;
            }
            temp.arbeitsplatz.arbeitszeit = temp.arbeitsplatz.fertigungszeit * temp.arbeitsplatz.getAnzahl() + (temp.arbeitsplatz.auftraege.length + temp.arbeitsplatz.arbeitsplatzFremdeAuftraege.length) * temp.arbeitsplatz.ruestzeit;
            temp.arbeitsplatz.arbeitszeit -= temp.arbeitsplatz.ruestzeit;
        }
        else {
            temp = this.ersterArbeitsplatz;
            temp.arbeitsplatz.auftraege.push(x);
            if (x.aufArbeitsplatz === true) {
                temp.arbeitsplatz.auftragAufArbeitsplatz = x;
            }
            temp.arbeitsplatz.arbeitszeit = temp.arbeitsplatz.fertigungszeit * temp.arbeitsplatz.getAnzahl() + (temp.arbeitsplatz.auftraege.length + temp.arbeitsplatz.arbeitsplatzFremdeAuftraege.length) * temp.arbeitsplatz.ruestzeit;
            temp.arbeitsplatz.arbeitszeit -= temp.arbeitsplatz.ruestzeit;
        }
        while (temp.nachfolger != null) {
            temp.nachfolger.arbeitsplatz.arbeitsplatzFremdeAuftraege = temp.arbeitsplatz.arbeitsplatzFremdeAuftraege.concat(temp.arbeitsplatz.auftraege);
            temp.nachfolger.arbeitsplatz.arbeitszeit = temp.nachfolger.arbeitsplatz.fertigungszeit * temp.nachfolger.arbeitsplatz.getAnzahl() + (temp.nachfolger.arbeitsplatz.auftraege.length + temp.nachfolger.arbeitsplatz.arbeitsplatzFremdeAuftraege.length) * temp.nachfolger.arbeitsplatz.ruestzeit;
            temp = temp.nachfolger;
        }
    };
    Fertigungsreihe.prototype.alleArbeitsplaetze = function () {
        var temp = this.ersterArbeitsplatz;
        var liste = new Array();
        liste.push(temp.arbeitsplatz);
        while (temp.nachfolger != null) {
            liste.push(temp.nachfolger.arbeitsplatz);
            temp = temp.nachfolger;
        }
        return liste;
    };
    return Fertigungsreihe;
})();
