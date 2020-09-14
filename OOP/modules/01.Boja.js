/*
Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true
ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost
srednje talasne dužine.
*/

export class Boja {

    constructor( td, z, i) {
        this.talasnaDuzina = td;
        this.zasicenje = z;
        this.intenzitet = i;
    }
    set talasnaDuzina (td) {
        this._talsnaDuzina = td;
    }
    set zasicenje (z) {
        this._zasicenje = z;
    }
    set intenzitet (i) {
        this._intenzitet = i;
    }
    get talasnaDuzina () {
        return this._talsnaDuzina;
    }
    get zasicenje () {
        return this._zasicenje;
    }
    get intenzitet () {
        return this._intenzitet;
    }
}