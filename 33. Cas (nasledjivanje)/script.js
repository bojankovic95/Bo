import {Vozilo} from "./klase/vozilo.js"
import {Automobil} from "./klase/automobil.js"
import {Kamion} from "./klase/kamion.js"
import {Motocikl} from "./klase/motocikl.js"

let v1 = new Vozilo("drumsko", "bela");
v1.ispisiVolizo();
v1.vozi();

let a1 = new Automobil("drumsko", "crvena", "VR109JM");
a1.ispisiVolizo();
a1.vozi();
a1.ispisiAuto();
console.log(`Registarski broj je: ${a1.registarskiBroj}`);

let k1 = new Kamion("drumsko", "plava", 5.7);
k1.ispisiKamion();
k1.vozi();

let m1 = new Motocikl("drumsko", "zuta", 2, 12000);
m1.ispisiMotocikl();