/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../../model/ProgrammPosition.ts" />
    /// <reference path="../../model/DirectSalesPosition.ts" />

class ProgrammService {
    produktionsprogramm: Array<ProgrammPosition>;
    directsales:{[key:number]:DirectSalesPosition;}

    constructor() {
        this.directsales = {};
        this.erzeugeProgrammPositionen();
        this.erzeugeDirectsalesPosition();
    }

    erzeugeProgrammPositionen() {
        this.produktionsprogramm = [
            new ProgrammPosition(1,1,150),
            new ProgrammPosition(1,2,150),
            new ProgrammPosition(1,3,150),
            new ProgrammPosition(1,4,150),

            new ProgrammPosition(2,1,150),
            new ProgrammPosition(2,2,150),
            new ProgrammPosition(2,3,150),
            new ProgrammPosition(2,4,150),

            new ProgrammPosition(3,1,150),
            new ProgrammPosition(3,2,150),
            new ProgrammPosition(3,3,150),
            new ProgrammPosition(3,4,150),
        ];
    }


    erzeugeDirectsalesPosition() {
    this.directsales[1]=new DirectSalesPosition(1,0,0,0);
    this.directsales[2]=new DirectSalesPosition(2,0,0,0);
    this.directsales[3]=new DirectSalesPosition(3,0,0,0);
    }

    getProgrammposition(id: number,periode: number=1) {
        for (var i = 0; i < this.produktionsprogramm.length; i++) {
            if ( this.produktionsprogramm[i].id === id && this.produktionsprogramm[i].periode === periode) {
                if(this.produktionsprogramm[i].menge<0 || angular.isUndefined(this.produktionsprogramm[i].menge))
                {
                  this.produktionsprogramm[i].menge = 0;
                }
                return this.produktionsprogramm[i];
            }
        }
    }

    getDirectsalesPosition(id:number)
    {
        if(this.directsales[id].menge<0 || angular.isUndefined(this.directsales[id].menge))
        {
            this.directsales[id].menge = 0;
        }
        if(this.directsales[id].preis<0)
        {
            this.directsales[id].preis = 0;
        }
        if(this.directsales[id].konventionalstrafe<0)
        {
            this.directsales[id].konventionalstrafe = 0;
        }

      return this.directsales[id];
    }
}

angular.module('app').factory('ProgrammService', [() => new ProgrammService()]);