/**
 * Created by sven_ on 27.10.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ProgrammService.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class ProduktionsprogrammController {

    programmService: ProgrammService;
    resource;
    constructor( programmService: ProgrammService,resourceService: ResourceService) {
        this.programmService = programmService;
        this.resource = resourceService.resource;
    }
}


angular.module('ProduktionsprogrammModule').controller('ProduktionsprogrammController', ['ProgrammService', 'ResourceService',ProduktionsprogrammController]);
