import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import countries from "./countriesAll.json";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";
import "./App.css";

function App() {
  const [countryInput, setCountryInput] = useState("");
  const [regionPicked, setRegionPicked] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

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
      <Navbar darkMode={darkMode} switchMode={switchMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Countries
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              countries={countries}
              setCountryInput={setCountryInput}
              setRegionPicked={setRegionPicked}
              filterCountries={filterCountries}
            />
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
