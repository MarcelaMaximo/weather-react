import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <ul className="left">
        <li className="Max">
          <strong>Max:</strong> 7°C
        </li>
        <li className="Max">
          <strong>Min:</strong> 9°C
        </li>
        <li className="Max">
          <strong>Wind:</strong> 3km/h
        </li>
        <li className="Max">
          <strong>Humidity:</strong> 45%
        </li>
      </ul>
    </div>
  );
}
