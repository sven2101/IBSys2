/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/ResourceService.ts" />
/// <reference path="../appServices/DispositionService.ts" />
/// <reference path="../appServices/FertigungsAuftraegeService.ts" />
class ProduktionsprogrammController {

    programmService: ProgrammService;
    periode:number;
    dispositionService:DispositionService;
    fertigungsAuftraegeService:FertigungsAuftraegeService;
    constructor(programmService: ProgrammService,kennzahlenService: KennzahlenService,dispositionService,fertigungsAuftraegeService) {
        this.programmService = programmService;
        this.periode = kennzahlenService.periode;
        this.dispositionService=dispositionService;
        this.fertigungsAuftraegeService=fertigungsAuftraegeService;
    }
    onkeydown(){     
        this.dispositionService.changeFlagTrue();
        this.fertigungsAuftraegeService.changeFlagTrue();
    }
}


angular.module('ProduktionsprogrammModule').controller('ProduktionsprogrammController', ['ProgrammService', 'KennzahlenService','DispositionService','FertigungsAuftraegeService', ProduktionsprogrammController]);
