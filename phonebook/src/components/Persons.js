import React from 'react'

export default function Persons({persons}) {
  return (
    <>
    {persons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}
      </div>
    ))}
    </>
  )
}
