import {Knjiga} from "./knjiga.js"

let k1 = new Knjiga ("Braca Karamazov", "Fjodor Dostojevski", 1880, 1032, 1500);
let k2 = new Knjiga ("Harry Potter", "Joane Ketlin Rowling", 2002, 850, 1450);
let k3 = new Knjiga ("Harry Potter kolekcija", "J.K.Rowling", 2015, 4000, 10500, );


k1.print();
console.log(k1.obimna());
console.log(k1.skupa());
console.log(k1.dugackoIme());

let knjige = [k1, k2, k3];
knjige.forEach(elem =>{
    if(elem.dugackoIme()){
        console.log(elem.autor);
    }
})