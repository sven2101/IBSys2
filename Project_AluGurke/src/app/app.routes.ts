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
    }).when('/bestellverwaltung', {
          templateUrl: '/components/bestellverwaltung/bestellverwaltung.html',
          controller: 'BestellverwaltungController as bvc'
    }).when('/kapazitaetsplanung', {
          templateUrl: '/components/kapazitaetsplanung/kapazitaetsplanung.html',
          controller: 'KapazitaetsplanungController as kpc'

    }).when('/disposition', {
            templateUrl: '/components/disposition/disposition.html',
            controller: 'DispositionController as dc'
        }).when('/lager', {
            templateUrl: '/components/lager/lager.html',
            controller: 'LagerController as lc'
        })
  }]);

