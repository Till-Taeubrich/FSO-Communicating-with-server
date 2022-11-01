import { useState, useEffect } from 'react'
import axios from 'axios'
import uniqid from 'uniqid'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
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

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    axios.post('http://localhost:3001/persons', newPerson)
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