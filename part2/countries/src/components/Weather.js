import services from '../services/backend'
import { useState } from 'react'
import { useEffect } from 'react'

const Weather = ({country}) => {
    const [newWeather, setNewWeather] = useState({})

    useEffect( () => {
        services
        .getWeather(country)
        .then(weather => {
            const newWeatherObj = {
                temp: Math.round(((weather.main.temp) - 273.15) * 100) /100,
                icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                wind: weather.wind.speed
            }
            setNewWeather(newWeatherObj)
        })
    }, [])

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>temperature {newWeather.temp} Celcius</p>
            <img src={newWeather.icon} alt={country.capital} />
            <p>wind {newWeather.wind} m/s</p>
        </div>
    )
}

export default Weather