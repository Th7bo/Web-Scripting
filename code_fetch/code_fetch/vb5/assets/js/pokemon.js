window.addEventListener("load", loaded);

function loaded() {
    let button = document.getElementById("button-pokemon");
    button.addEventListener("click", handleGetPokemon);
}


function handleGetPokemon() {
    let output = document.getElementById("ul-output");
    let id = document.getElementById("pokemon-id").value.trim();
    if(!id){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Enter a value for id!"));
        output.appendChild(li);        
        return;
    }
    fetchPokemonName(id)
        .then((name) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(name))
            output.appendChild(li);
        })
        .catch((error) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(error.message || error));
            output.appendChild(li);
        });
}

function fetchPokemonName(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`error status code ${response.status}`);
            }
            return response.json();
        })
        .then((pokemon) => pokemon.name)
}

