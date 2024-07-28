import React from 'react'
import SearchBar from './SearchBar'

export default function Header({searchTerm, onChange, onClick, onKeyDown}) {
  return (
    <div className='header'>
      <h1 className='header_title'>POKEDEX</h1>
      <SearchBar 
      searchTerm={searchTerm}
      onChange={onChange}
      onClick={onClick}
      onKeyDown={onKeyDown}      
      />
    </div>
  )
}
