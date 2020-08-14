console.log("events");

//IMAMO TRI KORAKA

// prvi korak, dohvatamo element iz DOM stabla
let buttonClickMe = document.getElementById("clickme");

// drugi korak dodajemo event listener
buttonClickMe.addEventListener('click', (/*ne imenujemo fju */) => {  //PRIMA DVA PARAMETRA(PRVI JE STA RADIMO DUGMETU. DRUGI JE PRAZNA CALLBACK FUNKCIJA)
// treci korak pravimo callback funkciju za realizaciju elementa (funkcionalnost)
        console.log("clicked");
}); 


let buttonDoubleClick = document.getElementById("doubleclick");

buttonDoubleClick.addEventListener("dblclick", () =>{ //DBLCLICK za dupli klik
    console.log("Dudble clicked!");
})

////////////////////////

//1. Dugme koje broji kad kliknemo // 2. ispisati u pargrafu na stranici
// DOM elementi// definisi na pocetku da bi posle mogao da ih koristis kroz kod 
let btnCount = document.querySelector("#counter");
let pCounter = document.querySelector("#printCounter");


let count = 1;

btnCount.addEventListener("click", () =>{
    console.log(count);
    pCounter.innerHTML = count;
    count++;
    
})

// 3. zadatak //pravimo dugme + i -, brojac prikazuje broj veci za 1 ili manji za 1.
// 4. zadatak // ako je manje od nula prikazati 0;

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let result = document.getElementById("res");

let res = 0; 
result.innerHTML = res;

btnMinus.addEventListener("click", () =>{
    res--;
    if(res <= 0){  //Drugi nacin je da se prvo pita da li je rez veci od 0 pa onda smanjivati if(res > 0){res--};
        res = 0;
    }
    result.innerHTML = res;
    
})
btnPlus.addEventListener("click", () => {
    res++;
    result.innerHTML = res;

}) 