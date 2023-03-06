import {useState} from 'react'
/*
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}*/

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  /*const name = 'Kenny'
  const age = 129

  const t = [1, -1, 3]

  t.push(5)

  console.log(t.length)
  console.log(t[1])

  t.forEach(value => {
    console.log(value)
  })

  const t2 = t.concat(7)

  console.log(t)
  console.log(t2)

  const m1 = t.map(value => value * 2)
  console.log(m1)

  const m2 = t.map(value => '<li>' + value + '</li>')
  console.log(m2)

  const [first, second, ...rest] = t

  console.log(first, second)
  console.log(rest)

  const square = p => p*p

  let t3 = [2, 3, 4]
  let x = t3.map(val => square(val))
  console.log(x)

  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }

  console.log(arto.name)
  const fieldName = 'age' 
  console.log(arto[fieldName])
  arto.address = 'Helsinki'
  arto['secret number'] = 12341

  arto.greet()
  arto.growOlder = function() {
    this.age += 1
  }
  console.log(arto.age)
  arto.growOlder()
  console.log(arto.age)

  arto.doAddition(1, 4)
  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)   // 25 is printed

  /*const referenceToGreet = arto.greet
  referenceToGreet()            // errors since caller is global, losing track of 'this' and making name undefined (this.name required for greet function)

  const referenceToGreet = arto.greet.bind(arto)
  referenceToGreet()            // doesn't error since bound

  setTimeout(arto.greet.bind(arto), 1000)

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  const adam = new Person('Adam Ondra', 29)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 23)
  janja.greet()*/

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  // setTimeout(() => setCounter(counter + 1), 1000) // increments counter every second
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft+right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left+updatedRight)
  }

  const [value, setValue] = useState(10)
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    /*
    <>
      <h1>Greetings</h1>
      <Hello name='Ashley' age={410+3} />
      <Hello name={name} age={age} />
    </>*/
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
      <Display counter={value} />
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

export default App
