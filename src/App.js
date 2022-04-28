import { useState } from "react";
import "./App.css";
import countries from "./countriesAll.json";
import RenderCountries from "./RenderCountries";

let regions = [
  "Filter By Region",
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
  const [regionPicked, setRegionPicked] = useState("");

  function selectRegion(event) {
    setRegionPicked(event.target.value);
  }

  function handleCountrySearch(event) {
    setCountryInput(event.target.value);
  }

  const filterCountries = countries.filter((country) => {
    const countriesByRegion = country.region
      .toLowerCase()
      .includes(regionPicked.toLowerCase()); // this filters countries by selected region
    const isCountryNameSearch = country.name
      .toLowerCase()
      .includes(countryInput.toLowerCase()); // this filters countries by name search
    const isCountryCapitalSearch = country.capital
      ?.toLowerCase()
      .includes(countryInput.toLowerCase()); // this filters countries by capital search

    return (
      (isCountryNameSearch || isCountryCapitalSearch) &&
      (regionPicked === "Filter By Region" || countriesByRegion) // returning all countries or countries by region
    );
  });

  return (
    <div className="App">
      <nav className="navbar">Where in the world? </nav>
      <div className="body--container">
        <section className="search-input--container">
          <input
            placeholder="Search for a  Country..."
            type="text"
            onChange={handleCountrySearch}
          ></input>
          <select onChange={selectRegion} placeholder="Search for a Country...">
            {regions.map((region) => {
              return <option>{region}</option>;
            })}
          </select>
        </section>

        <div className="container">
          <RenderCountries countries={filterCountries} />
        </div>
      </div>
    </div>
  );
}

export default App;
