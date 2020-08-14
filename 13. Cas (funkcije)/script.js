// funkcija sa dva/tri prosledjena parametra 

function korisnik(ime, prezime, god){
    console.log(`korisnik je ${ime} ${prezime} ima ${god} godina`);
}
korisnik("Bojan", "Jankovic", "24");

let a = "Milena";
let b = "Djordjevic";
let c = "30";

korisnik(a, b, c); //vrednost koja se ne prosledi je undefined 

//Funkcija koja odredjuje zbir dva broja
//Moramo da prosledimo brojeve unutar funkcije

function zbir(br1, br2){
    let rez = br1 + br2;
    console.log(rez);
}
zbir(2, 3);
zbir(-21, -5);
let x = 5;
let y = 7;
zbir(x, y);

//Return Funcija - koja vraca rezultat
function zbirTri(br1, br2, br3){
    let rez = br1 + br2 + br3;
    return rez;
}
let z = zbirTri(1, 2, 5);
console.log("Rezultat je:" + " " + z); //cuvamo vrednost u z i koristimo tu vrednost
console.log("rezultat je: " + zbirTri(1, 2, 3)); // ne cuvamo vrednost nego dodeljujemo direktno 

let i = zbirTri(1, 1, 1);// 3
let j = zbirTri(2, 2, 2);// 6
let k = zbirTri(3, 3, 3);// 9

console.log(i, j, k);

let t = zbirTri(i, j, k); //zbir promenljivih i, j, k;
console.log(t);

console.log(zbirTri(zbirTri(1,1,1), zbirTri(2,2,2), zbirTri(3,3,3)));//prosirena verzija od ovog gore 

zbir(i, j);
//kada funkcija ispisuje samo je pozovemo
//kada funkcija vraca (return) onda sacuvamo njenu vrednost pa je tek onda ispisemo 


//Treci zadatak. Vraca tacno za neparan. 

function neparan(broj){
    if(broj % 2 != 0){
        //neparan broj
        return true;
    }else{
        //paran broj
        return false;
    }
}
let nb = neparan(5);
console.log(nb);
//prosledjuje 5, ispituje funciju i sacuva rezultat u nb pa tek onda mozemo da koristimo.
nb = neparan(10);
console.log(nb);

if(nb == true){
    console.log(`Prosledjeni broj je broj je neparan`);
}else{
    console.log(`Prosledjeni broj je paran`);
}

for(i = 0; i<10; i++){
    let pom = neparan(i);
    if(pom == true){
        console.log(`Broj ${i} je neparan`);
    }else{
        console.log(`Broj ${i} je paran`);
    }
}


//broj1 5, broj2 7. 

function maks2(broj1, broj2){
    if(broj1 > broj2){
        return broj1;
    }else{
        return broj2;
    }
}

let veci = maks2(13, 10);
console.log(veci);

function maks4(br1, br2, br3, br4){
    if(br1 > br2 && br1 > br3 && br1 > br4){
        return br1;
    }else if(br2 > br1 && br2 > br3 && br2 > br4){
        return br2;
    }else if(br3 > br1 && br3 > br2 && br3 > br4){
        return br3;
    }else{
        return br4;
    }
}
let najveci = maks4(344, 64, 139, 97);
console.log(najveci);

function prikaziSliku(url){
    let divSlika = document.getElementById("slika");
    divSlika.innerHTML = `<img src ="${url}">`
}

prikaziSliku("download.jpeg");


function obojiTekst(boja, font){
    let divParagraf = document.getElementById("paragraf");
    divParagraf.style.color = `${boja}`;
    divParagraf.style.fontSize = `${font}px`;
}

obojiTekst("green", "40");

// 8. zadatak // velicina fonta vise recenica u zavisnosti od iteratora

function ispisiRecenicu(recenica){
    let divRecenica = document.getElementById("recenica");
    for(i=10; i<=30; i+=5){
        divRecenica.innerHTML += `<p style="font-size: ${i}px">${recenica}</p>`
    }
}
ispisiRecenicu("Novi paragrav");



function deljivSaTri(n, m){
    let sum = 0;
    while(n <= m){
        if(n % 3 == 0){
            sum ++;
            console.log(n);
        }
        n++;
    }
    return sum;
}
let sum = deljivSaTri(1, 9);
console.log(`Broj brojeva deljivih sa 3 je ${sum}`);


// od 1 do 7 - 1+2+3+4+5+6+7
function sumiraj(n, m){
    let sum = 0;
    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
}
let sm = sumiraj(1, 10);
console.log(sm);
//12. zadatak
function mnozi(n, m){
    let proizvod = 1;
    for(let i=n; i<=m; i++){
        proizvod *= i; 
    }
    return proizvod;
}
let pr = mnozi(1, 5);
console.log(pr);


//13. zadatak
function aritmetickaSredina(n, m){
    let sum = sumiraj(n, m);

    let brojac = 0;
    for(let i=n; i<=m; i++){
        brojac++;
    }
    let arsr = sum/brojac;
    return arsr;
}
console.log("Aritmeticka sredina je " + aritmetickaSredina(1, 6));

//14. zadatak 

function aritmetickaTri(n, m){
    let sum3 = 0;
    let brojac3 = 0;
    for(let i = n; i<=m; i++){
        if(i%10 == 3){
            sum3 += i;
            brojac3++;
        }
    }
    let arsr3 = sum3/brojac3;
    return arsr3;
}

console.log("Aritmeticka sredina kojima je poslednja cifra 3 je " + aritmetickaTri(30, 50));

//17. zadatak

//n meseci traje
//a dinara osnovica
//d dinara povisice

function placenaPraksa(n, a, d){
    let ukupnaplata = 0;

    for (i = 1; i <= n; i++) {
        let tekucimesecplata = a + (i - 1) * d;
        ukupnaplata += tekucimesecplata;
    }
    return ukupnaplata;
}

n = 4;
a = 1000;
d = 300;

console.log(`Ukupna plata nakon ${n} meseci, sa osnovicom ${a} i povisicon ${d} iznosi ${placenaPraksa(n, a, d)}`);














