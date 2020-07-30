let vreme = new Date();
let sati = vreme.getHours();
let minuti = vreme.getMinutes();
let open = document.getElementById("open");

if(sati <= 9 || sati >= 20){
    open.innerHTML = `<img src = "slike/closed.jpeg">`;
}else{
    open.innerHTML = `<img src = "slike/open.jpeg">`;
}

let tezina = 230;
let cena = tezina * 5;
let popust = (cena / 100) * 10;
let cenasapopustom = cena - popust;
let cena1 = document.getElementById("cena");

console.log(`Cena bez popusta je ${cena} dinara. Cena sa popustom je ${cenasapopustom} dinara`);
cena1.innerHTML = `Cena bez popusta je ${cena} dinara. Cena sa popustom je ${cenasapopustom} dinara`;

let podnaslov = document.getElementById("podnaslov");

if (sati < 9){
    console.log("Radno vreme jos nije pocelo");
    podnaslov.innerHTML = `<div> Radno vreme jos nije pocelo </div>`;
} else if (sati > 17) {
    console.log("Radno vreme je zavrseno");
    podnaslov.innerHTML = `<div> Radno vreme je vec zavrseno </div>`;
}


let preostalo = documen.getElementById("preostalo");


if(sati >= 9 && sati < 17){
    sati = sati * 60;
    kraj = (17 * 60) - (sati + minuti);
    hdokraja = Math.trunc(kraj/60);
    mindokraja = kraj % 60;
    console.log(`Do kraja radnog vremena je preostalo ${hdokraja} : ${mindokraja}`)
    preostalo.innerHTML = `Do kraja radnog vremena je preostalo ${hdokraja} : ${mindokraja}`;



}

let brojcvetova = 30;
let plavo = 11;
let zuto = 11; 
let zutoplavo = brojcvetova - plavo - zuto;

if(plavo > 10){
    if(zuto > 10){
        if(zutoplavo > 5){
            console.log(`${zutoplavo} Ekskluzivan`);
        }else{
            console.log("Nije ekskluzivan");
        }
    } else {
        console.log("Nije ekskluzivan");
    }
} else {
    console.log("Nije ekskluzivan");
}


