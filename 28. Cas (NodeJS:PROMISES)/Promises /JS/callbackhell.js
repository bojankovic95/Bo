console.log("Callback Hell");

let getToDos = (resource , callback) =>{ //prosledjujemo i json fajl kao resurs
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        }else if(request.readyState === 4){
            callback("Greska", undefined);
        }
    });
    request.open("GET", resource);
    request.send();
}
//prvo ucitava voce pa povrce pa zitarice// POENTA JE DA SE UCITAVA JEDNO PO JEDNO
getToDos('./JSON/fruits.json', (err, data)=>{  //prosledjujemo parametar kao resurs
    console.log("callback 1");
    console.log(data);
    getToDos('./JSON/vegetables.json', (err, data)=>{
        console.log("callback 2");
        console.log(data);
        getToDos('./JSON/cereals.json', (err, data)=>{
            console.log('callback 3');
            console.log(data);
        })
    })
});