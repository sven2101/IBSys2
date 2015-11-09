/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
var ProduktionsprogrammController = (function () {
    function ProduktionsprogrammController(programmService) {
        this.programmService = programmService;
    }
    return ProduktionsprogrammController;
})();
angular.module('ProduktionsprogrammModule').controller('ProduktionsprogrammController', ['ProgrammService', ProduktionsprogrammController]);
