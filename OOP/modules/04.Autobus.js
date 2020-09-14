/*
Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o
broju sedišta u autobusu.
Napraviti konstruktor kome se prosleđuju odgovarajuće vrednosti.
Napraviti odgovarajuće getere i setere.
Napraviti metodu koja ispisuje podatke o autobusu.
Napraviti niz autobusa.
Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja
određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u
nizu autobusa.
Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima
najveći broj sedišta.
Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija
vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom
vraća false.
*/
export class Autobus {

    constructor (regBr, brSed) {
        this.registarskiBroj = regBr;
        this.brojSedista = brSed;
    }
    set registarskiBroj (regBr) {
        this._registarskiBroj = regBr;
    }
    set brojSedista (brSed) {
        this._brojSedista = brSed;
    }
    get registarskiBroj () {
        return this._registarskiBroj;
    }
    get brojSedista () {
        return this._brojSedista;
    }
    stampaj () {
        console.log(`Autobus ${this.registarskiBroj} ime ${this.brojSedista} sedećih mesta.`);
    }
}