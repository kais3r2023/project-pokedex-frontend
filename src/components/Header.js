import React from 'react'
import SearchBar from './SearchBar'

export default function Header({searchTerm, onChange, onClick}) {
  return (
    <div className='header'>
      <h1 className='header_title'>Pokédex</h1>
      <SearchBar 
      searchTerm={searchTerm}
      onChange={onChange}
      onClick={onClick}      
      />
    </div>
  )
}
