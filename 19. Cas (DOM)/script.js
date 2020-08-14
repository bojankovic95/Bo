console.log(document);

console.log(typeof document);
console.log(document.URL);
console.log(document.links);
console.log(document.anchors);

//Dohvatanje svih elemenata sa datom klasom 

let elements = document.getElementsByClassName("links");
console.log(elements);

//DOhvatanje svih elemenata sa zadatim tagom 

let links = document.getElementsByTagName("a");
console.log(links);

//Dohvatanje svih elemenata sa zadatom vrednoscu name atributa

let temp = document.getElementsByName("links");
console.log(temp);

//prolazak kroz clanove kolekcije preko for petlje

for(let i = 0; i<elements.length; i++){  //NE MOZEMO DA KORISTIMO FOREACH ZA OVO
    console.log(elements[i]);           //HTML KOLEKCIJA NE PODRZAVA FROEACH
}

//KONVERTUJEMO HTML KOLEKCIJU U NIZ 
let elemeentsArray = Array.from(elements); //PRAVIMO NIZ OD KOLEKCIJE//PA MOZEMO DA KORISTIMO FOREACH//

elemeentsArray.forEach(elem =>{
    console.log(elem);
})

// dohvata preko css selektora (dohvata prvi element)
let link = document.querySelector(".links"); //ime ide isto kao u css
console.log(link);

//dohvatanje SVIH elemenata koji zadovoljavaju CSS selektor
let linksDiv = document.querySelectorAll("div.links a"); //dohvata sve linkove unutar diva sa klasom links
console.log(linksDiv);

//KRETANJE KROZ NODE LISTU JE DOZVOLJENO I FOR I FOREACH PETLJOM

for(let i = 0; i<linksDiv.length; i++){
    console.log(linksDiv[i]);
}

linksDiv.forEach(link =>{
    console.log(link);
})

let par = document.querySelector("p");
console.log(par);

let divErr = document.querySelector(".error");
console.log(divErr);

let tab = document.querySelector(".error tr:last-child");
console.log(tab);

let allLinks = document.querySelectorAll("a");
console.log(allLinks);
for(let i = 0; i<allLinks.length; i++){
    console.log(allLinks[i]);
}

let allPics = document.querySelectorAll("img");
console.log(allPics);

allPics.forEach(pic =>{
    console.log(pic);
})

let tabrow = document.getElementsByClassName("tabrow");
console.log(tabrow);

let el = document.querySelectorAll("td");
console.log(el);
el.forEach(elem =>{
    console.log(elem);
})

//menjanje sadrzaja html taga
link.innerHTML = "<span style ='font-style: italic'>Novi tekst</span> linka"

//menjanje pojedinacnog atributa
link.target = "_blank";

//menjanje stila elementa 
link.style.color = "blue";
link.style.backgroundColor = "orange";
link.style.textDecouration = "none";

//2. nacin

//link.setAttribute("style", "color: red"; "background-color: orange"; "text-decoration: none";)

//backgound-color: orange; (css) = ID.style.backgroundColor = "oradge" (JS)

//Mozemo da koristimo metodu 
link.setAttribute("target", "_blank");

//DOdavanje vrednosti atributa 
link.innerHTML += "za kliktanje"; //KADA STAVIMO += DODAJE SE VREDNOST NA VEC POSTOJECU I NE MENJA JE 

link.style.border = "1px";
link.style.border += " solid";
link.style.color += " black";

//Svakom paragrafu dodati i**2 gde je i redni broj paragrafa u dokumentu 

let paragrafi = document.querySelectorAll("p");
paragrafi.forEach((p, i)=>{
    let kv = (i+1)*(i+1);
    p.innerHTML += kv; //za svaki paragraf 
    p.style.color = "purple";
    p.innerHTML += "VAZNO!";
});

let greska = document.querySelector(".error");
greska.innerHTML += "<h1>Greska</h1>";

let slik = document.querySelectorAll("img");
slik.forEach(elem =>{
    elem.alt = "alternativni tekst";
})

let parBoja = document.querySelectorAll("p");
parBoja.forEach((p, i)=>{
    if((i+1) % 2 == 0){
        p.style.backgroundColor = "green";
    }else{
        p.style.backgroundColor = "red";
    }
})


let linksAll = document.querySelectorAll("a");
linksAll.forEach((link, i) => {
    link.style.padding += "3px";
    link.style.fontSize += " 30px"
    if((i+1) % 2 == 0){
        link.style.backgroundColor += " green";
        link.style.color += " purple";
    }else{
        link.style.backgroundColor += " blue";
        link.style.color += " white";
    }
});

//slikama na stranici sa ekstenzijom png postaviti okvir 

//menjanje target atributa
/*let linkBlank = document.querySelectorAll("a");
linkBlank.forEach(link =>{
    if(link.target = "_blank"){
        link.target = "_top";
    }else if(link.target != "_blank"){
        link.target = "_blank";
    }
})*/

//menjanje target atributa 

for(let i = 0; i<links.length; i++){
    if(links[i].target != "_blank"){
        links[i].target = "_blank";
    }else{
        links[i].target = "_top";
    }
}

console.log(paragrafi[1].parentNode); //vraca parent
console.log(document.querySelector("table").parentNode.parentNode); //vraca dedu
console.log(paragrafi[1].parentNode.childNodes); //ide do parent elementa i prikazije svu njegovu decu 
console.log(typeof paragrafi[1].parentNode.childNodes); //vraca nodelist. moze da se koristi petlja

/*let niz = ["Bojan", "Stefan", "Marija", "Ivan", "Slobodan"];
let div = document.getElementById("name");
niz.forEach(name =>{
    
    div.innerHTML += `<a href = "#"> ${name} </a>`;
    
    
    /*if(name.startsWith("S")){
    
    }else{
        
    }
})*/










