import React from "react";
import pokemonImg from "../images/lapras.svg";

export default function Card({ id, name, img }) {
  return (
    <div className="card">
      <h3 className="card_pokemon-name">{name}</h3>
      <p className="card_pokemon-id">#{id}</p>
      <img
        className="card_pokemon-image"
        src={img}
        alt={`imagen de ${name}`}
      ></img>
    </div>
  );
}
