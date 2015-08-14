/**
 * Created by Max on 13.08.2015.
 */
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/2.2angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var TeileService = (function () {
    function TeileService() {
        this.liste = new Array();
        this.p1 = new Teil("Nagel", 6, 1, []);
        this.p2 = new Teil("Mutter", 5, 1, []);
        this.p3 = new Teil("Schraube", 4, 7, []);
        this.p4 = new Teil("Lenker", 3, 1, [this.p2, this.p3]);
        this.p5 = new Teil("Rahmen", 2, 3, [this.p1]);
        this.p6 = new Teil("Fahrrad", 1, 7, [this.p5, this.p4]);
        this.teileberechnen(this.p6, 1, this.liste);
    }
    TeileService.prototype.teileberechnen = function (teil, anzahl, liste) {
        var _this = this;
        if (teil.bauteile.length === 0) {
            var nteil = this.tiefeCopy(teil);
            nteil.anzahl = anzahl;
            liste = this.add(nteil, liste);
        }
        else {
            teil.bauteile.forEach(function (pos) { _this.teileberechnen(pos, teil.anzahl * anzahl, liste); });
        }
    };
    TeileService.prototype.aendern = function ($event, inputP1) {
        if ($event === null || $event.which === 13) {
            this.liste = [];
            this.teileberechnen(this.p6, Number(inputP1), this.liste);
        }
    };
    TeileService.prototype.tiefeCopy = function (teil) {
        return new Teil(teil.name, teil.id, teil.anzahl, []);
    };
    TeileService.prototype.add = function (teil, liste) {
        liste.forEach(function (pos) {
            if (pos.id === teil.id) {
                pos.anzahl += teil.id;
                return liste;
            }
        });
        liste.push(teil);
        return liste;
    };
    TeileService = __decorate([
        angular2_1.Component({
            selector: 'TeileService'
        }),
        angular2_1.View({
            template: "\n            <h1>{{liste.length}}</h1>\n            <input #inputp1 placeholder=\"Anzahl Fahrrad 1\" (keyup)=\"aendern($event,inputp1.value)\">\n            <button (click)=\"aendern(null,inputp1.value)\">OK</button>\n                <table class=\"table table-striped table-hover \">\n                    <tr>\n                        <th>Name</th>\n                        <th>Id</th>\n                        <th>Anzahl</th>\n                        <th>Bauteile</th>\n                    </tr>\n                    <tbody>\n                        <tr *for=\"#teil of liste\">\n                            <td>{{teil.name}}</td>\n                            <td>{{teil.id}}</td>\n                            <td>{{teil.anzahl}}</td>\n                            <td>{{teil.bauteile.length}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n    ", directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [])
    ], TeileService);
    return TeileService;
})();
angular2_1.bootstrap(TeileService);
var Teil = (function () {
    function Teil(nname, nid, nanzahl, nbauteile) {
        this.name = nname;
        this.id = nid;
        this.anzahl = nanzahl;
        if (nbauteile != null) {
            this.bauteile = nbauteile;
        }
        else {
            this.bauteile = [];
        }
    }
    return Teil;
})();
