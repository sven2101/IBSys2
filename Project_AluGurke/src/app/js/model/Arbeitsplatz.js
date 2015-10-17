/**
 * Created by Max on 13.10.2015.
 */
var Arbeitsplatz = (function () {
    function Arbeitsplatz(name, id, ruestzeit, fertigungszeit, outPut, input, Warteliste) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.outPut = outPut;
        this.input = input;
        this.warteliste = Warteliste;
    }
    return Arbeitsplatz;
})();
