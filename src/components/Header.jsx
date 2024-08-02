import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import pokeHomeImg from "../images/pokeballHome.png";

export default function Header({
  searchTerm,
  onChange,
  onClickBtnSearch,
  onKeyDownSubmit,
}) {
  return (
    <div className="header">
      <Link className="header_linkHome" to="/"><img className="header_home" src={pokeHomeImg} alt="Imagen pokebola Home"/>Home</Link>
      <h1 className="header_title">POKEDEX</h1>
      <SearchBar
        searchTerm={searchTerm}
        onChange={onChange}
        onClickBtnSearch={onClickBtnSearch}
        onKeyDownSubmit={onKeyDownSubmit}
      />
    </div>
  );
}
