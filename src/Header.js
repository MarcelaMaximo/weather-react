import React, { useState } from "react";
import "./Header.css";


export default function Header(){ 
  return (
     <form >
        <input type="search" placeholder="Enter a city"/>
        <input
          type="submit"
          value="🔍"
          className="submitButton"
        />
      </form>);
}