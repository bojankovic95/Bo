console.log('fetch');

let test = fetch('./JSON/fruits.json');
console.log(test); //vraca promise -> asocijacija na then i catch


//1. FETCH .JSON FAJL
//2. RETURN RESPONSE (PRVA .THEN GRANA)
//3. UZETI PODATKE IZ RESPONSA
//4. DOHVATI GRESKU (.CATCH GRANA)
let counter = 0;
fetch('./JSON/fruits.json').then(response =>{
    console.log('Resolved', response)
    return response.json()
    .then(data =>{
        data.forEach(element => {
            if(element.name.includes("berries")){
                counter++;
                console.log(element.name);
            }
        });
        console.log(counter);
        console.log(data);
    })
}).catch(err =>{
    console.log("rejected", err); //rejected vraca ako i samo ako je problem sa mrezom
});


let print = (resource) => { //prosledjujemo i json fajl kao resurs
    let request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Doslo je do greske!');
            }
        });
        request.open("GET", resource);
        request.send();
    });
}

print("./JSON/fruits.json").then(data =>{
    data.forEach(fruit =>{
        console.log(fruit.name);
        return print("./JSON/vegetables.json")
    })
    })

/////////////////////////////

//Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)

fetch("./JSON/fruits.json")
.then(response =>{
    //console.log(response.json());
    return response.json();
})
.then(data =>{
    console.log(data);
    let count = 0; 
    data.forEach(fruit =>{
        if(!fruit.name.includes("berries")){
            console.log(fruit.name);
            count++;
        }
    })
    console.log(count)
})
.catch(err =>{
    console.log(err);
})