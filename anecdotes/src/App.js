import { useState } from 'react'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ] 
  const [selected, setSelected] = useState(0)
  let n = anecdotes.length
  const [allvote, setAllVote] = useState(Array(n).fill(0))
  const random = Math.floor(Math.random() * anecdotes.length)
  const generateRandom = ()=> {
    setSelected(random)
  }
  const winner = ()=>{
const maxvote = Math.max(...allvote)
   let winnerIndex = allvote.indexOf(maxvote);
    let  updatedwinner = anecdotes[winnerIndex]
    if(maxvote === 0){
      return 'No vote Yet'
    }
    else {
      return `${updatedwinner} has ${maxvote}`
    }
  }
const handleVote = ()=>{
  let newArray = [...allvote]
      newArray[selected] += 1
      setAllVote(newArray)      
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {allvote[selected]} votes</p>
      <button onClick={generateRandom}>next Anecdote</button>
      <button onClick={()=>handleVote()}>Vote</button>
      <h1>Anecdote with most Votes</h1>
      {winner()}
      {/* {maxvote ? anecdotes[selected] : ''} */}
    </div>
  )
}

export default App