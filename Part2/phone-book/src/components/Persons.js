import React from 'react'
import Person from './Person'

const Persons = ({filteredData, handleDelete}) => { 
  console.log(filteredData)
  return (
    <div>
        {filteredData.map((person, index) => (
        <div key={index}>
            <Person person={person} handleDelete={handleDelete} id={person._id} />
        </div>
      ))}
    </div>
  )
}

export default Persons

// handleDelete={handleDelete(person.id)}