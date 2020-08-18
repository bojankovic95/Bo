//DOM 

let inputImePrezime = document.getElementById("name");

let inputTehnologije = document.querySelectorAll("input[name = tech]");
let form = document.querySelector("form");
let p = document.getElementById("result");


form.addEventListener("submit", event =>{
    event.preventDefault();
    let imeValue = inputImePrezime.value;
    let radioPol = document.querySelector("input[name = 'gender']:checked");
    let polValue = radioPol.value;
    //let techButton = document.querySelectorAll("input[name ='tech']");
    //let techValue = techButton.value;

    p.innerHTML = `Ime i Prezime: ${imeValue} <br>`;
    if(polValue == "Muski"){
        p.innerHTML += `<span style = "color: blue">Pol: ${polValue}</span>`;
        //p.style.color = "blue";
    }else if(polValue == "Zenski"){
        p.innerHTML += `<span style = "color: red"> Pol: ${polValue}</span>`;
        //p.style.color = "red";
    }else{
        p.innerHTML += `<span style = "color: green">Pol: ${polValue}</span>`;
        //p.style.color = "green";
    }
    let techButton = document.querySelectorAll("input[name ='tech']");
    let result = "<ul>";
    techButton.forEach(button => {
        if (button.checked) {
            //let techValue = techButton.value;
            result += `<li>${button.value}</li>`;
        }
    })
    result += "</ul>";
    p.innerHTML += result;

    inputImePrezime.value = "";

    form.reset(); //resetovanje forme 

});



