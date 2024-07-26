import React, { useEffect, useState } from "react";
import Main from "./Main";
import * as api from "../utils/api";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonStats, setPokemonStats] = useState({});
  

  //Funcion para obtener Listado de Pokémon
  useEffect(() => {
    api.getAllPokemon().then((res) => {
      setAllPokemon(res);
    });
  }, []);
  
  console.log(allPokemon)

  //Funcion para guardar stats de Pokémon


  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
