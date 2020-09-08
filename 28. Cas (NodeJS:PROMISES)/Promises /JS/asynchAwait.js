// ASINHRONA FUNKCIJA UVEK KAO REZULTAT VRACA PROMISE


let testAsync = async () =>{

}

let test = testAsync();
console.log(test);

let getToDos = async () =>{     //ASYNC KLJUCNA REC ZA ASINHRONU FUNKCIJU
    let response = await fetch("./JSON/fruits.json") //CEKA DOK NE DOBIJE ODGOVOR
    //AWAIT IDE SAMO U ASINHRONE FUNKCIJE 
    //AWAIT ZAUSTAVLJA JS KOD SVE DOK OD PROMISA NE DOBIJE RESOLVED I ONDA UPISUJE U RESPONSE PROMENLJIVU 
    console.log(response);
    let data = await response.json(); //vraca promise a u asinhronoj fji mozemo koristiti await umesto .then
    console.log(data);
}
getToDos();