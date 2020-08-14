let niz = ["Bojan", "Stefan", "Marija", "Ivan", "Slobodan"];


let div = document.getElementById("name");
niz.forEach(name =>{
    
    div.innerHTML += `<a href = "#"> ${name} </a> <br>`;
    
    if(name.startsWith("S")){
        name.target = "_blank";
    }
});

let div1 = document.getElementById("lista");
let list = "<ul>";

niz.forEach(name =>{
    list += `<li>${name}</li>`;
})
list += "</ul>";
div1.innerHTML = list;
let boja = document.querySelectorAll("li");
boja.forEach((li, i) =>{
    if ((i+2) % 2 != 0) {
        li.style.color = "red";
    } else {
        li.style.color = "green";
    }
})
console.log(boja);


let div2 = document.getElementById("tabela");

let tabela = "<table>";
niz.forEach(name=>{
    tabela += `<tr>
                <td style = "border-style: solid; margin: 5px; padding: 5px;">${name}</td>
                </tr>`;
})
tabela += "</table>";
div2.innerHTML = tabela;

//let tab = document.querySelectorAll("td");

//kreiranje novog cvora u DOM stablu 

let noviparagraf = document.createElement("p");
noviparagraf.innerHTML = "Tekst novog paragrafa";
noviparagraf.style.color = "red";

document.body.appendChild(noviparagraf); //dodavanje novog cvora kao dete postojeceg elementa 

//Brisanje cvora iz dom stabla 

//document.body.removeChild(noviparagraf); //brise potomka body elementa 

//zamena cvora u DOM stablu 
let novilink = document.createElement("a");
novilink.innerHTML = "klikni";
novilink.href = "https://www.google.com";
document.body.replaceChild(novilink, noviparagraf); //zamenili smo novi paragraf linkom 

//dodavanje klase elementu 
novilink.classList.add("link");

let divv = document.getElementsByClassName("links")[0];
let novinovilink = document.createElement("a");
novinovilink.innerHTML = "klikni i ovde";
novinovilink.href = "#";
divv.appendChild(novinovilink);

let paragrafi = document.createElement("p");
paragrafi.innerHTML = "Tekst paragrafa";

document.body.appendChild(paragrafi);

let par = document.querySelectorAll("p");
console.log(par);

/* FILIPOV KOD (UPOREDI)
// 1.
paragrafi.forEach((paragraf, i) => {
    if (i % 2 != 0) {
        paragraf.classList.add('error')
    }
    else if (i % 2 == 0) {
        paragraf.classList.add('success')
    }
})

// 2.
paragrafi.forEach((paragraf, i) => {
    if (i % 3 == 0) {
        paragraf.style.fontSize = "15px";
    }
    if (i % 3 == 1) {
        paragraf.style.fontSize = "20px";
    }
    if (i % 3 == 2) {
        paragraf.style.fontSize = "25px";
    }
})

// 3.
paragrafi.forEach(paragraf => {
    if (paragraf.textContent.includes("error")) {
        paragraf.classList.add('error')
    }
    else if (paragraf.textContent.includes("success")) {
        paragraf.classList.add('success')
    }
})
// 4.
paragrafi.forEach(paragraf => {
    if (paragraf.classList.contains('error')) {
        paragraf.classList.remove('error');
    }
    else {
        paragraf.classList.add('error');
    }
})
*/