const pokemons = [
    { name: 'Bulbasaur', image: 'https://pokeapi.co/media/sprites/pokemon/1.png' },
    { name: 'Charmander', image: 'https://pokeapi.co/media/sprites/pokemon/4.png' },
    { name: 'Squirtle', image: 'https://pokeapi.co/media/sprites/pokemon/7.png' },
    
];

let currentPokemonIndex = 0;

function displayPokemon() {
    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonInfo = document.getElementById('pokemon-info');

    const currentPokemon = pokemons[currentPokemonIndex];

    pokemonImage.style.backgroundImage = `url('${currentPokemon.image}')`;
    pokemonInfo.textContent = `Nome: ${currentPokemon.name}`;
}

function nextPokemon() {
    currentPokemonIndex = (currentPokemonIndex + 1) % pokemons.length;
    displayPokemon();
}

function previousPokemon() {
    currentPokemonIndex = (currentPokemonIndex - 1 + pokemons.length) % pokemons.length;
    displayPokemon();
}


displayPokemon();
