/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../typeDefinitions/xml2json.d.ts" />
var FileController = (function () {
    function FileController($scope, service, NewTeileService) {
        var _this = this;
        this.anzahl = 0;
        this.id = 24;
        this.teileService = NewTeileService;
        this.$scope = $scope;
        this.baum = service.herrenBaum;
        this.kaufteile = NewTeileService.alleKaufteile;
        this.$scope.$on('teileService.kaufTeile.updated', function (event) { return _this.setTeileArray(); });
    }
    FileController.prototype.setTeileArray = function () {
        this.$scope.$apply();
    };
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
        this.$scope.$emit('fileController.neueDatei', this.dateiInhalt);
    };
    return FileController;
})();
angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', FileController]);
