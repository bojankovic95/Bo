/* 

if(uslov){
    komande
}

*/

let datum = new Date();
let mesec = datum.getMonth() + 1;

while (mesec == 7) {
    console.log("mesec Jul");
    mesec++;
}
console.log("nastavak koda");

//Prvi zadatak

let i = 1;

while(i <= 10) {
    console.log(i);
    i++; //i = i + 1
}
console.log("Zavrsen ispis brojeva");
console.log(i); // i dobija vrednost 11 nakon ove petlje 

//ispis brojeva od 20 do 1 

i = 20;

while(i >= 1) {
    console.log(i);
    i--; //i = i - 1;
}