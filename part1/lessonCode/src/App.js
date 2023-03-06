const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Kenny'
  const age = 19

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Ashley' age={4+10} />
      <Hello name={name} age={age} />
    </>
  )
}

export default App
