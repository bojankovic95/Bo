import {Knjiga} from "./knjiga.js"

let k1 = new Knjiga ("Braca Karamazov", "Fjodor Dostojevski", 1880, 1032, 1500);
let k2 = new Knjiga ("Harry Potter", "Joane Ketlin Rowling", 2002, 850, 1450);
let k3 = new Knjiga ("Harry Potter kolekcija", "J.K.Rowling", 2015, 5000, 10050, );


k1.print();
console.log(k1.obimna());
console.log(k1.skupa());
console.log(k1.dugackoIme());

let knjige = [k1, k2, k3];
knjige.forEach(elem =>{
    if(elem.dugackoIme()){
        console.log(elem.autor);
    }
});

knjige.forEach(elem =>{
    if(elem.skupa() && elem.obimna()){
        elem.print();
    }
})

//funkcija koja odredjuje ukupnu cenu 
let ukupnaCena = niz =>{
    let sum = 0;
    niz.forEach(elem =>{
        sum += elem.cena;
    })
    return sum;
}
console.log(ukupnaCena(knjige));


//funkcija koja odredjuje prosecna cena
let prosecnaCena = niz =>{
    let arsr = ukupnaCena(niz)/niz.length;
    return arsr;
}
console.log(prosecnaCena(knjige));


//funkcija koja odredjuje prosecnu cenu stranice knjige 
let prosecnaStranica = niz =>{
    let str = 0;
    niz.forEach(elem =>{
        str += elem.brojStrana;
    })
    return ukupnaCena(knjige) / str;
}
console.log(prosecnaStranica(knjige));