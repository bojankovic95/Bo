/*
Kreirati klasu Krug koja ima atribut za poluprečnik kruga.
Napraviti odgovarajući konstruktor, getere i setere.
Napraviti metodu obimKruga koja izračunava i vraća obim kruga.
Napraviti metodu povrsinaKruga koja izračunava i vraća površinu kruga.
Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a
ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi
prosleđeni krug. U suprotnom funkcija vraća false.
* Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u
svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug,
vratiti false.
*/
export class Krug {
    
    constructor ( r ) {
        this._poluprecnik = r;
    }
    set poluprecnik (r) {
        this._poluprecnik = r;
    }
    get poluprecnik () {
        return this._poluprecnik;
    }
    obimKruga () {
        return (2 * this._poluprecnik * Math.PI).toFixed(2);
    }
    povrsinaKruga () {
        return (Math.pow(this.poluprecnik, 2) * Math.PI).toFixed(2);
    }
}