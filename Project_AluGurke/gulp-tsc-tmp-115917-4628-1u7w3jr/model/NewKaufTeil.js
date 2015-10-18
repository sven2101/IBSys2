var NewKaufTeil = (function () {
    function NewKaufTeil(id, bezeichnung, teileWert, lagerMenge, mehrfachVerwendung, discontMenge, bestellKosten, wiederBeschaffungsZeit, wbzAbweichung) {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.teileWert = teileWert;
        this.lagerMenge = lagerMenge;
        this.mehrfachVerwendung = mehrfachVerwendung;
        this.discontMenge = discontMenge;
        this.bestellKosten = bestellKosten;
        this.wiederBeschaffungsZeit = wiederBeschaffungsZeit;
        this.wbzAbweichung = wbzAbweichung;
    }
    return NewKaufTeil;
})();
