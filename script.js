// constants

const $BASE_URL = 'https://pokeapi.co/api/v2/'

// variables

let pokemon, 
    pokemonData, 
    pokemonMoves,
    renderedMoves;

// cached element

const $name = $('#name');
const $moves = $('#moves');
const $abilities = $('#abilities');
const $form = $('form');
const $input = $('input[type="text"]');
const $main = $('main');

// event listeners

$form.on('submit', handleSubmit);

// functions

function handleSubmit(evt) {
    evt.preventDefault();
    
    const pokemonName = $input.val();
    
    resetPokemonData();

    $.ajax(`${$BASE_URL}pokemon/${pokemonName}`)
        .then(function (data) {
            pictureOf = data.sprites.other['official-artwork'].front_default;
            pokemonData = data;
            pokemonMoves = data.moves;
            renderedMoves = pokemonMoves.map(move =>  move.move.name);
            topMoves = renderedMoves.slice(0,4);
           pokemonAb = data.abilities;
            renderedAb = pokemonAb.map(ability => ability.ability.name);
            topAb = renderedAb.slice(0,4);
            render();
        }, function (error) {
            console.log(error);
        });   
    $input.val('');
    
}

function resetPokemonData() {
    if($('#pokemon-info')){
        $('#pokemon-info').remove()
        $('#pokemon-image').remove()
    }
}

function render() {
    $main.append(`
    <section id='pokemon-image'>
        <img src='${pictureOf}' alt='${pokemonData.name}'/> 
    </section>
    <section id='pokemon-info'>
        <h3>POKEMON NAME<h3>
        <li id='name'>${pokemonData.name}</li>
        <h3>MOVES<h3>
        <li id='moves'>${topMoves}</li>
        <h3>ABILITIES<h3>
        <li id='ability'>${topAb}</li>
    </section>
    `)

}
