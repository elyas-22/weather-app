import React from "react";

function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;
  const longdate = new Date(date);
  const newdate = longdate.toDateString(0);
  return (
    <h3>{`
    ${newdate} 
    ${description} 
    ${icon} 
    ${temperature.max}\u00B0C`}</h3>
  );
}

/* function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;
  const longdate = new Date(date);
  const newdate = longdate.toDateString(0);
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{newdate}</div>
      <div className="forecast-summary_description">{description}</div>
      <div className="forecast-summary_temperature">
        {temperature.max} &#8451;
      </div>
      <div className="forecast-summary_icon">{icon}</div>
    </div>
  );
} */

export default ForecastSummary;
