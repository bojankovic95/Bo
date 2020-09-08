//GLAVNI JS FAJL 
// import {generateImage} from "./Modules/general.js";

// for(let i = 1; i <= 3; i++){
//     let src = `slike/slika${i}.jpeg`;
//     document.body.appendChild(generateImage(src));
// }

//PRIKAZ SLIKE U OKVIRU LISTE PREKO LIST.JS MODULA

import {generateList, generateListItem} from "./Modules/list.js"

let ul = generateList(document.body);
for(let i = 1; i <= 3; i++){
    let src = `Slike/slika${i}.jpeg`
    let li = generateListItem(ul, src);
}

//PRIKAZ SLIKA U OKVIRU TABELE PREKO TABLE.JS MODULA

import {generateTable, generateTableRow, generateTableItem} from "./Modules/table.js"

let table = generateTable(document.body);
let tr = generateTableRow(table);
for(let i = 1; i <= 3; i++){
    let src = `Slike/slika${i}.jpeg`
    generateTableItem(tr, src);
}

