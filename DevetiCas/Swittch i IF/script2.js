let boja = "zelena";

switch (boja){
    case "crvena":
        document.getElementById("boja").style.color = "red";
        break;
    case "zelena":
        document.getElementById("boja").style.color = "green";
        break;
    case "plava":
        document.getElementById("boja").style.color = "blue";
        break;
    default: 
        document.getElementById("boja").style.color = "yellow";
}

let br1 = 20;
let br2 =6;
let op = "m";
let rez;

switch(op){
    case "s":
        rez = br1 + br2;
        console.log(`${br1} + ${br2} = ${rez}`);
        break;
    case "o":
        rez = br1 - br2;
        console.log(`${br1} - ${br2} = ${rez}`);
        break;
    case "m":
        rez = br1 * br2;
        console.log(`${br1} * ${br2} = ${rez}`);
        break;
    case "d":
        if(br2 == 0){
            console.log("nije dozvoljeno deliti nulom");
        } else {
            rez = br1 / br2;
            console.log(`${br1} / ${br2} = ${rez}`);
        }
        break;
        default:
            console.log("doslo je do greske");
}


