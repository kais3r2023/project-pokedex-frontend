import React from "react";
import pokemonImg from "../images/lapras.svg";

export default function PopUpStats({ pokemon, onClose, isOpen }) {
  return (
    <div className={`popup-stats ${isOpen ? "popup-stats__open" : ""}`}>
      <div className="popup-stats_content">
        <h2 className="popup-stats_title">Pokemon Name</h2>
        <h3 className="popup-stats_pokemon-number">#151</h3>
        <img
          className="popup-stats_img"
          alt="imagen pokemon"
          src={pokemonImg}
        />
        <div className="popup-stats_container-stats">
          <ul className="popup-stats_base-stats">
            <h4 className="popup-stats_container-stats_subtitle">Base Stats</h4>
            <li>Height: 100</li>
            <li>Weight: 100</li>
            <li>HP: 100</li>
            <li>Attack: 100</li>
            <li>Defense: 100</li>
            <li>Sp. Atk: 100</li>
            <li>Sp. Def: 100</li>
            <li>Speed: 100</li>
            
          </ul>
          <div className="popup-stats_types">
            <h4 className="popup-stats_container-stats_subtitle">Type</h4>
            <div className="popup-stats_types_item">Grass</div>
            <div className="popup-stats_types_item">Electric</div>
          </div>
          <div className="popup-stats_evo-chain">
          <h4 className="popup-stats_container-stats_subtitle">Evolutions</h4>
          <div className="popup-stats_evo-chain_content">

          <div className="popup-stats_evo-chain_item">1: Pikachu</div>
            <div className="popup-stats_evo-chain_item">2: Jolteon</div>
            <div className="popup-stats_evo-chain_item">3: Charizard</div>
            <div className="popup-stats_evo-chain_item">4: Mew</div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
