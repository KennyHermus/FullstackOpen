import { useState } from "react"
import Weather from "./Weather"

const Country = ({country, show, hideButton}) => {
    const [newShow, setNewShow] = useState(show)
    const handleShow = (id) => setNewShow(!newShow)
    const label = newShow ? 'hide' : 'show'
    return (
        newShow ? 
        (<div>
            <h2>{country.name.common} {hideButton ? <button onClick={handleShow}>{label}</button> : null} </h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <b>languages:</b>
            <ul>
                {Object.keys(country.languages).map( language => <li key={language}> {country.languages[language]} </li> )}
            </ul>
            <img src={country.flags['svg']} alt={country.name.common} width="200px" height="200px" />
            <Weather country={country} />
        </div>) : <div>{country.name.common} <button onClick={handleShow}>{label}</button> </div>
    )
}
export default Country