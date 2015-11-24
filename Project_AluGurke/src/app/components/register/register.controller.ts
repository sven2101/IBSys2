/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class RegisterController {
    resource;
    user : String;
    password : String;

    constructor( resourceService: ResourceService) {
        this.resource = resourceService.resource;
    }

    addUser() {
        this.resource.createUser({benutzername: this.user,passwort:this.password}, function(result, headers) {
            if(result.erg == '200') {
                alert('User created redirect to login..$location..');
            }else if(result.erg == '400') {
                alert("Passwort oder Benutzername zu kurz!");
            }else if(result.erg == '500') {
                alert("Internal Server Error!");
            }else if(result.erg == '502'){
                alert("No Database Connection!");
            }
        });
    }

}
angular.module('RegisterModule').controller('RegisterController', ['ResourceService',RegisterController]);