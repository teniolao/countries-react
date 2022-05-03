import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetails = ({ countries, darkMode }) => {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImage;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImage = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });

      country.languages?.forEach((language) => {
        languages.push(language.name);
      });

      country.borders?.forEach((border) => borders.push(border));
    }
  });
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className={`country_details ${darkMode ? "darkMode" : ""}`}>
      <button className={`back ${darkMode ? "darkMode" : ""}`} onClick={goBack}>
        <p>⇦ Go Back</p>
      </button>
      <div className="country_details_body">
        <div className="img_container">
          <img src={flagImage} alt="" />
        </div>

        <div className="info">
          <h2>{name}</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Native Name:
                <span className="values"> {nativeName}</span>
              </p>
              <p>
                Population:
                <span className="values"> {population}</span>
              </p>
              <p>
                Region:
                <span className="values"> {region}</span>
              </p>
              <p>
                Sub region:
                <span className="values"> {subregion}</span>
              </p>
            </div>

            <div className="right_info">
              <p>
                Capital:
                <span className="values"> {capital}</span>
              </p>
              <p>
                Top-level Domain:
                <span className="values"> {topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                <span className="values"> {currencies}</span>
              </p>
              <p>
                Languages:
                <span className="values"> {languages}</span>
              </p>
            </div>
          </div>
          Border Countries:
          {borders.map((border) => (
            <div className={`border_country ${darkMode ? "darkMode" : ""}`}>
              <p>{border}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
