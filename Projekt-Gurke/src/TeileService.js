/**
 * Created by Max on 13.08.2015.
 */
/// <reference path="../typings/angular2/2.2angular2.d.ts" />
"use strict";
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
            this.gesamtListe = new Array();
            this.listeTeile = new Array();
            this.ergebnisListe = new Array();
            this.teileSetzen();
            this.teileberechnen(this.getTeil(1), 0, this.gesamtListe, 0);
            this.ergebnisListe = this.getKaufteile(this.gesamtListe);
            this.listeKaufteile = this.getKaufteile(this.gesamtListe);
        }
        TeileService.prototype.teileberechnen = function (teil, anzahl, liste, periode) {
            var _this = this;
            if (teil.bauteile.length === 0) {
                var nteil = this.tiefeCopy(teil, teil.anzahl * anzahl);
                nteil.bedarfPeriode[periode] = teil.anzahl * anzahl;
                this.add(nteil, liste, periode);
            }
            else {
                var nteil = this.tiefeCopy(teil, teil.anzahl * anzahl);
                nteil.bedarfPeriode[periode] = teil.anzahl * anzahl;
                this.add(nteil, liste, periode);
                teil.bauteile.forEach(function (pos) { _this.teileberechnen(pos, teil.anzahl * anzahl, liste, periode); });
            }
        };
        TeileService.prototype.aendern = function ($event, inputP1) {
            if ($event === null || $event.which === 13) {
                this.gesamtListe = [];
                this.p1.anzahl = inputP1;
                this.teileberechnen(this.p1, 1, this.gesamtListe, 1);
            }
        };
        TeileService.prototype.teileSetzen = function () {
            this.listeTeile = [
                //Kaufteile
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
            //Nicht-Kaufteile
            this.listeTeile.push(new Teil("e26", 26, 0, 0, 0, [this.getTeil(44, 2), this.getTeil(47), this.getTeil(48, 2)], 0, 0));
            this.listeTeile.push(new Teil("e16", 16, 0, 0, 0, [this.getTeil(24), this.getTeil(28), this.getTeil(40), this.getTeil(41), this.getTeil(42, 2)], 0, 0));
            this.listeTeile.push(new Teil("e17", 17, 0, 0, 0, [this.getTeil(43), this.getTeil(44), this.getTeil(45), this.getTeil(46)], 0, 0));
            this.listeTeile.push(new Teil("e4", 4, 0, 0, 0, [this.getTeil(35, 2), this.getTeil(36), this.getTeil(52), this.getTeil(53, 36)], 0, 0));
            this.listeTeile.push(new Teil("e10", 10, 0, 0, 0, [this.getTeil(32), this.getTeil(39)], 0, 0));
            this.listeTeile.push(new Teil("e7", 7, 0, 0, 0, [this.getTeil(35, 2), this.getTeil(37), this.getTeil(38), this.getTeil(52), this.getTeil(53, 36)], 0, 0));
            this.listeTeile.push(new Teil("e13", 13, 0, 0, 0, [this.getTeil(32), this.getTeil(39)], 0, 0));
            this.listeTeile.push(new Teil("e18", 18, 0, 0, 0, [this.getTeil(28, 3), this.getTeil(32), this.getTeil(59, 2)], 0, 0));
            this.listeTeile.push(new Teil("e49", 49, 0, 0, 0, [this.getTeil(24, 2), this.getTeil(25, 2), this.getTeil(7), this.getTeil(13), this.getTeil(18)], 0, 0));
            this.listeTeile.push(new Teil("e50", 50, 0, 0, 0, [this.getTeil(24, 2), this.getTeil(25, 2), this.getTeil(4), this.getTeil(10), this.getTeil(49)], 0, 0));
            this.listeTeile.push(new Teil("e51", 51, 0, 0, 0, [this.getTeil(24), this.getTeil(27), this.getTeil(16), this.getTeil(17), this.getTeil(50)], 0, 0));
            this.listeTeile.push(new Teil("p1", 1, 0, 0, 0, [this.getTeil(21), this.getTeil(24), this.getTeil(27), this.getTeil(26), this.getTeil(51)], 0, 0));
        };
        TeileService.prototype.getTeil = function (id, anzahl) {
            if (anzahl === void 0) { anzahl = 1; }
            for (var i = 0; i < this.listeTeile.length; i++) {
                if (this.listeTeile[i].id === id) {
                    return this.tiefeCopy(this.listeTeile[i], anzahl);
                }
            }
            return null;
        };
        TeileService.prototype.tiefeCopy = function (teil, anzahl) {
            var nteil = teil.getCopy();
            nteil.anzahl = anzahl;
            nteil.bedarfPeriode = [teil.bedarfPeriode[0], teil.bedarfPeriode[1], teil.bedarfPeriode[2], teil.bedarfPeriode[3]];
            return nteil;
        };
        TeileService.prototype.add = function (teil, liste, periode) {
            for (var i = 0; i < liste.length; i++) {
                if (liste[i].id === teil.id) {
                    liste[i].anzahl += teil.anzahl;
                    liste[i].bedarfPeriode[periode] += teil.bedarfPeriode[periode];
                    return;
                }
            }
            liste.push(teil);
        };
        TeileService.prototype.getKaufteile = function (liste) {
            var nliste = new Array();
            liste.forEach(function (pos) {
                if (pos.bauteile.length === 0) {
                    nliste.push(pos);
                }
            });
            return nliste;
        };
        TeileService.prototype.aendern2 = function () {
            this.gesamtListe = [];
            this.teileberechnen(this.getTeil(1), 0, this.gesamtListe, 0);
            var inputs = ["11", "12", "13", "14"]; //,"21","22","23","24","31","32","33","34"];
            for (var i = 0; i < inputs.length; i++) {
                var input = document.getElementById(inputs[i]).value;
                var number = input * 1;
                if (isNaN(number)) {
                    window.alert("keine zul�ssige Eingabe");
                    return;
                }
                else {
                    var teil = this.getTeil(inputs[i][0] * 1);
                    var periode = inputs[i][1] * 1;
                    var liste = new Array();
                    this.teileberechnen(teil, number, this.gesamtListe, periode - 1);
                }
            }
            this.reichweiteBerechnen(this.gesamtListe);
            this.bestellmengeBerechnen(this.gesamtListe);
            this.ergebnisListe = this.getKaufteile(this.gesamtListe);
            this.ergebnisListe.sort(function (a, b) { return a.id - b.id; });
        };
        TeileService.prototype.reichweiteBerechnen = function (liste) {
            for (var i = 0; i < liste.length; i++) {
                var teil = liste[i];
                if (teil.lagerstand - teil.bedarfPeriode[0] <= 0) {
                    if (teil.lagerstand === 0) {
                        teil.reichweite = 0;
                    }
                    else {
                        teil.reichweite = 0 + teil.lagerstand / teil.bedarfPeriode[0];
                    }
                }
                else if (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] <= 0) {
                    if ((teil.lagerstand - teil.bedarfPeriode[0]) === 0) {
                        teil.reichweite = 1;
                    }
                    else {
                        teil.reichweite = 1 + (teil.lagerstand - teil.bedarfPeriode[0]) / teil.bedarfPeriode[1];
                    }
                }
                else if (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] - teil.bedarfPeriode[2] <= 0) {
                    if ((teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1]) === 0) {
                        teil.reichweite = 2;
                    }
                    else {
                        teil.reichweite = 2 + (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1]) / teil.bedarfPeriode[2];
                    }
                }
                else if (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] - teil.bedarfPeriode[2] - teil.bedarfPeriode[3] <= 0) {
                    if ((teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] - teil.bedarfPeriode[2]) === 0) {
                        teil.reichweite = 3;
                    }
                    else {
                        teil.reichweite = 3 + (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] - teil.bedarfPeriode[2]) / teil.bedarfPeriode[3];
                    }
                }
                else {
                    teil.reichweite = 4;
                }
                teil.reichweite = 1 * teil.reichweite.toString().substring(0, 6);
            }
        };
        TeileService.prototype.bestellmengeBerechnen = function (liste) {
            for (var i = 0; i < liste.length; i++) {
                var teil = liste[i];
                var bedarf = teil.bedarfPeriode[0] + teil.bedarfPeriode[1] + teil.bedarfPeriode[2] + teil.bedarfPeriode[3];
                if (teil.reichweite < teil.lieferzeitNormal + teil.lieferAbweichung) {
                    teil.bestellmenge = (-1) * (teil.lagerstand - bedarf);
                    if (teil.bestellmenge < teil.rabattmenge) {
                        teil.bestellmenge = teil.rabattmenge;
                    }
                }
            }
        };
        TeileService = __decorate([
            angular2_1.Component({
                selector: 'TeileService'
            }),
            angular2_1.View({
                template: "\n            <h1 align=\"center\">Teileverwaltung</h1>\n            <table>\n                <tr>\n                    <th>Produkt</th>\n                    <th>Periode 1</th>\n                    <th>Periode 2</th>\n                    <th>Periode 3</th>\n                    <th>Periode 4 </th>\n                </tr>\n                <tbody>\n                    <tr>\n                        <th>P1</th>\n                        <th><input id=\"11\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P1\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"12\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P1\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"13\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P1\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"14\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P1\" (keyup)=\"aendern2()\"></th>\n                    </tr>\n                    <tr>\n                        <th>P2</th>\n                        <th><input id=\"21\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P2\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"22\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P2\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"23\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P2\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"24\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P2\" (keyup)=\"aendern2()\"></th>\n                    </tr>\n                    <tr>\n                        <th>P3</th>\n                        <th><input id=\"31\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P3\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"32\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P3\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"33\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P3\" (keyup)=\"aendern2()\"></th>\n                        <th><input id=\"34\" class=\"form-control\" type=\"text\" placeholder=\"Anzahl P3\" (keyup)=\"aendern2()\"></th>\n                    </tr>\n                </tbody>\n            </table>\n            <h3>Teilebedarf</h3>\n            <table class=\"table table-striped table-hover \">\n                <tr>\n                    <th>Id</th>\n                    <th>LZ-N</th>\n                    <th>Reichweite in Perioden</th>\n                    <th>Lagerstand</th>\n                    <th>Bedarf Periode 1</th>\n                    <th>Bedarf Periode 2</th>\n                    <th>Bedarf Periode 3</th>\n                    <th>Bedarf Periode 4</th>\n                    <th>Bestellmenge</th>\n                    <th>Eilbestellung</th>\n\n                </tr>\n                <tbody>\n                    <tr *for=\"#teil of ergebnisListe;\">\n                        <td>{{\"K\"+teil.id}}</td>\n                        <td>{{teil.lieferzeitNormal}}</td>\n                        <td>{{teil.reichweite}}</td>\n                        <td>{{teil.lagerstand}}</td>\n                        <td>{{teil.bedarfPeriode[0]}}</td>\n                        <td>{{teil.bedarfPeriode[1]}}</td>\n                        <td>{{teil.bedarfPeriode[2]}}</td>\n                        <td>{{teil.bedarfPeriode[3]}}</td>\n                        <td><input class=\"form-control\" type=\"text\" value={{teil.bestellmenge}}></td>\n                        <td><input type=\"checkbox\"></td>\n                    </tr>\n                </tbody>\n            </table>\n    ", directives: [angular2_1.For, angular2_1.If]
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
            this.lagerstand = 300;
            this.inWarteschlange = 0;
            this.rabattmenge = nrabattmenge;
            this.bestellkosten = nbestellkosten;
            this.lieferAbweichung = nlieferAbweichung;
            this.bedarfPeriode = [0, 0, 0, 0];
            this.reichweite = 4;
            this.bestellmenge = 0;
            if (nbauteile != null) {
                this.bauteile = nbauteile;
            }
            else {
                this.bauteile = [];
            }
        }
        Teil.prototype.getCopy = function () {
            if (this.bauteile.length === 0) {
                var teil = new Teil(this.name, this.id, this.wert, this.lieferzeitNormal, this.lieferAbweichung, [], this.rabattmenge, this.bestellkosten, this.anzahl);
                teil.bedarfPeriode = [this.bedarfPeriode[0], this.bedarfPeriode[1], this.bedarfPeriode[2], this.bedarfPeriode[3]];
                return teil;
            }
            else {
                var liste = new Array();
                for (var i = 0; i < this.bauteile.length; i++) {
                    liste.push(this.bauteile[i]);
                }
                var teil = new Teil(this.name, this.id, this.wert, this.lieferzeitNormal, this.lieferAbweichung, liste, this.rabattmenge, this.bestellkosten, this.anzahl);
                teil.bedarfPeriode = [this.bedarfPeriode[0], this.bedarfPeriode[1], this.bedarfPeriode[2], this.bedarfPeriode[3]];
                return teil;
            }
        };
        return Teil;
    })();
});
