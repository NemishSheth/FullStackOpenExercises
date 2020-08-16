import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text,handleClick}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good,bad,neutral}) =>{
  const total = good + bad +neutral

  if(total == 0)  return( 
    <>
    <h1>Statistics</h1>
    <p>No feedback given</p>
    </>
  )

  return(
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p> 
      <p>All {total}</p>
      <p>Average {(good-bad)/total}</p>
      <p>Positive {good/total}</p>
    </>
  )
}

const Feedback = (props) =>{
  return(
    <>
    <h1>Give Feedback</h1>
    <div>
      <Button  text={props.g}    handleClick={props.gClick}/>
      <Button  text={props.b}     handleClick={props.bClick}/>
      <Button  text={props.n} handleClick={props.nClick}/>
    </div>
    </>
  )
}

const App = () =>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
   
  const goodClick = () => setGood(good+1)
  
  const neutralClick = () => setNeutral(neutral+1)
  
  const badClick = () => setBad(bad+1)
  
  return (  
    <div>
        <Feedback g="good" b="bad" n="neutral" gClick={goodClick} bClick={badClick} nClick={neutralClick} />
        <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


