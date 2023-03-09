import {useState} from 'react'
import {useEffect} from 'react'
import Countries from './components/Countries' 
import countryService from './services/backend'

function App() {
  const [newCountry, setNewCountry] = useState('')
  const handleCountry = (event) => {
    setNewCountry(event.target.value)
  }

  const [countries, setCountries] = useState([])
  useEffect(() => {
    countryService
    .getAll()
    .then(countries => setCountries(countries))
  } , [])


  const filteredCountries = countries.filter( country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()) )
  const countriesToShow = (filteredCountries.length <= 10) ? filteredCountries : null

  return (
    <div>
      <div> find countries <input value={newCountry} onChange={handleCountry} /> </div>
      <Countries countries={countriesToShow} />
    </div>
  );
}

export default App;
