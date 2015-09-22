/**
 * Created by Max on 07.05.2015.
 */
angular.module("AngularApp.profile", []).controller("ProfileController", ProfileController);

// Note that the controller name is NavigationController. If we give something else, Angular wont be able to do binding.
function ProfileController() {
    this.title="Profile";
    this.liste = ["test1", "tes2", "test3","test4"];
}