

let getToDos = (resource) => { //prosledjujemo i json fajl kao resurs
    let request = new XMLHttpRequest();

    return new Promise( (resolve, reject)=>{
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

getToDos("./JSON/fruits.json")
.then(data =>{
    console.log("Resolved", data);
})
.catch(err =>{
    console.log("Rejected", err);
});


//CHAINING PROMISES - ULANCAVANJE PROMISA 
//NACIN IZBEGAVANJA CALLBACK HELLA
getToDos("./JSON/fruits.json")
    .then(data => {
        console.log("Resolved 1", data);
        return getToDos('./JSON/vegetables.json')
    })
    .then(data =>{
        console.log('Resolved 2', data);
        return getToDos('./JSON/cereals.json')
    })
    .then(data =>{
        console.log('Resolved 3', data)
    })
    .catch(err => {
        console.log("Rejected", err);
    });