/// <reference path="typeDefinitions/angular.d.ts" />

angular.module('app')

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '/components/home/home.html'
                }).when('/home', {
                    templateUrl: '/components/home/home.html'
                }).when('/file', {
                    templateUrl: '/components/file/file.html',
                    controller: 'FileController as fc'
                }).when('/bestellverwaltung/kaufteildisposition', {
                    templateUrl: '/components/bestellverwaltung/kaufteilDisposition.html',
                    controller: 'KaufteilDispositionController as ktdc'
                }).when('/bestellverwaltung/kaufteildisposition/:kaufteilid', {
                    templateUrl: '/components/bestellverwaltung/detail.html',
                    controller: 'DetailBestellVerwaltungController as dbvc'
                }).when('/bestellverwaltung/ueberblick', {
                    templateUrl: '/components/bestellueberblick/bestellueberblick.html',
                    controller: 'BestellUeberblickController as buc'
                }).when('/produktionsprogramm', {
                    templateUrl: '/components/produktionsprogramm/produktionsprogramm.html',
                    controller: 'ProduktionsprogrammController as pc'
                }).when('/kapazitaetsplanung', {
                    templateUrl: '/components/kapazitaetsplanung/kapazitaetsplanung.html',
                    controller: 'KapazitaetsplanungController as kpc'
                }).when('/disposition', {
                    templateUrl: '/components/disposition/disposition.html',
                    controller: 'DispositionController as dc',        
                }).when('/lager', {
                    templateUrl: '/components/lager/lager.html',
                    controller: 'LagerController as lc'
                }).when('/fertigungsAuftraege', {
                    templateUrl: '/components/FertigungsAuftraege/FertigungsAuftraege.html',
                    controller: 'FertigungsAuftraegeController as fac'
                }).when('/settings', {
                    templateUrl: '/components/settings/settings.html',
                    controller: 'SettingsController as sc'
                }).when('/login', {
                    templateUrl: '/components/login/login.html',
                    controller: 'LoginController as lgc'
                }).when('/register', {
                    templateUrl: '/components/register/register.html',
                    controller: 'RegisterController as rgc'
                })

        }]);

