import React from 'react'
import personServices from '../services/persons'

const removePerson = (name, id) => {

  if (window.confirm(`Do you really want to remove ${name}?`)) {
    personServices.remove(id)
  }

}

export default function Persons({persons}) {
  return (
    <>
    {persons.map((person) => (
      <div className='person' key={person.id}>
        <div>
          {person.name} {person.number}
        </div>
        <button onClick={() => removePerson(person.name, person.id)}>delete</button>
      </div>
    ))}
    </>
  )
}
