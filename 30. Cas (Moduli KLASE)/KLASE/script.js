class Auto {

    constructor(marka, model, boja, imaKrov) {
        this._marka = marka;
        this._model = model;
        this._boja = boja;
        this._imaKrov = imaKrov;
    }
//u klasama nema arrow funkcija
    sviraj(){
        console.log("beep beep!");
    }

}

let auto1 = new Auto("BMW", "X5", "Bela", true);
auto1.sviraj();

console.log(auto1._marka, auto1._model);
console.log(auto1);

let auto2 = new Auto("Mazda", "3", "Crna", true);
console.log(auto2);

