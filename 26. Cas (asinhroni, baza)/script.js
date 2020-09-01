console.log(1);
console.log(2);

setTimeout(()=>(
    console.log("pozvali smo callback funkciju")
), 2000);

console.log(3);
console.log(4);


/////////////////////////

let request = new XMLHttpRequest();

/*request.addEventListener("readystatechange", ()=>{
    if(request.readyState === 4){
    //request.responseText -   STRING KOJI SERVER VRACA KAO ODGOVOR
    let data = JSON.parse(request.responseText);
    console.log(request, data);
    }
})*/

request.addEventListener("readystatechange", ()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log("Odgovor sa servera je preuzet i server je potvrdio validnost.");
        let data = JSON.parse(request.responseText);
        console.log(data);
    } else if(request.readyState === 4){
        console.log("Server nije mogao da obradi zahtev")
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos"); //prima dva parametra// prvi je metoda (get, post)// drugi je URL// OVDE SE USPOSTALJA KONEKCIJA
request.send();

///////// PRVI I DRUGI ZADATAK

let req = new XMLHttpRequest();
req.addEventListener("readystatechange", ()=>{
    if(req.readyState === 4 && req.status === 200){ //ako je sve u redu
        let data = JSON.parse(req.responseText); //data kao niz objekata
        data.forEach(user => { //prolazimo kroz niz objekata
            if(user.website.includes(".com")){  //provera da li sadrzi .com u mailu
                console.log(user.name);
            } else if (req.readyState === 4) {
                console.log("Server nije mogao da obradi zahtev")
            }
        });
    }
})

req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.send();

//////// TRECI ZADATAK 

let req3 = new XMLHttpRequest();
req3.addEventListener("readystatechange", ()=>{
    if(req3.readyState === 4 && req3.status === 200){
        let data = JSON.parse(req3.responseText);
        data.forEach(user =>{
            if(user.name.includes("Clementin")){
                console.log("Korisnici cije ime sadrzi Clementin " + user.name);
            }
        })
    }
})

req3.open("GET", "https://jsonplaceholder.typicode.com/users");
req3.send();

/////// CETVRTI ZADATAK 

let req4 = new XMLHttpRequest();
req4.addEventListener("readystatechange", () => {
    if (req4.readyState === 4 && req4.status === 200) {
        let data = JSON.parse(req4.responseText);
        data.forEach(user => {
            if ((user.company.name.includes("Group")) || (user.company.name.includes("LLC"))) {
                console.log("Korisnici cija kompanija sadrzi Group ili LLC " + user.name);
            }
        })
    }
})

req4.open("GET", "https://jsonplaceholder.typicode.com/users");
req4.send();

////// PETI ZADATAK

let reqCity = new XMLHttpRequest();
reqCity.addEventListener("readystatechange", () =>{
    let cities = [];
    if (reqCity.readyState === 4 && reqCity.status === 200){
        let data = JSON.parse(reqCity.responseText);
        data.forEach(user =>{
            if(cities.includes(user.address.city) == false){
                cities.push(user.address.city);
            }
        })
        
        cities.forEach(city =>{
        console.log(city);
        })
    }
})

reqCity.open("GET", "https://jsonplaceholder.typicode.com/users");
reqCity.send();

//////// SESTI ZADATAK 

let reqGeo = new XMLHttpRequest();
let counter = 0;
reqGeo.addEventListener("readystatechange", () => {
    if (reqGeo.readyState === 4 && reqGeo.status === 200) {
        let data = JSON.parse(reqGeo.responseText);
        data.forEach(user => {
            if (Number(user.address.geo.lat) < 0 && Number(user.address.geo.lng) < 0){
                counter++;
            }
        })
        console.log("Broj ljudi sa geo duzinom u minusu je " + counter);
    }
})



reqGeo.open("GET", "https://jsonplaceholder.typicode.com/users");
reqGeo.send();

///ZADATAK 2 PREKO CALLBACK FUNKCIJE
let getKorisnici = callback =>{

let req = new XMLHttpRequest();
req.addEventListener("readystatechange", () => {
    if (req.readyState === 4 && req.status === 200) { //ako je sve u redu
        let data = JSON.parse(req.responseText); //data kao niz objekata
        callback(data);
    }
})

req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.send();

}

//POZIV FUNKCIJE

getKorisnici(data =>{
    data.forEach(user =>{
        if(user.website.includes(".com")){
            console.log(user.name);
        }
    })
})
