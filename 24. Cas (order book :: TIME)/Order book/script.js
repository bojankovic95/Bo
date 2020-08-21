//DOM


//let checkboxHardcover = document.querySelector("#hardcover");
//let checkboxWpaper = document.querySelector("#wpaper");
let spanPrice = document.querySelector("#price");
let checkboxesadditional = document.querySelectorAll('input[name="additional"]');

function checkboxclicked(checkbox) {
    let priceString = spanPrice.innerHTML;
    //let price1 = Number(priceString); => NaN
    let price = parseInt(priceString); //KONVERTUJE U BROJ IAKO IMAMO NEKI DRUGI ZNAK NA KRAJU
    let newPrice = 0;
    let change = parseInt(checkbox.value);
    if (checkbox.checked) {
        newPrice = price + change;
    } else {
        newPrice = price - change;
    }
    spanPrice.innerHTML = `${newPrice}$`;
}

checkboxesadditional.forEach(checkbox =>{
    checkbox.addEventListener("click", function(){
        checkboxclicked(this);
    })
})


/*checkboxHardcover.addEventListener("click", function() {
    checkboxclicked(this);
})
checkboxWpaper.addEventListener("click", function () {
    checkboxclicked(this);
})*/

/*checkboxHardcover.addEventListener("click", function(){
    let priceString = spanPrice.innerHTML;
    //let price1 = Number(priceString); => NaN
    let price = parseInt(priceString); //KONVERTUJE U BROJ IAKO IMAMO NEKI DRUGI ZNAK NA KRAJU
    let newPrice = 0;
    let change = parseInt(this.value);
    if(this.checked){
        newPrice = price + change;
    }else{
        newPrice = price - change;
    }
    spanPrice.innerHTML = `${newPrice}$`;
});

checkboxWpaper.addEventListener("click", function() {
    let priceString = spanPrice.innerHTML;
    let price = parseInt(priceString); //KONVERTUJE U BROJ IAKO IMAMO NEKI DRUGI ZNAK NA KRAJU
    let newPrice = 0;
    let change = parseInt(this.value);
    if (this.checked) {
        newPrice = price + change;
    } else {
        newPrice = price - change;
    }
    spanPrice.innerHTML = `${newPrice}$`;
});*/

