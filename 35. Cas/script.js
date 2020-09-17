let movie3 = {
    Name: "Chicago",
    Release_year: 2002,
    Director: {
        Name: "Rob",
        Surname: "Marshall"
    },
    Genres: ["Comedy", "Crime", "Musical", "Drama"],
    Rating: 7.1
}

db.collection("movies").doc("movie3").set(movie3)
    .then(() => {
        console.log("Movie successfully added.")
    })
    .catch(error => {
        console.log(error);
    });


let movie4 = {
    Name: "Martyrs",
    Release_year: 2008,
    Director: {
        Name: "Pascal",
        Surname: "Laugier"
    },
    Genres: ["Horror", "Drama"],
    Rating: 7.5
}

db.collection("movies").doc("movie4").set(movie4)
    .then(() => {
        console.log("Movie successfully added.")
    })
    .catch(error => {
        console.log(error);
    });

let movieUpdated = {
    Genres: ["Horror", "Drama", "Thriler"]
}

db.collection("movies").doc("movie4").update(movieUpdated)
    .then(() => {
        console.log("Customer successfully updated.")
    })
    .catch(error => {
        console.log(error);
    })

    //DOHVATANJE DOKUMENTA
let doc1 = db.collection("customers").doc('customer1');

doc1.get()
.then(doc =>{
    console.log(doc.id, doc.exists);
    if(doc.exists){
        let data = doc.data();
        //console.log(data);
    }else{
        console.log("No such document.")
    }
})
.catch(err =>{
    console.log(`Error getting document ${err}`);
})

//DOHVATANJE SVIH DOKUMENATA IZ ODREDJENE KOLEKCIJE

db.collection('customers').get()
.then(snapshot =>{
    if(!snapshot.empty){
        //console.log(`Getting documents from collection, total ${snapshot.size} documents`);
        let allDocuments = snapshot.docs;
        allDocuments.forEach(doc => {
            //console.log(doc.id, doc.data())
        });
    }
})
.catch(error =>{
    console.log("Cannot get documents");
})




//DOHVATANJE SVIH FILMOVA
db.collection('movies').get()
.then(snapshot =>{
    if(!snapshot.empty){
        let div = document.querySelector("#d");
        let allMovies = snapshot.docs;
        allMovies.forEach(movie =>{
            let data = movie.data();
            //console.log(movie.id, data.Name);
            div.innerHTML += " " + movie.id + "<br>";
            div.innerHTML += " " + data.Release_year + "<br>";
            div.innerHTML += " " + data.Genres[0] + "<br>";
            div.innerHTML += " " + data.Genres[1] + "<br>";
            //div.innerHTML += " " + data.Director;
            div.innerHTML += " " + data.Name + "<br><br><br>";
        });
    }
})
.catch(error =>{
    console.log(error)
})

//ORDERBY //prikaz u odredjenom redosledu
db.collection("customers").orderBy('name', 'desc').get()
.then(snapshot =>{
    if(!snapshot.empty){
        snapshot.docs.forEach(doc =>{
            console.log(doc.data());
        })
    }else{
        console.log("error");
    }
})
.catch(error =>{
    console.log("Error")
})

//OGRANICEN BROJ DOKUMENATA

db.collection("customers")
.orderBy('name', 'desc')
.limit(2)
.get()
.then(snapshot => {
    if (!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        })
    } else {
        console.log("error");
    }
})
.catch(error => {
    console.log("Error")
})

//FILTRIRANJE DOKUMENATA 
//prikaz svih korisnika cija je vrednost preko 600

db.collection("customers")
    .where('salary', ">=", 600)
    //.where('age', "=", 35) //treba da se kreira indeks
    .where('salary', '<', 900)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            })
        } else {
            console.log("error");
        }
    })
    .catch(error => {
        console.log("Error")
    })

