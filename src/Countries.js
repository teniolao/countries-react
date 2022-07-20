import React from "react";
import RenderCountries from "./RenderCountries";
import { useNavigate } from "react-router-dom";
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

const Countries = ({
  darkMode,
  setDarkMode,
  countries,
  setCountryInput,
  setRegionPicked,
  filterCountries,
}) => {
  const navigate = useNavigate();

  function selectRegion(event) {
    setRegionPicked(event.target.value);
  }

  function handleCountrySearch(event) {
    setCountryInput(event.target.value);
  }

  const showDetails = (code) => {
    navigate(`/${code}`);
  };
  return (
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
  );
};

export default Countries;
