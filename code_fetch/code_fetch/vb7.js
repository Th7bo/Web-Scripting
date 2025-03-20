function getIdsOfNamesakesOf(id) {
    let url = "http://localhost:3000/persons/";
    return fetch(`${url}${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`error with status ${response.status}`);                
            }
            return response.json();
        })
        .then((person) => {
            let name = person.name;
            return fetch(url + `?name=${name}`); 
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`error with status ${response.status}`);                
            }
            return response.json();
        })
        .then((persons) => {
            let ids = [];
            for (let person of persons) {
                ids.push([person.id, person.name]);
            }
            return ids;
        })
}

getIdsOfNamesakesOf(2)
    .then((ids)=>{console.log(ids)})
    .catch((error)=>console.log(error.message|| error))
    
    
