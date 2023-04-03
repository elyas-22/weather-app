import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ location, forecasts }) {
  const { city, country } = location;
  const { date } = forecasts;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <ForecastSummary date={date} />
    </div>
  );
}

export default App;
