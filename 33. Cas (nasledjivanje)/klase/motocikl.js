import {Vozilo} from "./vozilo.js";

export class Motocikl extends Vozilo{
    constructor(ti, bo, brt, c){
        super(ti, bo);
        this.brojTockova = brt;
        this.cena = c;
    }
    set brojTockova(brt){
        this._brojTockova = brt;
    }
    set cena(c){
        this._cena = c;
    }
    get brojTockova(){
        return this._brojTockova;
    }
    get cena(){
        return this._cena;
    }

    ispisiMotocikl(){
        console.log("Motocikl tipa " + this.tip + " boja " + this.boja + " broj tockova " + this.brojTockova + " kosta " + this.cena);
    }
}
