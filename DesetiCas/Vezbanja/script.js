let i = 1;

while(i <= 20) {
    console.log(i);
    i++;
}

i = 20;
while(i >= 1) {
    console.log(i);
    i--;
}

let a = 20; 
while(a >= 1){
    console.log(a);
    a -= 2;
}


//ispisati sve parne brojeve izmedju n i m
let n = 34;
let m = 55; 

i = n;

while(i <= m){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

n = 3;
m = 10;
i = n;
let suma = 0; 

while(i <= m) {
    suma += i;
    i++;
}
console.log(suma);

//ispisati brojeve od 1 do 20 sve u istom redu

n = 1;
m = 20;
i = n;
let rez = "";
while(i <= m){
    rez = rez + i + " ";
    i++;
}
console.log(rez);

n = 2;
m = 4;
i = n; 
suma = 1;

while(i <= m) {
    suma *= i;
    i++;
}
console.log(suma);

n = 2;
m = 4;
i = n;
suma = 0;

while(i <= m){
    suma += i**2;
    i++;
}
console.log(suma);

n = 1;
m = 5;
i = n;
suma = 0;

while(i <= m){
    if(i % 2 == 0){
        suma += (i ** 2);
    }else{
        suma += (i ** 3);
    }
    i++;
}
console.log(suma);
//koliko ima delioca
let k = 24;
i = 1;
let counter = 0;
while(i <= k){
    if(k % i == 0){
        counter++;
    }
    i++;
}
console.log(counter);

//odrediti da li je prost broj
n = 13;
i =2;
let broj = 0;
let prost = true;
while(i <= Math.floor(Math.sqrt(n))){
    if (n % i == 0){
        prost = false;
    }
    i++;
}
if(prost == true){
    console.log("prost");
}else {
    console.log("slozen");
}

i = 1;
n = 20;
let q = i ** 3 - 3 * i + n; 
counter = 0;

while (){
    if(q % 7 == 0){
        counter++;
    }
    i++;
}
console.log(counter);







