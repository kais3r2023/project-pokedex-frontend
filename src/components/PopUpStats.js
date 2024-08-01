import React from "react";

export default function PopUpStats({ pokemon, isOpen, popupRef }) {
  if (!pokemon) {
    return null;
  }
  return (
    <div
      className={`popup-stats ${isOpen ? "popup-stats__open" : ""}`}
    >
      <div className="popup-stats_content" ref={popupRef}>
        <h2 className="popup-stats_title">{pokemon.name}</h2>
        <h3 className="popup-stats_pokemon-number">{`#${pokemon.id}`}</h3>
        <img
          className="popup-stats_img"
          alt={`imagen pokemon ${pokemon.id}`}
          src={pokemon.image}
        />
        <div className="popup-stats_container-stats">
          <ul className="popup-stats_base-stats">
            <h4 className="popup-stats_container-stats_subtitle">Base Stats</h4>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>HP: {pokemon.stats.hp}</li>
            <li>Attack: {pokemon.stats.attack}</li>
            <li>Defense: {pokemon.stats.defense}</li>
            <li>Sp. Atk: {pokemon.stats.specialAtk}</li>
            <li>Sp. Def: {pokemon.stats.specialDef}</li>
            <li>Speed: {pokemon.stats.speed}</li>
          </ul>
          <div className="popup-stats_types">
            <h4 className="popup-stats_container-stats_subtitle">Type</h4>
            {pokemon.types.type1 && <div className="popup-stats_types_item">{pokemon.types.type1}</div>}
            {pokemon.types.type2 && <div className="popup-stats_types_item">{pokemon.types.type2}</div>}
          </div>
          <div className="popup-stats_evo-chain">
            <h4 className="popup-stats_container-stats_subtitle">Evolutions</h4>
            <div className="popup-stats_evo-chain_content">
              {pokemon.evolution_chain.basePokemon && (
                <div className="popup-stats_evo-chain_item">
                  Base: {pokemon.evolution_chain.basePokemon}
                </div>
              )}
              {pokemon.evolution_chain.firstEvolution && (
                <div className="popup-stats_evo-chain_item">
                  First: {pokemon.evolution_chain.firstEvolution}
                </div>
              )}
              {pokemon.evolution_chain.secondEvolution && (
                <div className="popup-stats_evo-chain_item">
                  Second: {pokemon.evolution_chain.secondEvolution}
                </div>
              )}
              {pokemon.evolution_chain.thirdEvolution && (
                <div className="popup-stats_evo-chain_item">
                  Third: {pokemon.evolution_chain.thirdEvolution}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
