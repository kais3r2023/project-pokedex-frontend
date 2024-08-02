import React from "react";
import Header from "./Header";
import Card from "./Card";
import PopUpStats from "./PopUpStats";

export default function Main({
  filteredPokemon,
  searchTerm,
  onChange,
  onClickBtnSearch,
  onKeyDownSubmit,
  isOpen,
  onCardClick,
  pokemonSelected,
  popupRef,
}) {
  return (
    <div className="main">
      <Header
        searchTerm={searchTerm}
        onChange={onChange}
        onClickBtnSearch={onClickBtnSearch}
        onKeyDownSubmit={onKeyDownSubmit}
      />
      <section className="gallery">
        {filteredPokemon.map((dataCard) => (
          <Card
            id={dataCard.id}
            name={dataCard.name}
            img={dataCard.image}
            key={dataCard.id}
            onCardClick={onCardClick}
            cry={dataCard.cry}
          />
        ))}
      </section>
      <PopUpStats
        pokemon={pokemonSelected}
        isOpen={isOpen}
        popupRef={popupRef}
      />
    </div>
  );
}
