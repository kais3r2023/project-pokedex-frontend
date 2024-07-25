import React from 'react'
import pokemonImg from '../images/lapras.svg'

export default function Card(name, image, id ) {
  return (
    <div className='card'>
      <h3 className='card_pokemon-name'>Kangaskhan</h3>
      <p className='card_pokemon-id'>#131</p>
      <img className='card_pokemon-image' src={pokemonImg}></img>
    </div>
  )
}
