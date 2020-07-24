if(3 < 5){
    console.log("3 je manje od 5");
}

if(3 < -5){
    console.log("3 je manje od 5");
}

let a = 10;
let b = 50;

if(a < b){
    console.log(`${a} je manje od ${b}`);
}

let x = 5;
let y = 5;

if(x == y){
    console.log("x i y su jednake vresnoti")
}

//IF - Else 

if(a < b){
    console.log("a je manje od b");
} else {
    console.log("b je manje od a");
}

// da li su dve vrednosti jednake

let v1 = 5;
let v2 = 6;
// 1. nacin

if(v1 = v2){
    console.log("jednake su");
} else {
    console.log("nisu jednake");
}

if(v1 != v2){
    console.log("nisu jednake");
} else {
    console.log("jednake su");
}

let c1 = 10;
let c2 = 20;

if(c1 > c2){
    console.log(`${c1} je vece od ${c2}`);
}else {
    console.log(`${c2} je vece od ${c1}`);
}

let t = 20;
let zero = 0; 

if(t > zero){
    console.log("temperatura je u plusu");
}else{
    console.log("temperatura je u minusu");
}
if(t = zero){
    console.log("temperatura je u plusu");
}

//treci zadatak
let divPol = document.getElementById("pol");

let pol = "m";

if(pol == "m"){
    divPol.innerHTML = `<img src ="male.png">`;
}else{
    divPol.innerHTML = `<img src ="female.png"`;
}

let datum = new Date();
let s = datum.getHours();
let m = datum.getMinutes();

if(`${datum}` < 12){
    console.log("prepodne");
}else{
    console.log("popodne");
}

let godina = datum.getUTCFullYear();
let rodjenje = 2000;
let godine = godina - rodjenje;

if(`${godine}` < 18){
    console.log("maloletna");
}else{
    console.log("punoletna");
}

let broj = 16;

if(broj <= 10){
    console.log("broj je u prvoj desetici");
}else if(broj <= 20){
    console.log("broj je u drugoj desetici");
}else if(broj <= 30){
    console.log("broj je u trecoj desetici");
}else{
    console.log("broj je veci od 30");
}

let i = 5;
let o = 3;
let p = 7;

//pretpostavka 

let najveci = i; 
if(o > najveci){
    najveci = o;
}
if(p > najveci){
    najveci = p;
}

console.log(`Najveci je ${najveci}`);

let poeni = 88;

if(poeni <= 50){
    console.log("pao");
}else if(poeni <= 60){
    console.log("ocena 6");
}else if(poeni <= 70){
    console.log("ocena 7");
}else if(poeni <= 80){
    console.log("ocena 8");
}else if(poeni <= 90){
    console.log("ocena 9");
}else if(poeni <= 100){
    console.log("ocena 10");
}

let dan = datum.getDay();
console.log(dan);

if(dan = 1){
    console.log("radni dan");
}else if(dan = 2){
    console.log("radni dan");
}else if(dan = 3){
    console.log("radni dan");
}else if(dan = 4){
    console.log("radni dan");
}else if(dan = 5){
    console.log("radni dan");
}else if(dan = 6){
    console.log("vikend");
}else if(dan = 0){
    console.log("vikend");
}

let vreme = datum.getHours();

if(vreme < 12){
    console.log("Dobro jutro");
}else if(vreme > 12 < 18){
    console.log("Dobar dan");
}else if(vreme > 18){
    console.log("Dobro vece");
}

if(vreme < 9){
    console.log("Firma ne radi");
}else if(vreme > 9 < 17){
    console.log("Firma radi");
}else if(vreme > 17){
    console.log("Firma ne radi");
}

let lekar1pocetak = 8;
let lekar1kraj = 4;

let lekar2pocetak = 2;
let lekar2kraj = 10;

if(lekar1kraj < lekar2pocetak){
    console.log("NE");
}else if(lekar1kraj > lekar2pocetak){
    console.log("DA");
}  

let g1 = 2020;
let g2 = 2009;

let m1 = 7;
let m2 = 10;

let d1 = 12;
let d2 = 16;

let x1 = 2, y1 = 1;
if(x1 + y1 <= x1 - y1){
    x1 += 5;
    y1 -=2;
}else{
    x1 -= 5;
    y1 += 2;
}

console.log(x1, y1);

