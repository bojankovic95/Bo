console.log("Promise");

//PROMISE JE ALTERNATIVA ZA CALLBACK HELL 


//PROMISE CEKA ODGOVOR
//ODGOVOR MOZE IMATI DVE VREDNOSTI 
//1. RESOLVED - UKOLIKO JE SVE PROSLO BEZ GRESKE 
//2. REJECTED UKOLIKO JE DOSLO DO NEKE GRESKE 
//SVAKI PROMISE MORA DA IMA JEDNU OD OVIH VREDNOSTI 


let getSomething = () =>{
    return new Promise( (resolve, reject) =>{
        resolve("Resolved...");
        reject("Rejected...");
    } );
}
let test = getSomething();
console.log(test);

//RUKOVANJE PRONISOM //Prvi nacin

//.then hvata kada je resolved 
//.catch hvata kada je rejected 
getSomething().then(data =>{  //ako je sve proslo kako treba
                console.log(data);
            }).catch(err =>{ //ako nije kako treba
                console.log(err);
            });

//RUKOVANJE PROMISOM //Drugi nacin

//.then hvata kada je resolved
//.then hvata kada je rejected
getSomething().then(data =>{
                console.log(data);
            }, err =>{
                console.log(err);
            })