let suma = function(a, b){
    return a + b;
}
console.log(suma(5, 6));

let suma2 = (a, b) => {
    return a + b;
}
console.log(suma2(3, 4));

let hello = () => {
    console.log("Hello world!");
}
hello();

//Obicna funkcija
function neparan(n){
    if(n % 2 != 0){
        return true;
    }else{
        return false;
    }
}
let n = 9;
if(neparan(n) === true){ //=== true nije obavezno
    console.log(`Broj ${n} je neparan`);
}else{
    console.log(`Broj ${n} je paran`);
}

// ==== Arrow funcija

let neparan2 = (n) => {
    if(n % 2 != 0){
        return true;
    }else{
        return false;
    }
}
n = 8;
if (neparan(n) === true) { //=== true nije obavezno
    console.log(`Broj ${n} je neparan`);
} else {
    console.log(`Broj ${n} je paran`);
}

//13. zadatak 

let aritmeticka = (n, m) => {
    let sum = 0; 
    let brojac = 0;
    for(i=n; i<=m; i++){
        sum += i;
        brojac++; 
    }
    let aritmetickaSredina = sum/brojac;
    return aritmetickaSredina;
}
console.log(aritmeticka(1, 9));

//14. zadatak

let aritmeticka3 = (n, m) => {
    let suma = 0;
    let counter = 0;
    for(i=n; i<=m; i++){
        if(i%10 == 3){
            suma+=i;
            counter++;
        }
    }
    let aritmetickaSredina3 = suma/counter;
    return aritmetickaSredina3;
}
console.log(aritmeticka3(1, 33));

// 18. zadatak

let vreme = (t, p, n) => {
    if(p > t){
        return 0;
    }else{
        return Math.abs(p + n - t);
    }
}
console.log(vreme(15, 20, 25));
console.log(vreme(15, 10, 12));


// Funcija za postavljanje slike

let slika = (putanja) =>{
    return `<img src="${putanja}" style = "width: 250px">`
}

// Skracena verzija (ako u telu imamo samo return ne moramo da ga pisemo)

let slika2 = (putanja) => `<img src="${putanja}" style = "width: 250px">`

//Postoji jos skracenija verzija (AKO U TELU IMA SAMO REUTURN I NISTA VISE)

let slika3 = putanja => `<img src="${putanja}" style = "width: 250px">`


let div = document.getElementById("container");
div.innerHTML += slika("download.jpeg");
div.innerHTML += slika2("download.jpeg");
div.innerHTML += slika3("download.jpeg");

//Napisati funkciju koja vraca veci od dva prosledjena broja

let max2 = (a, b) => {
    if (a > b) {   //kada bi stavili >= ovde console.log(max2(5 ,5)); bi vratio prvi rezultat jer se ispunjava uslov
        return a;
    }else{
        return b;
    }
}
console.log(max2(3, 5)); //drugi parametar se vraca
console.log(max2(5, 3)); //prvi parametar se vraca
console.log(max2(5 ,5)); //VRACA DRUGI PARAMETAR JER PRVI USLOV NIJE ISPUNJEN

// Odrediti najveci od 4 broja 

let max4 = (a, b, c, d) => {
    let m1 = max2(a, b);
    let m2 = max2(c, d);
    let m3 = max2(m1, m2);
    return m3;
}
console.log(max4(1, 2, 3, 4));

let max41 = (a, b, c, d) => max2(max2(a, b), max2(c, d)); // skracena verzija 

let maxd4 = (a, b, c, d) => { //trazimo najveci broj iz niza
    let m1 = max2(a, b);
    let m2 = max2(m1, c);
    let m3 = max2(m2, d);
    return m3;
}

let maxd41 = (a, b, c, d) => max2(max2(max2(a, b), c), d); //skracena verzija 
console.log(maxd41(1, 2, 3, 9));

let cars = ["Toyota", "Peugeot", "BMW"]; //Niz od tri elementa

console.log(cars);
console.log(cars[0]); //Pristupanje prvom elementu niza
console.log(cars[1]); //Pristupanje drugom elementu niza
console.log(cars[2]); //Pristupanje trecem elementu niza

console.log(cars[3]); //Nije definisano 

//Ako niz a ima n elemenata to su elementi a[0], a[1], a[2]...a[n-1]

cars[2] = true;
cars[1] = 456
cars[4] = "Citroen"

console.log(cars);

cars = ["Opel", "Peugeot", "Audi", "Citroen"];
for(i=0; i < cars.length; i++){
    console.log(cars[i]);
}

//Drugacije zapisano

for(i=0; i <= cars.length - 1; i++){
    console.log(cars[i]);
}

//Prvi zadatak 

let niz = [9, 15, 3, -4, -10, 2, 1];
/*let sum = 0;
for(i = 0; i < niz.length; i++){
    sum += niz[i];
}
console.log(sum);*/

let suma1 = myarray => {
    let sum = 0;
    for (i = 0; i < myarray.length; i++){
        sum += myarray[i];
    }
    return sum;
}
console.log(suma1(niz));

//3. zadatak

let proizvod = myarray => {
    let pro = 1;
    for(i=0; i<myarray.length; i++){
        pro *= myarray[i];
    }
    return pro;
}
console.log(proizvod(niz));

//4. zadatak

let srednja = myarray => {
    let zbir = 0;
    let count = 0;
    for (i = 0; i < myarray.length; i++){
        zbir += myarray[i];
        count += 1;
    }
    let srednjavrednost = zbir/count;
    return srednjavrednost;
}
console.log(srednja(niz));

//5. zadatak

let maksimalan = myarray => {
    
}


