import { useEffect, useState } from "react"
import Country from "../Country/Country"

function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
  return (
    <div className="">
      {countries.map(country => {return <Country name={country.name.common}></Country>})}
    </div>
  )
}

export default Countries
