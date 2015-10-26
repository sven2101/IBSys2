/// <reference path="../../typeDefinitions/angular.d.ts" />

class DispositionController{

    $scope;
    auftragsService:AuftragService;
    newTeileService:NewTeileService;
    eTeile:Array<NewErzeugnis>;
    test:string;
    auftraege:Array<Auftrag>;
    map:{[key:number]:Auftrag;}
    constructor(scope,auftragsService,newTeileService){
        this.$scope=scope;
        this.auftragsService=auftragsService;
        this.newTeileService=newTeileService;
        this.eTeile=newTeileService.alleErzeugnisse;
        this.eTeile.sort((a,b)=>{return a.id-b.id});
        this.auftraege=new Array<Auftrag>();
        this.map={};
    }
    aendern(){
        this.map={};
        this.auftraege=[];
        for(let i=0;i<this.eTeile.length;i++){
            let anzahl=Number((<HTMLInputElement>document.getElementById("input_"+this.eTeile[i].id)).value);
            let split=Number((<HTMLInputElement>document.getElementById("select_"+this.eTeile[i].id)).value);
            if(!isNaN(anzahl)&&anzahl>0&&this.eTeile[i].lagerMenge<anzahl){
                let auftrag=new Auftrag(this.eTeile[i].id,anzahl-this.eTeile[i].lagerMenge,1);
                this.map[this.eTeile[i].id]=auftrag;
                let x=0;
                while((anzahl-this.eTeile[i].lagerMenge-x)%split!==0){
                    x+=1;
                }
                anzahl=(anzahl-this.eTeile[i].lagerMenge-x)/split;
                for(let j=0;j<split;j++){
                    let auftrag2=new Auftrag(this.eTeile[i].id,anzahl+x,1);
                    if(anzahl>0||x>0){
                        this.auftraege.push(auftrag2);
                    }
                    x=0;
                }
            }
        }
        this.auftragsService.auftraege=this.auftraege;
    }
}

angular.module("DispositionModule").controller("DispositionController",["$scope","AuftragService","NewTeileService",DispositionController]);

