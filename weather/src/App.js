import React from "react";
import './App.css';
import "./Container.css";
import Search from "./Search";
import TodayForecast from "./TodayForecast";
import Description from "./Description";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
        <div className="border-style">
          <Search />
          <h1>CITY</h1>
          <TodayForecast />
          <Description />
          <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
