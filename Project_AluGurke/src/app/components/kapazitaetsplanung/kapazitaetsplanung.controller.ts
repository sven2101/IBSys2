/**
 * Created by Max on 13.08.2015.
 */

class KapazitaetsplanungController{

    service:TeileService;
    liste:Array<Teil>;
    constructor(service){
        this.service=service;
    }
    arbeitsplaetzeSetzten(){
        this.liste=this.service.getListe();
    }

}

angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",['TeileService',KapazitaetsplanungController]);