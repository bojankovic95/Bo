
let div = document.getElementById('main');
let n = 10;
let tekst = "Tekst paragrafa";
let i = 1;

while (i <= n){
    if(i % 3 == 1){
        div.innerHTML += `<p style ="color: blue;>${tekst}</p>`;
    }else if(i % 3 == 2){
        div.innerHTML += `<p style ="color: red;>${tekst}</p>`;
    }else{
        div.innerHTML += `<p style ="color: yellow;>${tekst}</p>`;
    }
    i++;
}

    



n = 10;
let fi1 = 1;
let fi2 = 1;
let fi;
i = 3;
while(i <= n){
    fi = fi1 + fi2;
    fi1 = fi2;
    fi2 = fi;
    i++;
    console.log(fi);
}
console.log(`${n}-ti clan fibonacijevog niza je ${fi}`);

for(i = 0; i <= 10; i++){
    console.log(i);
}

for(i = 5; i <= 15; i++){
    console.log(2 * i);
}



