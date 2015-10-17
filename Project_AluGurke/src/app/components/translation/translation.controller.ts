/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/angular-translate.d.ts" />

angular.module('TranslationModule').controller('TranslationController', function ($scope, $translate) {

	$scope.changeLang = function (key) {
		$translate.use(key).then(function (key) {
			console.log("Sprache zu " + key + " gewechselt.");
		}, function (key) {
			console.log("Irgendwas lief schief.");
		});
	};
});
