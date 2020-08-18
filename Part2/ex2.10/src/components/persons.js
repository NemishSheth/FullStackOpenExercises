import React from 'react'

const Person = ({key,person,searchName}) =>{
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

const Persons = ({persons,searchName}) => persons.map( person => <Person key={person.name} person={person} searchName={searchName} />)

export default Persons