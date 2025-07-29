// Exercises 2.18-2.20: Data for countries
import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryList = ({ countries, showCountry }) => (
  <div>
    {countries.map(country => 
      <div key={country.name.common}>
        {country.name.common} 
        <button onClick={() => showCountry(country)}>show</button>
      </div>
    )}
  </div>
)

const CountryDetails = ({ country, weather }) => (
  <div>
    <h1>{country.name.common}</h1>
    <div>capital {country.capital?.[0]}</div>
    <div>area {country.area}</div>
    
    <h3>languages:</h3>
    <ul>
      {Object.values(country.languages || {}).map(language => 
        <li key={language}>{language}</li>
      )}
    </ul>
    
    <img src={country.flags.png} alt={`flag of ${country.name.common}`} width="150" />
    
    {weather && (
      <div>
        <h3>Weather in {country.capital?.[0]}</h3>
        <div>temperature {weather.main.temp} Celsius</div>
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <div>wind {weather.wind.speed} m/s</div>
      </div>
    )}
  </div>
)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (filter) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          const filtered = response.data.filter(country =>
            country.name.common.toLowerCase().includes(filter.toLowerCase())
          )
          setCountries(filtered)
          
          if (filtered.length === 1) {
            setSelectedCountry(filtered[0])
          } else {
            setSelectedCountry(null)
            setWeather(null)
          }
        })
    } else {
      setCountries([])
      setSelectedCountry(null)
      setWeather(null)
    }
  }, [filter])

  useEffect(() => {
    if (selectedCountry && selectedCountry.capital) {
      const api_key = import.meta.env.VITE_OPENWEATHER_KEY
      if (api_key) {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital[0]}&appid=${api_key}&units=metric`)
          .then(response => {
            setWeather(response.data)
          })
          .catch(error => {
            console.log('Weather data not available')
          })
      }
    }
  }, [selectedCountry])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const showCountry = (country) => {
    setSelectedCountry(country)
  }

  const countriesToShow = selectedCountry ? [selectedCountry] : countries

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      
      {filter && (
        <div>
          {countriesToShow.length > 10 ? (
            <div>Too many matches, specify another filter</div>
          ) : countriesToShow.length > 1 ? (
            <CountryList countries={countriesToShow} showCountry={showCountry} />
          ) : countriesToShow.length === 1 ? (
            <CountryDetails country={countriesToShow[0]} weather={weather} />
          ) : (
            <div>No matches</div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
