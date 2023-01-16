import { useState } from 'react'
import Statistics from './Components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood= ()=>{
    setGood(good +1)
  }
  const handleNeutral = ()=>{
    setNeutral(neutral + 1)
  }
  const handleBad = ()=>{
    setBad(bad +1)
  }
  return (
    <div>
      <h1>give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>Bad</button>

      <h1>Statistics</h1>

     <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
