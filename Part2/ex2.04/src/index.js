import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => {
  // console.log("In Header\n\t",name)
  return (
    <h1>{name}</h1>
  )
}

const Total = ({ parts }) => {
  // console.log("In Total",parts.exercises)
  return <p> Total of { parts.reduce( (acc,part) => acc+part.exercises ,0)} exercises </p>
}

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map( course =>< Course key={course.id} course={course} />)
      }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

