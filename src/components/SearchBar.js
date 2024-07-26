import React from 'react'
import lupaSearch from '../images/lupa.svg'

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <input className='search-bar_input' type='text' placeholder='Busca un Pokemon'/>
      <img className='search-bar_button' src= {lupaSearch} type='submit' alt='imagen de una lupa'/>
    </div>
  )
}
