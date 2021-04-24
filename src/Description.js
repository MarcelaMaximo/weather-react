import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <div className="left">
        <div className="Max">
          <strong>Max:</strong> 7°C
        </div>
        <div className="Min">
          <strong>Min:</strong> 9°C
        </div>
        <div className="extra-left">
          <strong>Wind:</strong> 3km/h
        </div>
        <div className="extra-left">
          <strong>Humidity:</strong> 45%
        </div>
      </div>
    </div>
  );
}
