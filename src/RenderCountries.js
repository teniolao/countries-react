import React from "react";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const RenderCountries = (props) => {
  return props.countries.map((country, index) => {
    return (
      <div className="card">
        <div className="image--container">
          <img
            alt={country.name}
            src={country.flags.svg}
            className="card--image"
          ></img>
        </div>
        <div className="text-container">
          <h3>{country.name}</h3>
          <p>Population: {formatNumber(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Capital:{country.capital} </p>
        </div>
      </div>
    );
  });
};

export default RenderCountries;
