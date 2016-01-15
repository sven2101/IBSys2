/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
    /// <reference path="../../typeDefinitions/sweetalert.d.ts"/>
class LoginController {
    resource;
    location;
    $scope;
    user : String;
    password : String;

    constructor(resourceService: ResourceService,$location,$scope) {
        this.$scope = $scope;
        this.location = $location;
        this.resource = resourceService.resource;
    }

    checkLogin() {
        var vm = this;
        this.resource.login({ benutzername: this.user,passwort:this.password}, function(result, headers) {
            if(result.erg == '202') {
                vm.location.path('/');
                vm.$scope.$emit('refreshAfterLogin');
            }else if(result.erg == '400') {
                sweetAlert("Fehler beim Login", "Username oder Passwort ungültig!", "error");               
            }else if(result.erg == '502'){
                alert("No Database Connection!");
            }
        });
    }





}
angular.module('LoginModule').controller('LoginController', ['ResourceService','$location','$scope',LoginController]);
