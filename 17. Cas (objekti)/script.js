let blog = {
    title: "Moj blog",
    content: "Sadrzaj mog bloga",
    author: "Bojan Jankovic"
};

let blog2 = {
    title: "Moj drugi blog",
    content: "Sadrzaj mog drugog bloga",
    author: " Mika Mikic",
    likes: 50,
    dislikes: 10
};

console.log(blog);
console.log(typeof blog);
console.log(blog2);
console.log(blog.title);
console.log(blog.author);
blog2.title = "Drugi blog";
console.log(blog2.title);

//FUNKCIJE KOJE PISEMO UNUTAR OBJEKTA SE ZOVU METODE 

//METODE NIKADA NE PISEMO KAO ARROW FUNKCIJE UVEK KAO OBICNE ANONIMNE FUNKCIJE

let user = {
    username: "Bojan Jankovic",
    age: 25,
    blogs:["Naslov", "Naslov2", "Naslov3"],
    login: function(){
        console.log(this); //Provera sta je this
        console.log("Ulogovani ste " + this.username); // objekat koji ce pozvati metodu 
    }
};
console.log(user.age);
user.login();

let user2 = {
    username: "Pera Peric",
    age: 33,
    blogs:["Blog", "Blog2", "Blog3"],
    login: function(lang){
        let u = this.username;
        if(lang === true){
            console.log(`Cestitamo ${u}, ulogovani ste!`);
        }else{
            console.log(`Congrats ${u}, you're logged in!`);
        }
    }
};
user2.login(true);
user2.login(false);

let user3 = {
    username: "Sara Mitic",
    age: 38,
    blogs:["Title", "Title2", "Title3"],
    logBlogs: function(){
        let sviBlogovi = this.blogs;
        sviBlogovi.forEach(blog => {
            console.log(blog);
        });
    }
};

user3.logBlogs();

///*** VEZBANJA ***///

//1. zadatak 

let dan = {
    datum: "2020/08/10",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura:[22, 29, 17, 26, 31, 33],
    srednjaTemp: function(){
        let temp = this.temperatura;
        let counter = 0;
        let sum = 0;
        let srednja = 0;
        temp.forEach(elem =>{
            sum+=elem;
            counter++;
        });
        srednja = sum/counter;
        return srednja;
    },
    natprosecnaTemp: function(){
        let pros = dan.srednjaTemp();
        let temp = this.temperatura;
        counter = 0;
        temp.forEach(elem => {
            if(elem > pros){
                counter++;
            }
        });
        return counter;

    },
    makstemp: function(){

    },
    tempIzmedju: function(n, m){
        let temp = this.temperatura;
        let counter = 0;
        temp.forEach(elem => {
            if(elem >= n && elem <= m){
                counter++;
            }
        });
        return counter;
    },
    /*tempVecina: function(){
        let temp = this.temperatura;
        let pros = dan.srednjaTemp();
        let countVece = 0;
        let countManje = 0;
        temp.forEach(elem => {
            if(elem > pros){
                countVece++;
            }else{
                countManje++;
            }
        });
        if(countVece > countManje){
            return true;
        }else{
            return false;
        }
    },*/   //TRREBA DA BUDE VECE OD POLOVINE NIZA
    /*leden: function(){
        let temp = this.temperatura;
        let countVece = 0;
        let countManje = 0;
        temp.forEach(elem =>{
            if(elem >= 0){
                countVece++;
            }else{
                countManje++;
            }
        });
        if(countManje == temp.length){
            return true;
        }else{
            return false;
        }
    },*/
    ledeniDan: function() {
        let temp = this.temperatura;
        let result = true; //DODAJEMO OVO JER SE RETURN ODNOSI NA FROEACH FUNKCIJU A NE NA METODU
        temp.forEach(elem =>{
            if(elem >= 0){
                result = false;
            }
        });
        return result;
    },
    tropskiDan: function() {
        let temp = this.temperatura;
        let counter = 0;
        temp.forEach(elem => {
            if(elem >= 24){
                counter++;
            }
        });
        if(counter == temp.length){
            return true;
        }else{
            return false;
        }
    },
    //absolutna vrednost razlike od dva parametra

}

console.log(`Prosecna temperatura za ${dan.datum} je ${dan.srednjaTemp()}`);
console.log(`Broj tempertura iznad proseka je ${dan.natprosecnaTemp()}`);
console.log(`Broj merenja izmedju dve zadate temperature je ${dan.tempIzmedju(15, 25)}`);
//console.log(dan.tempVecina());
//console.log(dan.leden());
console.log(dan.ledeniDan());
console.log(dan.tropskiDan());




