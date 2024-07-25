import React from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header_title'>Pokédex</h1>
      <SearchBar/>
    </div>
  )
}
