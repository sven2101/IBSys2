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
    Fertigungsreihe.prototype.auftraegeVerteilen = function (auftraege) {
        auftraege.forEach(function (x) { return function (x) {
            if (x.arbeitsplatz_id != 0)
                l;
        }; });
        {
            this.map[x.arbeitsplatz_id].arbeitsplatz.auftraege.push(x);
        }
    };
    return Fertigungsreihe;
})();
{
    this.ersterArbeitsplatz.arbeitsplatz.auftraege.push(x);
}
