///////// PRVI I DRUGI ZADATAK //PREKO CALLBACK F-JE
let getKorisnici = callback => {
let req = new XMLHttpRequest();
req.addEventListener("readystatechange", () => {
    if (req.readyState === 4 && req.status === 200) { //ako je sve u redu
        let data = JSON.parse(req.responseText); //data kao niz objekata
        callback(undefined, data);   //prvi parametar koji prima je greska drugi su podaci 
            } else if (req.readyState === 4) {
                callback("Server nije u mogucnosti da obradi zahtev!", undefined);
            }
        });


req.open("GET", "https://jsonplaceholder.typicode.com/users");
req.send();
}



/////  funkcija koja odredjuje korisnike ciji sajt sadrzi .com
getKorisnici( (error, data) =>{
    if(error){
        console.log(error);
    }else{
    data.forEach(user => {
        if(user.website.includes(".com")){
            console.log(user.name)
        }
    });
}
});

///funkcija cije ime sadrzi clementin
function usersNameClementin (error, users) {
    if(error){
        const div = document.getElementById("error");
        div.innerHTML = error;
    }else{
    users.forEach(user =>{
        if(user.name.includes("Clementin")){
            console.log(user.name);
        }
    })
}
}
getKorisnici(usersNameClementin); //FUNKCIJA KAO PARAMETAR; POZIV FUNKCIJE

///korisnici cije ime kompanije sadrzi group ili LLC 
getKorisnici((error, data)=>{
    if(error){
        console.log(error);
    }else{
        data.forEach(user =>{
            if(user.company.name.includes("group") || user.company.name.includes("LLC")){
                console.log(user.name);
            }
        })
    }
})

//gradovi korisnika 

getKorisnici((error, data)=>{
    if(error){
        console.log(error);
    }else{
        let cities = [];
        data.forEach(user =>{
            if(cities.includes(user.address.city == false)){
                cities.push(user.address.city);
            }
        })
        console.log(cities);
    }  
})

//Broj korisnika ciji su geo sirina i duzina negativan br

getKorisnici((error, data)=>{
    if(error){
        console.log(error);
    }else{
        let counter = 0;
        data.forEach(user => {
            if (Number(user.address.geo.lat) < 0 && Number(user.address.geo.lng) < 0){
                counter++;
            }
        });
        console.log(counter);
    }
})
