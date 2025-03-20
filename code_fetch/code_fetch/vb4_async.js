async function fetchPokemonName(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if (!response.ok) {
        throw new Error(`error status code ${response.status}`)
    }
    let pokemon = await response.json()
    return pokemon.name;
}

for (let i = 0; i < 10; i++) {
    fetchPokemonName(i)
        .then((name) => {
            console.log(i, name)
        })
        .catch((error) => {
            console.log(i, error.message || error)
        })
}
