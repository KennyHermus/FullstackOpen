import weatherService from '../services/backend'
import { useState } from 'react'
import { useEffect } from 'react'

const Weather = ({country}) => {
    const [temperature, setTemperature] = useState(null)
    const [weatherIconURL, setWeatherIconURL] = useState(null)
    const [wind, setWind] = useState(null)

    useEffect( () => {
        console.log(country)
        weatherService
        .getWeather(country)
        .then(weather => {
            console.log(weather);
            const newIconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            let newTemp = weather.main.temp - 273.15  // convert from Kelvin to Celcius
            newTemp = Math.round(newTemp * 100) /100
            const newWind = weather.wind.speed
            setTemperature(newTemp)
            setWeatherIconURL(newIconURL)
            setWind(newWind)
        })
    }, [])

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>temperature {temperature} Celcius</p>
            <img src={weatherIconURL} alt={country.capital} />
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default Weather