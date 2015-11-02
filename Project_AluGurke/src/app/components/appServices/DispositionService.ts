/**
 * Created by Max on 28.10.2015.
 */
class DispositionService{

    dispositionP1:Array<DispositionModel>;
    dispositionP2:Array<DispositionModel>;
    dispositionP3:Array<DispositionModel>;
    models:Array<DispositionModel>;
    programmService:ProgrammService;
    newTeileService:NewTeileService;
    newBaumService:NewBaumService;
    auftragService:AuftragService;
    arbeitsplatzService:ArbeitsplatzService
    defaultWerte:Array<number>;
    map:{[key:number]:number;}

    constructor(ProgrammService,NewTeileService,NewBaumService,AuftragService,ArbeitsplatzService){
        this.programmService=ProgrammService;
        this.newTeileService= NewTeileService;
        this.newBaumService=NewBaumService;
        this.auftragService=AuftragService
        this.dispositionP1=new Array<DispositionModel>();
        this.dispositionP2=new Array<DispositionModel>();
        this.dispositionP3=new Array<DispositionModel>();
        this.models=new Array<DispositionModel>();
        this.arbeitsplatzService=ArbeitsplatzService;
        this.map={};
        this.defaultWerteSetzten();
        this.dispoP1rekursuiv(this.newBaumService.kinderBaum);
        this.dispoP2rekursuiv(this.newBaumService.damenBaum);
        this.dispoP3rekursuiv(this.newBaumService.herrenBaum);

        this.altLastenVerteilen(this.models);

        this.aendern();
    }
    defaultWerteSetzten(){
        this.map[1]=20;
        this.map[26]=70;
        this.map[51]=30;
        this.map[16]=70;
        this.map[17]=30;
        this.map[50]=30;
        this.map[4]=70;
        this.map[10]=100;
        this.map[49]=30;
        this.map[7]=70;
        this.map[13]=100;
        this.map[18]=100;

        this.map[2]=20;
        this.map[56]=30;
        this.map[55]=30;
        this.map[5]=70;
        this.map[11]=100;
        this.map[54]=30;
        this.map[8]=70;
        this.map[14]=100;
        this.map[19]=100;

        this.map[3]=20;
        this.map[31]=30;
        this.map[30]=30;
        this.map[6]=70;
        this.map[12]=100;
        this.map[29]=30;
        this.map[9]=70;
        this.map[15]=100;
        this.map[20]=100;
    }
    dispoP1(){
        let dispo=new Array<NewTeilKnoten>();

        let wurzel=this.newBaumService.kinderBaum;
        this.rekursiv(wurzel,dispo);
        this.dispositionP1=[];
        for(let i=0;i<dispo.length;i++){
            let temp=this.filter2(dispo[i].teil_id);
            if(temp==null){
                let x=new DispositionModel(this.filter(dispo[i].teil_id),this.programmService.getProgrammposition(1));
                this.dispositionP1.push(x);
                this.models.push(x);
            }
            else{
                this.dispositionP1.push(temp);
            }
        }
        this.dispositionP1.sort(function(a, b){return a.eTeil.id-b.eTeil.id});

    }
    dispoP2(){
        let dispo=new Array<NewTeilKnoten>();

        let wurzel=this.newBaumService.damenBaum;
        this.rekursiv(wurzel,dispo);
        this.dispositionP2=[];
        for(let i=0;i<dispo.length;i++){
            let temp=this.filter2(dispo[i].teil_id);
            if(temp==null){
                let x=new DispositionModel(this.filter(dispo[i].teil_id),this.programmService.getProgrammposition(2));
                this.dispositionP2.push(x);
                this.models.push(x);
            }
            else{
                this.dispositionP2.push(temp);
            }
        }
        this.dispositionP2.sort(function(a, b){return a.eTeil.id-b.eTeil.id});

    }
    dispoP3(){
        let dispo=new Array<NewTeilKnoten>();

        let wurzel=this.newBaumService.herrenBaum;
        this.rekursiv(wurzel,dispo);
        this.dispositionP3=[];
        for(let i=0;i<dispo.length;i++){
            let temp=this.filter2(dispo[i].teil_id);
            if(temp==null){
                let x=new DispositionModel(this.filter(dispo[i].teil_id),this.programmService.getProgrammposition(3));
                this.dispositionP3.push(x);
                this.models.push(x);
            }
            else{
                this.dispositionP3.push(temp);
            }
        }
        this.dispositionP3.sort(function(a, b){return a.eTeil.id-b.eTeil.id});

    }
    dispoP1rekursuiv(wurzel:NewTeilKnoten,oberModel:DispositionModel=null){
        let x=new DispositionModel(this.filter(wurzel.teil_id),this.programmService.getProgrammposition(1));
        if(wurzel.teil_id!=1||wurzel.teil_id!=2||wurzel.teil_id!=3){
            x.oberModel=oberModel;
        }
        x.geplanterLagerstand=this.map[x.eTeil.id];
        this.dispositionP1.push(x);
        //if(this.filter2(x.eTeil.id)==null){
            this.models.push(x);
        //}
        for(let i=0;i<wurzel.bauteile.length;i++){
            if(wurzel.bauteile[i].bauteile!=null){
                this.dispoP1rekursuiv(wurzel.bauteile[i],x);
            }
        }

    }
    dispoP2rekursuiv(wurzel:NewTeilKnoten,oberModel:DispositionModel=null){
        let x=new DispositionModel(this.filter(wurzel.teil_id),this.programmService.getProgrammposition(2));
        if(wurzel.teil_id!=1||wurzel.teil_id!=2||wurzel.teil_id!=3){
            x.oberModel=oberModel;
        }
        x.geplanterLagerstand=this.map[x.eTeil.id];
        this.dispositionP2.push(x);
        //if(this.filter2(x.eTeil.id)==null){
            this.models.push(x);
        //}
        for(let i=0;i<wurzel.bauteile.length;i++){
            if(wurzel.bauteile[i].bauteile!=null){
                this.dispoP2rekursuiv(wurzel.bauteile[i],x);
            }
        }

    }
    dispoP3rekursuiv(wurzel:NewTeilKnoten,oberModel:DispositionModel=null){
        let x=new DispositionModel(this.filter(wurzel.teil_id),this.programmService.getProgrammposition(3));
        if(wurzel.teil_id!=1||wurzel.teil_id!=2||wurzel.teil_id!=3){
            x.oberModel=oberModel;
        }
        x.geplanterLagerstand=this.map[x.eTeil.id];
        this.dispositionP3.push(x);
        //if(this.filter2(x.eTeil.id)==null){
            this.models.push(x);
        //}
        for(let i=0;i<wurzel.bauteile.length;i++){
            if(wurzel.bauteile[i].bauteile!=null){
                this.dispoP3rekursuiv(wurzel.bauteile[i],x);
            }
        }
    }
    filter(x:number){
        let y=this.newTeileService.alleErzeugnisse;
        for(let i=0;i<y.length;i++){
            if(y[i].id==x){
                return y[i];
            }
        }
    }
    filter2(x:number){
        for(let i=0;i<this.models.length;i++){
            if(this.models[i].eTeil.id==x){
                return this.models[i];
            }
        }
        return null;
    }

    rekursiv(knoten:NewTeilKnoten,teile:Array<NewTeilKnoten>){
        if(knoten.hatBauteile()){

            for(let i=0;i<knoten.bauteile.length;i++){
                this.rekursiv(knoten.bauteile[i],teile);
            }
            teile.push(knoten);
        }
    }
    aendern() {
        let auftraege = new Array<Auftrag>();
        let auftraegeMFV =new Array<Auftrag>();
        let map:{[key:number]:number;}
        for (let i = 0; i < this.models.length; i++) {
            this.models[i].auftraege = [];
            if (isNaN(this.models[i].geplanterLagerstand)) {
                this.models[i].geplanterLagerstand = 0;
            }
            this.models[i].anzahl = Number(this.models[i].getProdProg()) + Number(this.models[i].getGeplanteLagermenge()) - (Number(this.models[i].getLagerMenge())+Number(this.models[i].getMaterialAufMaschine()+Number(this.models[i].getWarteschlange())));
            if (this.models[i].anzahl <= 0 || isNaN(this.models[i].anzahl)) {
                this.models[i].anzahl = 0;
            }
            else {
                let x = this.models[i].anzahl;
                let y = 0;
                while (x % Number(this.models[i].split) != 0) {
                    x -= 1;
                    y += 1;
                }
                for (let j = 0; j < Number(this.models[i].split); j++) {
                    let auftrag = new Auftrag(this.models[i].eTeil.id, y + x / Number(this.models[i].split), this.models[i].periode);
                    auftrag.setPriortaet(this.models[i].prioritaet);
                    y=0;
                    this.models[i].auftraege.push(auftrag);
                }
            }
        }
        for (let i = 0; i < this.models.length; i++) {
            auftraege = auftraege.concat(this.models[i].auftraege);
        }
        let auftraege2=new Array<Auftrag>();
        for (let i = 0; i < auftraege.length; i++) {
            let test=false;
            for (let j = 0; j < auftraege2.length; j++) {
                if(auftraege[i].erzeugnis_id==auftraege2[j].erzeugnis_id&&this.filter(auftraege2[j].erzeugnis_id).mehrfachVerwendung){
                    auftraege2[j].anzahl+=auftraege[i].anzahl;
                    test=true;
                    break;
                }
            }
            if(!test){
                auftraege2.push(auftraege[i]);
            }

        }
        this.auftragService.auftraegeSetzen(auftraege2);
        this.arbeitsplatzService.reset();
        for(let i=0;i<this.auftragService.auftraege.length;i++){
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftragSetzten(this.auftragService.auftraege[i]);
        }
    }
    altLastenVerteilen(models:Array<DispositionModel>){
        for(let i=0;i<this.auftragService.auftraegeAufMaschine.length;i++){
            for(let j=0;j<models.length;j++){
                if(models[j].eTeil.id==this.auftragService.auftraegeAufMaschine[i].erzeugnis_id){
                    models[j].auftragAufMaschine=this.auftragService.auftraegeAufMaschine[i];
                }
            }
        }
        for(let j=0;j<models.length;j++){
            models[j].auftragInWarteschlange=[];
            for(let i=0;i<this.auftragService.auftraegeInWarteschlange.length;i++){
                if(models[j].eTeil.id==this.auftragService.auftraegeInWarteschlange[i].erzeugnis_id){
                    models[j].auftragInWarteschlange.push(this.auftragService.auftraegeInWarteschlange[i]);
                }
            }
        }
    }

}
angular.module('app').factory('DispositionService', ["ProgrammService","NewTeileService","NewBaumService","AuftragService","ArbeitsplatzService",(ProgrammService,NewTeileService,NewBaumService,AuftragService,ArbeitsplatzService) => new DispositionService(ProgrammService,NewTeileService,NewBaumService,AuftragService,ArbeitsplatzService)]);