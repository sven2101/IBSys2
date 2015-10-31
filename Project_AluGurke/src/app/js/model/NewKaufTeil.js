var NewKaufTeil = (function () {
    function NewKaufTeil(id, bezeichnung, preis, lagerMenge, mehrfachVerwendung, discontMenge, bestellKosten, wiederBeschaffungsZeit, wbzAbweichung) {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.lagerMenge = lagerMenge;
        this.mehrfachVerwendung = mehrfachVerwendung;
        this.discontMenge = discontMenge;
        this.bestellKosten = bestellKosten;
        this.wiederBeschaffungsZeit = wiederBeschaffungsZeit;
        this.wbzAbweichung = wbzAbweichung;
        this.teileWert = 0;
        this.teileWertNeu = 0;
    }
    return NewKaufTeil;
})();
