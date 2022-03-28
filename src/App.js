import "./App.css";
import countries from "./countriesAll.json";
import { useState } from "react";


function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const RenderCountries = (props) => {
  return props.countries.map((country, index) => {
    return (
      <div key={index} className="singleCountry">
        <img alt={country.name} src={country.flag}></img>
        <h3>{country.name}</h3>
        <p>Population: {formatNumber(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital:{country.capital} </p>
      </div>
    );
  });
};

function App() {
  const filterCountries = (typedValue) => {
    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(typedValue.toLowerCase()) ||
        country.capital?.toLowerCase().includes(typedValue.toLowerCase())
      );
    });
  };

  const [arrayOfCountries, setArrayOfCountries] = useState(countries);
  return (
    <div className="App">
      <p>
        Search:
        <input
          type="text"
          onChange={(event) => {
            setArrayOfCountries(filterCountries(event.target.value));
          }}
        ></input>
      </p>

      <div className="flex">
        <RenderCountries countries={arrayOfCountries} />
      </div>
    </div>
  );
}

export default App;
