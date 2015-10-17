/**
 * Created by Max on 13.08.2015.
 */
var KapazitaetsplanungController = (function () {
    function KapazitaetsplanungController(service) {
        this.service = service;
    }
    KapazitaetsplanungController.prototype.arbeitsplaetzeSetzten = function () {
        this.liste = this.service.getListe();
    };
    return KapazitaetsplanungController;
})();
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController", ['TeileService', KapazitaetsplanungController]);
