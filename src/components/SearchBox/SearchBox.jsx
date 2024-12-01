import React from 'react'

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={(e) => {onFilter(e.target.value)}}/>
  </div>
  )
}

export default SearchBox