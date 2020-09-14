import {Pacijent} from "./pacijent.js"

let p1 = new Pacijent("Milan", 1.8, 90);
p1.stampaj();
p1.bmi();
p1.kritican();

let p2 = new Pacijent("Rade", 1.75, 130);
p2.stampaj();
p2.bmi();
p2.kritican();

let p3 = new Pacijent("Sale", 2.03, 60);
p3.stampaj();
p3.bmi();
p3.kritican();

let pacijenti = [p1, p2, p3];

let maxBmi = pacijenti[0].bmi(); //cuvam maks bmi
let maxBmiPacijent = pacijenti[0]; //cuvam ceo objekat pacijenta sa tim bmi 
pacijenti.forEach(p =>{
    if(p.bmi() > maxBmi){
        maxBmi = p.bmi();
        maxBmiPacijent = p;
    }
});
maxBmiPacijent.stampaj();

pacijenti.forEach(elem =>{
    if(elem.ime.includes("a")){
        elem.stampaj();
    }
})

let srednjaVisina = niz =>{
    let sum = 0;
    niz.forEach(elem =>{
        sum += elem.visina;
    })
    return sum / niz.length;
}
console.log(srednjaVisina(pacijenti))


