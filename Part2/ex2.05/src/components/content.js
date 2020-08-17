import React from "react"

const Part = ({cont}) => {
    // console.log("In Part",cont.id,"\n\t",cont)
    return (
      <p>
        {cont.name} {cont.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) =>{
    // console.log("In Content\n\t",parts)
    return parts.map( part => <Part key={part.id} cont={part} />)
  }

 export  default Content