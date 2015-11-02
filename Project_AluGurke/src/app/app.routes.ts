/// <reference path="typeDefinitions/angular.d.ts" />

angular.module('app')

.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/components/home/home.html'
    }).
      when('/file', {
      templateUrl: '/components/file/file.html',
      controller: 'FileController as fc'
    }).when('/bestellverwaltung/kaufteildisposition', {
          templateUrl: '/components/bestellverwaltung/kaufteilDisposition.html',
          controller: 'KaufteilDispositionController as ktdc'
    }).when('/produktionsprogramm', {
        templateUrl: '/components/produktionsprogramm/produktionsprogramm.html',
        controller: 'ProduktionsprogrammController as pc'
    }).when('/bestellverwaltung/erweitert', {
          templateUrl: '/components/bestellverwaltung/erweitert.html',
          controller: 'ErweitertController as ec'
    }).when('/kapazitaetsplanung', {
          templateUrl: '/components/kapazitaetsplanung/kapazitaetsplanung.html',
          controller: 'KapazitaetsplanungController as kpc'
    }).when('/dispositionP1', {
            templateUrl: '/components/disposition/dispositionP1.html',
            controller: 'DispositionController as dc',
    }).when('/dispositionP2', {
            templateUrl: '/components/disposition/dispositionP2.html',
            controller: 'DispositionController as dc',
    }).when('/dispositionP3', {
            templateUrl: '/components/disposition/dispositionP3.html',
            controller: 'DispositionController as dc',
    }).when('/lager', {
        templateUrl: '/components/lager/lager.html',
        controller: 'LagerController as lc'
    }).when('/fertigungsAuftraege', {
            templateUrl: '/components/FertigungsAuftraege/FertigungsAuftraege.html',
            controller: 'FertigungsAuftraegeController as fac'
        })
  }]);

