import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

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
        personServices.update(existingPerson.name, newNumber, existingPerson.id, setErrorMessage, setMessage, resetMessage)
        setMessage(`${existingPerson.name}'s number is updated`)
        resetMessage()
      }
      return
    }

    createNewPerson(newPerson);
  }

  const createNewPerson = (person) => {
    personServices.create(person).then(res => {
      if (res === undefined) {
        setErrorMessage(true)
        setMessage('Adding new contact failed')
      } else {
        setMessage(`Added ${person.name}`)
      }
    });
    resetMessage()
  }

  const resetMessage = () => {
    setTimeout(() => {
      setMessage('')
      setErrorMessage(false)
    }, 5000);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} errorMessage={errorMessage} />
      <Filter handleFiltering={handleFiltering} />
      <h2>add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  );
}

export default App