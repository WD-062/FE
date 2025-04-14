const pokemonContainer = document.getElementById("pokemon-container");

// display pokemons function
const displayPokemon = (pokemon) => {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "text-center"
  );

  // creating the pokemon image and adding the src and alt attributes and classes
  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.sprites.back_default;
  pokemonImage.alt = pokemon.name;
  pokemonImage.classList.add("w-32", "h-32", "mb-4");

  // creating the pokemon title and adding the text content and classes
  const pokemonName = document.createElement("h2");
  pokemonName.textContent = pokemon.name;
  pokemonName.classList.add("text-xl", "font-bold", "mb-2");

  // creating the pokemon types string by mapping over the type array of the object
  const pokemonTypes = pokemon.types.map((type) => type.type.name).join(", ");

  // creating the pokemon info and adding the text content and classes
  const pokemonInfo = document.createElement("p");
  pokemonInfo.textContent = `ID: ${pokemon.id} | Name: ${pokemon.name} | Type: ${pokemonTypes}`;
  pokemonInfo.classList.add("text-gray-600", "mb-2");

  // adding the image, title and info to the pokemon card
  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonInfo);

  // adding the pokemon card to the container
  pokemonContainer.appendChild(pokemonCard);
};

// fetch pokemons function
const fetchPokemonsArray = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    const pokemonArray = data.results;
    console.log(pokemonArray);
    return pokemonArray;
  } catch (err) {
    console.error("Error fetching pokemons:", err);
  }
};

const fetchPokemon = async () => {
  try {
    const pokemonArray = await fetchPokemonsArray();
    const promises = pokemonArray.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      displayPokemon(data);
    });
  } catch (err) {
    console.error("Error fetching pokemon:", err);
  }
};

fetchPokemon();
