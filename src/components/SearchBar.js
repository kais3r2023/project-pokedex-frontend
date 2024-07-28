import React from "react";
import lupaSearch from "../images/lupa.svg";

export default function SearchBar({ searchTerm, onChange, onClick, onKeyDown }) {


  return (
    <div className="search-bar">
      <input
        className="search-bar_input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <img
        className="search-bar_button"
        src={lupaSearch}
        type="submit"
        alt="imagen de una lupa"
        onClick={onClick}
      />
    </div>
  );
}
