// Exercises 2.16-2.17: Notifications and error handling
import { useState, useEffect } from 'react'
import personService from './services/persons'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={message.type}>
      {message.text}
    </div>
  )
}

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    filter shown with: <input 
      value={filter}
      onChange={handleFilterChange}
    />
  </div>
)

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input 
        value={newName}
        onChange={handleNameChange}
      />
    </div>
    <div>
      number: <input 
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Person = ({ person, deletePerson }) => (
  <div>
    {person.name} {person.number}
    <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
  </div>
)

const Persons = ({ personsToShow, deletePerson }) => (
  <div>
    {personsToShow.map(person => 
      <Person key={person.id} person={person} deletePerson={deletePerson} />
    )}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type = 'success') => {
    setNotification({ text: message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    // Check if name already exists
    const existingPerson = persons.find(person => person.name === newName)
    
    if (existingPerson) {
      // Exercise 2.15: Update existing person's number
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...existingPerson, number: newNumber }
        
        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
            showNotification(`Updated ${newName}'s number`)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            showNotification(
              `Information of ${newName} has already been removed from server`,
              'error'
            )
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
      return
    }
    
    // Exercise 2.12: Save new person to server
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        showNotification(`Added ${newName}`)
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  // Exercise 2.14: Delete person from phonebook
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          showNotification(`Deleted ${name}`)
        })
    }
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} />

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
