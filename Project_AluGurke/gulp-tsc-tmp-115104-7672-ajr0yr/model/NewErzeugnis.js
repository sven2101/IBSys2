var NewErzeugnis = (function () {
    function NewErzeugnis(id, bezeichnung, teileWert, lagerMenge, mehrfachVerwendung) {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.teileWert = teileWert;
        this.lagerMenge = lagerMenge;
        this.mehrfachVerwendung = mehrfachVerwendung;
    }
    return NewErzeugnis;
})();
