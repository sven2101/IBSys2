/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
var FileController = (function () {
    function FileController($scope, service, NewTeileService) {
        this.anzahl = 0;
        this.id = 24;
        this.$scope = $scope;
        this.baum = service.herrenBaum;
        this.kaufteile = NewTeileService.alleKaufteile;
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
    FileController.prototype.change = function (json) {
        var vm = this;
        this.$scope.$apply(function () {
            vm.dateiInhalt = json;
        });
        this.$scope.$emit('neueDatei', this.dateiInhalt);
    };
    return FileController;
})();
angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', FileController]);
