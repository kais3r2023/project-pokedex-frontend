import React, { useEffect, useState } from "react";
import Main from "./Main";
import *as api from '../utils/api';




function App() {

  const [allPokemon, setAllPokemon] = useState([])

  //Funcion para obtener Listado de Pokémon

  useEffect(()=>{
    api.getAllPokemon()
        .then((res)=>{
          setAllPokemon(res.pokemon_species)
          console.log(res.pokemon_species)
        })
  },[])

  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
