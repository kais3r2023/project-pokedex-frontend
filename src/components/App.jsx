import React, { useEffect, useState, useRef } from "react";
import Main from "./Main";
import Welcome from "./Welcome";
import * as api from "../utils/api";
import { Route, Routes } from "react-router-dom";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [cardIsClicked, setCardIsClicked] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const popupRef = useRef(null);

  //Funcion para obtener Listado de Pokémon
  useEffect(() => {
    api.getAllPokemon().then((res) => {
      setAllPokemon(res);
      setFilteredPokemon(res);
    });
  }, []);

  // Funcion atrapa value del input searchBar
  const handlerInputOnChange = (event) => {
    setSearch(event.target.value);
  };

  //Funciones  de Filtrado de Pokemon
  useEffect(() => {
    if (search === "") {
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

  //Funcion Click Tarjeta

  function handlerCardOnClick(pokemonId, cry) {
    const audio = new Audio(cry);
    audio.volume = 0.1;
    audio.play();
    const pokemonSelected = allPokemon.find((p) => p.id === pokemonId);
    setSelectedPokemon(pokemonSelected);
    setCardIsClicked(true);
  }

  //Funcion para cerrar PopupStats
  useEffect(() => {
    const handlerClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setCardIsClicked(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        setCardIsClicked(false);
      }
    };

    if (cardIsClicked) {
      document.addEventListener("mousedown", handlerClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handlerClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handlerClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cardIsClicked]);

  //Funcion submit  SearchBar con tecla enter

  const handlerKeyDownSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlerFilter();
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/main"
          element={
            <Main
              filteredPokemon={filteredPokemon}
              searchTerm={search}
              onChange={handlerInputOnChange}
              onClickBtnSearch={handlerFilter}
              onKeyDownSubmit={handlerKeyDownSubmit}
              isOpen={cardIsClicked}
              onCardClick={handlerCardOnClick}
              pokemonSelected={selectedPokemon}
              popupRef={popupRef}

            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
