import Country from "./Country"

const Countries = ({countries}) => {
    if (countries === null)
        return <p> Too many matches, specify another filter </p>
    return (
        countries.length === 1 ? 
        <Country key={countries[0].name.common} hideButton={false} show={true} country={countries[0]} /> : <> {countries.map(country => <Country key={country.name.common} hideButton={true} show={false} country={country} />)} </>
    )
}

export default Countries