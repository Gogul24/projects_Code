async function fetchPokemon() {
    try {
        let pokeName = document.getElementById('pokemonText').value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        
        if (!response.ok) {
            throw new Error(`Couldn't fetch resource`);
        } else {
            let data = await response.json();
            let sprites = data.sprites.front_default;
            let Image = document.getElementById('pokeImg');
           
            Image.src = sprites;
            Image.style.display = 'block';
        }
    } catch (error) {
        console.error(error);
    }
}
