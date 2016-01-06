/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../model/DispositionModel.ts" />
/// <reference path="../appServices/NewTeileService.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/NewBaumService.ts" />
/// <reference path="../appServices/AuftragService.ts" />
/// <reference path="../appServices/DispositionService.ts" />
/// <reference path="../appServices/KapazitaetsplanungService.ts" />
var DispositionController = (function () {
    function DispositionController(auftragsService, newTeileService, dispositionService, newBaumService, kapazitaetsplanungService, fertigungsAuftraegeService) {
        this.showTab = {
            P1: true,
            P2: false,
            P3: false
        };
        this.dispositionService = dispositionService;
        this.kapazitaetsplanungService = kapazitaetsplanungService;
        this.models = this.dispositionService.models;
        this.modelsP1 = this.dispositionService.dispositionP1;
        this.modelsP2 = this.dispositionService.dispositionP2;
        this.modelsP3 = this.dispositionService.dispositionP3;
        this.auftragsService = auftragsService;
        this.fertigungsAuftraegeService = fertigungsAuftraegeService;
        this.aendern();
    }
    DispositionController.prototype.aendern = function () {
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();
        this.fertigungsAuftraegeService.onDispoAendern();
    };
    DispositionController.prototype.tabOnClick = function (contentToShow) {
        for (var property in this.showTab) {
            if (this.showTab.hasOwnProperty(property)) {
                this.showTab[property] = false;
            }
        }
        this.showTab[contentToShow] = true;
    };
    return DispositionController;
})();
angular.module("DispositionModule").controller("DispositionController", ["AuftragService", "NewTeileService", "DispositionService", "NewBaumService", "KapazitaetsplanungService", "FertigungsAuftraegeService", DispositionController]);
