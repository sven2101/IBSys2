/**
 * Created by sven_ on 27.10.2015.
 */
var Produktionsprogramm = (function () {
    function Produktionsprogramm() {
        this.vertriebsWuensche = [
            { kinder: 0, damen: 0, herren: 0 },
            { kinder: 0, damen: 0, herren: 0 },
            { kinder: 0, damen: 0, herren: 0 },
            { kinder: 0, damen: 0, herren: 0 }];
    }
    Produktionsprogramm.prototype.getVertriebsWuensche = function () {
        return this.vertriebsWuensche;
    };
    return Produktionsprogramm;
})();
