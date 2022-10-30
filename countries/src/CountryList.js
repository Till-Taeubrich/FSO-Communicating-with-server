import React from 'react'
import uniqid from 'uniqid'

export default function CountryList({filteredCountries}) {

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (filteredCountries.length <= 10 && filteredCountries.length > 1 ) {
    return (
      <div>
        {filteredCountries.map((country, i) => 
          <div key={uniqid()}>
            {country.name.common}
          </div>
        )}
      </div>
    )
  }

  if (filteredCountries.length === 1 ) {
    return (
      <>
        <div className="country">{filteredCountries[0].name.common}</div>
        <div className="capital">{filteredCountries[0].capital[0]}</div>
        <div className="area">area {filteredCountries[0].area}</div>
        <div className="languages-header">languages:</div>
        <ul className="languages-list">
          {console.log(filteredCountries)}
          {Object.keys(filteredCountries[0].languages).map((key) => {
            return (
              <li key={uniqid()}>
                {filteredCountries[0].languages[key]}
              </li>
            );
          })}
        </ul>
        <img src={filteredCountries[0].flags.png} alt="flag" />
      </>
    );
  }

}