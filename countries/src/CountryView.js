import axios from 'axios'
import React, { useEffect, useState } from 'react'
import uniqid from 'uniqid'



export default function CountryView ({country}) {

  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {

    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.name.common}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then(response => {
      const data = response.data[0]
      const lat = data.lat
      const lon = data.lon
      
      axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then(response => {
        setWeatherData(response.data.current);
      })

    })
  }, [country])

    return (
      <>
        <div className="country">{country.name.common}</div>
        <div className="capital">{country.capital}</div>
        <div className="area">area {country.area}</div>
        <div className="languages-header">languages:</div>
        <ul className="languages-list">
          {Object.keys(country.languages).map((key) => {
            return <li key={uniqid()}>{country.languages[key]}</li>;
          })}
        </ul>
        <img src={country.flags.png} alt="flag" />
        <div className="weather">
          <div className="weather-header">Weather in {country.name.common}</div>
          <div className="temperature">temperature {weatherData.temp} Celcius</div>
          { weatherData.weather &&
          <img
            className="icon"
            alt=""
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          }
          <div className="wind-speed">wind {weatherData.wind_speed} m/s</div>
        </div>
      </>
    );
}
