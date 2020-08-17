let sportista1 = {
    imePrezime: "Bojan Jankovic",
    visina: 1.80,
    timovi: ["TIM1", "TIM2", "TIM3", "TIM4"]
}
let sportista2 = {
    imePrezime: "Radovan Kocic",
    visina: 1.94,
    timovi: ["TIM1", "TIM2", "TIM3"]
}
let sportista3 = {
    imePrezime: "Milos Djuric",
    visina: 1.89,
    timovi: ["TIM1", "TIM2", "TIM3", "TIM4"]
}
let sportista4 = {
    imePrezime: "Danilo Mitic",
    visina: 1.98,
    timovi: ["TIM1", "TIM2", "TIM3", "TIM4"]
}

let niz = [sportista1, sportista2, sportista3, sportista4];
console.log(niz)

let visina = [sportista1.visina, sportista2.visina, sportista3.visina, sportista4.visina];

let tim = [sportista1.timovi, sportista2.timovi, sportista3.timovi, sportista4.timovi];


let prosecnaVisina = arr =>{
    let sum = 0;
    let count = 0;
    visina.forEach(elem =>{
        sum += elem;
        count++;
    })
    console.log(sum/count);
}
prosecnaVisina(visina);

let trenerVidi = arr =>{
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[0]){
            count++;
        }
    }
    console.log(count);
}
trenerVidi(visina);

let igraliZaTim = (arr, tim) =>{
    let count = 0;
    arr.forEach(elem =>{
        if(elem.timovi = tim){
            count++;
        }
    })
    return(count);
}
igraliZaTim(niz, "TIM2");

let najmanjeTransfera = arr =>{
    let minArr = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[0]){
            minArr = arr[i];
        }
    }
    console.log(minArr);
}
najmanjeTransfera(tim);

let visiTimPodela = arr =>{
    let sum = 0;
    let tim1 = [arr[0], arr[1]];
    let tim2 = [arr[2], arr[3]];
    for(let i = 0; i < arr.length; i++){
        sum += tim1[i];
    }
    let prosek = sum/2;
    console.log(prosek);
}
visiTimPodela(visina);




