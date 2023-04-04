import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ location, forecasts }) {
  const { city, country } = location;
  const { date, description, temperature, icon } = forecasts;

  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <ForecastSummary
        date={date}
        description={description}
        temperature={temperature}
        icon={icon}
      />
    </div>
  );
}

export default App;
