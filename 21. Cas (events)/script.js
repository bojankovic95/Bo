/* Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a
na ekranu u paragrafu da se ispiše Zdravo i ime
osobe preuzeto iz input polja. */

//DOM 
let inputName = document.getElementById("name");
let buttonSubmitName = document.getElementById("submitName");
let pPrintName = document.getElementById("printName");

//create event listener

buttonSubmitName.addEventListener("click", ()=>{ //prvi parametar akcija drugi parametar callback fja 
    let name = inputName.value;
    pPrintName.innerHTML = "Hello " + name + "!";
    inputName.value = " "; //ISPRAZNI INPUT POLJE 

})

/* 7. zadatak - Napraviti sledeću formu i rezultat računanja ispisati
u paragrafu ispod nje. */

//Prvi nacin
//DOM 
let inputNum1 = document.getElementById("num1");
let buttonKvadriraj = document.getElementById("kvadriraj"); //zbog submita se refreshuje stranica
let pRes = document.getElementById("res");

/*buttonKvadriraj.addEventListener("click", (event) =>{ //prosledjujemo event koji 
    event.preventDefault(); //ovo pisemo da se ne bi refreshovalo nakon submita 
    let num1 = inputNum1.value; // preuzimam vrednost iz polja
    let res = num1**2;
    //console.log(res);
    pRes.innerHTML = res;
});*/

//FORMA SME DA IMA SAMO JEDAN SUBMIT BUTTON
//Drugi nacin 
let form = document.querySelector("form");
form.addEventListener("submit", event =>{
    event.preventDefault();
    let res = inputNum1.value**2;
    pRes.innerHTML = res;
});

//DOM
let inputNum2 = document.getElementById("num2");
let buttonPrepolovi = document.getElementById("prepolovi");
let pPrep = document.getElementById("prep");

buttonPrepolovi.addEventListener("click", event =>{
    event.preventDefault();
    let num2 = inputNum2.value;
    let res = num2/2;
    pPrep.innerHTML = res;
});

//DOM
let inputNum3 = document.getElementById("num3");
let buttonIzracunaj = document.getElementById("izracunaj");
let pov = document.getElementById("povrsina");

buttonIzracunaj.addEventListener("click", event =>{
    event.preventDefault();
    let num3 = inputNum3.value;
    let p = (num3**2) * Math.PI;
    pov.innerHTML = p;
});

