import React from "react";
import Header from "./Header";
import Card from "./Card";
import PopUpStats from "./PopUpStats";

export default function Main({ filteredPokemon, allPokemon, searchTerm, onChange, onClick, onKeyDown, isOpen }) {
  return (
    <div className="main">
      <Header 
      searchTerm={searchTerm}
      onChange={onChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
      />
      <section className="gallery">
        {filteredPokemon.map(
          (dataCard) => (
          <Card
            id={dataCard.id}
            name={dataCard.name}
            img={dataCard.image}
            key={dataCard.id}
          />
        ))}
      </section>
      <PopUpStats
      pokemon={allPokemon}
      isOpen={isOpen}
      />
    </div>
  );
}
