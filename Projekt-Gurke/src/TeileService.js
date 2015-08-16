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
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    // Annotation section
    var TeileService = (function () {
        function TeileService() {
            /**
    
            this.p1=new Teil("Nagel",6,1,[]);
            this.p2=new Teil("Mutter",5,1,[]);
            this.p3=new Teil("Schraube",4,7,[]);
            this.p4=new Teil("Lenker",3,1,[this.p2,this.p3]);
            this.p5=new Teil("Rahmen",2,3,[this.p1]);
            this.p6=new Teil("Fahrrad",1,7,[this.p5,this.p4]);
            */
            this.liste = new Array();
            this.listeKaufteile = new Array();
            this.kaufteileSetzten();
            this.p1 = new Teil("p1", 1, 156.13, 1.0, 0, [], 0, 0);
            this.p1Setzten();
            this.teileberechnen(this.p1, 1, this.liste);
        }
        TeileService.prototype.teileberechnen = function (teil, anzahl, liste) {
            var _this = this;
            if (teil.bauteile.length === 0) {
                var nteil = this.tiefeCopy(teil, teil.anzahl * anzahl);
                liste = this.add(nteil, liste);
            }
            else {
                var nteil = this.tiefeCopy(teil, teil.anzahl * anzahl);
                liste.push(nteil);
                teil.bauteile.forEach(function (pos) { _this.teileberechnen(pos, teil.anzahl * anzahl, liste); });
            }
        };
        TeileService.prototype.aendern = function ($event, inputP1) {
            if ($event === null || $event.which === 13) {
                this.liste = [];
                this.p1.anzahl = inputP1;
                this.teileberechnen(this.p1, 1, this.liste);
            }
        };
        TeileService.prototype.p1Setzten = function () {
            var e26 = new Teil("e26", 26, 10.50, 1.0, 0, [this.getKT(44, 2), this.getKT(47, 1), this.getKT(48, 2)], 0, 0);
            this.p1.bauteile = [this.getKT(21, 1), this.getKT(24, 1), this.getKT(27, 1), e26];
        };
        TeileService.prototype.kaufteileSetzten = function () {
            this.listeKaufteile = [
                new Teil("Kette", 21, 5, 1.8, 0.4, [], 300, 50),
                new Teil("Kette", 22, 6.5, 1.7, 0.4, [], 300, 50),
                new Teil("Kette", 23, 6.5, 1.2, 0.2, [], 300, 50),
                new Teil("Mutter 3/8�", 24, 0.06, 3.2, 0.3, [], 6100, 100),
                new Teil("Scheibe 3/8�", 25, 0.06, 0.9, 0.2, [], 3600, 50),
                new Teil("Schraube 3/8�", 27, 0.1, 0.9, 0.2, [], 1800, 75),
                new Teil("Rohr 3/4�", 28, 1.2, 1.7, 0.4, [], 4500, 50),
                new Teil("Farbe", 32, 0.75, 2.1, 0.5, [], 2700, 50),
                new Teil("Felge cpl.", 33, 22, 1.9, 0.5, [], 900, 75),
                new Teil("Speiche", 34, 0.1, 1.6, 0.3, [], 22000, 50),
                new Teil("Konus", 35, 1, 2.2, 0.4, [], 3600, 75),
                new Teil("Freilauf", 36, 8, 1.2, 0.1, [], 900, 100),
                new Teil("Gabel", 37, 1.5, 1.5, 0.3, [], 900, 50),
                new Teil("Freilauf", 38, 1.5, 1.7, 0.4, [], 300, 50),
                new Teil("Blech", 39, 1.5, 1.5, 0.3, [], 1800, 75),
                new Teil("Lenker", 40, 2.5, 1.7, 0.2, [], 900, 50),
                new Teil("Mutter 3/4�", 41, 0.06, 0.9, 0.2, [], 900, 50),
                new Teil("Griff", 42, 0.1, 1.2, 0.3, [], 1800, 50),
                new Teil("Sattel", 43, 5, 2.0, 0.5, [], 2700, 75),
                new Teil("Stange 1/2�", 44, 0.5, 1.0, 0.2, [], 900, 50),
                new Teil("Mutter 1/4�", 45, 0.06, 1.7, 0.3, [], 900, 50),
                new Teil("Schraube 1/4�", 46, 0.1, 0.9, 0.3, [], 900, 50),
                new Teil("Zahnkranz", 47, 3.5, 1.41, 0.1, [], 900, 50),
                new Teil("Pedal", 48, 1.5, 1.0, 0.2, [], 1800, 75),
                new Teil("Felge cpl.", 52, 22.0, 1.6, 0.4, [], 600, 50),
                new Teil("Speiche", 53, 0.1, 1.6, 0.2, [], 22000, 50),
                new Teil("Felge cpl.", 57, 22.0, 1.7, 0.3, [], 600, 50),
                new Teil("Speiche", 58, 0.1, 1.6, 0.5, [], 22000, 50),
                new Teil("Schwei�draht", 59, 0.15, 0.7, 0.2, [], 1800, 50),
            ];
        };
        TeileService.prototype.getKT = function (id, anzahl) {
            for (var i = 0; i < this.listeKaufteile.length; i++) {
                if (this.listeKaufteile[i].id === id) {
                    return this.tiefeCopy(this.listeKaufteile[i], anzahl);
                }
            }
            return null;
        };
        TeileService.prototype.tiefeCopy = function (teil, anzahl) {
            return new Teil(teil.name, teil.id, teil.wert, teil.lieferzeitNormal, teil.lieferAbweichung, [], teil.rabattmenge, teil.bestellkosten, anzahl);
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
                template: "\n            <h1>{{liste.length}}</h1>\n            <input #inputp1 placeholder=\"Anzahl Fahrrad 1\" (keyup)=\"aendern($event,inputp1.value)\">\n            <button (click)=\"aendern(null,inputp1.value)\">OK</button>\n                <table class=\"table table-striped table-hover \">\n                    <tr>\n                        <th>Name</th>\n                        <th>Id</th>\n                        <th>Anzahl</th>\n                        <th>Wert in Euro</th>\n                        <th>LZ-N</th>\n                        <th>LZ-E</th>\n                        <th>Rabattmenge</th>\n                        <th>Bestellmenge</th>\n                    </tr>\n                    <tbody>\n                        <tr *for=\"#teil of liste\">\n                            <td>{{teil.name}}</td>\n                            <td>{{teil.id}}</td>\n                            <td>{{teil.anzahl}}</td>\n                            <td>{{teil.wert}}</td>\n                            <td>{{teil.lieferzeitNormal}}</td>\n                            <td>{{teil.lieferzeitEil}}</td>\n                            <td>{{teil.rabattmenge}}</td>\n                            <td><input></td>\n                        </tr>\n                    </tbody>\n                </table>\n    ", directives: [angular2_1.For, angular2_1.If]
            })
        ], TeileService);
        return TeileService;
    })();
    angular2_1.bootstrap(TeileService);
    var Teil = (function () {
        function Teil(nname, nid, nwert, nlieferzeitNormal, nlieferAbweichung, nbauteile, nrabattmenge, nbestellkosten, nanzahl) {
            if (nanzahl === void 0) { nanzahl = 1; }
            this.name = nname;
            this.id = nid;
            this.anzahl = nanzahl;
            this.wert = nwert;
            this.lieferzeitNormal = nlieferzeitNormal;
            this.lieferzeitEil = 0;
            this.lagerstand = 0;
            this.inWarteschlange = 0;
            this.rabattmenge = nrabattmenge;
            this.bestellkosten = nbestellkosten;
            this.lieferAbweichung = nlieferAbweichung;
            if (nbauteile != null) {
                this.bauteile = nbauteile;
            }
            else {
                this.bauteile = [];
            }
        }
        return Teil;
    })();
});
