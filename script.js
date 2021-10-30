// constants

const $BASE_URL = 'https://pokeapi.co/api/v2/'

// variables

let pokemon;

// cached element

const $name = $('#name');
const $moves = $('#moves');
const $abilities = $('#abilities');
const $officialArt = $('#official-artwork');
const $form = $('form');
const $input = $('input[type="text"]');
const $main = $('main');

// event listeners

$form.on('submit', handleSubmit);

// functions

function handleSubmit(evt) {
    evt.preventDefault();


const pokemonName = $input.val();

$.ajax(`${$BASE_URL}pokemon/${pokemonName}`)
.then(function(data){
    pokemonData = data; 
    console.log(pokemonData);
    render();
}, function(error){
    console.log(error);
});
}

function render() {
    $main.html(`
    <h3>name<h3>
    <p id='name'>${pokemonData.name}</p>
    <h3>moves<h3>
    <p id='moves'>${pokemonData.moves}</p>
    `)
    
}

