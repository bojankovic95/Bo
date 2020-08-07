function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}

function ispisNiza(niz, callback){
    let poruka = "";
    for(let i=0; i<niz.length; i++){
        poruka += niz[i] + " ";
    }
    callback(poruka);
}
let a = [9, -7, 3, 4, 5];
let b = [1, 1, 1, 1];
ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);

//Poziv funkcije ispis niza preko anonimnih funkcija

ispisNiza(a, (poruka) => {
    console.log(poruka);
});

ispisNiza(a, function(poruka){
    console.log(poruka);
});

ispisNiza(a, poruka => {
    let div = document.getElementById("container");
    div.innerHTML += poruka;
});

// ispis niza a preko forEach petlje 
// 1) forEach metoda niza (samo za nizove)
// 2) forEach prihvata callback funkciju kao argument 

//prva varijanta - prosledjujemo obicnu funkciju 
function ispisElementaNiza(elem){
    console.log(`Element niza je ${elem}`);
}

a.forEach(ispisElementaNiza);

//Druga varijanta - prosledjujemo anonimnu funkciju

a.forEach(elem => {
    console.log(`Element niza je ${elem}`);
})

//Ispis niza preko forEach gde pristupamo indeksu i elementu niza;

a.forEach((elem, i) => {
    console.log(`Element niza sa indeksom ${i} je ${elem}`);
})

//16. zadatak

let ispislista = niz =>{
    let result = "<ul>";
    niz.forEach(elem =>{
        result += `<li>${elem}</li>`;
    });
    result += "</ul>";
    let div = document.getElementById("container");
    div.innerHTML += result;
}

let lista1 = ["jabuke", "kruske", "sljive", "kajsija"];
let lista2 = ["jaja", "mleko", "hleb"];

ispislista(lista1);
ispislista(lista2);

//17. zadatak

let ispistabela = niz =>{
    let result = "<table>";
    niz.forEach(elem => {
        result += `<tr><td>${elem}</td></tr>`;
    })
    result += "</table>";
    let div = document.getElementById("main");
    div.innerHTML += result;
}
let listaimena = ["IME1", "IME2", "IME3", "IME4"];

ispistabela(listaimena);

//18. zadatak 


let prikazslike = niz =>{
    let result;
    niz.forEach(elem => {
        result += `<img src="${elem}">;`
    })
    let div = document.getElementById("main");
    div.innerHTML += result;
}
let nizslika = ["male.png", "female.png"];
prikazslike(nizslika);

//19. zadatak 

let stringovi = ["Jelena", "Vlada", "Uros", "Nadica", "Nebojsa", "Nikola"];

let ispisiduzinu = niz =>{
    niz.forEach(elem =>{
        console.log(elem.length);
    })
}
ispisiduzinu(stringovi);

//20. zadatak

let stringNajvecaDuzina = niz =>{
    let najvecaDuzina = niz[0].length;
    let najduziString = niz[0];
    niz.forEach(elem => {
        if(elem.length> najvecaDuzina){
            najvecaDuzina = elem.length;
            najduziString = elem;
        }
    });
    return najduziString;
}

//21. zadatak 

let prosecnaDuzinaStringova = niz =>{
    let prosek = 0;
    niz.forEach(elem =>{
        prosek += elem.length;
    });
    prosek = prosek / niz.length;
    return prosek;
};

let brojNatprosecnoDugackih = niz =>{
    let prosek = prosecnaDuzinaStringova(niz);
    let broj = 0; 
    niz.forEach(elem =>{
        if(elem.length > prosek){
            broj++;
        }
    });
    return broj;
}
console.log(brojNatprosecnoDugackih(stringovi));

//22. zadatak 
// Koristimo if(elem.includes(slovo));

//24. zadatak 

let a1 = [1, 2, 3, 4, 5];
let b1 = [1, 2, 3, 4, 5];
let c = [];

for(let i = 0; i<a1.length; i++){
    //c.push(a1[i]); //dodaje elemente
    //c.push(b1[i]);
    c[2 * i] = a1[i];
    c[2 * i + 1] = b1[i];
}
console.log(c);

