/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Teil.ts" />

/**
 * Created by Max on 13.08.2015.
 */

class BestellverwaltungController{

	//Liste aller Bauteile
	gesamtListe:Array<Teil>;
	//Liste die im Template verwendet wird, enth�lt nur Kaufteile
	ergebnisListe:Array<Teil>;
	//Liste aller vorhandenen Teil, fungiert als Katalog aus dem tiefe Kopien entnommen werden
	teileListe:Array<Teil>;
	constructor(){
		this.gesamtListe=new Array<Teil>();
		this.teileListe=new Array<Teil>();
		this.ergebnisListe=new Array<Teil>();
		this.teileSetzen();
		this.teileberechnen(this.getTeil(1),0,this.gesamtListe,0);
		this.ergebnisListe=this.getKaufteile(this.gesamtListe);
	}
	//Berechent zu einem Bauteil alle dazugeh�rigen Bauteile mittels Strukturst�cklisten und speichert si in einer Liste
	teileberechnen(teil:Teil,anzahl:number,liste:Array<Teil>,periode:number){
		if(teil.bauteile.length===0) {
			let nteil=this.tiefeCopy(teil,teil.anzahl*anzahl);
			nteil.bedarfPeriode[periode]=teil.anzahl*anzahl;
			this.add(nteil,liste,periode);
		}
		else{
			let nteil=this.tiefeCopy(teil,teil.anzahl*anzahl);
			nteil.bedarfPeriode[periode]=teil.anzahl*anzahl;
			this.add(nteil,liste,periode);
			teil.bauteile.forEach(pos=>{this.teileberechnen(pos,teil.anzahl*anzahl,liste,periode)});
		}
	}
	//Baut die Strukturst�cklisten auf und speichert jedes Teil im Katalog, muss nur einmal initial gemacht werden
	teileSetzen(){
		this.teileListe=[
			//Kaufteile
			new Teil("Kette",21,5,1.8,0.4,[],300,50,300),
			new Teil("Kette",22,6.5,1.7,0.4,[],300,50,175),
			new Teil("Kette",23,6.5,1.2,0.2,[],300,50,230),
			new Teil("Mutter 3/8�",24,0.06,3.2,0.3,[],6100,100,7880),
			new Teil("Scheibe 3/8�",25,0.06,0.9,0.2,[],3600,50,8350),
			new Teil("Schraube 3/8�",27,0.1,0.9,0.2,[],1800,75,4105),
			new Teil("Rohr 3/4�",28,1.2,1.7,0.4,[],4500,50,1625),
			new Teil("Farbe",32,0.75,2.1,0.5,[],2700,50,1165),
			new Teil("Felge cpl.",33,22,1.9,0.5,[],900,75,700),
			new Teil("Speiche",34,0.1,1.6,0.3,[],22000,50,14800),
			new Teil("Konus",35,1,2.2,0.4,[],3600,75,1050),
			new Teil("Freilauf",36,8,1.2,0.1,[],900,100,1150),
			new Teil("Gabel",37,1.5,1.5,0.3,[],900,50,275),
			new Teil("Freilauf",38,1.5,1.7,0.4,[],300,50,575),
			new Teil("Blech",39,1.5,1.5,0.3,[],1800,75,1425),
			new Teil("Lenker",40,2.5,1.7,0.2,[],900,50,1225),
			new Teil("Mutter 3/4�",41,0.06,0.9,0.2,[],900,50,1225),
			new Teil("Griff",42,0.1,1.2,0.3,[],1800,50,650),
			new Teil("Sattel",43,5,2.0,0.5,[],2700,75,1325),
			new Teil("Stange 1/2�",44,0.5,1.0,0.2,[],900,50,4085),
			new Teil("Mutter 1/4�",45,0.06,1.7,0.3,[],900,50,1225),
			new Teil("Schraube 1/4�",46,0.1,0.9,0.3,[],900,50,2125),
			new Teil("Zahnkranz",47,3.5,1.41,0.1,[],900,50,1440),
			new Teil("Pedal",48,1.5,1.0,0.2,[],1800,75,2860),
			new Teil("Felge cpl.",52,22.0,1.6,0.4,[],600,50,0),
			new Teil("Speiche",53,0.1,1.6,0.2,[],22000,50,27400),
			new Teil("Felge cpl.",57,22.0,1.7,0.3,[],600,50,725),
			new Teil("Speiche",58,0.1,1.6,0.5,[],22000,50,26900),
			new Teil("Schwei�draht",59,0.15,0.7,0.2,[],1800,50,2450),
		];
		//Nicht-Kaufteile P1
		this.teileListe.push(new Teil("e26",26,0,0,0,[this.getTeil(44,2),this.getTeil(47),this.getTeil(48,2)],0,0,0));
		this.teileListe.push(new Teil("e16",16,0,0,0,[this.getTeil(24),this.getTeil(28),this.getTeil(40),this.getTeil(41),this.getTeil(42,2)],0,0,0));
		this.teileListe.push(new Teil("e17",17,0,0,0,[this.getTeil(43),this.getTeil(44),this.getTeil(45),this.getTeil(46)],0,0,0));
		this.teileListe.push(new Teil("e4",4,0,0,0,[this.getTeil(35,2),this.getTeil(36),this.getTeil(52),this.getTeil(53,36)],0,0,0));
		this.teileListe.push(new Teil("e10",10,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0,0));
		this.teileListe.push(new Teil("e7",7,0,0,0,[this.getTeil(35,2),this.getTeil(37),this.getTeil(38),this.getTeil(52),this.getTeil(53,36)],0,0,0));
		this.teileListe.push(new Teil("e13",13,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0,0));
		this.teileListe.push(new Teil("e18",18,0,0,0,[this.getTeil(28,3),this.getTeil(32),this.getTeil(59,2)],0,0,0));
		this.teileListe.push(new Teil("e49",49,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(7),this.getTeil(13),this.getTeil(18)],0,0,0));
		this.teileListe.push(new Teil("e50",50,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(4),this.getTeil(10),this.getTeil(49)],0,0,0));
		this.teileListe.push(new Teil("e51",51,0,0,0,[this.getTeil(24),this.getTeil(27),this.getTeil(16),this.getTeil(17),this.getTeil(50)],0,0,0));
		this.teileListe.push(new Teil("p1",1,0,0,0,[this.getTeil(21),this.getTeil(24),this.getTeil(27),this.getTeil(26),this.getTeil(51)],0,0,0));
		//Nicht-Kaufteile P2
		this.teileListe.push(new Teil("e19",19,0,0,0,[this.getTeil(28,4),this.getTeil(32),this.getTeil(59,2)],0,0,0));
		this.teileListe.push(new Teil("e14",14,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0,0));
		this.teileListe.push(new Teil("e8",8,0,0,0,[this.getTeil(35,2),this.getTeil(37),this.getTeil(38),this.getTeil(57),this.getTeil(58,36)],0,0,0));
		this.teileListe.push(new Teil("e54",54,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(8),this.getTeil(14),this.getTeil(19)],0,0,0));
		this.teileListe.push(new Teil("e11",11,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0,0));
		this.teileListe.push(new Teil("e5",5,0,0,0,[this.getTeil(35,2),this.getTeil(36),this.getTeil(57),this.getTeil(58,36)],0,0,0));
		this.teileListe.push(new Teil("e55",55,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(5),this.getTeil(11),this.getTeil(54)],0,0,0));
		this.teileListe.push(new Teil("e56",56,0,0,0,[this.getTeil(24),this.getTeil(27),this.getTeil(16),this.getTeil(17),this.getTeil(55)],0,0,0));
		this.teileListe.push(new Teil("p2",2,0,0,0,[this.getTeil(22),this.getTeil(24),this.getTeil(27),this.getTeil(26),this.getTeil(56)],0,0,0));
		//Nicht-Kaufteile P3
		this.teileListe.push(new Teil("e20",20,0,0,0,[this.getTeil(28,5),this.getTeil(32),this.getTeil(59,2)],0,0,0));
		this.teileListe.push(new Teil("e15",15,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0,0));
		this.teileListe.push(new Teil("e9",9,0,0,0,[this.getTeil(33),this.getTeil(34,36),this.getTeil(35),this.getTeil(37),this.getTeil(38)],0,0,0));
		this.teileListe.push(new Teil("e29",29,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(9),this.getTeil(15),this.getTeil(20)],0,0,0));
		this.teileListe.push(new Teil("e12",12,0,0,0,[this.getTeil(32),this.getTeil(39)],0,0,0));
		this.teileListe.push(new Teil("e6",6,0,0,0,[this.getTeil(33),this.getTeil(34,36),this.getTeil(35),this.getTeil(36)],0,0,0));
		this.teileListe.push(new Teil("e30",30,0,0,0,[this.getTeil(24,2),this.getTeil(25,2),this.getTeil(6),this.getTeil(12),this.getTeil(29)],0,0,0));
		this.teileListe.push(new Teil("e31",31,0,0,0,[this.getTeil(24),this.getTeil(27),this.getTeil(16),this.getTeil(17),this.getTeil(30)],0,0,0));
		this.teileListe.push(new Teil("p3",3,0,0,0,[this.getTeil(23),this.getTeil(24),this.getTeil(27),this.getTeil(26),this.getTeil(31)],0,0,0));
	}
	//liefert eine tiefe Kopie eines Bauteiles aus dem Katalog zur�ck und setzt optional dessen Anzahl
	getTeil(id:number,anzahl:number=1):Teil{
		for(let i=0;i<this.teileListe.length;i++){
			if(this.teileListe[i].id===id){
				return this.tiefeCopy(this.teileListe[i],anzahl);
			}
		}
		return null;
	}
	//liefert eine tiefe Kopie eines beliebigen Bauteiles zur�ck und setzt dessen Anzahl
	tiefeCopy(teil:Teil,anzahl:number):Teil{
		let nteil=teil.getCopy();
		nteil.anzahl=anzahl;
		nteil.bedarfPeriode=[teil.bedarfPeriode[0],teil.bedarfPeriode[1],teil.bedarfPeriode[2],teil.bedarfPeriode[3]];
		return nteil;
	}
	//f�gt ein Bauteil einer Liste hinzu, ist dieses schon in dieser vorhanden wird desssen Anzahl hochgez�hlt
	add(teil:Teil,liste:Array<Teil>,periode:number){
		for(let i=0;i<liste.length;i++){
			if(liste[i].id===teil.id){
				liste[i].anzahl+=teil.anzahl;
				liste[i].bedarfPeriode[periode]+=teil.bedarfPeriode[periode];
				return;
			}
		}
		liste.push(teil);
	}
	//filtert aus einer Liste alle Kaufteile heraus
	getKaufteile(liste:Array<Teil>):Array<Teil>{
		let nliste:Array<Teil>=new Array<Teil>();
		liste.forEach(pos=>{
			if(pos.bauteile.length===0){
				nliste.push(pos);
			}
		})
		return nliste;
	}
	//wird durch das event "keyup" aus dem Template gerufen und f�hrt die einzelnen Schritte der eigentlichen Berechnung aus
	aendern(){
		this.gesamtListe=[];
		this.teileberechnen(this.getTeil(1),0,this.gesamtListe,0);
		this.teileberechnen(this.getTeil(2),0,this.gesamtListe,0);
		this.teileberechnen(this.getTeil(3),0,this.gesamtListe,0);
		let inputs=["11","12","13","14","21","22","23","24","31","32","33","34"];
		for(let i=0;i<inputs.length;i++){
			let input:string = (<HTMLInputElement>document.getElementById("i"+inputs[i])).value;
			let number:number = (<any>input) * 1;
			if (isNaN(number)) {
				window.alert("keine zul�ssige Eingabe");
				return;
			}
			else{
				let teil:Teil=this.getTeil((<any>inputs[i][0])*1);
				let periode:number=(<any>inputs[i][1])*1;
				let liste:Array<Teil>=new Array<Teil>();
				this.teileberechnen(teil,number,this.gesamtListe,periode-1);
			}
		}
		this.reichweiteBerechnen(this.gesamtListe);
		this.bestellmengeBerechnen(this.gesamtListe);
		this.ergebnisListe=this.getKaufteile(this.gesamtListe);
		this.ergebnisListe.sort((a,b)=>{return a.id-b.id});
	}
	//berechnet die Reichweite des jeweiligen Bauteiles
	reichweiteBerechnen(liste:Array<Teil>){
		for(let i=0;i<liste.length;i++){
			let teil:Teil=liste[i];
			if(teil.lagerstand-teil.bedarfPeriode[0]<=0){
				if(teil.lagerstand===0){
					teil.reichweite=0;
				}
				else {
					teil.reichweite = 0 + teil.lagerstand / teil.bedarfPeriode[0];
				}
			}
			else if(teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]<=0){
				if((teil.lagerstand-teil.bedarfPeriode[0])===0){
					teil.reichweite=1;
				}
				else {
					teil.reichweite = 1 + (teil.lagerstand - teil.bedarfPeriode[0]) / teil.bedarfPeriode[1];
				}
			}
			else if(teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]-teil.bedarfPeriode[2]<=0){
				if((teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1])===0){
					teil.reichweite=2;
				}
				else {
					teil.reichweite = 2 + (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1]) / teil.bedarfPeriode[2];
				}
			}
			else if(teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]-teil.bedarfPeriode[2]-teil.bedarfPeriode[3]<=0){
				if((teil.lagerstand-teil.bedarfPeriode[0]-teil.bedarfPeriode[1]-teil.bedarfPeriode[2])===0){
					teil.reichweite=3;
				}
				else {
					teil.reichweite = 3 + (teil.lagerstand - teil.bedarfPeriode[0] - teil.bedarfPeriode[1] - teil.bedarfPeriode[2]) / teil.bedarfPeriode[3];
				}
			}
			else{
				teil.reichweite=4;
			}
			teil.reichweite=1*(<any>teil.reichweite.toString().substring(0,6));
		}


	}
	//berechnet die n�tige Bestellmenge, im Moment wird bestellt, sobald die Reichweite unter der Lieferzeit+Abweichung liegt
	bestellmengeBerechnen(liste:Array<Teil>){
		for(let i=0;i<liste.length;i++){
			let teil:Teil=liste[i];
			let bedarf:number=teil.bedarfPeriode[0]+teil.bedarfPeriode[1]+teil.bedarfPeriode[2]+teil.bedarfPeriode[3]
			if(teil.reichweite-(teil.lieferzeitNormal+teil.lieferAbweichung)<1){
				teil.bestellmenge=(-1)*(teil.lagerstand-bedarf);
				if(teil.bestellmenge<teil.rabattmenge){
					teil.bestellmenge=teil.rabattmenge;
				}
			}
		}
	}
}

angular.module("BestellverwaltungModule").controller("BestellverwaltungController",[BestellverwaltungController]);