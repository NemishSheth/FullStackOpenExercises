import React from 'react'
import Header from "./header"
import Total from "./total"
import Content from "./content"

  
 
  const Course = ({course}) =>{
    // console.log("\n\n\n\nIn Course",course.id,"\n\t",course)
    return(
      <>
        <Header name = {course.name} />
        <Content parts = {course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }
  
  export default Course