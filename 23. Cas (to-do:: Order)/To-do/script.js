//DOM
let inputTekst = document.getElementById("unesi");
let buttonDodaj = document.querySelector("button");
let buttonDodajNaPocetak = document.getElementById("dodajNaPocetak");
let buttonDodajNaKraj = document.getElementById("dodajNaKraj");
let lista = document.querySelector("ul");
let liAllTasks = document.querySelectorAll("li");
let arrTasks = [];

if(JSON.parse(localStorage.getItem("arrTaskStorage"))== null){
    localStorage.setItem("arrTaskStorage", JSON.stringify(arrTasks));
}else{
    arrTasks = JSON.parse(localStorage.getItem("arrTaskStorage"));
    for(let i = 0; i<arrTasks.length; i++){
        let liOldTask = document.createElement("li");
        liOldTask.textContent = arrTasks[i];
        lista.appendChild(liOldTask);
    }
}

inputTekst.addEventListener("keyup", event =>{  
    if(event.keyCode == 13){
        event.preventDefault();
        let inputValue = inputTekst.value;
        if (inputValue == "" || inputValue == null) {
            alert("Morate uneti tekst!")
        } else {
            let liNewTask = document.createElement("li");
            liNewTask.textContent = inputValue;
            arrTasks.push(inputValue);
            localStorage.setItem("arrTaskStorage", JSON.stringify(arrTasks));//stavimo ponovvo da bi se updateovalo
            let radioAdd = document.querySelector("input[name = dodaj]:checked")
            if (radioAdd.id == 'dodajNaPocetak') {
                lista.prepend(liNewTask);
            } else {
                lista.appendChild(liNewTask);
            }

        }
        inputTekst.value = "";

    }
})

lista.addEventListener("click", event =>{
    if(event.target.tagName == "LI"){
    event.target.remove();
    let index = arrTasks.indexOf(event.target.textContent);
    arrTasks.splice(index, 1);
    localStorage.setItem("arrTaskStorage", JSON.stringify(arrTasks));
    }
})

//BITNA OSOBINA EVENT BUBBLING 

/*liAllTasks.forEach( li =>{
    li.addEventListener("click", event =>{ //EVENT je nosioc dogadjaja i novi sve info o LI 
        console.log(event.target.tagName);
        event.target.remove(); //UKLANJA ELEMENTE SA LISTE
    })
})*/

// event.target vraca element

/////////////////////////////////////////
//KESIRANJE PODATAKA NA LOKALNOM BROWSERU 
//LOCAL STORAGE 
////////////////////////////////////////

let h = document.querySelector("h1");

//smestanje elementa u local storage
// FORMULA localStorage.setItem("key", "value"); //key = jedinstven; value = vrednost;
localStorage.setItem("username", "Bojan");
localStorage.setItem("grad", "Vranje");
localStorage.setItem("username", "NovoIme") //menja vrednost username-a
localStorage.setItem("godine", 25);

//VRACANJE ELEMENTA IZ LOCAL STORAGE 
let getUsername = localStorage.getItem("username"); //pod navodnicima ide kljuc
console.log(getUsername);
let getGodine = localStorage.getItem("godine");
getGodine++;
localStorage.setItem("godine", getGodine);
console.log(getGodine);



