/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />

class NewBaumService {

	kinderBaum: NewTeilKnoten;
	damenBaum: NewTeilKnoten;
	herrenBaum: NewTeilKnoten;

	constructor() {
		this.erzeugeKinderBaum();
		this.erzeugeDamenBaum();
		this.erzeugeHerrenBaum();
	}

	getAnzahlInBaum(baum: NewTeilKnoten, teil_id: number): number {
		var anzahl = 0;
		if (baum.teil_id === teil_id) {
			anzahl += baum.anzahl;
		}
		if (baum.hatBauteile()) {
			for (var i = 0; i < baum.bauteile.length; i++) {
				anzahl += this.getAnzahlInBaum(baum.bauteile[i], teil_id);
			}
		}
		return anzahl;
	}

	getKnoten(teil_id: number): NewTeilKnoten {
		var gesuchterKnoten = this.durchsucheBaumNachTeilKnoten(this.kinderBaum, teil_id);
		if (!gesuchterKnoten) {
			gesuchterKnoten = this.durchsucheBaumNachTeilKnoten(this.damenBaum, teil_id);
		}
		if (!gesuchterKnoten) {
			gesuchterKnoten = this.durchsucheBaumNachTeilKnoten(this.herrenBaum, teil_id);
		}

		return gesuchterKnoten;
	}

	durchsucheBaumNachTeilKnoten(baum: NewTeilKnoten, teil_id: number): NewTeilKnoten {
		if (baum.teil_id === teil_id) {
			return baum;
		}
		if (!baum.hatBauteile()) {
			return null;
		}

		var gesuchterTeilKnoten: NewTeilKnoten = null;
		for (var i = 0; i < baum.bauteile.length; i++) {
			gesuchterTeilKnoten = this.durchsucheBaumNachTeilKnoten(baum.bauteile[i], teil_id);
		}
		return gesuchterTeilKnoten;
	}

	erzeugeKinderBaum() {
		var P1_K21 = new NewTeilKnoten(21, 1, null);
		var P1_K24 = new NewTeilKnoten(24, 1, null);
		var P1_K27 = new NewTeilKnoten(27, 1, null);

		var E26_K44 = new NewTeilKnoten(44, 2, null);
		var E26_K47 = new NewTeilKnoten(47, 1, null);
		var E26_K48 = new NewTeilKnoten(48, 2, null);
		var P1_E26 = new NewTeilKnoten(26, 1, [E26_K44, E26_K47, E26_K48]);

		var E51_K24 = new NewTeilKnoten(24, 1, null);
		var E51_K27 = new NewTeilKnoten(27, 1, null);

		var E16_K24 = new NewTeilKnoten(24, 1, null);
		var E16_K28 = new NewTeilKnoten(28, 1, null);
		var E16_K40 = new NewTeilKnoten(40, 1, null);
		var E16_K41 = new NewTeilKnoten(41, 1, null);
		var E16_K42 = new NewTeilKnoten(42, 2, null);
		var E51_E16 = new NewTeilKnoten(16, 1, [E16_K24, E16_K28, E16_K40, E16_K41, E16_K42]);

		var E17_K43 = new NewTeilKnoten(43, 1, null);
		var E17_K44 = new NewTeilKnoten(44, 1, null);
		var E17_K45 = new NewTeilKnoten(45, 1, null);
		var E17_K46 = new NewTeilKnoten(46, 1, null);
		var E51_E17 = new NewTeilKnoten(17, 1, [E17_K43, E17_K44, E17_K45, E17_K46]);

		var E50_K24 = new NewTeilKnoten(24, 2, null);
		var E50_K25 = new NewTeilKnoten(25, 2, null);

		var E4_K35 = new NewTeilKnoten(35, 2, null);
		var E4_K36 = new NewTeilKnoten(36, 1, null);
		var E4_K52 = new NewTeilKnoten(52, 1, null);
		var E4_K53 = new NewTeilKnoten(53, 36, null);
		var E50_E4 = new NewTeilKnoten(4, 1, [E4_K35, E4_K36, E4_K52, E4_K53]);

		var E10_K32 = new NewTeilKnoten(32, 1, null);
		var E10_K39 = new NewTeilKnoten(39, 1, null);
		var E50_E10 = new NewTeilKnoten(10, 1, [E10_K32, E10_K39]);

		var E49_K24 = new NewTeilKnoten(24, 2, null);
		var E49_K25 = new NewTeilKnoten(25, 2, null);

		var E7_K35 = new NewTeilKnoten(35, 2, null);
		var E7_K37 = new NewTeilKnoten(37, 1, null);
		var E7_K38 = new NewTeilKnoten(38, 1, null);
		var E7_K52 = new NewTeilKnoten(52, 1, null);
		var E7_K53 = new NewTeilKnoten(53, 36, null);
		var E49_E7 = new NewTeilKnoten(7, 1, [E7_K35, E7_K37, E7_K38, E7_K52, E7_K53]);

		var E13_K32 = new NewTeilKnoten(32, 1, null);
		var E13_K39 = new NewTeilKnoten(39, 1, null);
		var E49_E13 = new NewTeilKnoten(13, 1, [E13_K32, E13_K39]);

		var E18_K28 = new NewTeilKnoten(28, 3, null);
		var E18_K32 = new NewTeilKnoten(32, 1, null);
		var E18_K59 = new NewTeilKnoten(59, 2, null);
		var E49_E18 = new NewTeilKnoten(18, 1, [E18_K28, E18_K32, E18_K59]);

		var E50_E49 = new NewTeilKnoten(49, 1, [E49_K24, E49_K25, E49_E7, E49_E13, E49_E18]);

		var E51_E50 = new NewTeilKnoten(50, 1, [E50_K24, E50_K25, E50_E4, E50_E10, E50_E49]);

		var P1_E51 = new NewTeilKnoten(51, 1, [E51_K24, E51_K27, E51_E16, E51_E17, E51_E50]);

		var P1 = new NewTeilKnoten(1, 1, [P1_K21, P1_K24, P1_K27, P1_E26, P1_E51]);

		this.kinderBaum = P1;

	}

	erzeugeDamenBaum() {

		var P2_K22 = new NewTeilKnoten(22, 1, null);
		var P2_K24 = new NewTeilKnoten(24, 1, null);
		var P2_K27 = new NewTeilKnoten(27, 1, null);

		var E26_K44 = new NewTeilKnoten(44, 2, null);
		var E26_K47 = new NewTeilKnoten(47, 1, null);
		var E26_K48 = new NewTeilKnoten(48, 2, null);
		var P2_E26 = new NewTeilKnoten(26, 1, [E26_K44, E26_K47, E26_K48]);

		var E56_K24 = new NewTeilKnoten(24, 1, null);
		var E56_K27 = new NewTeilKnoten(27, 1, null);

		var E16_K24 = new NewTeilKnoten(24, 1, null);
		var E16_K28 = new NewTeilKnoten(28, 1, null);
		var E16_K40 = new NewTeilKnoten(40, 1, null);
		var E16_K41 = new NewTeilKnoten(41, 1, null);
		var E16_K42 = new NewTeilKnoten(42, 2, null);
		var E56_E16 = new NewTeilKnoten(16, 1, [E16_K24, E16_K28, E16_K40, E16_K41, E16_K42]);

		var E17_K43 = new NewTeilKnoten(43, 1, null);
		var E17_K44 = new NewTeilKnoten(44, 1, null);
		var E17_K45 = new NewTeilKnoten(45, 1, null);
		var E17_K46 = new NewTeilKnoten(46, 1, null);
		var E56_E17 = new NewTeilKnoten(17, 1, [E17_K43, E17_K44, E17_K45, E17_K46]);

		var E55_K24 = new NewTeilKnoten(24, 2, null);
		var E55_K25 = new NewTeilKnoten(25, 2, null);

		var E5_K35 = new NewTeilKnoten(35, 2, null);
		var E5_K36 = new NewTeilKnoten(36, 1, null);
		var E5_K57 = new NewTeilKnoten(57, 1, null);
		var E5_K58 = new NewTeilKnoten(58, 36, null);
		var E55_E5 = new NewTeilKnoten(5, 1, [E5_K35, E5_K36, E5_K57, E5_K58]);

		var E11_K32 = new NewTeilKnoten(32, 1, null);
		var E11_K39 = new NewTeilKnoten(39, 1, null);
		var E55_E11 = new NewTeilKnoten(11, 1, [E11_K32, E11_K39]);

		var E54_K24 = new NewTeilKnoten(24, 2, null);
		var E54_K25 = new NewTeilKnoten(25, 2, null);

		var E8_K35 = new NewTeilKnoten(35, 2, null);
		var E8_K37 = new NewTeilKnoten(37, 1, null);
		var E8_K38 = new NewTeilKnoten(38, 1, null);
		var E8_K57 = new NewTeilKnoten(57, 1, null);
		var E8_K58 = new NewTeilKnoten(58, 36, null);
		var E54_E8 = new NewTeilKnoten(8, 1, [E8_K35, E8_K37, E8_K38, E8_K57, E8_K58]);

		var E14_K32 = new NewTeilKnoten(32, 1, null);
		var E14_K39 = new NewTeilKnoten(39, 1, null);
		var E54_E14 = new NewTeilKnoten(14, 1, [E14_K32, E14_K39]);

		var E19_K28 = new NewTeilKnoten(28, 4, null);
		var E19_K32 = new NewTeilKnoten(32, 1, null);
		var E19_K59 = new NewTeilKnoten(59, 2, null);
		var E54_E19 = new NewTeilKnoten(19, 1, [E19_K28, E19_K32, E19_K59]);

		var E55_E54 = new NewTeilKnoten(54, 1, [E54_K24, E54_K25, E54_E8, E54_E14, E54_E19]);

		var E56_E55 = new NewTeilKnoten(55, 1, [E55_K24, E55_K25, E55_E5, E55_E11, E55_E54]);

		var P2_E56 = new NewTeilKnoten(56, 1, [E56_K24, E56_K27, E56_E16, E56_E17, E56_E55]);

		var P2 = new NewTeilKnoten(2, 1, [P2_K22, P2_K24, P2_K27, P2_E26, P2_E56]);

		this.damenBaum = P2;
	}

	erzeugeHerrenBaum() {
		var P3_K23 = new NewTeilKnoten(23, 1, null);
		var P3_K24 = new NewTeilKnoten(24, 1, null);
		var P3_K27 = new NewTeilKnoten(27, 1, null);

		var E26_K44 = new NewTeilKnoten(44, 2, null);
		var E26_K47 = new NewTeilKnoten(47, 1, null);
		var E26_K48 = new NewTeilKnoten(48, 2, null);
		var P3_E26 = new NewTeilKnoten(26, 1, [E26_K44, E26_K47, E26_K48]);

		var E31_K24 = new NewTeilKnoten(24, 1, null);
		var E31_K27 = new NewTeilKnoten(27, 1, null);

		var E16_K24 = new NewTeilKnoten(24, 1, null);
		var E16_K28 = new NewTeilKnoten(28, 1, null);
		var E16_K40 = new NewTeilKnoten(40, 1, null);
		var E16_K41 = new NewTeilKnoten(41, 1, null);
		var E16_K42 = new NewTeilKnoten(42, 2, null);
		var E31_E16 = new NewTeilKnoten(16, 1, [E16_K24, E16_K28, E16_K40, E16_K41, E16_K42]);

		var E17_K43 = new NewTeilKnoten(43, 1, null);
		var E17_K44 = new NewTeilKnoten(44, 1, null);
		var E17_K45 = new NewTeilKnoten(45, 1, null);
		var E17_K46 = new NewTeilKnoten(46, 1, null);
		var E31_E17 = new NewTeilKnoten(17, 1, [E17_K43, E17_K44, E17_K45, E17_K46]);

		var E30_K24 = new NewTeilKnoten(24, 2, null);
		var E30_K25 = new NewTeilKnoten(25, 2, null);

		var E6_K33 = new NewTeilKnoten(33, 1, null);
		var E6_K34 = new NewTeilKnoten(34, 36, null);
		var E6_K35 = new NewTeilKnoten(35, 2, null);
		var E6_K36 = new NewTeilKnoten(36, 1, null);
		var E30_E6 = new NewTeilKnoten(6, 1, [E6_K33, E6_K34, E6_K35, E6_K36]);

		var E12_K32 = new NewTeilKnoten(32, 1, null);
		var E12_K39 = new NewTeilKnoten(39, 1, null);
		var E30_E12 = new NewTeilKnoten(12, 1, [E12_K32, E12_K39]);

		var E29_K24 = new NewTeilKnoten(24, 2, null);
		var E29_K25 = new NewTeilKnoten(25, 2, null);

		var E9_K33 = new NewTeilKnoten(33, 1, null);
		var E9_K34 = new NewTeilKnoten(34, 36, null);
		var E9_K35 = new NewTeilKnoten(35, 2, null);
		var E9_K37 = new NewTeilKnoten(37, 1, null);
		var E9_K38 = new NewTeilKnoten(38, 1, null);
		var E29_E9 = new NewTeilKnoten(9, 1, [E9_K33, E9_K34, E9_K35, E9_K37, E9_K38]);

		var E15_K32 = new NewTeilKnoten(32, 1, null);
		var E15_K39 = new NewTeilKnoten(39, 1, null);
		var E29_E15 = new NewTeilKnoten(15, 1, [E15_K32, E15_K39]);

		var E20_K28 = new NewTeilKnoten(28, 5, null);
		var E20_K32 = new NewTeilKnoten(32, 1, null);
		var E20_K59 = new NewTeilKnoten(59, 2, null);
		var E29_E20 = new NewTeilKnoten(20, 1, [E20_K28, E20_K32, E20_K59]);

		var E30_E29 = new NewTeilKnoten(29, 1, [E29_K24, E29_K25, E29_E9, E29_E15, E29_E20]);

		var E31_E30 = new NewTeilKnoten(30, 1, [E30_K24, E30_K25, E30_E6, E30_E12, E30_E29]);

		var P3_E31 = new NewTeilKnoten(31, 1, [E31_K24, E31_K27, E31_E16, E31_E17, E31_E30]);

		var P3 = new NewTeilKnoten(3, 1, [P3_K23, P3_K24, P3_K27, P3_E26, P3_E31]);

		this.herrenBaum = P3;
	}
}

angular.module('app').factory('NewBaumService', [() => new NewBaumService()]);