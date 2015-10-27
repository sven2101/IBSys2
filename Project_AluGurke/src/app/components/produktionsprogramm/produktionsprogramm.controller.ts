/**
 * Created by sven_ on 27.10.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ProgrammService.ts" />

class ProduktionsprogrammController {

    programmService: ProgrammService;

    constructor( programmService: ProgrammService) {
        this.programmService = programmService;
    }
}


angular.module('ProduktionsprogrammModule').controller('ProduktionsprogrammController', ['ProgrammService',ProduktionsprogrammController]);
