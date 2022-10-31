import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import CountryList from "./CountryList";
import CountryView from "./CountryView";

function App() {

  const [countryData, setCountryData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountryData(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Searchbar instruction={'find countries'} countryData={countryData} setFilteredCountries={setFilteredCountries}/>
      {filteredCountries.length > 10 && (
        <div>Too many matches, specify another filter</div>
      )}
      {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
        <CountryList filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
      )}
      {filteredCountries.length  === 1 && (
        <CountryView country={filteredCountries[0]} />
      )}
    </div>
  );
}

export default App;
