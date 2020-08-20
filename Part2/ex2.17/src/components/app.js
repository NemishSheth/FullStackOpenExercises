import React, { useState, useEffect } from 'react'
import Filter from './filter'
import PersonForm from './personForm'
// import Person from './persons'
import service from "../services/persons"
import Person from './persons'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName,setSearchName] = useState('')

  useEffect( () =>{
    console.log("Effect\n")
    service.getAll().then( initialData => setPersons(initialData))
  },[])

  const handleSubmit = (event) =>{
      event.preventDefault()

      const newNameObject = { 
        name :newName,
        number :newNumber
      }

      service
        .add(newNameObject)
        .then( newPerson =>{ 
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')  
        })
      
      // setPersons(persons.concat(newNameObject))
      // setNewName('')
      // setNewNumber('')
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

  const removePerson = cnt =>{
    if(window.confirm(`Delete ${cnt.name}`))
     { service.remove(cnt.id).then( obj =>{
        console.log(`Contact with id ${cnt.id} is succesfully deleted`)
        setPersons( persons.filter( person => person.id!==cnt.id ))
        }
     )}
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
      {persons.map( person =>{
       return < Person key={person.id} persn={person} searchName={searchName} removePerson={ () => removePerson(person)} />
      })}
      
    
    </div>
  )
}

export default App
