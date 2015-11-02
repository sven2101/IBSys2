/**
 * Created by Max on 31.10.2015.
 */


class KapazitaetsplanungService {

    arbeitsplatzService:ArbeitsplatzService;
    dispositionService:DispositionService;
    auftragService:AuftragService
    ergebnis:Array<Arbeitsplatz>;
    models:Array<KapazitaetModel>;

    constructor(ArbeitsplatzService:ArbeitsplatzService,AuftragService:AuftragService,DispositionService:DispositionService) {
        this.arbeitsplatzService = ArbeitsplatzService;
        this.auftragService=AuftragService;
        this.dispositionService=DispositionService;
        this.ergebnis=new Array<Arbeitsplatz>();
        this.models=new Array<KapazitaetModel>();
        this.models.push(new KapazitaetModel(new Arbeitsplatz(5,0,0,0)));
        this.dispositionService.aendern();
        this.aendern();
        //this.zeitSetzten();

    }
    aendern(){

        for(let i=0;i<this.models.length;i++){
            if(this.models[i].name[0]!="5"){
                if(isNaN(this.models[i].ueberstunden1)||this.models[i].ueberstunden1<0){
                    this.models[i].ueberstunden1=0;
                }
                if(isNaN(this.models[i].ueberstunden2)||this.models[i].ueberstunden2<0){
                    this.models[i].ueberstunden2=0;
                }
                if(isNaN(this.models[i].ueberstunden3)||this.models[i].ueberstunden3<0){
                    this.models[i].ueberstunden3=0;
                }
                if(this.models[i].ueberstunden1>240){
                    this.models[i].ueberstunden1=240;
                }
                if(this.models[i].ueberstunden2>240){
                    this.models[i].ueberstunden2=240;
                }
                if(this.models[i].ueberstunden3>240){
                    this.models[i].ueberstunden3=240;
                }
                this.models[i].zeitVerfuegung=Number(this.models[i].anzahlSchichten)*2400+(Number(this.models[i].ueberstunden1)+Number(this.models[i].ueberstunden2)+Number(this.models[i].ueberstunden3))*5;
            }
            else
            {
                this.models[i].zeitVerfuegung=0;
            }

        }
        this.ergebnis=this.mergeArbeitsplaetze();
        //this.dispositionP1.sort(function(a, b){return a.eTeil.id-b.eTeil.id});
        this.models.sort(function(a,b){return Number(a.name.split("_")[0])-Number(b.name.split("_")[0])});
        return this.models;

    }
    zeitSetzten(){
        for(let i=0;i<this.models.length;i++){
            let model=this.models[i];
            let x=0;
            while(model.arbeitsplatz.arbeitszeit>model.zeitVerfuegung||(model.anzahlSchichten=="3"&&model.ueberstunden1==240&&model.ueberstunden2==240&&model.ueberstunden3==240)){
                if(x>1000){
                    break;
                }
                x++;
                if(model.arbeitsplatz.arbeitszeit<=model.zeitVerfuegung+1200){
                    if(model.anzahlSchichten=="1"){
                        model.ueberstunden1=Math.round((model.arbeitsplatz.arbeitszeit-model.zeitVerfuegung)/5);
                        model.zeitVerfuegung=2400+model.ueberstunden1*5;
                    }
                    else if(model.anzahlSchichten=="2"){
                        model.ueberstunden2=Math.round((model.arbeitsplatz.arbeitszeit-model.zeitVerfuegung)/5);
                        model.ueberstunden1=240;
                        model.zeitVerfuegung=6000+model.ueberstunden2*5;
                    }
                    else if(model.anzahlSchichten=="3"){
                        model.ueberstunden3=Math.round((model.arbeitsplatz.arbeitszeit-model.zeitVerfuegung)/5);
                        model.ueberstunden1=240;
                        model.ueberstunden2=240;
                        model.zeitVerfuegung=9600+model.ueberstunden2*5;
                    }
                }
                else{
                    if(model.anzahlSchichten="1"){
                        model.anzahlSchichten="2";
                        model.zeitVerfuegung+=2400;
                    }
                    else if(model.arbeitsplatz.arbeitszeit<=10800){
                        model.anzahlSchichten="3";
                        model.zeitVerfuegung+=2400;
                    }
                    else{
                        model.zeitVerfuegung=10800;
                        model.anzahlSchichten="3";
                        model.ueberstunden1=240;
                        model.ueberstunden2=240;
                        model.ueberstunden3=240;
                    }
                }
            }

        }
    }

    mergeArbeitsplaetze(){
        this.arbeitsplatzService.reset();
        for(let i=0;i<this.auftragService.auftraege.length;i++){
            this.arbeitsplatzService.map[this.auftragService.auftraege[i].erzeugnis_id].auftragSetzten(this.auftragService.auftraege[i]);
        }
        let liste =this.arbeitsplatzService.fertigungsreihen;
        let ergebnisListe=new Array<Arbeitsplatz>();
        for(let i=0;i<liste.length;i++){
            let listeliste=liste[i].alleArbeitsplaetze();
            for(let j=0;j<listeliste.length;j++){
                let temp=this.search(ergebnisListe,listeliste[j]);
                if(temp===null){
                    var x=new Arbeitsplatz(listeliste[j].id,listeliste[j].erzeugnis_id,0,0);
                    x.auftraege=listeliste[j].auftraege;
                    x.arbeitsplatzFremdeAuftraege=listeliste[j].arbeitsplatzFremdeAuftraege;
                    x.arbeitszeit=listeliste[j].arbeitszeit;
                    //x.arbeitszeit+=666;
                    ergebnisListe.push(x);
                }
                else{
                    temp.arbeitszeit+=listeliste[j].arbeitszeit;
                    //x.arbeitszeit+=999;
                    temp.auftraege=temp.auftraege.concat(listeliste[j].auftraege);
                    temp.arbeitsplatzFremdeAuftraege=temp.arbeitsplatzFremdeAuftraege.concat(listeliste[j].arbeitsplatzFremdeAuftraege);
                    temp.name+=","+listeliste[j].erzeugnis_id;
                }
            }
        }
        for(let i=0;i<ergebnisListe.length;i++){
            let test:boolean=true;
            for(let j=0;j<this.models.length;j++){
                if(this.models[j].arbeitsplatz.name[0]==ergebnisListe[i].name[0]&&this.models[j].arbeitsplatz.name[1]==ergebnisListe[i].name[1]){
                    this.models[j].arbeitsplatz=ergebnisListe[i];
                    this.models[j].setName();
                    test=false;
                    break;
                }
            }
            if(test){
                this.models.push(new KapazitaetModel(ergebnisListe[i]));
            }
        }
        return ergebnisListe;
    }
    contains(a, obj){
        for (let i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }
    search(a:Array<Arbeitsplatz>,obj:Arbeitsplatz){
        for(let i=0;i<a.length;i++){
            if(a[i].id===obj.id){
                return a[i];
            }
        }
        return null;
    }
}

angular.module('app').factory('KapazitaetsplanungService', ["ArbeitsplatzService","AuftragService","DispositionService",(ArbeitsplatzService,AuftragService,DispositionService) => new KapazitaetsplanungService(ArbeitsplatzService,AuftragService,DispositionService)]);