'use strict'

const pokemon_container = document.getElementById('pokemon_container');
const numeroPokemons = 150;

const colors = {
    fire:'#FDDFDF',
    grass: '#DEFDE0',
    electric:'#FDF7DE'
}

const main_tipos = Object.keys(colors);
console.log(main_tipos);


const fetchPokemons = async () =>{
    for(let i=1; i<=numeroPokemons; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const resultado = await fetch(url);
    const pokemon =  await resultado.json();
    criarCardPokemon(pokemon);

}
fetchPokemons();

function criarCardPokemon(pokemon){
    const pokemonElemento = document.createElement('div');
    pokemonElemento.classList.add('pokemon');

    const pokemon_tipo = pokemon.type.map(type => el.type.name);
    const type = main_tipos.find(type =>pokemon_tipo.indexOf(type)> -1);

    const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const pokemonInnerHTML = `
        <div class = "img-container">
            <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
        </div>
        <div class="informacao">
            <span class = "numero"> ${pokemon.id}</span>
            <h3 class ="nome">${nome}</h3>
            <small class = "type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonElemento.innerHTML = pokemonInnerHTML;
    pokemon_container.appendChild(pokemonElemento);


}


