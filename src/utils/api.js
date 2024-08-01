const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getAllPokemon = async () => {
  try {
    const data = await fetch(URL);
    const allPokemon = await data.json();
    

    const pokemonData = await Promise.all(
      allPokemon.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        // Tomar evoluciones de cada Pokemon

        let evoSpeciesURL = data.species.url;

        const getURLSpecies = await fetch(evoSpeciesURL);

        const dataSpecies = await getURLSpecies.json();

        const getChainEvoURL = await fetch(dataSpecies.evolution_chain.url);
        const dataChainEvo = await getChainEvoURL.json();

        let baseEvolution = dataChainEvo.chain.species.name;
        let firstEvolution = dataChainEvo.chain.evolves_to[0]
          ? dataChainEvo.chain.evolves_to[0].species.name
          : null;
        let secondEvolution =
          dataChainEvo.chain.evolves_to[0] &&
          dataChainEvo.chain.evolves_to[0].evolves_to[0]
            ? dataChainEvo.chain.evolves_to[0].evolves_to[0].species.name
            : null || dataChainEvo.chain.evolves_to[1]? dataChainEvo.chain.evolves_to[1].species.name
            : null;
        let thirdEvolution = dataChainEvo.chain.evolves_to[2]? dataChainEvo.chain.evolves_to[2].species.name
        : null;
        return {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          image: data.sprites.other.dream_world.front_default,
          cry: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`,
          stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAtk: data.stats[3].base_stat,
            specialDef: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
          },
          types: {
            type1: data.types[0] ? data.types[0].type.name : null,
            type2: data.types[1] ? data.types[1].type.name : null,
          },
          evolution_chain: {
            basePokemon: baseEvolution ? baseEvolution : null,
            firstEvolution: firstEvolution ? firstEvolution : null,
            secondEvolution: secondEvolution ? secondEvolution : null,
            thirdEvolution : thirdEvolution? thirdEvolution : null
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
