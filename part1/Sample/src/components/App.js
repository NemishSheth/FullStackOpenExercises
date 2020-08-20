// import React from 'react'
// import Notes from './Notes'

// const App = ({ notes }) => {
//     return (
//       <Notes notes={notes} />
//     )
// }

// export default App

import React, { useState, useEffect } from 'react'
import Note from './Note'
import noteService from '../services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote,setNewNote] = useState("")
  const [showAll,setShowAll] = useState(true)

  useEffect( ()=>{
    noteService.getAll()
    .then( initialNote =>{
      console.log('promise Fulfilled',"\n\n")
      setNotes(initialNote)
    })
    .catch( error => console.log("Fail"))
  } , [])

  const addNote = (event) =>{
        event.preventDefault()
        const newNoteObj ={
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }

        noteService.create(newNoteObj)
        .then( returnedNote =>{
          console.log(returnedNote)
          setNotes(notes.concat(returnedNote))
        })
        .catch( error => console.log("Fail"))
  }

  const handleNoteChange = (event) =>{
      setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    console.log(note)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id,changedNote).then(returnedNote =>{
      setNotes(notes.map(note => note.id !== id? note: returnedNote))
    })
    .catch( error =>{
        alert(` The Note: ${note.content} don't exist anymore`)
        setNotes(notes.filter(note=> note.id !== id))
    })
  }

  const notesToShow = showAll ? notes : notes.filter( note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>Show {showAll? "Important":"All"}</button>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote} >
          <input value={newNote} onChange={handleNoteChange} placeholder="New Note..."/>
          <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App 