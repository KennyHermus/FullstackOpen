import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value} {text === 'positive' ? '%' : ''}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  console.log(total)
  return (total === 0 ? 'No feedback given' :
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={(good-bad)/total} />
          <StatisticLine text='positive' value={good/total * 100} />
        </tbody>
      </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    const updatedGood = good+1
    setTotal(updatedGood + neutral + bad)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    const updatedNeutral = neutral+1
    setTotal(good + updatedNeutral + bad)
  }
  const handleBad = () => {
    setBad(bad+1)
    const updatedBad = bad+1
    setTotal(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App