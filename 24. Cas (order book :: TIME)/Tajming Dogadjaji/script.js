let btn1 = document.getElementById("btn1");
let divResult = document.getElementById("result");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let divVreme = document.getElementById("trVreme");

let btnStart = document.getElementById("btnstart");
let btnStop = document.getElementById("btnstop");
let input = document.getElementById("input");

/*

ASINHRONI JS. POZIVAJU SE DVA SATA KOJI OTKUCAVAJU NEZAVISNO. SVAKI PO ZAVRSETKU SVOG VREMENA POZIVA FUNKCIJU. 

btn1.addEventListener("click", ()=>{
    setTimeout(()=>{
        console.log("Proslo je dve sekunde")
    }, 2000);
    setTimeout(()=>{
        console.log("Proslo je pola sekunde")
    }, 1000/2);
});
*/
let timer = null; //uvodimo promenljivu da bi smestili tajmer u nju 

btn1.addEventListener("click", ()=>{
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null){timer = setTimeout(()=>{ //smestamo tajmer u promenljivu 
        divResult.innerHTML = `${sati}:${minuti}:${sekunde}`;
    }, 2000);
    }
});

btn2.addEventListener("click", ()=>{ //prosledimo promenljivu u koju smo smestili tajmer koji hocemo da prekinemo i on se prekida
    clearInterval(timer);            // i resetuje
    timer = null;
})

let clock = setInterval(() => {
    let datum = new Date();
    let sekunde = datum.getSeconds();
    divResult.innerHTML = `Trenutni broj sekundi je: ${sekunde}`
}, 1000);

btn3.addEventListener("click", ()=>{
    clearInterval(clock);
});

let vreme = setInterval(() => {
    let datum = new Date();
    let sat = datum.getHours();
    let min = datum.getMinutes();
    let sec = datum.getSeconds();
    if(sat < 10){
        sat = "0" + sat;
    } if(min < 10){
        min = "0" + min;
    } if(sec < 10){
        sec = "0" + sec;
    }
    divVreme.innerHTML = `${sat}:${min}:${sec}`;
}, 1000);

// DRUGI ZADATAK - RESI SA IF
let count = 0;
btnStart.addEventListener('click', ()=>{
    let br = setInterval(() => {  //MORA DA SE RADI PREKO IF-A
        count ++;
        input.innerHTML = br;
        console.log(count);

    }, 1000);
})


