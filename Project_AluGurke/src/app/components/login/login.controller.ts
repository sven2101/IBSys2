/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class LoginController {
    resource;
    location;
    user : String;
    password : String;

    constructor(resourceService: ResourceService,$location) {
        this.location = $location;
        this.resource = resourceService.resource;
    }

    checkLogin() {
        var vm = this;
        this.resource.login({ benutzername: this.user,passwort:this.password}, function(result, headers) {
            if(result.erg == '202') {
                vm.location.path("/home");
            }else if(result.erg == '400') {
                alert("Bad Request!");
            }else if(result.erg == '502'){
                alert("No Database Connection!");
            }
        });
    }

}
angular.module('LoginModule').controller('LoginController', ['ResourceService','$location',LoginController]);
