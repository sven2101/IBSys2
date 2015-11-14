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
    NewTeilKnoten.prototype.hatBestimmtesBauteil = function (bauteilId) {
        if (!this.hatBauteile()) {
            return false;
        }
        for (var i = 0; i < this.bauteile.length; i++) {
            if (this.bauteile[i].teil_id === bauteilId) {
                return true;
            }
        }
        return false;
    };
    return NewTeilKnoten;
})();
