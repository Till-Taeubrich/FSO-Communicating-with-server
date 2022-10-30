import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

function App() {

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountryData(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Searchbar instruction={'find countries'} countryData={countryData}/>
    </div>
  );
}

export default App;
