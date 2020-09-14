/*
Kreirati klasu FMRadio koja sadrđi atribute o stanici, frekvenciji i jačini tona.
Klasa treba da sedrži odgovarajući konstruktor, getere i setere koji
zadovoljavaju uslov da se frekvencija nalazi u opsegu od 87.5MHz do
108MHz. Jačina zvuka treba da se nalazi u opsegu od 0 do 20.
Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja
po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen
simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1.
Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20
(Ova metoda ništa ne vraća, samo promeni vrednost zvuka).
Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na
najmanju moguću frekvenciju (na 87.5MHz).
(I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)
Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a
ona vraća koja je prosečna frekvencija prosleđenih radio stanica.
Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija
vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
Testirati rad napravljenih metoda.
*/
export class FMRadio {

    constructor (stan, freq, jacina) {
        this._stanica = stan;
        if (freq >= 87.5 && freq <=108) {
            this._frekvencija = freq;
        } else {
            alert("Frekvencija mora da bude izmedju 87.5MHz i 108MHz!")
        }
        if (jacina >= 0 && jacina <= 20) {
            this._jacinaTona = jacina;
        } else {
            alert("Jacina tona mora da bude izmedju 0 i 20!")
        }
    }
    set stanica (stan) {
        this._stanica = stan;
    }
    set frekvencija (freq) {
        if (freq >= 87.5 && freq <=108) {
            this._frekvencija = freq;
        } else {
            alert("Frekvencija mora da bude izmedju 87.5MHz i 108MHz!")
        }
    }
    set jacinaTona (jacina) {
        if (jacina >= 0 && jacina <= 20) {
            this._jacinaTona = jacina;
        } else {
            alert("Jacina tona mora da bude izmedju 0 i 20!")
        }
    }
    get stanica () {
        return this._stanica;
    }
    get frekvencija () {
        return this._frekvencija;
    }
    get jacinaTona () {
        return this._jacinaTona;
    }
    promeniZvuk (smer) {
        if (smer == "+" || smer == "-") {
            if (smer == "+" && this.jacinaTona < 20) {
                this._jacinaTona++;
                console.log("Pojačavam!");
            } else if (smer == "-" ** this.jacinaTona > 0) {
                this._jacinaTona--;
                console.log("Utišavam!");
            }
        } else {
            alert ("Prosledite ovom metodu '+' ili '-' ili se udaljite od potenciometra!");
        }
    }
    frekvencijaIskljuci () {
        this._frekvencija = 87.5;
    }
}