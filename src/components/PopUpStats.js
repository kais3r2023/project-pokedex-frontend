import React from "react";

export default function PopUpStats({ pokemon, onClose, isOpen }) {
  return (
    <div className={`popup-stats ${isOpen ? "popup-stats__open" : ""}`}>
      <div className="popup-stats_content">
        <h2 className="popup-stats_title">Pokemon Name</h2>
        <img
          className="popup-stats_img"
          alt="imagen pokemon"
          src={pokemon.image}
        />
        <div className="popup-stats_container-stats">
          <ul className="popup-stats_base-stats">
            <li>HP:</li>
            <li>Attack:</li>
            <li>Defense:</li>
            <li>Sp. Atk:</li>
            <li>Sp. Def:</li>
            <li>Speed:</li>
            <li>Height:</li>
            <li>Weight:</li>
          </ul>
          <ul className="popup-stats_types">
            <li>Type1:</li>
            <li>Type2:</li>
          </ul>
          <ul className="popup-stats_evo-chain">
            <li>Base Evolution:</li>
            <li>First Evolution:</li>
            <li>Second Evolution:</li>
            <li>Third Evolution</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
