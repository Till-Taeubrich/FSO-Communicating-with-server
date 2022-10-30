import React, { useState } from 'react'
import CountryList from './CountryList';

export default function Searchbar({instruction, countryData}) {

  const [filteredCountries, setFilteredCountries] = useState([])
  const filterCountries = (e) => {
    const matchedCountries = countryData.filter((country) => {
      return country.name.common.includes(e.target.value)
    })
    setFilteredCountries(matchedCountries);
  }


  return (
    <>
      <div>{instruction}</div>
      <input onChange={ filterCountries }/>
      <CountryList filteredCountries={filteredCountries}/>
    </>
  );
}