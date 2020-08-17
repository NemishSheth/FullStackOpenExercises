import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Total = ({ parts }) => {
  return <p> Total of { parts.reduce( (acc,part) => acc+part.exercises ,0)} exercises </p>
}

const Part = ({cont}) => {
  return (
    <p>
      {cont.name} {cont.exercises}
    </p>    
  )
}

const Content = ({ parts }) => parts.map( part => <Part key={part.id} cont={part} />)

const Course = ({course}) =>{
  return(
    <>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id : 1,
    name: 'Half Stack application development',
    parts: [
      { 
        id : 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id : 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id : 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name : 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

