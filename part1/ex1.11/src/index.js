import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text,handleClick}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text,value}) => {
  if(text==="Positive"){
    return <>{value} %</>
  }
  return (
  <>
  {value}
  </>
  )

}

const Statistics = ({good,bad,neutral}) =>{
  const total = good + bad +neutral

  if(total === 0)  return( 
    <>
    <h1>Statistics</h1>
    <p>No feedback given</p>
    </>
  )

  return(
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <tr>
          <td>Good</td>
          <td><Statistic  value={good} /></td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td><Statistic  value={neutral} /></td>
        </tr>
        <tr>
          <td>Bad</td>
          <td><Statistic  value={bad} /></td>
        </tr>
        <tr>
          <td>Total</td>
          <td><Statistic  value={total} /></td>
        </tr>
        <tr>
          <td>Average</td>
          <td><Statistic  value={(good-bad)/total} /></td>
        </tr>
        <tr>
          <td>Positive</td>
          <td> <Statistic text="Positive" value={good/total} /></td>
        </tr>
        </tbody>
      </table>
     
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


