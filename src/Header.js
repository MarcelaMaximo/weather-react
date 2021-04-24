import React from "react";
import "./Header.css";

export default function Header (){ 
  
  return (
    <div className="Header">
      <form id="search-form">
        <input type="text" placeholder="Enter a city" id="Search-City" />
        <input
          type="submit"
          value="🔍"
          className="submitButton"
        />
      </form>
    </div>
  );
}