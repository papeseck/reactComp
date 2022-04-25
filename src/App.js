import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import ProfilePhoto from "./Componement/Profile/ProfilePhoto";
import FullName from "./Componement/Profile/FullName";
import Adresse from "./Componement/Profile/Adresse";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <div>
        <FullName />
      </div>
      <div>
        <Adresse />
      </div>
    </div>
  );
}

export default App;
