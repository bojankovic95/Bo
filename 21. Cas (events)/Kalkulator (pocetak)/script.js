//DOM 
let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
let radios = document.querySelectorAll("input[name = 'btn']"); //dohvatamo sve radio buttone i uzimamo ime buttona 
let radios1 = document.querySelector("input[name = 'btn']:checked");//dohvatamo samo cekiran button
let form = document.querySelector("form");

console.log(radios)

form.addEventListener('submit', event =>{
    event.preventDefault();
    let num1 = Number(inputNum1.value); //pretvorimo string u broj
    let num2 = Number(inputNum2.value); //pretvorimo string u broj

    console.log(typeof num1);
    console.log(typeof num2);

});


//osnovna validacija forme