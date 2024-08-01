import React from "react";

export default function Card({id, name, img, onCardClick }) {

  return (
    <div className="card" onClick={()=>{ onCardClick(id)}}>
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
