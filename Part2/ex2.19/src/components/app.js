import React, { useState, useEffect } from 'react'
import Filter from './filter'
import PersonForm from './personForm'
import service from "../services/persons"
import Person from './persons'
import Notification from "./Notification"

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName,setSearchName] = useState('')
  const [ message, setMessage] = useState("")
  const [ isWarning, setWarning] = useState(false)
  

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

      let alEx = false
      let personToChange

      persons.forEach(element => {
        if(element.name === newName){ 
          alEx = true
          personToChange = element
        }
      })
      
      if(alEx){
        if(window.confirm(` ${personToChange.name} is already added in phonebook, replace old number with New ?`)){
          service
            .update(personToChange.id,newNameObject)
            .then( response =>{
              setWarning(false)
              setMessage(`Updated ${newNameObject.name}`)
              setPersons( persons.map( person => person.id===response.id? response: person))
              setNewName('')
              setNewNumber('')
            })
            .catch( error =>{
              setWarning(true)
              setMessage(`Unable to Update  ${newNameObject.name}`)
            })
        }
      }
      else{
        service
        .add(newNameObject)
        .then( newPerson =>{ 
          setWarning(false)
          setMessage(`Added ${newNameObject.name}`)
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')  
        })
        .catch( error =>{
          setWarning(true)
          setMessage(`Unable to add ${newNameObject.name}`)
        })
      }
      setTimeout( () => setMessage(""), 500)
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
    if(window.confirm(`Delete ${cnt.name}`)){ 
      service
        .remove(cnt.id).then( obj =>{
          setWarning(true)
          setMessage(`${cnt.name} is succesfully deleted`)
          console.log(`${cnt.name} is succesfully deleted`)
          setPersons( persons.filter( person => person.id!==cnt.id ))
          setNewName('')
          setNewNumber('')
        })
        .catch(Error =>{
          setWarning(true)
          setMessage(`${cnt.name} was already removed from contacts`)
        })
        setTimeout( () => setMessage(""), 500)
  }
  }


  return (
    <div>
      <h1>Phonebook</h1> 
      <Notification message={message} warning={isWarning} />
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
