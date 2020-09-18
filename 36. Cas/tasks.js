let ul = document.querySelector("ul");
let form = document.querySelector("form");

/*db.collection("tasks")
.orderBy('startDate', 'desc')
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let obj = doc.data();
        let li = document.createElement("li");
        li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}]`
        if(obj.priority == true){
            li.style.color = "red"
        }
        ul.appendChild(li);
    });
})
.catch();*/

db.collection('tasks')
.onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change =>{
        //console.log(change)
        let type = change.type;
        let doc = change.doc;
        let id = doc.id;
        if(type == "added"){
            let obj = doc.data();
            let li = document.createElement("li");
            li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}]`
            if (obj.priority == true) {
                li.style.color = "red"
            }
            li.setAttribute('data-id', id)
            ul.appendChild(li);
            let button = document.createElement("button");
            button.innerHTML = "Delete Task";
            li.appendChild(button);
        }else if(type == "removed"){
            let lis = document.querySelectorAll("li");
            lis.forEach(li =>{
                if(li.getAttribute("data-id") == id){
                    li.remove();
                }
            })
        }
    })
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    let title = this.title.value;
    let startDate = new Date(this.startDate.value);
    let dueDate = new Date(this.duedate.value);
    let priority = false;
    if(this.priority.checked){
        priority = true;
    }
    let description = this.description.value;
    //console.log(title, startDate, dueDate, priority, description)
    let task = {
        title: title,
        startDate: firebase.firestore.Timestamp.fromDate(startDate),
        duedate: firebase.firestore.Timestamp.fromDate(dueDate),
        priority: priority,
        description: description
    };
    
    db.collection('tasks').doc()
    .set(task)
    .then(() =>{
        console.log("Uspesno kreiran task.");
    })
    .catch(err =>{
        console.log("Error");
    })
})

ul.addEventListener("click", event =>{
    if(event.target.tagName === "BUTTON"){
        let id = event.target.parentElement.getAttribute('data-id');
        db.collection("tasks").doc(id).delete()
        .then(() =>{
            console.log("Task uspesno obrisan")
        })
        .catch(err =>{
            console.log("error")
        })
    }
})

