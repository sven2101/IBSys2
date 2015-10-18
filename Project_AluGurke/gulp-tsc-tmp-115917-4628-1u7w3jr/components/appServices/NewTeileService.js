/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../../model/NewKaufTeil.ts" />
/// <reference path="../../model/NewErzeugnis.ts" />
/*
class NewTeileService {
    alleKaufteile: Array<NewKaufTeil>;
    alleErzeugnisse: Array<NewErzeugnis>;
    test;

    constructor() {
        this.test = "test erfolgreich NewTeileService"
        //this.erzeugeKaufteile;
        //this.erzeugeErzeignisse;
    }

    erzeugeKaufteile() {
        this.alleKaufteile.push(new NewKaufTeil(21, 'Kette(K)', 5.00, 0, false, 300, 50, 1.8, 0.4));
        this.alleKaufteile.push(new NewKaufTeil(22, 'Kette(D)', 6.50, 0, false, 300, 50, 1.7, 0.4));
        this.alleKaufteile.push(new NewKaufTeil(23, 'Kette(H)', 6.50, 0, false, 300, 50, 1.2, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(24, 'Mutter 3/8', 0.06, 0, true, 6100, 100, 3.2, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(25, 'Schaibe 3/8', 0.06, 0, true, 3600, 50, 0.9, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(27, 'Schraube 3/8', 0.10, 0, true, 1800, 75, 0.9, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(28, 'Rohr 3/4', 1.20, 0, true, 4500, 50, 1.7, 0.4));
        this.alleKaufteile.push(new NewKaufTeil(32, 'Farbe', 0.75, 0, true, 2700, 50, 2.1, 0.5));
        this.alleKaufteile.push(new NewKaufTeil(33, 'Felge cpl.(H)', 22.00, 0, false, 900, 75, 1.9, 0.5));
        this.alleKaufteile.push(new NewKaufTeil(34, 'Speiche(H)', 0.10, 0, false, 22000, 50, 1.6, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(35, 'Konus', 1.00, 0, true, 3600, 75, 2.2, 0.4));
        this.alleKaufteile.push(new NewKaufTeil(36, 'Freilauf', 8.00, 0, true, 900, 100, 1.2, 0.1));
        this.alleKaufteile.push(new NewKaufTeil(37, 'Gabel', 1.50, 0, true, 900, 50, 1.5, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(38, 'Welle', 1.50, 0, true, 300, 50, 1.7, 0.4));
        this.alleKaufteile.push(new NewKaufTeil(39, 'Blech', 1.50, 0, true, 900, 75, 1.5, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(40, 'Lenker', 2.50, 0, true, 900, 50, 1.7, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(41, 'Mutter 3/4', 0.06, 0, true, 900, 50, 0.9, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(42, 'Griff', 0.10, 0, true, 1800, 50, 1.2, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(43, 'Griff', 5.00, 0, true, 1900, 75, 2.0, 0.5));
        this.alleKaufteile.push(new NewKaufTeil(44, 'Stange 1/2', 0.50, 0, true, 2700, 50, 1.0, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(45, 'Mutter 1/4', 0.06, 0, true, 900, 50, 1.7, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(46, 'Schraube 1/4', 0.10, 0, true, 900, 50, 0.9, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(47, 'Zahnkranz', 3.50, 0, true, 900, 50, 1.41, 0.1));
        this.alleKaufteile.push(new NewKaufTeil(48, 'Pedal', 1.50, 0, true, 1800, 75, 1.0, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(52, 'Felge cpl.(K)', 22.00, 0, false, 600, 50, 1.6, 0.4));
        this.alleKaufteile.push(new NewKaufTeil(53, 'Speiche(K)', 0.10, 0, false, 22000, 50, 1.6, 0.2));
        this.alleKaufteile.push(new NewKaufTeil(57, 'Felge cpl.(D)', 22.00, 0, false, 600, 50, 1.7, 0.3));
        this.alleKaufteile.push(new NewKaufTeil(58, 'Speiche(D)', 0.10, 0, false, 22000, 50, 1.6, 0.5));
        this.alleKaufteile.push(new NewKaufTeil(59, 'Schweißdraht', 0.15, 0, true, 1800, 50, 1.7, 0.2));

    }
    
    erzeugeErzeignisse() {
        this.alleErzeugnisse.push(new NewErzeugnis(1,'Kinderfahrrad',156.13,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(2,'Damenfahrrad',163.33,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(3,'Herrenfahrrad',165.08,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(4,'Hinterradgruppe(K)',40.85,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(5,'Hinterradgruppe(D)',39.85,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(6,'Hinterradgruppe(H)',40.85,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(7,'Vorderradgruppe(K)',35.85,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(8,'Vorderradgruppe(D)',35.85,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(9,'Vorderradgruppe(H)',35.85,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(10,'Schutzblech h.(K)',12.40,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(11,'Schutzblech h.(D)',14.65,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(12,'Schutzblech h.(H)',14.65,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(13,'Schutzblech v.(K)',12.40,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(14,'Schutzblech v.(D)',14.65,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(15,'Schutzblech v.(H)',14.65,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(16,'Lenker cpl.',7.02,0,true));
        this.alleErzeugnisse.push(new NewErzeugnis(17,'Sattel cpl.',7.16,0,true));
        this.alleErzeugnisse.push(new NewErzeugnis(18,'Rahmen(K)',13.15,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(19,'Rahmen(D)',14.35,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(20,'Rahmen(H)',15.55,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(26,'Pedal cpl.',10.50,0,true));
        this.alleErzeugnisse.push(new NewErzeugnis(29,'Vorderrad mont.',69.29,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(30,'Rahmen u. Räder',127.53,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(31,'Fahrrad o. Ped.',144.42,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(49,'Vorderrad cpl.',64.64,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(50,'Rahmen u. Räder',120.63,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(51,'Fahrrad o. Pedal',137.47,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(54,'Vorderrad cpl.',68.09,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(55,'Rahmen u. Räder',125.33,0,false));
        this.alleErzeugnisse.push(new NewErzeugnis(56,'Fahrrad o. Pedal',119.67,0,false));
        
    }
}

angular.module('app').factory('NewTeileService', [() => new NewTeileService()]);*/ 
