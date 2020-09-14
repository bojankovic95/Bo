/*
Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća
najveću platu ranika.
Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona
ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
*/
export class Radnik {

    constructor (i, p) {
        this.ime = i;
        this.plata = p;
    }
    set ime (i) {
        this._ime = i;
    }
    set plata (p) {
        this._plata = p;
    }
    get ime () {
        return this._ime;
    }
    get plata () {
        return this._plata;
    }
}