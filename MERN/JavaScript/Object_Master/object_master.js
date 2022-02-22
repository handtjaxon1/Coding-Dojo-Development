const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// An array of pokemn that have names starting with the letter "B"
const bListPokemon = pokemon.filter(p => p.name[0] === "B");
console.log(bListPokemon);

// An array of just the pokemon ids
const pokemonIds = pokemon.map(p => p.id);
console.log(pokemonIds);

// An array of pokemon where the id is evenly divisible by 3
const pkmnIdsDivByThree = pokemon.filter(p => p.id % 3 === 0);
console.log(pkmnIdsDivByThree);

// An array of pokemon objects that are "fire" type
const firePokemon = pokemon.filter(p => p.types.find(type => type === "fire"));
console.log(firePokemon);

// An array of pokemon objects that have more than one type
const multTypePokemon = pokemon.filter(p => p.types.length > 1);
console.log(multTypePokemon);

// An array with just the names of the pokemon
const pokemonNames = pokemon.map(p => p.name);
console.log(pokemonNames);

// An array with just the names of pokemon that have an id greater than 99
const pokemonHighId = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(pokemonHighId);

// An array with just the names of pokemon whose only type is "poison"
const onlyPoisonPokemon = pokemon.filter(p => p.types.length === 1 && p.types.find(type => type === "poison")).map(p => p.name);
console.log(onlyPoisonPokemon);

// An array containing just the first type of all pokemon whose second type is "flying"
const firstTypeFlyingPokemon = pokemon.filter(p => p.types.length > 1 && p.types[1] === "flying").map(p => p.types[0]);
console.log(firstTypeFlyingPokemon);

// A count of the number of pokemon that are "normal" type
const numNormalPokemon = pokemon.filter(p => p.types.find(type => type === "normal")).length;
console.log("Number of Normal Type Pokemon: ", numNormalPokemon);