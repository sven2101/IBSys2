/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class MainController {
    resource;
    location;
    name;
    isLoggedIn;

     constructor(resourceService: ResourceService,$rootScope,$location) {
        this.resource = resourceService.resource;
        this.location = $location;
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

    performLogout() {
        var vm = this;
        this.resource.logout('', function(result, headers) {
            if(result.erg == '200') {
                vm.checkSession();
            }else if(result.erg == '502'){
                alert("No Database Connection!");
            }
        });
    }


}
angular.module('MainModule').controller('MainController', ['ResourceService','$rootScope','$location',MainController]);
