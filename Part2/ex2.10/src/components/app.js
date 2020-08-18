import React, { useState } from 'react'
import Filter from './filter'
import PersonForm from './personForm'
import Persons from './persons'

const Person = ({person,searchName}) =>{
  if(searchName !== ''){
    if(person.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1){
      return <p> {person.name} {person.number}</p>
    }
    else
      return <></>
  }
  else{
    return <p> {person.name} {person.number}</p>
  }
}

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number:'9999999999' 
    },
    {
      name : "Nemish Sheth",
      number :9428225488
    },
    {
      name : "Naimish Sheth",
      number:9428225488
    },
    {
      name : "Nimish Sheth",
      number : 9428225488
    }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName,setSearchName] = useState('')

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
