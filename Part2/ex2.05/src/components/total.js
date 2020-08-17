import React from 'react'

  
  const Total = ({ parts }) => {
    // console.log("In Total",parts.exercises)
    return <p> Total of { parts.reduce( (acc,part) => acc+part.exercises ,0)} exercises </p>
  }

  export default Total