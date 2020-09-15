import {Osoba} from "./osoba.js"

export class Zaposleni extends Osoba{
    constructor(i, p, gr, pl, poz){
        super(i, p, gr);
        this.plata = pl;
        this.pozicija = poz;
    }
    set plata(pl){
        this._plata = pl;
    }
    set pozicija(poz){
        this._pozicija = poz;
    }
    get plata(){
        return this._plata;
    }
    get pozicija(){
        return this._pozicija;
    }

    ispisiOsobu(){
        console.log("Ime: " + this.ime + " prezime: " + this.prezime + " godina rodjenja: " + this.godRodjenja + " plata: " + this.plata + " pozicija: " + this.pozicija)
    }
}
