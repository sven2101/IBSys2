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
    })
  }]);