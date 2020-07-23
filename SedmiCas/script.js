let x, y;
x = 14;
y = 50;

x *= 60;

console.log(x + y);

x = 890; 
y = 60; 

let z = 890%60;

console.log(Math.floor(x / 60), z);

let a = 300;
let b = 1000;

let cena = a;
let novcanica = b; 

console.log(novcanica - cena);

let datum = new Date();
let s = datum.getHours();
let m = datum.getMinutes();

let ukupnoMinuta;

ukupnoMinuta = s * 60 + m;

console.log(ukupnoMinuta);

let godina = datum.getUTCFullYear();
let mesec = datum.getMonth() +1;
let dan = datum.getDate();
let dan1 = datum.getDay(); //0=nedelja

console.log(godina, mesec, dan, dan1);

let euroProdaja;
euroProdaja = 10;

let dinar = euroProdaja * 117;



console.log(dinar);

let dinarProdaja;
dinarProdaja = 11700;

let euro = dinarProdaja / 117;

console.log(euro);

let eurtodinar; 
let dinartodolar; 

let euro1 = 100;

let eurotodinar = euro1 * 117;
console.log(eurotodinar);

dinartodolar = eurotodinar / 100;
console.log(dinartodolar);
let dolar = 100;
let dolartodinar = dolar * 100;
let dinartoeuro;

console.log(dolartodinar);

dinartoeur = dolartodinar / 117;

console.log(dinartoeur);

let celsius;
celsius = 30;
let farenheit; 
farenheit = celsius * 1.8 + 32;

console.log(farenheit);
farenheit = 86;
let fartocel;
fartocel = (farenheit - 32) / 1.8;

console.log(fartocel);

let kelvin;
kelvin = celsius + 273.15;

console.log(kelvin);

kelvin = 303.15;

let keltocel;
keltocel = kelvin - 273.15;

console.log(keltocel);






