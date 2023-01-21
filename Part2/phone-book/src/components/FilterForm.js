import React from 'react'

const FilterForm = ({handleSearch}) => {
   
  return (
      <div>Filter Shown with <input placeholder="..search" onChange={handleSearch}/></div>
  )
}

export default FilterForm