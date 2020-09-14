console.log("####################################");
/*
1. Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true
ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost
srednje talasne dužine.
*/
import {Boja} from './modules/01.Boja.js'

let b1 = new Boja (750, .82, 74);
let b2 = new Boja (440, .43, 96);
let b3 = new Boja (560, .54, 86);
let b4 = new Boja (480, .62, 59);
let b5 = new Boja (750, .82, 74);

function ispitajSlicnost ( boja1, boja2) {
    if (boja1.talasnaDuzina == boja2.talasnaDuzina
        && boja1.zasicenje == boja2.zasicenje
            && boja1.intenzitet == boja2.intenzitet) {
                return true;
            } else {
                return false;
            }
}

if (ispitajSlicnost(b1, b2)) {
    console.log(`Prosledjene boje su iste!`);
} else {
    console.log(`Prosledjene boje nisu iste!`);
}

function srednjaTalasnaDuzina ( testNizBoja ) {
    let zbirTalasnihDuzina = 0;
    testNizBoja.forEach( boja => {
        zbirTalasnihDuzina += boja.talasnaDuzina;
    });
    return zbirTalasnihDuzina/testNizBoja.length;
}

let nizBoja = [b1, b2, b3, b4, b5];

console.log(`Srednja talasna dužina prosleđenog niza je: ${srednjaTalasnaDuzina(nizBoja)} nm.`);
console.log("####################################");
/*
2. Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godinu.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji
od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi
su jednaki”.
*/
import {Datum} from './modules/02.Datum.js'

function ranijiDatum (dat1, dat2) {
    let prviJeRaniji = false;
    let jednakiSu = false;
    if (dat1.godina < dat2.godina) {
        console.log("Prva godina je ranija!")
        prviJeRaniji = true;
    } else if (dat1.godina == dat2.godina) {
        console.log("Godine su jednake.")
        if (dat1.mesec < dat2.mesec) {
            console.log("Prvi mesec je raniji!")
            prviJeRaniji = true;
        } else if (dat1.mesec == dat2.mesec) {
            console.log("Meseci su jednaki.")
            if (dat1.dan < dat2.dan) {
                console.log("Prvi dan je raniji!")
                prviJeRaniji = true;
            } else if (dat1.dan == dat2.dan) {
                console.log("Dani su jednaki!")
                jednakiSu = true;
            }
        }
    }
    if (jednakiSu) {
        console.log("Prosleđeni datumi su jednaki");
    } else if (prviJeRaniji) {
        console.log("Prvi datum je raniji!");
    } else {
        console.log("Drugi datum je raniji.")
    }
}

let d1 = new Datum (7, 11, 1989);
let d2 = new Datum (11, 9, 2001);
let d3 = new Datum (12, 9, 2001);
let d4 = new Datum (11, 9, 2001);
let d5 = new Datum (12, 9, 2020);

ranijiDatum(d2, d3);
console.log("####################################");
/*
3. Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća
najveću platu ranika.
Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona
ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
*/
import {Radnik} from './modules/03.Radnik.js'

function maksPlata ( nizRadnika ) {
    let najvecaPlata = nizRadnika[0].plata;
    let indeksRadnikaSaNajvecomPlatom = 0;
    for (let i=1; i<nizRadnika.length; i++) {
        if (nizRadnika[i].plata > najvecaPlata) {
            najvecaPlata = nizRadnika[i].plata;
            indeksRadnikaSaNajvecomPlatom = i;
        }
    }
    return nizRadnika[indeksRadnikaSaNajvecomPlatom].plata;
}

function maksPlataOsoba ( nizRadnika ) {
    nizRadnika.forEach ( radnik => {
        if (radnik.plata == maksPlata(nizRadnika)) {
            console.log(`Najveću platu ima i ${radnik.ime} a ona iznosi ${radnik.plata} dinara.`)
        }
    })
}

let r1 = new Radnik ("Petar Petrović", 46349);
let r2 = new Radnik ("Milan Milanović", 32675);
let r3 = new Radnik ("Milica Jovanović", 39472);
let r4 = new Radnik ("Marija Krstić", 39920);
let r5 = new Radnik ("Milutin Kocić", 46349);

let testNizRadnika = [r1, r2, r3, r4, r5];

console.log(`Najveća plata u našem preduzeću je: ${maksPlata(testNizRadnika)} dinara.`);

maksPlataOsoba (testNizRadnika);
console.log("####################################");
/*
4. Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o
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
import {Autobus} from './modules/04.Autobus.js'

let a1 = new Autobus("PO-478-ZG", 55);
let a2 = new Autobus("BG-1462-ŽŠ", 52);
let a3 = new Autobus("NI-123-OG", 27);
let a4 = new Autobus("PN-094-RT", 56);

let nizAutobusa = [a1, a2, a3, a4];

function ukupnoSedista ( niz ) {
    let sumaSvihSedista = 0;
    niz.forEach( bus => {
        sumaSvihSedista += bus.brojSedista;
    });
    return sumaSvihSedista;
}
console.log(`Ukupan broj sedista svih autobusa iz niza je: ${ukupnoSedista(nizAutobusa)}`);

function maksSedista ( niz ) {
    let najviseSedista = niz[0].brojSedista;
    let indeksMaks = 0;
    for (let i=1; i<niz.length; i++) {
        if(najviseSedista < niz[i].brojSedista) {
            najviseSedista = niz[i];
            indeksMaks = i;
        }
    }
    console.log(`Najviše sedišta ima autobus ${niz[indeksMaks].registarskiBroj}.`);
    // niz[indeksMaks].stampaj();
}
maksSedista(nizAutobusa);

function ljudi (nizAutobusa, brojPutnika) {
    if(ukupnoSedista(nizAutobusa) >= brojPutnika) {
        return true;
    } else {
        return false;
    }
}

let brojPotencijalnihPutnika = 250;
console.log(`Da li ${brojPotencijalnihPutnika} putnika može da se prevozi u nizu autobusa koji ukupno imaju ${ukupnoSedista(nizAutobusa)} sedišta?`)
if(ljudi(nizAutobusa, brojPotencijalnihPutnika)) {
    console.log("Dispečer: Može, može!");
} else {
    console.log("Dispečer: Nije moguće!");
}
console.log("####################################");
/*
5. Kreirati klasu FMRadio koja sadrđi atribute o stanici, frekvenciji i jačini tona.
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
import {FMRadio} from './modules/05.FMRadio.js'

function srednjaFrekvencija ( nizRadioStanica ) {
    let sumaSvihFrekvencija = 0;
    nizRadioStanica.forEach ( stanica => {
        sumaSvihFrekvencija += stanica.frekvencija;
    });
    return sumaSvihFrekvencija / nizRadioStanica.length;
}

let fmr1 = new FMRadio ("Belle Amie Niš", 100.7, 15);
let fmr2 = new FMRadio ("Bubamara Svrljig", 96.5, 12);
let fmr3 = new FMRadio ("Antena Kruševac", 91.3, 10);
let fmr4 = new FMRadio ("Đerdap Kladovo", 101.7, 18);
let fmr5 = new FMRadio ("Zvižd Kučevo", 94.0, 11);
let fmr6 = new FMRadio ("Srce Prokuplje", 91.4, 20);

let nizFMRadioStanica = [fmr1, fmr2, fmr3, fmr4, fmr5, fmr6];

console.log(`Srednja frekvencija radio stanica iz prosleđenog niza je ${srednjaFrekvencija(nizFMRadioStanica).toFixed(2)} MHz`);

function najbliziMaks (nizRadioStanica) {
    let maksFreq = nizRadioStanica[0].frekvencija;
    let indeksMaksFreq = 0;
    for (let i=1; i<nizRadioStanica.length; i++) {
        if (nizRadioStanica[i].frekvencija > maksFreq) {
            maksFreq = nizRadioStanica[i].frekvencija;
            indeksMaksFreq = i;
        }
    }
    // console.log(`Maks freq je ${maksFreq} a njen indeks je ${indeksMaksFreq}`);
    let najmanjaRazlika = Math.abs(nizRadioStanica[0].frekvencija - maksFreq);
    let indeksNajmanjeRazlike = 0;
    for (let i=1; i<nizRadioStanica.length; i++) {
        if (Math.abs(nizRadioStanica[i].frekvencija - maksFreq) < najmanjaRazlika) {
            najmanjaRazlika = Math.abs(nizRadioStanica[i].frekvencija - maksFreq);
            indeksNajmanjeRazlike = i;
        }
    }
    return nizRadioStanica[indeksNajmanjeRazlike];  
}
console.log(`Najbliža stanica maksimalnoj po frekvenciji je radio ${najbliziMaks(nizFMRadioStanica).stanica}`);
console.log("####################################");
/*
6. Kreirati klasu Krug koja ima atribut za poluprečnik kruga.
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
import {Krug} from './modules/06.Krug.js'

function upisaniKrug (k1, k2) {
    if(k1.poluprecnik > k2.poluprecnik) {
        return true;
    } else {
        return false;
    }
}

function rastuci ( nizKrugova ) {
    let rezultat = false;
    for (let i=0; i<nizKrugova.length-1; i++) {
        if (upisaniKrug(nizKrugova[i+1], nizKrugova[i])) {
            rezultat = true;
        } else {
            return false;
        }
    }
    return rezultat;
}

let k1 = new Krug (10);
let k2 = new Krug (20);
let k3 = new Krug (30);
let k4 = new Krug (40);

console.log(`Pokusaj upisa kruga r=${k1.poluprecnik} u krug r=${k2.poluprecnik} vraća ${upisaniKrug(k2, k1)}.`);
console.log(`Pokusaj upisa kruga r=${k2.poluprecnik} u krug r=${k1.poluprecnik} vraća ${upisaniKrug(k1, k2)}.`);

let testNizKrugova = [k1, k2, k3, k4];

console.log("Za niz krugova: ")
console.log(rastuci(testNizKrugova));
console.log("####################################");
/*
7. Napraviti klasu Cipela koja sadrži atribute: naziv, broj cipele i niz prepravki
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
import {Cipela} from './modules/07.Cipela.js'
import { Student } from './modules/08.Student.js';

function radi ( cipelica ) {
    cipelica.nizPrepravki.forEach ( (popravka, i) => {
        if (popravka == "zalepi") {
            cipelica.zalepi();
        } else if (popravka == "usij") {
            cipelica.usij();
        } else if (popravka == "prosiri") {
            cipelica.prosiri();
        } else {
            console.log("Nepoznata prepravka!");
        }
        if (popravka == "zalepi" || popravka == "usij" || popravka == "prosiri") {
            cipelica.nizPrepravki.splice(i, 1);
        }
    });
}

let c1 = new Cipela ("Ana", 38, ["zalepi", "zameni đon", "usij", "zalepi stiklu", "izlakiraj", "prosiri"]);
console.log(c1.nizPrepravki);
radi(c1);
console.log(c1.nizPrepravki);
console.log("####################################");
/*
8. Kreirati klasu Student koja ima atribute: jmbg, ime, prezime, nizOcena i
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
let s1 = new Student("0711989475098", "Stefan", "Markovic", [6, 7, 2, 6, 8, 9, 8, 7, 7, 10]);
let s2 = new Student("0408999758064", "Milica", "Jankovic", [7, 9, 10, 10, 10, 8, 10, 10]);
let s3 = new Student("0506995721456", "Marko", "Markovic", [6, 7, 6, 7, 7, 9, 10, 10]);
let s4 = new Student("2812997458576", "Stefan", "Markovic", [6, 6, 7, 6, 8, 7, 8, 7]);
let s5 = new Student("2310997584765", "Miloje", "Danilovic", [9, 9, 8, 9, 8, 10, 10, 9, 10, 10]);

let nizStudenta = [s1, s2, s3, s4, s5];

function imePrezime (im, pr, nizStudenta) {
    let brojac=0;
    nizStudenta.forEach ( student => {
        if (student.ime == im && student.prezime == pr ) {
            brojac++;
        }
    });
    return brojac;
}

// nizStudenta.forEach( student => {
//     student.stampa();
// })

let testIme = "Stefan";
let testPrezime = "Markovic";
console.log(`Broj studenata sa imenom ${testIme} ${testPrezime} iznosi: ${imePrezime(testIme, testPrezime, nizStudenta)}.`);

function srednjaOcena (nizStudenta) {
    let zbirSvihOcena = 0;
    let brojSvihOcena = 0;
    nizStudenta.forEach ( student => {
        student.nizOcena.forEach ( ocena => {
            zbirSvihOcena += ocena;
            brojSvihOcena ++;
        });
    });
    return (zbirSvihOcena/brojSvihOcena).toFixed(2);
}
console.log(`Prosečna ocena na fakultetu je: ${srednjaOcena(nizStudenta)}.`);

function osrednji (nizStudenta) {
    let prosekSvih = srednjaOcena(nizStudenta);
    let najmanjaRazlikaProseka = Math.abs(prosekSvih - nizStudenta[0].prosecnaOcena);
    let indeksNajmanjeRazlikeProseka = 0;
    for (let i=1; i<nizStudenta.length; i++) {
        if (Math.abs(prosekSvih - nizStudenta[i].prosecnaOcena) < najmanjaRazlikaProseka) {
            najmanjaRazlikaProseka = Math.abs(prosekSvih - nizStudenta[i].prosecnaOcena);
            indeksNajmanjeRazlikeProseka = i;
        }
    }
    return nizStudenta[indeksNajmanjeRazlikeProseka];
}
console.log(osrednji(nizStudenta));

function najmanjaOcenaNajboljeg (nizStudenta) {
    let najboljiStudent = nizStudenta[0];
    let indeksNajboljeg = 0;
    for (let i=1; i<nizStudenta.length; i++) {
        if (nizStudenta[i].prosecnaOcena > najboljiStudent.prosecnaOcena) {
            najboljiStudent = nizStudenta[i];
            indeksNajboljeg = i;
        }
    }
    let najmanjaOcenaNajboljeg = najboljiStudent.nizOcena[0];
    let indeksNajmanjeOcene = 0;
    for (let i=1; i<najboljiStudent.nizOcena.length; i++) {
        if (najboljiStudent.nizOcena[i] < najmanjaOcenaNajboljeg) {
            najmanjaOcenaNajboljeg = najboljiStudent.nizOcena[i];
            indeksNajmanjeOcene = i;
        }
    }
    console.log(`Najmanja ocena najboljeg studenta (${najboljiStudent.jmbg}) je: ${najboljiStudent.nizOcena[indeksNajmanjeOcene]}.`);
}
najmanjaOcenaNajboljeg(nizStudenta);

function najmanjaOcena ( nizStudenata ) {
    let najmanjaOcena = nizStudenata[0].nizOcena[0];
    nizStudenata.forEach( student => {
        student.nizOcena.forEach ( ocena => {
            if (ocena < najmanjaOcena) {
                najmanjaOcena = ocena;
            }
        });
    });
    return najmanjaOcena;
}
console.log(`Najmanja ocena koju je bilo koji student dobio je: ${najmanjaOcena(nizStudenta)}.`);

function najcescaOcena ( nizStudenata ) {
    let nizMogucihOcena = [6, 7, 8, 9, 10];
    let brojPonavljanja = [0, 0, 0, 0, 0];
    for(let i=0; i<nizMogucihOcena.length; i++) {
        nizStudenata.forEach( student => {
            student.nizOcena.forEach ( ocena => {
                if (ocena == nizMogucihOcena[i]) {
                    brojPonavljanja[i]++;
                }
            });
        });
    }
    let najviseOcena = brojPonavljanja[0];
    let indeksNajviseOcena = 0;
    for (let i=1; i<brojPonavljanja.length; i++) {
        if (brojPonavljanja[i] > najviseOcena) {
            najviseOcena = brojPonavljanja[i];
            indeksNajviseOcena = i;
        }
    }
    console.log(brojPonavljanja);
    return nizMogucihOcena[indeksNajviseOcena];
}
console.log(najcescaOcena(nizStudenta));

function rodjeniGodine ( godinaRodjenja, nizStudenata ) {
    nizStudenata.forEach ( student => {
        if(student.jmbg.slice(4,7) == godinaRodjenja%1000) {
            student.stampa();
        }
    });
}
rodjeniGodine(1997, nizStudenta);
console.log("####################################");
/*
9. Kreirati klasu Plivac koja sadrži ime, godinu rodjenja i najbolji rezultat ove
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
import {Plivac} from './modules/09.Plivac.js'

let p01 = new Plivac("Pera", 1994, 53.4);
let p02 = new Plivac("Mika", 1998, 53.2);
let p03 = new Plivac("Laza", 1999, 51.5);
let p04 = new Plivac("Žika", 1996, 52.1);
let p05 = new Plivac("Mića", 1990, 57.8);
let p06 = new Plivac("Neda", 1990, 49.1);
let p07 = new Plivac("Rade", 1989, 60.4);
let p08 = new Plivac("Mare", 2000, 55.2);
let p09 = new Plivac("Lena", 1999, 55.3);
let p10 = new Plivac("Maja", 1989, 63.2);
let p11 = new Plivac("Neca", 1979, 60.1);

let testNizPlivaca = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11];

function topTen ( testNiz ) {
    let nizPlivaca = [];
    testNiz.forEach ( takmicar => {
        nizPlivaca.push(takmicar);
    });
    for (let i=0; i<nizPlivaca.length-1; i++) {
        for(let j=i+1; j<nizPlivaca.length; j++) {
            if (nizPlivaca[j].najboljiRezultatGodine < nizPlivaca[i].najboljiRezultatGodine) {
                let pom = nizPlivaca[i];
                nizPlivaca[i] = nizPlivaca[j];
                nizPlivaca[j] = pom;
            }
        }
    }
    if (nizPlivaca.length>10) {
        let brojIstiskivanja = nizPlivaca.length - 10;
        for ( let i=0; i<brojIstiskivanja; i++) {
            nizPlivaca.pop();
        }
    }
    return nizPlivaca;
}
console.log(testNizPlivaca);
console.log(topTen(testNizPlivaca));

function norma ( sekundi, niz) {
    let postigliNormu = [];
    niz.forEach( plivac => {
        if ( plivac.najboljiRezultatGodine <= sekundi) {
            postigliNormu.push(plivac);
        }
    })
    return postigliNormu;
}
let vrednostNorme = 55;
console.log(norma(vrednostNorme, testNizPlivaca));

function normaNajmladji (testNizPlivaca) {
    let postigliNormu = norma(vrednostNorme, testNizPlivaca);
    let najmladji = postigliNormu[0];
    let indeksNajmladjeg = 0;
    for (let i=1; i<postigliNormu.length; i++) {
        if (postigliNormu[i].godinaRodjenja > najmladji.godinaRodjenja) {
            najmladji = postigliNormu[i];
            indeksNajmladjeg = i;
        }
    }
    return najmladji;
}
console.log(normaNajmladji(testNizPlivaca));
console.log("####################################");
/*
10. Kreirati kalsu Automobil koji ima podatke o maksimalnoj brzini, minimalnoj
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
import {Automobil} from './modules/10.Automobil.js'

let am1 = new Automobil(193, 40, 150);

am1.ubrzaj(50);
console.log(am1.trenutnaBrzina);

let am2 = new Automobil(143, 25, 50);

am2.uspori(30);
console.log(am2.trenutnaBrzina);
console.log("####################################");