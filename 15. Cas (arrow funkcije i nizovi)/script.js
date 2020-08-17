let suma = function (a, b) {
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
function neparan(n) {
    if (n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
let n = 9;
if (neparan(n) === true) { //=== true nije obavezno
    console.log(`Broj ${n} je neparan`);
} else {
    console.log(`Broj ${n} je paran`);
}

// ==== Arrow funcija

let neparan2 = (n) => {
    if (n % 2 != 0) {
        return true;
    } else {
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
    for (i = n; i <= m; i++) {
        sum += i;
        brojac++;
    }
    let aritmetickaSredina = sum / brojac;
    return aritmetickaSredina;
}
console.log(aritmeticka(1, 9));

//14. zadatak

let aritmeticka3 = (n, m) => {
    let suma = 0;
    let counter = 0;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            suma += i;
            counter++;
        }
    }
    let aritmetickaSredina3 = suma / counter;
    return aritmetickaSredina3;
}
console.log(aritmeticka3(1, 33));

// 18. zadatak

let vreme = (t, p, n) => {
    if (p > t) {
        return 0;
    } else {
        return Math.abs(p + n - t);
    }
}
console.log(vreme(15, 20, 25));
console.log(vreme(15, 10, 12));


// Funcija za postavljanje slike

let slika = (putanja) => {
    return `<img src="${putanja}" style = "width: 250px">`
}

// Skracena verzija (ako u telu imamo samo return ne moramo da ga pisemo)

let slika2 = (putanja) => `<img src="${putanja}" style = "width: 250px">`

//Postoji jos skracenija verzija (AKO U TELU IMA SAMO REUTURN I NISTA VISE)

let slika3 = putanja => `<img src="${putanja}" style = "width: 250px">`




//Napisati funkciju koja vraca veci od dva prosledjena broja

let max2 = (a, b) => {
    if (a > b) {   //kada bi stavili >= ovde console.log(max2(5 ,5)); bi vratio prvi rezultat jer se ispunjava uslov
        return a;
    } else {
        return b;
    }
}
console.log(max2(3, 5)); //drugi parametar se vraca
console.log(max2(5, 3)); //prvi parametar se vraca
console.log(max2(5, 5)); //VRACA DRUGI PARAMETAR JER PRVI USLOV NIJE ISPUNJEN

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
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//Drugacije zapisano

for (i = 0; i <= cars.length - 1; i++) {
    console.log(cars[i]);
}

//Prvi zadatak 

let niz = [9, 15, 3, -4, -10, 20, 10];
/*let sum = 0;
for(i = 0; i < niz.length; i++){
    sum += niz[i];
}
console.log(sum);*/

let suma1 = myarray => {
    let sum = 0;
    for (i = 0; i < myarray.length; i++) {
        sum += myarray[i];
    }
    return sum;
}
console.log(suma1(niz));

//3. zadatak

let proizvod = myarray => {
    let pro = 1;
    for (i = 0; i < myarray.length; i++) {
        pro *= myarray[i];
    }
    return pro;
}
console.log(proizvod(niz));

//4. zadatak

let srednja = myarray => {
    let zbir = 0;
    let count = 0;
    for (i = 0; i < myarray.length; i++) {
        zbir += myarray[i];
        count += 1;
    }
    let srednjavrednost = zbir / count;
    return srednjavrednost;
}
console.log(srednja(niz));

//4. zadatak

let avg = myarr => {
    let s = suma1(myarr);
    let arsr = s / myarr.length;
    return arsr;
}
console.log("Aritmeticka sredina je: " + avg(niz));

//5. zadatak 

let max = myarr =>{
    let maks = myarr[0];
    for(let i=0; i<myarr.length; i++){
        if(maks < myarr[i]){
            maks = myarr[i];
        }
    }
    return maks;
}
console.log(max(niz));

//6. zadatak

let min = myarr => {
    let min = myarr[0];
    for (let i = 0; i < myarr.length; i++) {
        if (min > myarr[i]) {
            min = myarr[i];
        }
    }
    return min;
}
console.log(min(niz));

//7. zadatak 
//PRVI NACIN

let maxindex = myarr => {
    let maks = myarr[0];
    let indeks = 0;
    for(i=0; i<myarr.length; i++){
        if(maks < myarr[i]){
            maks = myarr[i];
            indeks = i;
        }
    }
    return indeks;
}

console.log(maxindex(niz));

//DRUGI NACIN 

let maxind2 = myarr => {
    let maks = max(myarr);
    for(let i = 0; i<myarr.lenght; i++){
        if(myarr[i] == maks){
            maksind = i;
            return i; 
        }
    }
}
console.log(maxind2(niz));

//9. zadatak 
/*let srednja1 = myarr => {
    let zbir = 0;
    let count = 0;
    let count1 = 0;
    for (i = 0; i < myarr.length; i++) {
        zbir += myarr[i];
        count += 1;
        let srednjavrednost = zbir / count;
        if (myarr[i] > srednjavrednost) {
            count1++;
        }
    }
    return count1;
    
}
console.log(srednja1(niz));*/

//9. ZADATAK
//PRVI NACIN (PESAKA)

let br = 0;
let sumaNiza = 0;
for(let i=0; i<niz.length; i++){
    sumaNiza += niz[i];
}
let avgNiza = sumaNiza / niz.length;

for(let i = 0; i<niz.length; i++){
    if(niz[i] > avgNiza){
        br++;
    }
}
console.log(br);

//DRUGI NACIN 

let brojvecih = arr => {
    let arsr = avg(arr);
    let br = 0; 
    for (let i = 0; i < niz.length; i++){
        if(arr[i]>arsr){
            br++;
        }
    }
    return br;
}
console.log(brojvecih(niz));


//10. zadatak

let pozitivni = myarr => {
    let zbir = 0;
    for(i=0; i<myarr.length; i++){
        if(myarr[i]>0){
            zbir += myarr[i];
        }
    }
    return zbir;
}
console.log(pozitivni(niz));

//11. zadatak 

let parnizbir = myarr => {
    let count1 = 0; 
    for(i=0; i<myarr.length; i++){
        if(myarr[i] % 2 == 0){
            count1++;
        }
    }
    return count1;
}
console.log(parnizbir(niz));

//12. zadatak 

let parelementi = arr => {
    let index = 0;
    let counter = 0;
    for(i=0; i<arr.length; i++){
        index = i;
        if(index % 2 != 0 && arr[i] % 2 == 0){
            counter++;
        }
    }
    return counter;
}
console.log(parelementi(niz));

//13. zadatak 
let sumaparnih = arr => {
    let index = 0;
    let sum = 0;
    for(i=0; i<arr.length; i++){
        index = i;
        if(index % 2 == 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumaparnih(niz));

//14. zadatak
let a = 5;
a = a * (-1);
console.log(a);

let promeniZnak = myarr => {
    for(let i = 0; i<myarr.length; i++){
        myarr[i] = myarr[i] * (-1);
    }
    console.log(myarr);
}
promeniZnak(niz);

//15. zadatak
let nepelparind = myarr => {
    for(let i = 0; i<myarr.length; i++){
        index = i;
        if(index % 2 == 0 && myarr[i] % 2 != 0){
            myarr[i] = myarr[i] * (-1);
        }
    }
    console.log(myarr);
}
nepelparind(niz);

let nizstr = ["Breskve", "Sljive", "Kajsije", "Jagode", "Maline"];

let myList = document.getElementById("lista");
for(let i = 0; i<nizstr.length; i++){
    myList.innerHTML += `<li>${nizstr[i]}</li>`
}

for (let i = nizstr.length-1; i >= 0; i--) {
    myList.innerHTML += `<li>${nizstr[i]}</li>`
}







