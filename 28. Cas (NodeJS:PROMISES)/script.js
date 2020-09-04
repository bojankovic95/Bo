//Povezivanje na lokalni server ka fajlu o sportistima 
let getSportisti = callback =>{
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function(){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.responseText);
            callback(undefined, data)
        }else if(this.readyState === 4){
            callback("server nije u mogucnosti da obradi zahtev", undefined);
        }
    })

    request.open("GET", "http://localhost:3000/sportisti");
    request.send();
}

//prikaz svih sportista 
getSportisti((err, data) =>{
    if(err){
        console.log(err);
    }else{
        data.forEach(sportista => {
            console.log(sportista.imePrezime, sportista.visina);
        });
    }
})

getSportisti((err, data) =>{
    if(err){
        console.log(err)
    }else{
        let counter = 0; 
        let visina = 0;
        data.forEach(sportista =>{
            visina += sportista.visina;
            counter++;
        })
        console.log(visina/counter);
    }
}); 

getSportisti((err, data) =>{
    if(err){
        console.log(err);
    }else{
        data.forEach(sportista =>{
            let timovi = sportista.timovi;
            timovi.forEach(tim =>{
                if(tim.includes("Lakers")){
                    console.log(sportista.imePrezime);
                }
            })

        })
    }
});

getSportisti((err, data) =>{
    if(err){
        console.log(err);
    }else{
        data.forEach(player =>{
            if(player.timovi.length ){

            }
        })
    }
})


