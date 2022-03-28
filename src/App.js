import "./App.css";
import country from "./countriesAll.json";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const RenderCountries = (props) => {
  return props.data.map((country, index) => {
    return (
      <div key={index}>
        <img src={country.flag} alt={country.name} />
        <h3>{country.name}</h3>
        <p>Population: {formatNumber(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    );
  });
};

function App() {
  return (
    <div className="App">
      <RenderCountries data={country} />
    </div>
  );
}

export default App;
