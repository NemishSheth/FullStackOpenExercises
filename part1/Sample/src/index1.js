import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name,age}) => {

  const bornYear = () => new Date().getFullYear() - age

  return(
     <div>
       <p> Hello {name}, you are {age} years old.</p>
       <p> So you were born probably in {bornYear()}</p>
     </div>
  )
}

const App = ({counter}) => {
  const age=21
  const name="Nemish"

  return (
    <>
      <h1>Greeting</h1>
      <Hello name={name} age={age}/>
      <p>{counter}</p>
    </>
  )
}

let counter = 1

const refresh = () =>{
  ReactDOM.render( <App counter={counter}/> ,
     document.getElementById('root'))
}

setInterval( ()=>{
    refresh()
    counter +=1
}, 1000)
