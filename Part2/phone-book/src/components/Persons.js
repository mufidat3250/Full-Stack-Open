import React from 'react'
import Person from './Person'

const Persons = ({filteredData}) => {
  return (
    <div>
        {filteredData.map((person, index) => (
        <div key={index}>
            <Person person={person}/>
        </div>
      ))}
    </div>
  )
}

export default Persons