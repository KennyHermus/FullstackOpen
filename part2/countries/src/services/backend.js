import axios from 'axios'

const getAll = () => {
    return (
        axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => response.data)
    )
}

const getWeather = country => {
    console.log(country)
    return (
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.data)
    )
}

export default {getAll, getWeather}