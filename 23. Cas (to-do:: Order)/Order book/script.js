//DOM

let userInfo = document.querySelectorAll(".info");
let buttonApply = document.querySelector("#apply");
let price = document.getElementById("price");
let hardcover = document.getElementById("hardcover");
let wpaper = document.getElementById("wpaper");
let fshipping = document.getElementById("fshipping");




hardcover.addEventListener("click", event =>{
    price.innerHTML = "160$";
})

