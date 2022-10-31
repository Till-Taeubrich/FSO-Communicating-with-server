import React from 'react'

export default function Searchbar({instruction, countryData, setFilteredCountries}) {

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
    </>
  );
}