import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className='welcome'>
      <h1 className='welcome_title'>Pokedex 1st Generation</h1>
      <Link className='welcome_button' to='/main'/>
      <h3 className='welcome_subtitle'>Press Pokeball To Start</h3>
    </div>
  )
}
