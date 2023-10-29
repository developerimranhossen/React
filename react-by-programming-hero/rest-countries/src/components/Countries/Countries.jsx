import { useEffect, useState } from "react"

function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
  return (
    <div>Countries</div>
  )
}

export default Countries
