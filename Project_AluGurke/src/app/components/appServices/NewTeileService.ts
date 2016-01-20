/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />
/// <reference path="./BestellService.ts" />

class NewTeileService {
    alleKaufteile: Array<NewKaufTeil>;
    alleErzeugnisse: Array<NewErzeugnis>;
    bez_de = {
        1: 'Kinderfahrrad',
        2: 'Damenfahrrad',
        3: 'Herrenfahrrad',
        4: 'Hinterradgruppe (K)',
        5: 'Hinterradgruppe (D)',
        6: 'Hinterradgruppe (H)',
        7: 'Vorderradgruppe (K)',
        8: 'Vorderradgruppe (D)',
        9: 'Vorderradgruppe (H)',
        10: 'Schutzblech h. (K)',
        11: 'Schutzblech h. (D)',
        12: 'Schutzblech h. (H)',
        13: 'Schutzblech v. (K)',
        14: 'Schutzblech v. (D)',
        15: 'Schutzblech v. (H)',
        16: 'Lenker cpl.(KDH)',
        17: 'Sattel cpl. (KDH)',
        18: 'Rahmen (K)',
        19: 'Rahmen (D)',
        20: 'Rahmen (H)',
        26:'Pedal cpl. (KDH)',
        29:'Vorderrad mont. (H)',
        30:'Rahmen u. Räder (H)',
        31:'Fahrrad o. Ped (H)',
        49:'Vorderrad mont. (K)',
        50:'Rahmen u. Räder (K)',
        51:'Fahrrad o. Ped (K)',
        54:'Vorderrad mont. (D)',
        55:'Rahmen u. Räder (D)',
        56:'Fahrrad o. Ped (D)',
        
        21:'Kette (K)',
        22:'Kette (D)',
        23:'Kette (H)',
        24:'Mutter 3/8 (KDH)',
        25:'Scheibe 3/8 (KDH)',
        27:'Schraube 3/8 (KDH)',
        28:'Rohr ¾ (KDH)',
        32:'Farbe (KDH)',
        33:'Felge cpl. (H)',
        34:'Speiche (H)',
        35:'Konus (KDH)',
        36:'Freilauf (KDH)',
        37:'Gabel (KDH)',
        38:'Welle (KDH)',
        39:'Blech (KDH)',
        40:'Lenker (KDH)',
        41:'Mutter ¾“ (KDH)',
        42:'Griff (KDH)',
        43:'Sattel (KDH)',
        44:'Stange ½“ (KDH)',
        45:'Mutter ¼“ (KDH)',
        46:'Schraube ¼“ (KDH)',
        47:'Zahnkranz (KDH)',
        48:'Pedal (KDH)',
        52:'Felge cpl. (H)',
        53:'Speiche (H)',
        57:'Felge cpl. (K)',
        58:'Speiche (K)',
        59:'Schweißdraht (KDH)'
        
    }

    bez_en = {
        1: 'Children\'s bicycle',
        2: 'Ladies bicycle',
        3: 'Men\'s bicycle',
        4: 'Rear wheel group (K)',
        5: 'Rear wheel group (D)',
        6: 'Rear wheel group (H)',
        7: 'Front wheel group (K)',
        8: 'Front wheel group (D)',
        9: 'Front wheel group (H)',
        10: 'Mudguard rear (K)',
        11: 'Mudguard rear (D)',
        12: 'Mudguard rear (H)',
        13: 'Mudguard front (K)',
        14: 'Mudguard front (D)',
        15: 'Mudguard front (H)',
        16: 'Handle complete (KDH)',
        17: 'Saddle complete (KDH)',
        18: 'Frame (K)',
        19: 'Frame (D)',
        20: 'Frame (H)',
        26:'Pedal complete (KDH)',
        29:'Front wheel compl. (H)',
        30:'Frame and wheels (H)',
        31:'Bicycle w/o. pedals (H)',
        49:'Front wheel compl. (K)',
        50:'Frame and wheels (K)',
        51:'Bicycle w/o. pedals (K)',
        54:'Front wheel compl. (D)',
        55:'Frame and wheels (D)',
        56:'Bicycle w/o. pedals (D)',
        
        21:'Chain (K)',
        22:'Chain (D)',
        23:'Chain (H)',
        24:'Nut 3/8 (KDH)',
        25:'Washer 3/8 (KDH)',
        27:'Screw 3/8 (KDH)',
        28:'Pipe ¾ (KDH)',
        32:'Paint (KDH)',
        33:'Rim compl. (H)',
        34:'Spoke (H)',
        35:'Taper sleeve (KDH)',
        36:'Free wheel (KDH)',
        37:'Fork (KDH)',
        38:'Axle (KDH)',
        39:'Sheet (KDH)',
        40:'Lenker (KDH)',
        41:'Nut ¾“ (KDH)',
        42:'Handle grip (KDH)',
        43:'Saddle (KDH)',
        44:'Bar ½“ (KDH)',
        45:'Nut ¼“ (KDH)',
        46:'Screw ¼“ (KDH)',
        47:'Sprocket (KDH)',
        48:'Pedal (KDH)',
        52:'Rim compl. (H)',
        53:'Spoke (H)',
        57:'Rim compl. (K)',
        58:'Spoke (K)',
        59:'Welding wires (KDH)'
    }

    constructor($rootScope) {
        this.erzeugeKaufTeile();
        this.erzeugeErzeignisse();
        $rootScope.$on('fileController.neueDatei', (event, dateiInhalt) => {
            this.onNeueDatei(dateiInhalt);
        });
        $rootScope.$on('mainController.neueSprache', (event, sprache) => {
            this.onSprachWechsel(sprache);
        });
    }

    onSprachWechsel(sprache: string) {
        var bezeichnungen;
        if (sprache == 'en_US') {
            bezeichnungen = this.bez_en;
        } else {
            bezeichnungen = this.bez_de;
        }
        
        this.updateBezeichnungErzeugnisse(bezeichnungen);
        this.updateBezeichnungKaufTeile(bezeichnungen);
    }


    updateBezeichnungKaufTeile(bez) {
        for (var i = 0; i < this.alleKaufteile.length; i++) {
            this.alleKaufteile[i].bezeichnung = bez[this.alleKaufteile[i].id+'']
        }
    }

    updateBezeichnungErzeugnisse(bez) {
        for (var i = 0; i < this.alleErzeugnisse.length; i++) {
            this.alleErzeugnisse[i].bezeichnung = bez[this.alleErzeugnisse[i].id+''];
        }
    }

    onNeueDatei(dateiInhalt) {
        this.updateKaufTeile(dateiInhalt.results.warehousestock.article);
        this.updateErzeugnisse(dateiInhalt.results.warehousestock.article);
    }

    updateKaufTeile(artikel) {
        for (var i = 0; i < this.alleKaufteile.length; i++) {
            for (var j = 0; j < artikel.length; j++) {
                if (this.alleKaufteile[i].id == Number(artikel[j]._id)) {
                    this.alleKaufteile[i].lagerMenge = Number(artikel[j]._amount);
                    this.alleKaufteile[i].teileWert = Number(artikel[j]._price);
                    this.alleKaufteile[i].teileWertNeu = Number(artikel[j]._price);
                }
            }
        }
    }

    updateErzeugnisse(artikel) {
        for (var i = 0; i < this.alleErzeugnisse.length; i++) {
            for (var j = 0; j < artikel.length; j++) {
                if (this.alleErzeugnisse[i].id == Number(artikel[j]._id)) {
                    this.alleErzeugnisse[i].lagerMenge = Number(artikel[j]._amount);
                    this.alleErzeugnisse[i].teileWert = Number(artikel[j]._price);
                }
            }
        }
    }

    getErzeugnis(id: number) {
        for (var i = 0; i < this.alleErzeugnisse.length; i++) {
            if (this.alleErzeugnisse[i].id === Number(id)) {
                return this.alleErzeugnisse[i]
            }
        }
        return null;
    }

    getKaufTeil(id: number) {
        for (var i = 0; i < this.alleKaufteile.length; i++) {
            if (this.alleKaufteile[i].id === Number(id)) {
                return this.alleKaufteile[i];
            }
        }
    }

    erzeugeKaufTeile() {
        this.alleKaufteile = [
            new NewKaufTeil(21, 'Kette(K)', 5.00, 300, false, 300, 50, 1.8, 0.4),
            new NewKaufTeil(22, 'Kette(D)', 6.50, 300, false, 300, 50, 1.7, 0.4),
            new NewKaufTeil(23, 'Kette(H)', 6.50, 300, false, 300, 50, 1.2, 0.2),
            new NewKaufTeil(24, 'Mutter 3/8', 0.06, 6100, true, 6100, 100, 3.2, 0.3),
            new NewKaufTeil(25, 'Scheibe 3/8', 0.06, 3600, true, 3600, 50, 0.9, 0.2),
            new NewKaufTeil(27, 'Schraube 3/8', 0.10, 1800, true, 1800, 75, 0.9, 0.2),
            new NewKaufTeil(28, 'Rohr 3/4', 1.20, 4500, true, 4500, 50, 1.7, 0.4),
            new NewKaufTeil(32, 'Farbe', 0.75, 2700, true, 2700, 50, 2.1, 0.5),
            new NewKaufTeil(33, 'Felge cpl.(H)', 22.00, 900, false, 900, 75, 1.9, 0.5),
            new NewKaufTeil(34, 'Speiche(H)', 0.10, 22000, false, 22000, 50, 1.6, 0.3),
            new NewKaufTeil(35, 'Konus', 1.00, 3600, true, 3600, 75, 2.2, 0.4),
            new NewKaufTeil(36, 'Freilauf', 8.00, 900, true, 900, 100, 1.2, 0.1),
            new NewKaufTeil(37, 'Gabel', 1.50, 900, true, 900, 50, 1.5, 0.3),
            new NewKaufTeil(38, 'Welle', 1.50, 300, true, 300, 50, 1.7, 0.4),
            new NewKaufTeil(39, 'Blech', 1.50, 900, true, 900, 75, 1.5, 0.3),
            new NewKaufTeil(40, 'Lenker', 2.50, 900, true, 900, 50, 1.7, 0.2),
            new NewKaufTeil(41, 'Mutter 3/4', 0.06, 900, true, 900, 50, 0.9, 0.2),
            new NewKaufTeil(42, 'Griff', 0.10, 1800, true, 1800, 50, 1.2, 0.3),
            new NewKaufTeil(43, 'Griff', 5.00, 1900, true, 1900, 75, 2.0, 0.5),
            new NewKaufTeil(44, 'Stange 1/2', 0.50, 2700, true, 2700, 50, 1.0, 0.3),
            new NewKaufTeil(45, 'Mutter 1/4', 0.06, 900, true, 900, 50, 1.7, 0.3),
            new NewKaufTeil(46, 'Schraube 1/4', 0.10, 900, true, 900, 50, 0.9, 0.3),
            new NewKaufTeil(47, 'Zahnkranz', 3.50, 900, true, 900, 50, 1.41, 0.1),
            new NewKaufTeil(48, 'Pedal', 1.50, 1800, true, 1800, 75, 1.0, 0.2),
            new NewKaufTeil(52, 'Felge cpl.(K)', 22.00, 600, false, 600, 50, 1.6, 0.4),
            new NewKaufTeil(53, 'Speiche(K)', 0.10, 22000, false, 22000, 50, 1.6, 0.2),
            new NewKaufTeil(57, 'Felge cpl.(D)', 22.00, 600, false, 600, 50, 1.7, 0.3),
            new NewKaufTeil(58, 'Speiche(D)', 0.10, 22000, false, 22000, 50, 1.6, 0.5),
            new NewKaufTeil(59, 'Schweißdraht', 0.15, 1800, true, 1800, 50, 1.7, 0.2)]
    }

    erzeugeErzeignisse() {
        this.alleErzeugnisse = [new NewErzeugnis(1, 'Kinderfahrrad', 156.13, 100, false),
            new NewErzeugnis(2, 'Damenfahrrad', 163.33, 100, false),
            new NewErzeugnis(3, 'Herrenfahrrad', 165.08, 100, false),
            new NewErzeugnis(4, 'Hinterradgruppe(K)', 40.85, 100, false),
            new NewErzeugnis(5, 'Hinterradgruppe(D)', 39.85, 100, false),
            new NewErzeugnis(6, 'Hinterradgruppe(H)', 40.85, 100, false),
            new NewErzeugnis(7, 'Vorderradgruppe(K)', 35.85, 100, false),
            new NewErzeugnis(8, 'Vorderradgruppe(D)', 35.85, 100, false),
            new NewErzeugnis(9, 'Vorderradgruppe(H)', 35.85, 100, false),
            new NewErzeugnis(10, 'Schutzblech h.(K)', 12.40, 100, false),
            new NewErzeugnis(11, 'Schutzblech h.(D)', 14.65, 100, false),
            new NewErzeugnis(12, 'Schutzblech h.(H)', 14.65, 100, false),
            new NewErzeugnis(13, 'Schutzblech v.(K)', 12.40, 100, false),
            new NewErzeugnis(14, 'Schutzblech v.(D)', 14.65, 100, false),
            new NewErzeugnis(15, 'Schutzblech v.(H)', 14.65, 100, false),
            new NewErzeugnis(16, 'Lenker cpl.', 7.02, 300, true),
            new NewErzeugnis(17, 'Sattel cpl.', 7.16, 300, true),
            new NewErzeugnis(18, 'Rahmen(K)', 13.15, 100, false),
            new NewErzeugnis(19, 'Rahmen(D)', 14.35, 100, false),
            new NewErzeugnis(20, 'Rahmen(H)', 15.55, 100, false),
            new NewErzeugnis(26, 'Pedal cpl.', 10.50, 300, true),
            new NewErzeugnis(29, 'Vorderrad mont.', 69.29, 100, false),
            new NewErzeugnis(30, 'Rahmen u. Räder', 127.53, 100, false),
            new NewErzeugnis(31, 'Fahrrad o. Ped.', 144.42, 100, false),
            new NewErzeugnis(49, 'Vorderrad cpl.', 64.64, 100, false),
            new NewErzeugnis(50, 'Rahmen u. Räder', 120.63, 100, false),
            new NewErzeugnis(51, 'Fahrrad o. Pedal', 137.47, 100, false),
            new NewErzeugnis(54, 'Vorderrad cpl.', 68.09, 100, false),
            new NewErzeugnis(55, 'Rahmen u. Räder', 125.33, 100, false),
            new NewErzeugnis(56, 'Fahrrad o. Pedal', 142.67, 100, false)]
    }
}

angular.module('app').factory('NewTeileService', ['$rootScope', ($rootScope) => new NewTeileService($rootScope)]);
