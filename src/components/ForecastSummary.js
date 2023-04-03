import React from "react";

function ForecastSummary(props) {
  const { date } = props;
  return <h3>{`${date}`}</h3>;
}

export default ForecastSummary;
