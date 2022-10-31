import React from 'react'
import uniqid from 'uniqid'

export default function CountryView ({country}) {
    return (
      <>
        <div className="country">{country.name.common}</div>
        <div className="capital">{country.capital}</div>
        <div className="area">area {country.area}</div>
        <div className="languages-header">languages:</div>
        <ul className="languages-list">
          {console.log(country)}
          {Object.keys(country.languages).map((key) => {
            return (
              <li key={uniqid()}>
                {country.languages[key]}
              </li>
            );
          })}
        </ul>
        <img src={country.flags.png} alt="flag" />
      </>
    );
}
