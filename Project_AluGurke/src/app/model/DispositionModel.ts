


class DispositionModel{


    eTeil:NewErzeugnis;
    geplanterLagerstand:number;
    produktionsProgramm:ProgrammPosition;
    directSale:DirectSalesPosition;
    split:string;
    prioritaet:string;
    anzahl:number;
    periode:number;
    auftraege:Array<Auftrag>;
    auftragInWarteschlange:Array<Auftrag>;
    auftragAufMaschine:Auftrag;
    oberModel:DispositionModel;

    constructor(eTeil:NewErzeugnis,x:ProgrammPosition,y:DirectSalesPosition) {
        this.eTeil = eTeil;
        this.geplanterLagerstand = 50;
        this.split = "1";
        this.prioritaet = "normal";
        this.produktionsProgramm=x;
        this.anzahl=0;
        this.periode=1;
        this.auftraege=new Array<Auftrag>();
        this.auftragInWarteschlange=new Array<Auftrag>();
        this.directSale=y;

    }
    getWarteschlange(){
        let x=0;
        for(let i=0;i<this.auftragInWarteschlange.length;i++){
            x+=this.auftragInWarteschlange[i].anzahl;
        }
        if(this.eTeil.mehrfachVerwendung){
            return Math.round(x/3);
        }
        return x;
    }
    getMaterialAufMaschine(){
        if(this.auftragAufMaschine==null){
            return 0;
        }
        if(this.eTeil.mehrfachVerwendung){
            return Math.round(this.auftragAufMaschine.anzahl/3);
        }
        return this.auftragAufMaschine.anzahl;
    }
    getLagerMenge(){
        if(this.eTeil.mehrfachVerwendung){
            return Math.round(this.eTeil.lagerMenge/3);
        }
        return this.eTeil.lagerMenge;
    }
    getProdProg(){
        if(this.oberModel==null){
            return this.produktionsProgramm.menge+this.directSale.menge;
        }
        else{
            return this.oberModel.anzahl+this.oberModel.getWarteschlange();
        }

    }
    getGeplanteLagermenge(){
        return this.geplanterLagerstand;
    }
}