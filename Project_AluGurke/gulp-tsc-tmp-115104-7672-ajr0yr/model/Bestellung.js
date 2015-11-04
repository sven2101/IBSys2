var Bestellung = (function () {
    function Bestellung(id, eil, teil_id, menge, periode) {
        this.id = id;
        this.eil = eil;
        this.teil_id = teil_id;
        this.menge = menge;
        this.periode = periode;
    }
    return Bestellung;
})();
