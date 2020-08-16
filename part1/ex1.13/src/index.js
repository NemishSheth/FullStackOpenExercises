import React,{useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) =>{
  const [selected,setSelected] = useState(0)
  const [stVotes,setVotes] = useState(props.votes)

  const nxtAnc = () =>{
    let rand = Math.floor(Math.random() * (props.anecdotes.length));
    setSelected(rand)
  }
  const addVote = () =>{
    let nv = [...stVotes]
    nv[selected]+=1
    setVotes(nv)
  }

  return(
    <div>
     
      <p>{props.anecdotes[selected]} <br />
       has {stVotes[selected]} votes</p>
     
      <button onClick={addVote}>Vote</button>
      <button onClick={nxtAnc}>Next anecdotes</button>
     
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(anecdotes.length+1).join("0").split("").map(parseFloat)
ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes}/>,
  document.getElementById('root')
)