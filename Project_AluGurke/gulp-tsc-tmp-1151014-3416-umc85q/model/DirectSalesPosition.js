/**
 * Created by sven_ on 28.10.2015.
 */
var DirectSalesPosition = (function () {
    function DirectSalesPosition(id, periode, menge, konventionalstrafe) {
        this.id = id;
        this.menge = menge;
        this.preis = periode;
        this.konventionalstrafe = konventionalstrafe;
    }
    return DirectSalesPosition;
})();
