import axios from 'axios'

const getCountries = () => {
    return (
        axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => response.data)
    )
}

const getWeather = country => {
    return (
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.data)
    )
}

const services = {getCountries, getWeather}
export default services