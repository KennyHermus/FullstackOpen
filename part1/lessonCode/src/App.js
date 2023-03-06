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
  referenceToGreet()            // errors since caller is global, losing track of 'this' and making name undefined (this.name required for greet function)*/

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
  janja.greet()

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Ashley' age={410+3} />
      <Hello name={name} age={age} />
    </>
  )
}

export default App
