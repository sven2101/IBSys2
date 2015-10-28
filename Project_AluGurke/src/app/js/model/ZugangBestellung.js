var ZugangBestellung = (function () {
    function ZugangBestellung(id, eil, teil_id, menge, bestellPeriode, zeit, materialKosten, bestellKosten, gesamtKosten, stückKosten) {
        this.id = id;
        this.eil = eil;
        this.teil_id = teil_id;
        this.menge = menge;
        this.bestellPeriode = bestellPeriode;
        this.zeit = zeit;
        this.materialKosten = materialKosten;
        this.bestellKosten = bestellKosten;
        this.gesamtKosten = gesamtKosten;
        this.stückKosten = stückKosten;
    }
    return ZugangBestellung;
})();
