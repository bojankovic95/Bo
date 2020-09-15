import {Vozilo} from "./vozilo.js"

export class Automobil extends Vozilo{

    constructor(ti, bo, rb){
        super(ti, bo); //prosledjujemo iz roditeljskog konstruktora
        this.registarskiBroj = rb; //dodajemo njegov seter 
    }

    set registarskiBroj(rb){
        this._registarskiBroj = rb;
    }

    get registarskiBroj(){
        return this._registarskiBroj;
    }

    ispisiAuto(){
        console.log(`Auto: ${this.tip}`);
    }
}