var NewTeilKnoten = (function () {
    function NewTeilKnoten(teile_id, anzahl, bauteile) {
        this.teil_id = teile_id;
        this.anzahl = anzahl;
        this.bauteile = bauteile;
    }
    NewTeilKnoten.prototype.hatBauteile = function () {
        if (this.bauteile !== null) {
            return true;
        }
        return false;
    };
    return NewTeilKnoten;
})();
