//console.log(db);

//PRISTUP KOLEKCIJI
let kolekcija1 = db.collection("users");
console.log(kolekcija1);

//pristup dokumentu 
let dokument1 = kolekcija1.doc("bojankovic");
console.log(dokument1);

//pristup dokumentu bez medjupromenljive
let dokument2 = db.collection("users").doc("DaniloLj");
console.log(dokument2);

//pristup dokumentu direktno
let d2 = db.doc("users/bojankovic");
console.log(d2);

//za pristup dokumentu 
//let document = db.collection("..").doc("..");
//kod dokument imamo sledece metode
//CRUD (create, read, update, delete);

//document.set(...) => Postavlja polja (create);
//document.get(...) => Dohvata vrednost polja (read);
//document.update(...) => Menja postojeca polja (Update);
//document.delete(...) => Brise postojeci dokument (delete);

//sve cetiri metode vracaju PROMISE 
//nakon njih mogu da se lancaju THEN i CATCH

let c4 = {
    neme: "Stefana",
    age: 35,
    address: "Ulica1",
    salary: 500.50
}
db.collection("customers").doc("customer4").set(c4)
.then(() =>{
    console.log("Customer successfully added.")
})
.catch(error =>{
    console.log(error);
})

//DODAVANJE NOVOG DOKUMENTA BEZ DODAVANJA ID DOKUMENTA
let c5 = {
    name: "Kristina",
    age: 28,
    address: "Ulica2",
    salary: 670
}
db.collection("customers").doc("customer5").set(c5) //ako ne stavimo ID firebase ce sam da generise
    .then(() => {
        console.log("Customer successfully added.")
    })
    .catch(error => {
        console.log(error);
    })

let dodatno = {
    city: "Nis",
    area: "Palilula"
};

let opcija = {
    merge: true
}

db.collection("customers").doc("customer5").set(dodatno, opcija)

//dodavanje dokumenta sa timestamp poljima
let datum1 = new Date("2020-09-15 10:00:00");
let datum2 = new Date("2020-09-15 12:00:00");

let task = {
    title: "Fudbal",
    priority: false,
    startDate: firebase.firestore.Timestamp.fromDate(datum1),
    dueDate: firebase.firestore.Timestamp.fromDate(datum2)
}

db.collection("tasks").doc("task4").set(task)
    .then(() => {
        console.log("Customer successfully added.")
    })
    .catch(error => {
        console.log(error);
    })


//menjanje postojeceg dokumenta 
let taskUpdated = {
    title: "Kafa"
}

db.collection("tasks").doc("task4").update(taskUpdated)
    .then(() => {
        console.log("Customer successfully added.")
    })
    .catch(error => {
        console.log(error);
    })

//brisanje dokumenta 
db.collection("tasks").doc("task4").delete()
    .then(() => {
        console.log("Customer successfully deleted.")
    })
    .catch(error => {
        console.log(error);
    })
