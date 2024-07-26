import React from "react";
import Header from "./Header";
import Card from "./Card";

export default function Main({allPokemon}) {
  return (
    <div className="main">
      <Header />
      <section className="gallery">
        {allPokemon.map((dataCard)=>(
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
