import {Auto} from "./modules/automobil.js"

let auto1 = new Auto("BMW", "X5", "Bela", true);
auto1.sviraj();
console.log(auto1.marka);
auto1.model = "X7";
console.log(auto1.model);


let auto2 = new Auto("Mazda", "3", "Crna", true);
//auto2._marka = "Fiat"; //OVO NE BI SMELO DA SE DESAVA DA NEKO MENJA PRIVATNA POLJA, ZATO SE KORISTE GETERI I SETERI 


//SVAKO POLJE U KLASI TREBA DA IMA SVOJ GETER I SETER