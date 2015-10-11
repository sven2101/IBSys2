var Teil = (function () {
    function Teil(nname, nid, nwert, nlieferzeitNormal, nlieferAbweichung, nbauteile, nrabattmenge, nbestellkosten, nlagerstand, nanzahl) {
        if (nanzahl === void 0) { nanzahl = 1; }
        this.name = nname;
        this.id = nid;
        this.anzahl = nanzahl;
        this.wert = nwert;
        this.lieferzeitNormal = nlieferzeitNormal;
        this.lieferzeitEil = 0;
        this.lagerstand = nlagerstand;
        this.inWarteschlange = 0;
        this.rabattmenge = nrabattmenge;
        this.bestellkosten = nbestellkosten;
        this.lieferAbweichung = nlieferAbweichung;
        this.bedarfPeriode = [0, 0, 0, 0];
        this.reichweite = 4;
        this.bestellmenge = 0;
        if (nbauteile != null) {
            this.bauteile = nbauteile;
        }
        else {
            this.bauteile = [];
        }
    }
    //erstellt eine tiefe Kopie eines Bauteils, einschlie�lich aller Unterbauteile
    Teil.prototype.getCopy = function () {
        if (this.bauteile.length === 0) {
            var teil = new Teil(this.name, this.id, this.wert, this.lieferzeitNormal, this.lieferAbweichung, [], this.rabattmenge, this.bestellkosten, this.lagerstand, this.anzahl);
            teil.bedarfPeriode = [this.bedarfPeriode[0], this.bedarfPeriode[1], this.bedarfPeriode[2], this.bedarfPeriode[3]];
            return teil;
        }
        else {
            var liste = new Array();
            for (var i = 0; i < this.bauteile.length; i++) {
                liste.push(this.bauteile[i]);
            }
            var teil = new Teil(this.name, this.id, this.wert, this.lieferzeitNormal, this.lieferAbweichung, liste, this.rabattmenge, this.bestellkosten, this.lagerstand, this.anzahl);
            teil.bedarfPeriode = [this.bedarfPeriode[0], this.bedarfPeriode[1], this.bedarfPeriode[2], this.bedarfPeriode[3]];
            return teil;
        }
    };
    return Teil;
})();
