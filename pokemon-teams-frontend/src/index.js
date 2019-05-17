const BASE_URL = "http://localhost:3000";
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

function getTrainers() {
  return fetch(TRAINERS_URL).then(resp => resp.json());
}

function showCard(trainer) {
  const main = document.querySelector("main");
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
  <p>${trainer.name}</p>
      <button id = 'button${trainer.id}' data-trainer-id="${
    trainer.id
  }">Add Pokemon</button>
  `;

  main.append(div);
  const pokemons = trainer.pokemons;
  pokemons.forEach(pokemon => showPokemon(pokemon, div));
}

function showCards(trainers) {
  trainers.forEach(trainer => showCard(trainer));
}

function showPokemon(pokemon, container) {
  const liEl = document.createElement("li");

  liEl.innerHTML = `
${pokemon.nickname} (${
    pokemon.species
  })<button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `;
  //   debugger;
  container.append(liEl);
}

function init() {
  getTrainers().then(obj => showCards(obj));
}

init();
