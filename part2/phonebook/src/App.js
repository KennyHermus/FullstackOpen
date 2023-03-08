import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'
import Notification from './components/Notification'
import phoneService from './services/backend'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {
  const [persons, setPersons] = useState([])

  const effectHook = () => {
    phoneService
      .getInitial()
      .then(initialPeople => setPersons(initialPeople))
  }
  useEffect(effectHook, [])

  const [newName, setNewName] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [newFilter, setNewFilter] = useState('')
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const [newMessage, setNewMessage] = useState(null)
  const [newMessageType, setMessageType] = useState('success')

  const deleteHandler = id => {
    const person = persons.find(person => person.id === id)
    const name = person.name
    if (window.confirm(`Delete ${name}?`)) {
      phoneService
      .deletePerson(id)
      .then(returnedPerson => setPersons(persons.filter(person => person.id !== id)))
    }
  }

  const peopleToShow = (newFilter.length === 0) ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const copy = persons.filter(person => person.name === newPerson.name)[0]
    if (copy === undefined) {
      phoneService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessageType('success')
        setNewMessage(`Added ${newName}`)
        setTimeout(() => setNewMessage(null), 5000)
      })
    } else if (window.confirm(`${copy.name} is already added to phonebook, replace the old number with a new one?`)) {
      phoneService
      .update(copy.id, {...copy, number:newNumber})
      .then(returnedPerson => {
        setPersons(persons.map(person => (person.name !== newPerson.name) ? person : {...copy, number:newNumber}))
        setMessageType('success')
        setNewMessage(`Added ${newName}`)
        setTimeout(() => setNewMessage(null), 5000)
      }).catch(error => {
        setMessageType('error')
        setNewMessage(`Information of ${newName} has already been removed from server`)
        setTimeout(() => setNewMessage(null), 5000)
      })
    }
    setNewName('')
    setNewNumber('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification messageType={newMessageType} message={newMessage} />
      <Filter value={newFilter} handler={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm name={newName} number={newNumber} nameHandler={handleNameChange} numberHandler={handleNumberChange} personHandler={addPerson} />
      <h3>Numbers</h3>
      <People persons={peopleToShow} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default App