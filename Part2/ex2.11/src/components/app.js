import React, { useState, useEffect } from 'react'
import Filter from './filter'
import PersonForm from './personForm'
import Persons from './persons'
import axios from 'axios'


const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName,setSearchName] = useState('')

  useEffect( () =>{
    console.log("Effect\n")
    axios.get(" http://localhost:3001/persons").then( response => setPersons(response.data))
  },[])

  const handleSubmit = (event) =>{
      event.preventDefault()

      const newNameObject = { 
        name :newName,
        number :newNumber
      }
      
      setPersons(persons.concat(newNameObject))
      setNewName('')
      setNewNumber('')
  }

  const handleNewNameChange =(event) =>{
      setNewName(event.target.value)
      persons.forEach( person =>{
      if(person.name === event.target.value) alert(` ${person.name} is already added in phonebook`)
      })
  }

  const handleNewNumberChange =(event) =>{
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) =>{
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter  searchName={searchName} handleSearchName={handleSearchName} />

      <h2>Add New Contacts</h2>
      < PersonForm   newName={newName} newNumber={newNumber} 
        handleNewNameChange={handleNewNameChange} 
        handleNewNumberChange={handleNewNumberChange} 
        handleSubmit={handleSubmit}    />

      <h2>Numbers</h2>
      <Persons  persons={persons} searchName={searchName} />
    
    </div>
  )
}

export default App
