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

for (let i = 0; i < 10; i++){
    fetchPokemonName(i)
        .then((name)=>{ console.log(i, name)} )
        .catch((error)=>{ console.log(i, error.message)} ) 
}

