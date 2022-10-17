import { useState } from 'react'
import uniqid from 'uniqid'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: uniqid() }
  ]) 

  const [newName, setNewName] = useState('')
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName,
      id: uniqid(),
    }

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <div key={person.id}>{person.name}</div>
        )}
    </div>
  )
}

export default App