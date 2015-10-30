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
    auftragsService:AuftragService;

    constructor(ProgrammService,NewTeileService,NewBaumService,AuftragService){
        this.programmService=ProgrammService;
        this.newTeileService= NewTeileService;
        this.newBaumService=NewBaumService;
        this.auftragsService=AuftragService
        this.dispositionP1=new Array<DispositionModel>();
        this.dispositionP2=new Array<DispositionModel>();
        this.dispositionP3=new Array<DispositionModel>();
        this.models=new Array<DispositionModel>();
        this.dispoP1();
        this.dispoP2();
        this.dispoP3();
        this.aendern();
    }
    dispoP1(){
        let dispo=new Array<NewTeilKnoten>();
        let wurzel=this.newBaumService.kinderBaum;
        this.rekursiv(wurzel,dispo);
        this.dispositionP1=[];
        for(let i=0;i<dispo.length;i++){
            this.dispositionP1.push(new DispositionModel(this.filter(dispo[i].teil_id),this.programmService.getProgrammposition(1)));
        }
        this.models=this.dispositionP1.concat(this.dispositionP2.concat(this.dispositionP3));
    }
    dispoP2(){
        let dispo=new Array<NewTeilKnoten>();
        let wurzel=this.newBaumService.damenBaum;
        this.rekursiv(wurzel,dispo);
        this.dispositionP2=[];
        for(let i=0;i<dispo.length;i++){
            this.dispositionP2.push(new DispositionModel(this.filter(dispo[i].teil_id),this.programmService.getProgrammposition(2)));
        }
        this.models=this.dispositionP1.concat(this.dispositionP2.concat(this.dispositionP3));
    }
    dispoP3(){
        let dispo=new Array<NewTeilKnoten>();
        let wurzel=this.newBaumService.herrenBaum;
        this.rekursiv(wurzel,dispo);
        this.dispositionP3=[];
        for(let i=0;i<dispo.length;i++){
            this.dispositionP3.push(new DispositionModel(this.filter(dispo[i].teil_id),this.programmService.getProgrammposition(3)));
        }
        this.models=this.dispositionP1.concat(this.dispositionP2.concat(this.dispositionP3));
    }
    filter(x:number){
        let y=this.newTeileService.alleErzeugnisse;
        for(let i=0;i<y.length;i++){
            if(y[i].id==x){
                return y[i];
            }
        }
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
        for (let i = 0; i < this.models.length; i++) {
            this.models[i].auftraege = [];
            if (isNaN(this.models[i].geplanterLagerstand)) {
                this.models[i].geplanterLagerstand = 0;
            }
            this.models[i].anzahl = Number(this.models[i].produktionsProgramm.menge) + Number(this.models[i].geplanterLagerstand) - Number(this.models[i].eTeil.lagerMenge)-Number(this.models[i].getMaterialAufMaschine()-Number(this.models[i].getWarteschlange()));
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
                    this.models[i].auftraege.push(auftrag);
                    y = 0;
                }
            }
        }
        for (let i = 0; i < this.models.length; i++) {
            auftraege = auftraege.concat(this.models[i].auftraege);
        }
        this.auftragsService.auftraegeSetzen(auftraege);
    }
}
angular.module('app').factory('DispositionService', ["ProgrammService","NewTeileService","NewBaumService","AuftragService",(ProgrammService,NewTeileService,NewBaumService,AuftragService) => new DispositionService(ProgrammService,NewTeileService,NewBaumService,AuftragService)]);