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

  console.log("Listados de pokemones",allPokemon)

  // Funcion atrapa value del input
  const handlerInputOnChange = (event) => {
    setSearch(event.target.value);
  };

  //Funciones  de Filtrado de Pokemon
  useEffect(() => {
    if (search === "" ) {
      setFilteredPokemon(allPokemon);
    }
  }, [search]);
  

  const handlerFilter = () => {
    if (!search) {
      setFilteredPokemon(allPokemon);
    } else {
      const filtered = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  };

  

  //Funcion submit con tecla enter

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlerFilter();
    }
  };

  return (
    <div>
      <Main
        allPokemon={filteredPokemon}
        searchTerm={search}
        onChange={handlerInputOnChange}
        onClick={handlerFilter}
        onKeyDown={handlerKeyDown}
      />
    </div>
  );
}

export default App;
