/*
Kreirati kalsu Automobil koji ima podatke o maksimalnoj brzini, minimalnoj
brzini i trenutnoj brzini.
Pri stvaranju novog automobila (u konstruktoru) zadajete minimalnu vrednost
brzine, maksimalnu vrednost brzine i trenutnu vrednost brzine.
Napraviti odgovarajuće setere i getere.
Napraviti metodu ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati
trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu
postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu
vrednost.
Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti
trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu
postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za
traženu vrednost.
*/
export class Automobil {

    constructor(maksBr, minBr, trenutna) {
        this._maksimalnaBrzina = maksBr;
        this._minimalnaBrzina = minBr;
        this._trenutnaBrzina = trenutna;
    }
    set maksimalnaBrzina (maksBr) {
        this._maksimalnaBrzina = maksBr;
    }
    set minimalnaBrzina (minBr) {
        this._minimalnaBrzina = minBr;
    }
    set trenutnaBrzina (trenutna) {
        this._trenutnaBrzina = trenutna;
    }
    get maksimalnaBrzina () {
        return this._maksimalnaBrzina;
    }
    get minimalnaBrzina () {
        return this._minimalnaBrzina;
    }
    get trenutnaBrzina () {
        return this._trenutnaBrzina;
    }
    ubrzaj (delta) {
        this._trenutnaBrzina += delta;
        if (this._trenutnaBrzina > this._maksimalnaBrzina) {
            console.log("Maksimalna brzina dostignuta!")
            this._trenutnaBrzina = this._maksimalnaBrzina;
        }
    }
    uspori (delta) {
        this._trenutnaBrzina -= delta;
        if (this._trenutnaBrzina < this._minimalnaBrzina) {
            console.log("Minimalna brzina dostignuta!");
            this._trenutnaBrzina = this._minimalnaBrzina;
        }
    }
}