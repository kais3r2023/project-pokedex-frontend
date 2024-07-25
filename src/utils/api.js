const URL = 'https://pokeapi.co/api/v2/generation/1/'

export const getAllPokemon = async() =>{
  let pokemonList = []
  try{
    const apiResponse = await fetch(URL)
    pokemonList = apiResponse.json()
    return (pokemonList)
  }
  catch(error){
    console.log('Error del servidor:', error);
    throw error;
  }
}
