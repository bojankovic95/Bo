/*Prvi zadatak*/
let i;
let broj = (n, m) => {
    let sum = 0;
    let counter = 0;
    for(i=n; i<=m; i++){
        if(i % 7 == 0 && i % 2 != 0){
            sum += i;
            counter++;
        }
    }
    console.log(sum);
    console.log(counter);
    console.log(sum * counter);
}
broj(1, 30);


/* Drugi zadatak */

function indeksTelesneMase(tezina, visina){
    let visina1 = visina/100;
    let gojaznost;
    let bmi = tezina/visina1**2
    if(bmi <= 18.5){
        gojaznost = "Pothranjenost";
    }else if(bmi > 18.5 && bmi < 24.9){
        gojaznost = "Normalna tezina";
    }else if(bmi >= 24.9 && bmi <= 30){
        gojaznost = "Povisena tezina"
    }else if(bmi > 30){
        gojaznost = "Gojaznost"
    }
    return gojaznost;
}
console.log(indeksTelesneMase(100, 182));

    //*Treci zadatak*//

    let racunanje = (br1, br2, operacija) => {
        let rez = 1;
        if(operacija == "+"){
            rez = br1 + br2;
        }else if(operacija == "-"){
            rez = br1 - br2;
        }else if(operacija == "*"){
            rez = br1 * br2;
        }else if(operacija == "/"){
            rez = br1 / br2;
        }
        if(br2 == 0){
            rez = br1;
        }
        return rez;
    }
    console.log(racunanje(1, 2, "+"));


    //* Cetvrti zadatak *//

    function razlika(n, m){
        let rezultat = 0;
        let zbir = 0;
        let counter = 0;
        for(i=n; i<=m; i++){
            if(i % 3 == 0 && i % 2 == 0){
                zbir += i;
            }
        }
        for(i=n; i<=m; i++){
            if(i % 10 == 0){
                counter++;
            }
        }
        rezultat = zbir - counter;
        return rezultat;
    }

    console.log(razlika(10, 55));
    
