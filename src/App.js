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
    //console.log(event.target.value);
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
      <div className= "container">
        <RenderCountries countries={filterCountries} />
      </div>
    </div>
  );
}

export default App;
