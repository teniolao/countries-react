import React from "react";

const RenderCountries = ({ key, darkMode, showDetails,  name, code, capital, population, region, flag }) => {

  const showDetailsHandler = () => {
    showDetails(code);
  }; 
  
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  // const noCountries = countries.status || countries.message;

  

  //return countries.map((country, index) => (
  return (
    <div key={key} className="card" onClick={showDetailsHandler}>
      <div className="image--container">
        <img alt={name} src={flag} className="card--image"></img>
      </div>
      <div className={`text-container ${darkMode ? "darkMode" : ""}`}>
        <h3>{name}</h3>
        <p>
          <span className="bold">Population: </span>
          {formatNumber(population)}
        </p>
        <p>
          <span className="bold">Region: </span> {region}
        </p>
        <p>
          <span className="bold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
  //));
};

export default RenderCountries;
