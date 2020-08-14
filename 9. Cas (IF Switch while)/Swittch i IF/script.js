// 13. zadatak

let broj = 15;
if( broj%2 == 0){
    console.log("Broj je paran");
}else{
    console.log("Broj je neparan");
}

let testbroj = 19;

console.log(testbroj, Math.trunc(testbroj));

if(testbroj == Math.trunc(testbroj)){
    console.log("Ceo broj");
} else {
    console.log("Decimalni broj");
}

// 19. zadatak nadjemo najmanji i najveci na isti nacin, za srednji saberemo sva tri i oduzmemo najveci i najmanji

// 21. zadatak 

let b1 = 3;
let b2 = 7;
let b3 = 9;
if(b1>b2 && b1>b3){
    console.log("Broj 1 je najveci");
} else if(b2>b1 && b2>b3){
    console.log("Broj 2 je najveci");
} else {
    console.log("Broj 3 je najveci");
}

//23. zadatak (prestupna godina)

let god = 2012; 

if( god%4 == 0 && god%100 != 0 || god%400 == 0){
    console.log("Prestupna godina");
}else{
    console.log("Prosta godina");
}

// 24. zadatak 
// zadata vrednost u minutima, prevodimo je u sate i minute 

let minuti = 129;
let sati = Math.trunc(minuti/60);
let minn = minuti%60;

console.log(`${sati} : ${minn}`);
//pretvaramo poccetak i kraj u minute i oduzimamo i razliku vracamo u sate i minute 

//25. zadatak

let dan = 0; 
let sat = 10;
let min = 58;

if(dan == 0 || dan == 6){
    //radno vreme od 10h do 18h 
    if(sat >= 10 && sat < 18){
        console.log("VIKEND OTVORENO");
    } else {
        console.log("VIKEND ZATVORENO");
    }
} else {
    //radno vreme od 9h do 20h
    if(sat >= 9 && sat < 20){
        console.log("RADNI DAN OTVORENO");
    } else {
        console.log("RADNI DAN ZATVORENO");
    }
}

// SWITCH 


let ocena = 3; 
switch(ocena){
    case 1:
        console.log("nedovoljan");
        break;
    case 2:
        console.log("dovoljan");
        break;
    case 3:
        console.log("dobar");
        break;
    case 4: case 5: 
        console.log("vrlo dobar ili odlican");
        break;
    default:
        console.log("ne znam za tu ocenu");
}

// 7. zadatak 

let datum = new Date();
let month = datum.getMonth; 
let day = datum.getDate;
let year = datum.getFullYear;
let days = 31;

switch(month){
    case 1:
        console.log("31");
        break;
    case 2: 
        console.log("28");
        break;
    case 3: 
        console.log("31");
        break;
    case 4:
        console.log("30");
        break;
    case 5:
        console.log("31");
        break;
    case 6:
        console.log("30");
        break;
    case 7:
        console.log("31");
        break;
    case 8:
        console.log("31");
        break;
    case 9:
        console.log("30");
        break;
    case 10:
        console.log("31");
        break;
    case 11:
        console.log("30");
        break;
    case 12:
        console.log("31");
        break;
    default:
        console.log("ne postoji");
}

let boja = "crvena";

switch (boja) {
    case "crvena":
        function init (){
            boja = document.getElementById("boja").innerHTML;
            boja.style.color = "red";
            
        }
        break;
}








