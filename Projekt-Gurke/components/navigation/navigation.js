/**
 * Created by Max on 07.05.2015.
 */
angular.module("AngularApp.navigation", [])
    .controller("NavigationController", NavigationController);

// Note that the controller name is NavigationController. If we give something else, Angular wont be able to do binding.
function NavigationController() {
    this.title="Teammitglieder";
    this.options = ["Marius", "Sven", "Andreas","Max"];
}