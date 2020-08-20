import React from 'react'

const Note = ({note}) =>{
    return(
        <li>{note.content}</li>
    )
}

const Notes = ({notes}) =>{
    return(
      <div>
      <h1>Notes</h1>
        <ul>
           { notes.map( note => <Note note={note} key={note.id} /> )} 
        </ul>
      </div>
    )
}

export default Notes