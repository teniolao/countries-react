import React from 'react'

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const RenderCountries = (props) => {
  return props.countries.map((country, index) => {
    return (
      <div className="card">
        <img
          alt={country.name}
          src={country.flag}
          className="card--image"
        ></img>
        <h3>{country.name}</h3>
        <p>Population: {formatNumber(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital:{country.capital} </p>
      </div>
    );
  });
}

export default RenderCountries