const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getAllPokemon = async () => {
  try {
    const data = await fetch(URL);
    const allPokemon = await data.json();

    const pokemonData = await Promise.all(
      allPokemon.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
          cry: data.cries.legacy,
          stats: {
            HP: data.stats[0].base_stat,
            Attack: data.stats[1].base_stat,
            Defense: data.stats[2].base_stat,
            SpecialAtk: data.stats[3].base_stat,
            SpecialDef: data.stats[4].base_stat,
            Speed: data.stats[5].base_stat,
          },
        };
      })
    );
    return pokemonData;
  } catch (error) {
    console.log("Error del servidor:", error);
    throw error;
  }
};
