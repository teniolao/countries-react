import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import countries from "./countriesAll.json";
import RenderCountries from "./RenderCountries";
import CountryDetails from "./CountryDetails";
import Navbar from "./Navbar";

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
  const navigate = useNavigate();

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

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <Navbar darkMode={darkMode} switchMode={switchMode} />

      <Routes>
        <Route
          path="/"
          element={
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
                  {regions.map((region, index) => {
                    return <option key={index}>{region}</option>;
                  })}
                </select>
              </section>

              <div className="container">
                {filterCountries.map((country, index) => (
                  <RenderCountries
                    key={country.alpha3Code}
                    darkMode={darkMode}
                    showDetails={showDetails}
                    name={country.name}
                    code={country.alpha3Code}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                    flag={country.flag}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route
          path="/:countryCode"
          element={
            <CountryDetails darkMode={darkMode} countries={filterCountries} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
