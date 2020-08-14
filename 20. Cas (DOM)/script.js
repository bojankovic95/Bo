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
noviparagraf.innerHTML = "tekst novog paragrafa";
noviparagraf.style.color = "red";

document.body.appendChild(noviparagraf); //dodavanje novog cvora kao dete postojeceg elementa 
