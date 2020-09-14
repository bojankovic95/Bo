import {Ispit} from "./ispit.js"

let i1 = new Ispit("JS", "2020/09/14", 10, "Jelena Matejic");
let i2 = new Ispit("CSS", "2020/10/10", 9, "Stefan Stanimirovic");
let i3 = new Ispit("HTML", "2020/11/17", 8, "Danilo Ljubisavljevic");

let ispiti = [i1, i2, i3];

let prosek = niz =>{
    let sum = 0;
    niz.forEach(elem => {
        sum += elem.ocena;
    });
    console.log(sum/niz.length);
}
prosek(ispiti);

let najvise = (niz, profesor) =>{
    let maxOcena = niz[0].ocena;
    niz.forEach(elem =>{
        if(elem.nastavnik === profesor){
            console.log(elem.naziv);
        }
        if(elem.ocena > maxOcena){
            maxOcena = elem.ocena;
        }
    })
    console.log(maxOcena);
}
najvise(ispiti, "Jelena Matejic");

let asinh = async() =>{
    let response = await fetch("./JSON/pera.json")
    if(response.status !== 200){
        throw new Error("Doslo je do greske");
    }
    let data = await response.json();
    let ocene = [];
    data.forEach(elem =>{
        if (elem.ocena >= 6 && elem.ocena <= 10) {
            console.log(`Polozeni ispit je: ${elem.naziv}`)
        }
        ocene.push(Number(elem.ocena));
    })
    prosek(ocene);
    najvise(ocene, "Vesna Kostic");


    response = await fetch("./JSON/ana.json");
    if(response.status !== 200){
        throw new Error("Doslo je do greske");
    }
    data = await response.json();
    console.log(data)
    ocene = [];
    data.forEach(elem => {
        if (elem.ocena >= 6 && elem.ocena <= 10) {
            console.log(`Polozeni ispit je: ${elem.naziv}`)
        }
        ocene.push(Number(elem.ocena));
    })
    console.log(ocene)
    prosek(ocene);
    najvise(ocene, "Petar Vujic");

    
}
let dugme = document.getElementById("btn");
dugme.addEventListener("click", asinh);


