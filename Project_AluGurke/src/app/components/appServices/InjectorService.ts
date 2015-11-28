/**
 * Created by Max on 31.10.2015.
 */
/// <reference path="../appServices/ArbeitsplatzService.ts" />
/// <reference path="../appServices/DispositionService.ts"/>
/// <reference path="../kapazitaetsplanung/kapazitaetsplanung.controller.ts" />
class InjectorService {

    arbeitsplatzService: ArbeitsplatzService;
    dispositionService: DispositionService;
    auftragService: AuftragService
    kapazitaetsplanungService: KapazitaetsplanungService;
    teileService: NewTeileService;
    baumService: NewBaumService;
    programmService: ProgrammService;
    bestellService: BestellService;
    settingsService: SettingsService;

    rootScope;
    constructor($rootScope, arbeitsplatzService, auftragService, dispositionService, teileService, baumService,programmService,bestellService,settingsService) {
        this.rootScope = $rootScope;
        this.arbeitsplatzService = arbeitsplatzService;
        this.auftragService = auftragService;
        this.dispositionService = dispositionService;
        this.teileService = teileService;
        this.baumService = baumService;
        this.programmService=programmService;
        this.bestellService=bestellService;
        this.settingsService=settingsService;
    }
}


angular.module('app').factory('InjectorService', ['$rootScope', "ArbeitsplatzService", "AuftragService", "DispositionService", "TeileService", "NewBaumService","ProgrammService","BestellService","SettingsService", ($rootScope, ArbeitsplatzService, AuftragService, DispositionService, TeileService, NewBaumService,ProgrammService,BestellService,SettingsService
) => new InjectorService($rootScope, ArbeitsplatzService, AuftragService, DispositionService, TeileService, NewBaumService,ProgrammService,BestellService,SettingsService)]);