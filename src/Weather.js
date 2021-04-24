import React from "react";
import "./Weather.css";

export default function Weather() {
  

  return (
    <div className="Weather">
      <h1>
        Lisbon, <span className="country">PT</span>{" "}
      </h1>
      <h2 className="day">Thursday</h2>
      <h3>
        {" "}
        3 Fev
        <br />
        <br /> 13:03
      </h3>
      <div className="celsius-left left">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png "
          className="emoji"
        />
        <span className="temp"> 20 </span>
        <span>°C | °F</span>
      </div>
    </div>
  );
}
