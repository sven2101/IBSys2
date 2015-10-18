/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
var FileController = (function () {
    function FileController(service) {
        this.anzahl = 0;
        this.id = 24;
        this.baum = service.herrenBaum;
    }
    FileController.prototype.startTest = function () {
        this.anzahl = 0;
        this.testBaum(this.baum, this.id);
    };
    FileController.prototype.testBaum = function (baum, id) {
        if (baum.teil_id === id) {
            this.anzahl += baum.anzahl;
        }
        if (baum.hatBauteile()) {
            for (var i = 0; i < baum.bauteile.length; i++) {
                this.testBaum(baum.bauteile[i], id);
            }
        }
    };
    return FileController;
})();
angular.module('FileModule').controller('FileController', ['NewBaumService', FileController]);
