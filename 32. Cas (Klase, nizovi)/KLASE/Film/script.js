import {Film} from "./film.js"

let f1 = new Film("Tenet", "Kristofer Nolan", 2020, [9.8, 10, 9, 8, 10, 9.9]);
let f2 = new Film("Film 2", "Kristofer Nolan", 1999, [7, 9, 8, 9.7, 8]);
let f3 = new Film("Film 3", "Reditelj Filma", 1880, [7, 8.5, 9, 7.9, 9.5]);

let filmovi = [f1, f2, f3];

console.log(f1.prosek());

let vekFilma = (niz, vek) =>{
    niz.forEach(film => {
        if(Math.floor(film.godIzdanja/100)+1 == vek ){
            console.log(film.naslov);
        }
    });
}
vekFilma(filmovi, 21);

let prosecnaocena = niz =>{
    let sum = 0; 
    let num = 0; //broj ocena
    niz.forEach(film=>{
        let filmOcene = film.ocene;
        filmOcene.forEach(ocena =>{
            sum += ocena;
            num++;
        })
    })
    let avg = sum/num;
    return avg;
}
console.log(prosecnaocena(filmovi));

// let najboljeOcenjeni = niz =>{
//     niz.forEach(film =>{
//         let filmOcene = film.ocene;
//         let maxOcena = filmOcene[0];
//         filmOcene.forEach(ocena =>{
//             if(maxOcena < filmOcene){
//                 maxOcena = filmOcene;
//             }
//         })
//     })
// }
// najboljeOcenjeni(filmovi);

let najboljeOcenjeni = films =>{
    let maxOcena = films[0].prosek();
    let maxFilm = films[0];
    
    films.forEach(f =>{
        if(f.prosek() > maxOcena){
            maxOcena = f.prosek();
            maxFilm = f;
        }
    })
    return maxFilm;
}
najboljeOcenjeni(filmovi).stampaj(); 

let osrednjiFilm = films =>{
    let prosecnaOcenaSvih = prosecnaocena(filmovi);
    let minRazlika = Math.abs(films[0].prosek() - prosecnaOcenaSvih);
    let minFilm = films[0];

    films.forEach(f =>{
        let razlika = Math.abs(f.prosek() - prosecnaOcenaSvih);
        if(razlika < minRazlika){
            minRazlika = razlika;
            minFilm = f;
        }
    })
    return minFilm;

}
osrednjiFilm(filmovi).stampaj();


let najmanjaOcenaNajboljeg = films =>{
    let najboljiFilm = najboljeOcenjeni(filmovi);
    let najmanja = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach(o =>{
        if(najmanja > o){
            najmanja = o;
        }
    });
    console.log(najboljiFilm.naslov, najmanja);
}
najmanjaOcenaNajboljeg(filmovi);


let nizOcena = [];
filmovi.forEach(f =>{
    let filmOcene = f.ocene;
    filmOcene.forEach(o =>{
        nizOcena.push(o);
    })
})
let najcescaOcena = nizOcena =>{

    let najucestalija = nizOcena[0];
    let brPojavNajucestalije = 1;
    let tekuci;
    let brPojavTekuceg;

    for(let i = 0; i<nizOcena.length; i++){
        tekuci = nizOcena[i];
        brPojavTekuceg = 0;
        for(let j = 0; j<nizOcena.length; j++){
            if(tekuci == nizOcena[j]){
                brPojavTekuceg++;
            }
        }
        if(brPojavTekuceg > brPojavNajucestalije){
            brPojavNajucestalije = brPojavTekuceg;
            najucestalija = tekuci;
        }
    }
    console.log(najucestalija);
}

let pomNiz = [10, 9, 10, 10, 9, 9, 9, 8]
najcescaOcena(nizOcena);



let iznadOcene = (ocena, films) =>{
    let pomFilms = [];
    films.forEach(f => {
        let prosecna = f.prosek();
        if (prosecna > ocena) {
            pomFilms.push(f)
        }
    })
    return pomFilms;
}

let iznadOceneNoviji = (ocena, films) =>{
    let pomFilms = iznadOcene(ocena, filmovi);
    let godNajnov = pomFilms[0].godIzdanja;
    let najnoviji = pomFilms[0];

    pomFilms.forEach(pf =>{
        if(pf.godIzdanja > godNajnov){
            godNajnov = pf.godIzdanja;
            najnoviji = pf;
        }
    })
    return najnoviji;
}
console.log(iznadOceneNoviji(8, filmovi))


