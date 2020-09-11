//1. DEFINISEMO KLASU
//2. NAPRAVIMO KONSTRUKTOR
//3. NAPRAVIMO SETERE ZA SVA POLJA
//4. NAPRAVIMO GETERE ZA SVA POLJA

export class Auto {

    constructor(mar, mod, b, ik) {
        //pristupamo elementima preko setera i getera 
        this.marka = mar;
        this.model = mod;
        this.boja = b;
        this.imaKrov = ik;
    }
    //seter postavlja vrednot 
    set marka(m) {
        this._marka = m;
    }

    /* METODIMA KOJI SU GETERI I SETERI PRISTUPAMO KAO POLJIMA A NE KAO FUNKCIJAMA */

    //geter vraca vrednost 
    //ne prosledjujemo mu nista
    get marka() {
        return this._marka;
    }

    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }

    set boja(b) {
        this._boja = b;
    }
    get boja() {
        return this._boja;
    }

    set imaKrov(ik) {
        this._imaKrov = ik;
    }
    get imaKrov() {
        return this._imaKrov;
    }
    //u klasama nema arrow funkcija
    sviraj() {
        console.log("beep beep!");
    }

}