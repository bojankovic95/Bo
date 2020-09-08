let getTodos = async () =>{
    let response = await fetch("./JSON/fruits.json");
    if(response.status !== 200){
        //Doslo je do greske 
        throw new Error ("Doslo je do greske u pozivu!");
    }


    let data = await response.json();
    console.log(data);

    response = await fetch("./JSON/vegetables.json");
    if (response.status !== 200) {
        //Doslo je do greske 
        throw new Error("Doslo je do greske u pozivu!");
    }

    data = await response.json();
    console.log(data);

    return data;
}

console.log(1);
console.log(2);
getTodos().then(data => console.log(data))
        .catch(err => console.log(err));
console.log(3);
console.log(4);

let h = document.createElement("h3");
let div = document.getElementById("div");
let div1 = document.getElementById("div1");
let p = document.createElement("p");
//let ul = document.createElement("ul");
// let li = document.createElement("li");

div.appendChild(h);
h.innerText = "Fruits"; 

let printFruits = async () =>{
    let response = await fetch("./JSON/fruits.json");
    let data = await response.json();

    let ul = document.createElement("ul");
    div.appendChild(ul);
    data.forEach(element => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = element.name; 
    });

    console.log(data);
}
printFruits();

let tezina = async () =>{
    let response = await fetch("./JSON/fruits.json");
    let data = await response.json();
    let kgf = 0;

    data.forEach(elem =>{
        kgf += Number(elem.kilogram);
    })

    response = await fetch("./JSON/vegetables.json")
    data = await response.json();

    let kgv = 0;
    data.forEach(elem =>{
        kgv += Number(elem.kilogram);
    })
    console.log(kgf);
    console.log(kgv);

    return (kgv + kgf);
}
tezina();

div.appendChild(p);

let h1 = document.createElement("h3");
div = document.getElementById("div");
//let ul = document.createElement("ul");
// let li = document.createElement("li");

div1.appendChild(h1);
h1.innerText = "Vegetables";

let printVeges = async () => {
    response = await fetch("./JSON/vegetables.json");
    data = await response.json();

    let ul1 = document.createElement("ul");
    div1.appendChild(ul1);
    data.forEach(element => {
        let li1 = document.createElement("li");
        ul1.appendChild(li1);
        li1.innerText = element.name;
    });

    console.log(data);
}
printVeges();


//FILIPOV KOD SA CASA 

// console.log('-----Async & Await-----')
// let container = document.querySelector('.container');
// let getTodos = async (resource1, resource2, resource3) => {
//     let response = await fetch(resource1);
//     let suma = 0;
//     if (response.status != 200) {
//         throw new Error('Doslo je do greske u pozivu 1')
//     } else {
//         let data = await response.json();
//         let h3 = document.createElement('h3');
//         let ul = document.createElement('ul');
//         let p = document.createElement('p');
//         let sum = 0;
//         h3.innerHTML = "Fruits"
//         container.append(h3);
//         data.forEach(elem => {
//             sum = sum + parseInt(elem.kilogram)
//             let liItem = document.createElement('li');
//             liItem.innerHTML = elem.name;
//             ul.append(liItem);
//             container.append(ul);
//         });
//         p.innerHTML = `${sum}kg`;
//         container.append(p);
//         suma = suma + sum;
//     }
//     response = await fetch(resource2)
//     if (response.status != 200) {
//         throw new Error('Doslo je do greske u pozivu 2')
//     } else {
//         data = await response.json();
//         let h3 = document.createElement('h3');
//         let ul = document.createElement('ul');
//         let p = document.createElement('p');
//         let sum = 0;
//         h3.innerHTML = "Vegetables"
//         container.append(h3);
//         data.forEach(elem => {
//             sum = sum + parseInt(elem.kilogram)
//             let liItem = document.createElement('li');
//             liItem.innerHTML = elem.name;
//             ul.append(liItem);
//             container.append(ul);
//         });
//         p.innerHTML = `${sum}kg`;
//         container.append(p);
//         suma = suma + sum;
//     }
//     response = await fetch(resource3)
//     if (response.status != 200) {
//         throw new Error('Doslo je do greske u pozivu 3')
//     } else {
//         data = await response.json();
//         let h3 = document.createElement('h3');
//         let ul = document.createElement('ul');
//         h3.innerHTML = "Cereals"
//         container.append(h3);
//         data.forEach(elem => {
//             let liItem = document.createElement('li');
//             liItem.innerHTML = elem.name;
//             ul.append(liItem);
//             container.append(ul);
//         });
//     }
//     return suma;
// }
// getTodos('./json/fruits.json', './json/vegetables.json', './json/cereals.json').then(data => console.log(data))
//     .catch(err => console.log(err, `Doslo je do greske`))

