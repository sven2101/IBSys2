/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../../model/ProgrammPosition.ts" />

class ProgrammService {
    produktionsprogramm: Array<ProgrammPosition>;

    constructor(){
        this.erzeugeProgrammPositionen();

}

    erzeugeProgrammPositionen() {
        this.produktionsprogramm = [
            new ProgrammPosition(1,1,100),
            new ProgrammPosition(1,2,100),
            new ProgrammPosition(1,3,100),
            new ProgrammPosition(1,4,100),

            new ProgrammPosition(2,1,100),
            new ProgrammPosition(2,2,100),
            new ProgrammPosition(2,3,100),
            new ProgrammPosition(2,4,100),

            new ProgrammPosition(3,1,100),
            new ProgrammPosition(3,2,100),
            new ProgrammPosition(3,3,100),
            new ProgrammPosition(3,4,100),
        ];
    }

    getProgrammposition(id: number,periode: number=1) {
        for (var i = 0; i < this.produktionsprogramm.length; i++) {
            if ( this.produktionsprogramm[i].id === id && this.produktionsprogramm[i].periode === periode) {
                return this.produktionsprogramm[i];
            }
        }
    }

}

angular.module('app').factory('ProgrammService', [() => new ProgrammService()]);