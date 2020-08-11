let blog1 = {
    title: "Akvarel",
    likes: 70,
    dislikes: 7
};

let blog2 = {
    title: "Ulje na platnu",
    likes: 150,
    dislikes: 10
};

let blog3 = {
    title: "Vitraz!",
    likes: 30,
    dislikes: 40
};

let arrBlogs = [blog1, blog2, blog3];
console.log(arrBlogs);

arrBlogs.forEach(blog =>{
    console.log(blog.title);
});

console.log(arrBlogs[0]);
console.log(arrBlogs[0].likes);
arrBlogs[0].title = "Akvarel vodenim bojama";
console.log(arrBlogs[0].title);

//UKUPAN BROJ LAJKOVA

let sumaLajkova = arr => {
    let sum = 0; 
    arr.forEach(blog =>{
        sum += blog.likes;
    });
    return sum;
}
console.log(`Ukupan broj lajkova je ${sumaLajkova(arrBlogs)}`);

//PROSECAN BROJ LAJKOVA

let prosecanBrojLajkova = arr =>{
    let sum = 0;
    arr.forEach(blog =>{
        sum += blog.likes;
    });
    return sum/arrBlogs.length;
}
console.log(`Prosecan broj lajkova je ${prosecanBrojLajkova(arrBlogs)}`);

//BLOGOVI SA VISE LAJKOVA

let viseLajkova = arr =>{
    arr.forEach(blog =>{
        if(blog.likes > blog.dislikes){
            console.log(blog.title);
        }
    });
}
viseLajkova(arrBlogs);

//DUPLO VISE LAJKOVA

let duploVise = arr =>{
    arr.forEach(blog =>{
        if(blog.likes >= 2*blog.dislikes){
            console.log(blog.title);
        }
    });
}
duploVise(arrBlogs);

//ZAVRSAVANJE UZVICNIKOM 

let uzvicnik = arr =>{
    arr.forEach(blog =>{
        if(blog.title.endsWith("!")){  //includes - za ispitivanje da li sadzri bilo gde
            console.log(blog.title)
        } 
    });
}
uzvicnik(arrBlogs);

// RAZLIKA IZMEDJU SLICE I SUBSRT
//SLICE BROJI OD PRVOG DO CETVRTOG KARAKTERA U NIZU I NE UKLJUCUJE CETVRTI 
//SUBSTR GOVORI OD KOG KARAKTERA KRECEMO I KOLIKO KARAKTERA OD TOG IDEMO 

console.log("Jelena".slice(1, 4));
console.log("Jelena".substr(1, 4));

let user1 = {
    name: "Jelena",
    age: 25,
    blogs: [blog1]
};

let user2 = {
    name: "Stefan",
    age: 13,
    blogs: [blog2, blog3]
};

let users = [user1, user2];

//IMENA AUTORA ISPOD 18 GODINA

users.forEach(user =>{
    if(user.age < 18){
        console.log(user.name);
    }
});

//NASLOVI BLOGOVA SA VISE OD 50 LAJKOVA

users.forEach(user =>{
    let userBlogs = user.blogs; //u promenljivu smo smestili sve blogove
    userBlogs.forEach(blog =>{
        if(blog.likes > 50){
            console.log(blog.title);
        }
    });
});

//USERNAME STEFAN

/*users.forEach(user =>{
    let userName = user.name;
    userName.forEach(user =>{
        if(user.name = "Stefan"){
            console.log(blog.title);
        }
    });
});*/

users.forEach(user => {
    if(user.name == "Stefan"){
        let b = user.blogs;
        b.forEach(blog =>{
            console.log(blog.title);
        });
    };
});

//IMENA AUTORA SA VISE OD 100 LAJKOVA NA BLOGOVIMA 

users.forEach(user =>{
    let sum = 0;
    let b = user.blogs;
    b.forEach(blog =>{
        sum += blog.likes;
    });
    if(sum >= 100){
        console.log(user.name);
    }
});

// NATPROSECAN BROJ POZITIVNIH OCENA 

let sum = 0; 
let br = 0;
users.forEach(user =>{
    let b = user.blogs;
    b.forEach(blog =>{
        sum += blog.likes;
        br++;
    });
});
let avgLikes = sum/br;
users.forEach(user =>{
    let b = user.blogs;
    b.forEach(blog=>{
        if(blog.likes > avgLikes){
            console.log(blog.title);
        }
    });
});

let dan1 = {
    datum: "2020/08/10",
    kisa: true,
    sunce: true,
    oblaci: true,
    temperature: [18, 20, 26, 29, 30, 32, 25],
    avgTemperature: function(){
        let s = 0;
        for(let i = 0; i<this.temperature.length; i++){
            s += this.temperature[i];
        }
        return s/this.temperature.length;
    }
}
let dan2 = {
    datum: "2020/08/11",
    kisa: false,
    sunce: true,
    oblaci: false,
    temperature: [20, 25, 29, 30, 32, 25],
    avgTemperature: function () {
        let s = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            s += this.temperature[i];
        }
        return s / this.temperature.length;
    }
}
let dan3 = {
    datum: "2020/08/12",
    kisa: false,
    sunce: true,
    oblaci: true,
    temperature: [22, 35, 22],
    avgTemperature: function () {
        let s = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            s += this.temperature[i];
        }
        return s / this.temperature.length;
    }
}
let dan4 = {
    datum: "2020/08/13",
    kisa: true,
    sunce: false,
    oblaci: true,
    temperature: [18, 20, 26, 29, 30, 32, 25],
    avgTemperature: function () {
        let s = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            s += this.temperature[i];
        }
        return s / this.temperature.length;
    }
}

let dani = [dan1, dan2, dan3, dan4];

// KAD JE NAJVISE PUTA IZMERENA TEMPERATURA

// a)
let najviseMerenja = arrDani => {
    let maxMerenja = arrDani[0].temperature.length;
    let maxDatum = arrDani[0].datum;
    arrDani.forEach(dan =>{
        if(dan.temperature.length > maxMerenja){ //cuvamo prvi element (samo >) jer pitamo da li je iskljucivo vece
            maxMerenja = dan.temperature.length;
            maxDatum = dan.datum;
        }
    })
    return maxDatum;
    
}
console.log(najviseMerenja(dani));

// b)

let najviseMerenjaPoslednji = arrDani => {
    let maxMerenja = arrDani[0].temperature.length;
    let maxDatum = arrDani[0].datum;
    arrDani.forEach(dan => {
        if (dan.temperature.length >= maxMerenja) { //cuvamo poslednji zbog >= 
            maxMerenja = dan.temperature.length;
            maxDatum = dan.datum;
        }
    })
    return maxDatum;

}
console.log(najviseMerenjaPoslednji(dani));

//  KOLIKO JE BILO KISNIH SUNCANIH I OBLACNIH DANA

let sunce = arrDani =>{
    let countSunce = 0;
    let countKisa = 0;
    let countOblaci = 0;
    arrDani.forEach(dan =>{
        if(dan.sunce == true){
            countSunce++;
        }
        return countSunce;
    })
    arrDani.forEach(dan =>{
        if(dan.kisa == true){
            countKisa++;
        }
        return countKisa;
    })
    arrDani.forEach(dan =>{
        if(dan.oblaci == true){
            countOblaci++;
        }
        return countOblaci;
    })
    console.log(`Bilo je ${countSunce} suncanih dana, ${countKisa} kisnih dana i ${countOblaci} oblacnih dana`);  
}
sunce(dani);

//Napraviti aroow funkciju koja računa koliko je bilo dana
//sa natprosečnom temperaturom

let avgTotalTemp = arrDani =>{
    let sum = 0; 
    let br = 0;
    arrDani.forEach(dan =>{
        let nizTemp = dan.temperature;
        nizTemp.forEach(temp =>{
            sum += temp;
            br++;
        });
    });
    return sum/br;
}

let dayAvg = arrDani => {
    let avgTotal = avgTotalTemp(arrDani);
    let br = 0;
    arrDani.forEach(dan =>{
        if(dan.avgTemperature() > avgTotal){
            br++;
        }
    })
    return br;
}
console.log(dayAvg(dani));











