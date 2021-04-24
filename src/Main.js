import React from "react";
import Description from "./Description";
import "./Main.css";
import Weather from "./Weather";

export default function Main() {
  return (
    <div className="Main">
      <Weather />
      <Description />
    </div>
  );
}
