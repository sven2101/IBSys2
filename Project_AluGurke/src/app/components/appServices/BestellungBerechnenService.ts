/**
 * Created by Max on 04.11.2015.
 */
class BestellungBerechnenService{

    bestellService:BestellService;
    newTeileService:NewTeileService;

    constructor(BestellService:BestellService, NewTeileService:NewTeileService) {
        this.bestellService = BestellService;
        this.newTeileService = NewTeileService;
    }

    getReichweite(kTeilId:number,aktuellePeriode:number,multiplikator:number,verbrauch:Array<number>){
        return this.reichweiteBerechenen(this.timeLineGenerieren(kTeilId,aktuellePeriode,multiplikator,verbrauch));
    }
    getBestellung(kTeilId:number,aktuellePeriode:number,multiplikator:number,verbrauch:Array<number>){

        return this.bestellungenGenerieren(kTeilId,aktuellePeriode,multiplikator,verbrauch);
    }
    getTimeLine(kTeilId:number,aktuellePeriode:number,multiplikator:number,verbrauch:Array<number>){
        return this.timeLineGenerieren(kTeilId,aktuellePeriode,multiplikator,verbrauch);
    }

    bestellungenSuchen(teilId:number):Array<ZugangBestellung>{
        let temp=new Array<ZugangBestellung>();
        for(let i=0;i<this.bestellService.zugangBestellungen.length;i++){
            if(this.bestellService.zugangBestellungen[i].teil_id===teilId){
                temp.push(this.bestellService.zugangBestellungen[i]);
            }
        }
        return temp;
    }

    kaufTeilSuchen(teilId:number):NewKaufTeil{
        let temp=this.newTeileService.alleKaufteile;
        for(let i=0;i<temp.length;i++){
            if(temp[i].id===teilId){
                return temp[i];
            }
        }
    }

    timeLineGenerieren(kTeilId:number,aktuellePeriode:number,x:number,verbrauch:Array<number>){
        let kTeil=this.kaufTeilSuchen(kTeilId);
        let multiplikator=x;
        let bestellungen=this.bestellungenSuchen(kTeilId);
        let timeline=Array<number>();
        timeline=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let periode=1;
        let lagerstand=kTeil.lagerMenge+400;
        for(let i=0;i<bestellungen.length;i++){
            let liefertermin=kTeil.wbz+multiplikator*kTeil.wbzAbw-(aktuellePeriode-bestellungen[i].bestellPeriode);
            timeline[Math.round(liefertermin*5)]=bestellungen[i].menge;
        }
        for(let i=0;i<timeline.length;i++){
            lagerstand=lagerstand-Math.round(verbrauch[periode-1]/5);

            timeline[i]+=lagerstand;
            lagerstand=timeline[i];
            if(i==4||i==9||i==14||i==19){
                periode++;
            }
        }
        return timeline;
    }

    reichweiteBerechenen(timeline:Array<number>){
        let reichweite=0;
        for(let i=0;i<timeline.length;i++){
            if(timeline[i]<0){
                if(i<timeline.length-1){
                    if(timeline[i+1]<0){
                        break;
                    }
                }
            }
            else{
                reichweite+=0.2;
            }
        }
        return reichweite;
    }

    bestellungenGenerieren(kTeilId:number,aktuellePeriode:number,x:number,verbrauch:Array<number>){
        let kTeil=this.kaufTeilSuchen(kTeilId);
        let multiplikator=x;
        let bestellungen=this.bestellungenSuchen(kTeilId);
        //bestellungen.push(new ZugangBestellung(35,false,42,500,1,null,0,0,0,0));
        bestellungen.push(new ZugangBestellung(35,false,42,900,2,null,0,0,0,0));
        let timeline=Array<number>();
        timeline=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let periode=1;
        let lagerstand=kTeil.lagerMenge+400;
        for(let i=0;i<bestellungen.length;i++){
            let liefertermin=kTeil.wbz+multiplikator*kTeil.wbzAbw-(aktuellePeriode-bestellungen[i].bestellPeriode);
            timeline[Math.round(liefertermin*5)]=bestellungen[i].menge;
        }
        for(let i=0;i<timeline.length;i++){
            lagerstand=lagerstand-Math.round(verbrauch[periode-1]/5);

            timeline[i]+=lagerstand;
            lagerstand=timeline[i];
            if(i==4||i==9||i==14||i==19){
                periode++;
            }
        }
        let reichweite=0;
        for(let i=0;i<timeline.length;i++){
            if(timeline[i]<0){
                if(i<timeline.length-1){
                    if(timeline[i+1]<0){
                        break;
                    }
                }
            }
            else{
                reichweite+=0.2;
            }
        }
        if(reichweite<kTeil.wbz+multiplikator*kTeil.wbzAbw){
            //Eil
            let menge=0;
            for(let i=reichweite*5;i<timeline.length&&i<(reichweite+kTeil.wbz+multiplikator*kTeil.wbzAbw)*5;i++){
                if(timeline[Math.round(i)]<0){
                    menge+=timeline[Math.round(i)]*-1;
                }
            }
            if(menge*2>kTeil.discontMenge&&menge<kTeil.discontMenge){
                menge=kTeil.discontMenge;
            }
            return new NeuBestellung(true,kTeilId,menge,0);
        }
        if(reichweite-1<kTeil.wbz+multiplikator*kTeil.wbzAbw){
            //Normal
            let menge=0;
            for(let i=reichweite*5;i<timeline.length&&i<(reichweite+kTeil.wbz+multiplikator*kTeil.wbzAbw)*5;i++){
                if(timeline[Math.round(i)]<0){
                    menge+=timeline[Math.round(i)]*-1;
                }
            }
            if(menge*2>kTeil.discontMenge&&menge<kTeil.discontMenge){
                menge=kTeil.discontMenge;
            }
            return new NeuBestellung(false,kTeilId,menge,0);
        }
        return null;
    }
}
angular.module('app').factory('BestellungBerechnenService', ['BestellService','NewTeileService', (BestellService,NewTeileService) => new BestellungBerechnenService(BestellService,NewTeileService)]);