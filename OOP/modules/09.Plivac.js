/*
Kreirati klasu Plivac koja sadrži ime, godinu rodjenja i najbolji rezultat ove
godine.
Napraviti odovarajuće konstruktore, getere i setere.
Napraviti metodu ispisi koja ispisuje sve podatke o plivaču.
Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata
ove godine.
Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija
vraća niz onih plivača koji ispunjavaju ovu normu.
Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke
o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom
funkcijom.
*/
export class Plivac {

    constructor(im, godRod, najRez) {
        this._ime = im;
        this._godinaRodjenja = godRod;
        this._najboljiRezultatGodine = najRez;
    }
    set ime (im) {
        this._ime = im;
    }
    set godinaRodjenja (godRod) {
        this._godinaRodjenja = godRod;
    }
    set najboljiRezultatGodine (najRez) {
        this._najboljiRezultatGodine = najRez;
    }
    get ime () {
        return this._ime;
    }
    get godinaRodjenja () {
        return this._godinaRodjenja;
    }
    get najboljiRezultatGodine () {
        return this._najboljiRezultatGodine;
    }
    stampaj () {
        console.log(`Plivač ${this._ime}, rođen ${this._godinaRodjenja} godine ima najbolji rezultat godine od ${this._najboljiRezultatGodine} s.`);
    }
}