import React from 'react'

const Person = ({persn,searchName,removePerson}) =>{
    if(searchName !== ''){
      if(persn.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1){
        return (
          <>
            <p> {persn.name} {persn.number}</p>
            <button onClick={removePerson}>Delete</button>
          </>
        )
      } 
      else 
        return <></>
    }
    else{
      return (
        <>
          <p> {persn.name} {persn.number}</p>
          <button onClick={removePerson}>Delete</button>
        </>
      )
    }
}



export default Person