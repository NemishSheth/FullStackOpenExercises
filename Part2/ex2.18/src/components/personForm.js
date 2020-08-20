import React from 'react'

const PersonForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
          Name: <input value={props.newName} onChange={props.handleNewNameChange} /> <br />
          Number: <input value={props.newNumber} onChange={props.handleNewNumberChange} />
        </div>
        <div> 
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm