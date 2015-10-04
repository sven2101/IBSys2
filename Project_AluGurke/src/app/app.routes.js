angular.module('app')

.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/components/home/home.html'
    }).
      when('/file', {
      templateUrl: '/components/upload_file/upload_file.html',
      controller: 'ufCtrl as uf'
    })
  }]);