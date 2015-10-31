var NeuBestellung = (function () {
    function NeuBestellung(eil, teil_id, menge) {
        this.eil = eil;
        this.teil_id = teil_id;
        this.menge = menge;
        this.timestamp = new Date().getTime();
    }
    return NeuBestellung;
})();
