async function getIdsOfNamesakesOf(id) {
    let url = "http://localhost:3000/persons/";
    let response = await fetch(`${url}${id}`);
    if (!response.ok) {
        throw new Error(`error with status ${response.status}`);
    }
    let person = await response.json();
    let name = person.name;
    response = await fetch(url + `?name=${name}`); 
    if (!response.ok) {
        throw new Error(`error with status ${response.status}`);
    }
    let persons = await response.json();
    let ids = persons.map(person=>person.id)
    return ids;
}

getIdsOfNamesakesOf(2)
    .then((ids)=>{console.log(ids)})
    .catch((error)=>console.log(error.message|| error))
    
    
