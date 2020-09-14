/*
Napraviti klasu Cipela koja sadrži atribute: naziv, broj cipele i niz prepravki
koje treba obaviti na cipeli.
Napraviti odgovarajući konstruktor, getere i setere.
Napraviti metodu zalepi koja po pozivu na ekranu ispisuje “Zalepljena cipela”.
Napraviti metodu prosiri koja po pozivu na ekranu ispisuje “Prosirena cipela”.
Napraviti metodu usij koja po pozivu na ekranu ispisuje “Usivena cipela”.
Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase
Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi,
proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki)
zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se
metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u
suprotno se na ekranu ispisuje “Nepoznata prepravka”.
*/
export class Cipela {

    constructor (ime, brCip, nizPrep) {
        this._naziv = ime;
        this._brojCipele = brCip;
        this._nizPrepravki = nizPrep;
    }
    set naziv (ime) {
        this._naziv = ime;
    }
    set brojCipele (brCip) {
        this._brojCipele = brCip;
    }
    set nizPrepravki (nizPrep) {
        this._nizPrepravki = nizPrep;
    }
    get naziv () {
        return this._naziv;
    }
    get brojCipele () {
        return this._brojCipele;
    }
    get nizPrepravki () {
        return this._nizPrepravki;
    }
    zalepi() {
        console.log("Cipela zalepljena!");
    }
    prosiri() {
        console.log("Cipela proširena!");
    }
    usij() {
        console.log("Cipela ušivena!");
    }
}