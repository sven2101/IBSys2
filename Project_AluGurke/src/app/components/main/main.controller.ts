/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class MainController {
    resource;
    derTest : String="yxcvbnmrfjk";

     constructor(resourceService: ResourceService) {
        this.resource = resourceService.resource;
        this.derTest = "halllo";
    }

}
angular.module('MainModule').controller('MainController', ['ResourceService',MainController]);
