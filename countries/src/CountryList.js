import React from 'react'
import uniqid from 'uniqid'


export default function CountryList({filteredCountries, setFilteredCountries}) {

  // const viewCountry = () => {

  // }

  return (
    <div>
      {filteredCountries.map((country, i) => 
        <div key={uniqid()}>
          <div>
            {country.name.common}
          </div>
          <button onClick={() => setFilteredCountries([country])}>show</button>
        </div>
      )}
    </div>
  )
}