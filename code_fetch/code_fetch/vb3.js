for (let i = 0; i < 10; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`error status code ${response.status}`);
        }
        return response.json();
    })
    .then((pokemon)=>{ console.log(i, pokemon.name)} )
    .catch((error)=>{ console.log(i, error.message)} ) 
}
