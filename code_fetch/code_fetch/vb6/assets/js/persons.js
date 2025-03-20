window.addEventListener("load", loaded);

function loaded() {
    let buttonGetAllPersons = document.getElementById('button-get-all-persons');
    buttonGetAllPersons.addEventListener("click", handleGetAllPersons);
    let buttonGetPerson = document.getElementById('button-get-person');
    buttonGetPerson.addEventListener("click", handleGetPerson);
    let buttonPost = document.getElementById('button-post-person');
    buttonPost.addEventListener("click", handlePostPerson);
}


function handleGetAllPersons() {
    let url = 'http://localhost:3000/persons/';
    let output = document.getElementById("div-output");
    makeElementEmpty(output);
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`error with status ${response.status}`);
            } 
            return response.json();
        })
        .then((persons) => {
            console.log(persons);
            let data = [];
            for (let person of persons) {
                data.push([person.id, person.name]);
            }
            let table = makeTable(data);
            output.appendChild(table);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error.message||error));
        });
}


function handleGetPerson() {
    let url = 'http://localhost:3000/persons/';
    let id = document.getElementById("txt-id").value;
    let output = document.getElementById("div-output");
    makeElementEmpty(output);
    if (id.trim() != '') {
        fetch(url + id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`error with status ${response.status}`);
                } 
                return response.json();                
            })
            .then((person) => {
                let data = [[person.id, person.name]];
                let table = makeTable(data);
                output.appendChild(table);
            })
            .catch((error) => {
                output.appendChild(document.createTextNode(error.message||error));
            });
    }
}


function handlePostPerson() {
    let url = 'http://localhost:3000/persons/';
    let output = document.getElementById("div-output");
    let name = document.getElementById("txt-name").value;
    let person = {name: name};
    makeElementEmpty(output);
    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(person),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`error with status ${response.status}`);
            } 
            return response.json();            
        })
        .then((person) => {
            let data = [[person.id, person.name]];
            let table = makeTable(data);
            output.appendChild(table);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error.message||error));
        });
}


function makeElementEmpty(element) {
    element.replaceChildren();
}

function makeTable(matrix) {
    let table = document.createElement("table");
    for (let i = 0; i < matrix.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < matrix[i].length; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(matrix[i][j]));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
