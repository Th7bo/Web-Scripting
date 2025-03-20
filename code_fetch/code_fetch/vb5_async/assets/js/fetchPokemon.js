window.addEventListener("load", loaded);

function loaded() {
    let button = document.getElementById("button_pokemon");
    button.addEventListener("click", handleGetPokemon);
}

function handleGetPokemon() {
    let id = document.getElementById("pokemon_id").value;
    let output = document.getElementById("ul_output");
    fetchPokemonName(id)
        .then((name) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(name))
            output.appendChild(li);
        })
        .catch((error) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(error.message));
            output.appendChild(li);
        });
}

async function fetchPokemonName(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if (!response.ok) {
        throw new Error(`error status code ${response.status}`)
    }
    let pokemon = await response.json()
    return pokemon.name;
}


