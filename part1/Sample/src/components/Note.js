import React from "react"

const Note = ({note,toggleImportance}) =>{
    const label = note.important ? 'make not important' : 'make Important'
    return(
        <>
        <li>{note.content}</li>
        <button onClick={toggleImportance}>{label}</button>
        <br/><br/>
        </>
    )
}

export default Note