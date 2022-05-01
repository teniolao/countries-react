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
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

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
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <div>
        <nav className={`navbar ${darkMode ? "darkMode" : ""}`}>
          <h4>Where in the world?</h4>
          <div className="background-mode--container" onClick={switchMode}>
            <div className="dark-mode">☾ Dark Mode</div>
          </div>
        </nav>

        <div className="body--container">
          <section className="search-input--container">
            <input
              className={`input ${darkMode ? "darkMode" : ""}`}
              placeholder="Search for a  Country..."
              type="text"
              onChange={handleCountrySearch}
            ></input>
            <select
              className={`select ${darkMode ? "darkMode" : ""}`}
              onChange={selectRegion}
              placeholder="Search for a Country..."
            >
              {regions.map((region) => {
                return <option>{region}</option>;
              })}
            </select>
          </section>

          <div className="container">
            <RenderCountries countries={filterCountries} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
