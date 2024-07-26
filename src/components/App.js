import React, { useEffect, useState } from "react";
import Main from "./Main";
import * as api from "../utils/api";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [cardIsClicked, setCardIsClicked] = useState(false);

  //Funcion para obtener Listado de Pokémon
  useEffect(() => {
    api.getAllPokemon().then((res) => {
      setAllPokemon(res);
      setFilteredPokemon(res);
    });
  }, []);


  // Funcion atrapa value del input
  const handlerInputOnChange = (event) => {
    setSearch(event.target.value);
  };

  //Funcion de Filtrado de Pokemon
  const handlerFilter = (term) => {
    if (!term) {
      setFilteredPokemon(allPokemon);
    } else {
      const filtered = allPokemon.filter((pokemon) => {
        pokemon.name.toLowerCase().includes(term.toLowerCase());
      });
      setFilteredPokemon(filtered);
    }
  };

  // Funcion de busqueda

  const handlerSearch = () =>{
    handlerFilter(search)
    console.log(filteredPokemon)
  }
  
  return (
    <div>
      <Main
        allPokemon={allPokemon}
        search={search}
        onChange={handlerInputOnChange}
        onClick={handlerSearch}
      />
    </div>
  );
}

export default App;
