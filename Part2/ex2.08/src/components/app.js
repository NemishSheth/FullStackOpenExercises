import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number:'9999999999' 
    }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleSubmit = (event) =>{
      event.preventDefault()

      const newNameObject = { 
        name :newName,
        number :newNumber
      }
      
      setPersons(persons.concat(newNameObject))
      setNewName('')
  }

  const handleNewNameChange =(event) =>{
      setNewName(event.target.value)
      persons.forEach( person =>{
      if(person.name == event.target.value) alert(` ${person.name} is already added in phonebook`)
      })
  }

  const handleNewNumberChange =(event) =>{
    setNewNumber(event.target.value)
    persons.forEach( person =>{
    if(person.number == event.target.value) alert(` ${person.number} is already added in phonebook`)
    })
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNewNameChange} /> <br />
          Number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map( person => <p key={person.name}> {person.name} {person.number}</p>)}
    </div>
  )
}

export default App
