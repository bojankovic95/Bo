console.log('fetch');

let test = fetch('./JSON/fruits.json');
console.log(test); //vraca promise -> asocijacija na then i catch

fetch('./JSON/fruits.json').then(response =>{
    console.log('Resolved', response);
}).catch(err =>{
    console.log("rejected", err); //rejected vraca ako i samo ako je problem sa mrezom
});