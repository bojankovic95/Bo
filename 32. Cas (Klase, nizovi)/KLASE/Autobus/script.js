import {Autobus} from "./autobus.js"

let autobus1 = new Autobus('123-43-FS', 72);
let autobus2 = new Autobus('653-37-CH', 40);
let autobus3 = new Autobus('143-62-HT', 54);

let autobusi = [autobus1, autobus2, autobus3];

autobusi.forEach(elem =>{
    elem.info();
});

let ukupnoSedista = niz =>{
    let sum = 0;
    niz.forEach(elem =>{
        sum += elem.brSedista;
    })
    return sum;
}
console.log(ukupnoSedista(autobusi));

let maxSedista = niz =>{
    let max = autobusi[0].brSedista;
    let maxBus = autobusi[0];
    niz.forEach(elem =>{
        if(max < elem.brSedista){
            max = elem.brSedista;
            maxBus = elem
        }
    })
    return maxBus.info();
}
maxSedista(autobusi);


let ljudi = (brljudi, niz) =>{
    if(brljudi <= ukupnoSedista(niz)){
        return true
    }else{
        return false
    }
}
console.log(ljudi(100, autobusi));


