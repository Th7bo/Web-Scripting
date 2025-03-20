async function getPokemonData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
        throw new Error(`Error retrieving https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    }
    const data = await response.json();
    let images = [];

    function extractImages(obj, prefix = "") {
        for (const key in obj) {
            if (typeof obj[key] === "string" && 
                    obj[key].startsWith("https") && 
                    ( obj[key].endsWith(".gif") || obj[key].endsWith(".png") ))  {
                const label = prefix ? `${prefix}_${key}` : key;
                images.push({label, src: obj[key]});
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                extractImages(obj[key], key);
            }
        }
    }

    extractImages(data.sprites);
    return {
        name: data.name,
        images
    }
}


async function handleClickGetPokemons() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const nameContainer = document.getElementById('pokemon-name');
    const imagesContainer = document.getElementById('pokemon-images');

    while (imagesContainer.firstChild) {
        imagesContainer.removeChild(imagesContainer.firstChild);
    }

    while (nameContainer.firstChild) {
        nameContainer.removeChild(nameContainer.firstChild);
    }
    if (!pokemonId) {
        const p = document.createElement('p');
        const textNode = document.createTextNode("Please enter a Pokémon ID.");
        p.appendChild(textNode);
        nameContainer.appendChild(p);
        return;
    }


    try {
        const pokemonData = await getPokemonData(pokemonId);
        const name = pokemonData.name;
        nameContainer.appendChild(document.createTextNode(name ? name.toUpperCase() : "unknown"));
        pokemonData.images.forEach(img => {
            if (img.src) {
                const imageWrapper = document.createElement('div');
                imageWrapper.className = "image-wrapper";

                const labelElement = document.createElement('p');
                labelElement.className = "label";
                labelElement.appendChild(document.createTextNode(img.label));
                imageWrapper.appendChild(labelElement);

                const imageElement = document.createElement('img');
                imageElement.src = img.src;
                imageElement.alt = img.label;
                imageWrapper.appendChild(imageElement);
                imagesContainer.appendChild(imageWrapper);
            }
        });
    } catch (error) {        
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(`${error.message}`));
        nameContainer.appendChild(p);
    }
}

window.addEventListener('load', function () {
    document.getElementById('get-pokemon-btn').addEventListener('click', handleClickGetPokemons);
});
