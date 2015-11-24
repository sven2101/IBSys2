/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class MainController {
    resource;
    name;
    isLoggedIn;

     constructor(resourceService: ResourceService,$rootScope) {
        this.resource = resourceService.resource;
        this.isLoggedIn = false;
        this.checkSession();
         var vm = this;
        $rootScope.$on('refreshAfterLogin', function(event) { vm.checkSession(); });
    }
    checkSession() {
        var vm = this;
        this.resource.session('', function(result, headers) {
            if(result.session.name) {
                vm.name = result.session.name;
                vm.isLoggedIn = true;
            }else {
                vm.name = 'Gast';
                vm.isLoggedIn = false;
            }
        });
    }


}
angular.module('MainModule').controller('MainController', ['ResourceService','$rootScope',MainController]);
