//DOM 
let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
//let radios = document.querySelectorAll("input[name = 'btn']"); //dohvatamo sve radio buttone i uzimamo ime buttona 
//let radios1 = document.querySelector("input[name = 'btn']:checked");//dohvatamo samo cekiran button
let form = document.querySelector("form");
let pRes = document.getElementById("res");

/*let racunaj = (num1, num2, operacija) =>{

}*/


form.addEventListener('submit', event =>{
    event.preventDefault();
    //preuzmem iz input polja kao string
    let num1 = inputNum1.value; 
    let num2 = inputNum2.value; 

    //izvrsim konverziju u numericku vrednost 
    num1 = Number(num1);
    num2 = Number(num2);

    //izvrsim validaciju (proverim da li su u zeljenom formatu)
    //Number.isInteger(num1) - PROVERAVA DA LI JE NUM1 CEO BROJ
    //Number.isFinite(num1) - PROVERAVA DA LI JE NUM1 CEO ILI DECIMALAN BROJ
    if(Number.isFinite(num1) && Number.isFinite(num2)){ //pitamo da li su celi brojevi
        //racunaj
        let radioChecked = document.querySelector("input[name = 'btn']:checked");//dohvatamo samo cekiran button //stavljamo ovde jer mora da uzme value tek kad se klikne na button //cuva cekirano dugme
        let radioCheckedValue = radioChecked.value; //cuva vrednost cekiranog dugmeta 
        let res = 0;
        if(radioCheckedValue == "+"){
            res = num1 + num2;
        }else if(radioCheckedValue == "-"){
            res = num1 - num2;
        }else if(radioCheckedValue == "*"){
            res = num1 * num2;
        }else{
            if(num2 == 0){
                alert("Nije dozvoljeno deliti nulom!")
                res = "?";
            }else{
                res = num1 / num2;
            }
        }

        pRes.innerHTML = `${num1} ${radioCheckedValue} ${num2} = ${res}`;
    }else{
        alert("Unosi moraju biti numericke vrednosti!");
    }

});


//osnovna validacija forme