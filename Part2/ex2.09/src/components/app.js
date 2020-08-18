import React, { useState } from 'react'

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
  }

  const handleNewNameChange =(event) =>{
      setNewName(event.target.value)
      persons.forEach( person =>{
      if(person.name === event.target.value) alert(` ${person.name} is already added in phonebook`)
      })
  }

  const handleNewNumberChange =(event) =>{
    setNewNumber(event.target.value)
    // persons.forEach( person =>{
    // if(person.number === event.target.value) alert(` ${person.number} is already added in phonebook`)
    // })
  }

  const handleSearchName = (event) =>{
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <form>
        Filter Contacts with <input value={searchName} onChange={handleSearchName} placeholder="Enter Name"/>
      </form>

      <h2>Add New Contacts</h2>
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
      { persons.map( person => <Person key={person.name} person={person} searchName={searchName} />)}
    </div>
  )
}

export default App
