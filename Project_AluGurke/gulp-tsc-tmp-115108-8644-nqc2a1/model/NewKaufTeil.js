var NewKaufTeil = (function () {
    function NewKaufTeil(id, bezeichnung, preis, lagerMenge, mehrfachVerwendung, discontMenge, bestellKosten, wiederBeschaffungsZeit, wbzAbweichung) {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.lagerMenge = lagerMenge;
        this.mfw = mehrfachVerwendung;
        this.discontMenge = discontMenge;
        this.bestellKosten = bestellKosten;
        this.wbz = wiederBeschaffungsZeit;
        this.wbzAbw = wbzAbweichung;
        this.teileWert = preis;
        this.teileWertNeu = preis;
    }
    return NewKaufTeil;
})();
