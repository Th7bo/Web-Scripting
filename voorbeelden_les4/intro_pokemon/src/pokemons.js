async function getPokemonData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
        throw new Error(`Error retrieving https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    }
    const data = await response.json();

    return {
        name: data.name,
        images: [
            {label: 'Front Normal', src: data.sprites.front_default},
            {label: 'Back Normal', src: data.sprites.back_default},
            {label: 'Front Shiny', src: data.sprites.front_shiny},
            {label: 'Back Shiny', src: data.sprites.back_shiny}
        ]
    }

}


async function handleClickGetPokemons() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const nameContainer = document.getElementById('pokemon-name');
    const imagesContainer = document.getElementById('pokemon-images');

    while (nameContainer.firstChild) {
        nameContainer.removeChild(nameContainer.firstChild);
    }
    while (imagesContainer.firstChild) {
        imagesContainer.removeChild(imagesContainer.firstChild);
    }

    if (!pokemonId) {
        const message = document.createElement('p');
        const textNode = document.createTextNode("Please enter a Pokémon ID.");
        message.appendChild(textNode);
        nameContainer.appendChild(message);
        return;
    }

    try {
        const pokemonData =await getPokemonData(pokemonId);
        const name =pokemonData.name;
        nameContainer.appendChild(document.createTextNode(name?name.toUpperCase(): "unknown") );

        pokemonData.images.forEach(img => {
            if (img.src) {
                const imageWrapper = document.createElement('div');
                imageWrapper.style.display = "inline-block";
                imageWrapper.style.border = "1px solid black";
                imageWrapper.style.margin = "5px";
                imageWrapper.style.padding = "5px";
                const labelElement = document.createElement('p');
                const labelText = document.createTextNode(img.label);
                labelElement.appendChild(labelText);
                imageWrapper.appendChild(labelElement);

                const imageElement = document.createElement('img');
                imageElement.src = img.src;
                imageElement.alt = img.label;
                imageElement.style.width = "150px";
                imageElement.style.margin = "5px";
                imageWrapper.appendChild(imageElement);
                imagesContainer.appendChild(imageWrapper);
            }
        });
    } catch (error) {
        const message = document.createElement('p');
        const textNode = document.createTextNode(error.message );
        message.appendChild(textNode);
        nameContainer.appendChild(message);
    }
}

window.addEventListener('load', function () {
    document.getElementById('get-pokemon-btn').addEventListener('click', handleClickGetPokemons);
});
