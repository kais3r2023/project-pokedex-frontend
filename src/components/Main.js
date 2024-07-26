import React from "react";
import Header from "./Header";
import Card from "./Card";

export default function Main({ allPokemon, searchTerm, onChange, onClick }) {
  return (
    <div className="main">
      <Header 
      searchTerm={searchTerm}
      onChange={onChange}
      onClick={onClick}
      />
      <section className="gallery">
        {allPokemon.map(
          (dataCard) => (
          <Card
            id={dataCard.id}
            name={dataCard.name}
            img={dataCard.image}
            key={dataCard.id}
          />
        ))}
      </section>
    </div>
  );
}
