import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, [])
  
  
  const handleFiltering = (e) => {
    const filteredPersons = persons.filter((person) => {
      return person.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
    });

    setPersons(filteredPersons);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    const existingPerson = persons.find((person) => person.name === newName)

    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        personServices.update(existingPerson.name, newNumber, existingPerson.id)
      }
      return
    }

    personServices.create(newPerson)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFiltering={handleFiltering} />
      <h2>add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  );
}

export default App