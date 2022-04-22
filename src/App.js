import { useState } from "react";
import "./App.css";
import countries from "./countriesAll.json";
import RenderCountries from "./RenderCountries";

let regions = [
  "Africa",
  "Americas",
  "Antarctic",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

function App() {
  const [countryInput, setCountryInput] = useState("");
  const [regionPicked, setRegionPicked] = useState("Africa");

  function selectRegion(event) {
    setRegionPicked(event.target.value);
    console.log(event.target.value);
  }

  function handleCountrySearch(event) {
    setCountryInput(event.target.value);
  }

  const filterCountries = countries.filter((country) => {
    return (
      (country.name.toLowerCase().includes(countryInput.toLowerCase()) ||
        country.capital?.toLowerCase().includes(countryInput.toLowerCase())) &&
      country.region.toLowerCase().includes(regionPicked.toLowerCase())
    );
  });

  return (
    <div className="App">
      <div>
        <input
          placeholder="Search for a  Country..."
          type="text"
          onChange={handleCountrySearch}
        ></input>
        <select onChange={selectRegion}>
          {regions.map((region) => {
            return <option>{region}</option>;
          })}
        </select>
      </div>

      <RenderCountries countries={filterCountries} />
    </div>
  );
}

// const RenderCountriesByRegion = (props) => {
//   return props.countries.map((country, index) => {
//     // for(let i=0; i<regions.length; i++)
//     // if (country.region.includes(value))
//     return (
//       <div key={index} className="singleCountry">
//         <img alt={country.name} src={country.flag}></img>
//         <div className="card--stats">
//           <h3>{country.name}</h3>
//           <p>Population: {formatNumber(country.population)}</p>
//           <p>Region: {country.region}</p>
//           <p>Capital:{country.capital} </p>
//         </div>
//       </div>
//     );
//   });
// };

export default App;
