window.addEventListener("load", loaded);

function loaded() {
    let divOutput = document.getElementById("div_output");
    let divSelect = document.getElementById("div_select");
    let urlPersons = 'http://localhost:3000/persons/';
    makeElementEmpty(divOutput);
    makeElementEmpty(divSelect);
    fetch(urlPersons)
        
}

function handleGetFriends() {
    let url = 'http://localhost:3000/persons/';
    let select = document.getElementById("select_id");
    
}

function handlePostPerson() {
    let url = 'http://localhost:3000/persons/';
    let output = document.getElementById("div_output");
    
    
}


function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function makeSelect(persons) {
    let select = document.createElement('select');
    select.setAttribute('id', 'select_id');
    for (let person of persons) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(person.name));
        option.setAttribute('value', person.id);

        select.appendChild(option);
    }
    return select;
}

