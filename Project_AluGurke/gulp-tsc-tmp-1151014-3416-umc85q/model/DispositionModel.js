var DispositionModel = (function () {
    function DispositionModel(eTeil, x, y) {
        this.eTeil = eTeil;
        this.geplanterLagerstand = 50;
        this.split = "1";
        this.prioritaet = "normal";
        this.produktionsProgramm = x;
        this.anzahl = 0;
        this.periode = 1;
        this.auftraege = new Array();
        this.auftragInWarteschlange = new Array();
        this.directSale = y;
    }
    DispositionModel.prototype.getWarteschlange = function () {
        var x = 0;
        for (var i = 0; i < this.auftragInWarteschlange.length; i++) {
            x += this.auftragInWarteschlange[i].anzahl;
        }
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(x / 3);
        }
        return x;
    };
    DispositionModel.prototype.getMaterialAufMaschine = function () {
        if (this.auftragAufMaschine == null) {
            return 0;
        }
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(this.auftragAufMaschine.anzahl / 3);
        }
        return this.auftragAufMaschine.anzahl;
    };
    DispositionModel.prototype.getLagerMenge = function () {
        if (this.eTeil.mehrfachVerwendung) {
            return Math.round(this.eTeil.lagerMenge / 3);
        }
        return this.eTeil.lagerMenge;
    };
    DispositionModel.prototype.getProdProg = function () {
        if (this.oberModel == null) {
            return this.produktionsProgramm.menge + this.directSale.menge;
        }
        else {
            return this.oberModel.anzahl + this.oberModel.getWarteschlange();
        }
    };
    DispositionModel.prototype.getGeplanteLagermenge = function () {
        return this.geplanterLagerstand;
    };
    return DispositionModel;
})();
