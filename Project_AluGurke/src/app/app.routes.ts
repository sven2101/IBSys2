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
    }).when('/bestellverwaltung/erweitert', {
          templateUrl: '/components/bestellverwaltung/erweitert.html',
          controller: 'ErweitertController as ec'
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

