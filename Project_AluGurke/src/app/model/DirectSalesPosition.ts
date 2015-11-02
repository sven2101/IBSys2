/**
 * Created by sven_ on 28.10.2015.
 */
class DirectSalesPosition {
    id: number;
    menge: number;
    preis: number;
    konventionalstrafe:number;


    constructor(id:number,periode:number,menge:number,konventionalstrafe:number){
        this.id = id;
        this.menge = menge;
        this.preis = periode;
        this.konventionalstrafe = konventionalstrafe;
    }
}