/*
Kreirati klasu Student koja ima atribute: jmbg, ime, prezime, nizOcena i
presecna ocena.
Prilikom kreiranja konstruktora, prosledjuje se jmbg, ime, prezime i nizOcena,
a automatski se izračuna prosečna ocena ovog studenta.
Takođe, voditi računa o tome da svaka od unetih ocena može biti isključivo
ceo broj i to 6, 7, 8, 9 ili 10.
JMBG studenta mora biti string koji sadrži 13 karaktera.
Izračunata prosečna ocena se dodeli atributu prosecna ocena.
Napraviti i odgovarajuće getere i setere.
Napraviti metodu ispis koja ispisuje sve podatke o jednom studentu.
Napraviti niz studenata i koristiti ga u predstojećim funkcijama.
Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija
vraća broj studenata sa tim imenom i prezimenom.
Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih
ocena studenata.
Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži
srednjoj oceni svih studenata.
Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i
na ekranu ispisuje njegovu najslabiju ocenu.
Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena,
uzimajući u obzir ocene svih ocena koje su studenti dobijali.
Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće
dobijali.
Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na
ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja
preuzeti (odrediti) iz JMBG-a studenta.
*/
export class Student {
    
    constructor ( mb, im, pr, nizOc) {
        if (mb.length == 13) {
            this._jmbg = mb;
        }
        this._ime = im;
        this._prezime = pr;
        this._nizOcena = [];
        nizOc.forEach( ocena => {
            if (ocena >= 6 && ocena <= 10) {
                this._nizOcena.push(ocena);
            }
        });
        let zbirOcena = 0;
        this.nizOcena.forEach ( ocena => {
            zbirOcena += ocena;
        })
        this._prosecnaOcena = zbirOcena / this.nizOcena.length;
    }
    set jmbg (mb) {
        if (mb.length == 13) {
            this._jmbg = mb;
        }
    }
    set ime (im) {
        this._ime = im;
    }
    set prezime (pr) {
        this._prezime = pr;
    }
    set nizOcena (nizOc) {
        this._nizOcena = [];
        nizOc.forEach( ocena => {
            if (ocena >= 6 && ocena <= 10) {
                this._nizOcena.push(ocena);
            }
        });
    }
    get jmbg () {
        return this._jmbg;
    }
    get ime () {
        return this._ime;
    }
    get prezime () {
        return this._prezime;
    }
    get nizOcena () {
        return this._nizOcena;
    }
    get prosecnaOcena () {
        return this._prosecnaOcena;
    }
    preracunajProsek () {
        let zbirOcena = 0;
        this.nizOcena.forEach ( ocena => {
            zbirOcena += ocena;
        })
        this._prosecnaOcena = zbirOcena / this.nizOcena.length;
    }
    stampa () {
        console.log(`Student: ${this._ime} ${this._prezime}, JMBG: ${this._jmbg}, prosek: ${this._prosecnaOcena.toFixed(2)}.`);
    }
}